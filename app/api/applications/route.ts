
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { checkRateLimit, getClientIp, hasValidAdminKey } from '@/lib/api'

export const dynamic = 'force-dynamic'

const applicationSchema = z.object({
  fullName: z.string().trim().min(2),
  email: z.string().trim().email(),
  phone: z.string().trim().min(5),
  country: z.string().trim().min(2),
  educationLevel: z.string().trim().min(2),
  currentField: z.string().trim().max(200).optional().or(z.literal('')),
  desiredProgram: z.string().trim().min(2),
  campus: z.string().trim().min(2),
  motivation: z.string().trim().min(20).max(4000),
  experience: z.string().trim().max(4000).optional().or(z.literal('')),
  projets: z.string().trim().max(4000).optional().or(z.literal('')),
  availability: z.string().trim().min(2),
  financialSituation: z.string().trim().min(2),
  hasLaptop: z
    .preprocess((value) => {
      if (typeof value === 'string') {
        if (value.toLowerCase() === 'true') return true
        if (value.toLowerCase() === 'false') return false
      }
      return value
    }, z.boolean())
    .optional()
    .default(false),
  foundAboutUs: z.string().trim().min(2),
})

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req)
    const rateLimit = checkRateLimit({
      key: `applications:post:${ip}`,
      limit: 5,
      windowMs: 60_000,
    })
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Trop de tentatives. Veuillez reessayer dans une minute.' },
        { status: 429 }
      )
    }

    const body = await req.json()
    const parsed = applicationSchema.safeParse(body)
    if (!parsed.success) {
      return NextResponse.json(
        {
          error: 'Donnees invalides',
          details: parsed.error.flatten(),
        },
        { status: 400 }
      )
    }

    const data = parsed.data

    const application = await prisma.application.create({
      data: {
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        country: data.country,
        educationLevel: data.educationLevel,
        currentField: data.currentField || null,
        desiredProgram: data.desiredProgram,
        campus: data.campus,
        motivation: data.motivation,
        experience: data.experience || null,
        projets: data.projets || null,
        availability: data.availability,
        financialSituation: data.financialSituation,
        hasLaptop: data.hasLaptop,
        foundAboutUs: data.foundAboutUs,
        status: 'pending'
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Candidature soumise avec succès',
      applicationId: application.id
    })

  } catch (error) {
    console.error('Erreur lors de la création de la candidature:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de la soumission' },
      { status: 500 }
    )
  }
}

export async function GET(req: NextRequest) {
  try {
    if (!hasValidAdminKey(req)) {
      return NextResponse.json({ error: 'Acces non autorise' }, { status: 401 })
    }

    const ip = getClientIp(req)
    const rateLimit = checkRateLimit({
      key: `applications:get:${ip}`,
      limit: 30,
      windowMs: 60_000,
    })
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Trop de requetes. Veuillez reessayer dans une minute.' },
        { status: 429 }
      )
    }

    const applications = await prisma.application.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(applications)
  } catch (error) {
    console.error('Erreur lors de la récupération des candidatures:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
