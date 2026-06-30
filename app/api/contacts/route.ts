
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/db'
import { checkRateLimit, getClientIp, hasValidAdminKey } from '@/lib/api'

export const dynamic = 'force-dynamic'

const contactSchema = z.object({
  name: z.string().trim().min(2).max(150),
  email: z.string().trim().email(),
  subject: z.string().trim().min(2).max(200),
  message: z.string().trim().min(10).max(4000),
})

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req)
    const rateLimit = checkRateLimit({
      key: `contacts:post:${ip}`,
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
    const parsed = contactSchema.safeParse(body)
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

    const contact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      }
    })

    return NextResponse.json({
      success: true,
      message: 'Message envoyé avec succès',
      contactId: contact.id
    })

  } catch (error) {
    console.error('Erreur lors de l\'envoi du message:', error)
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'envoi' },
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
      key: `contacts:get:${ip}`,
      limit: 30,
      windowMs: 60_000,
    })
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Trop de requetes. Veuillez reessayer dans une minute.' },
        { status: 429 }
      )
    }

    const contacts = await prisma.contact.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    })

    return NextResponse.json(contacts)
  } catch (error) {
    console.error('Erreur lors de la récupération des messages:', error)
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    )
  }
}
