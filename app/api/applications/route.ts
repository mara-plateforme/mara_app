
import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

export const dynamic = 'force-dynamic'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    
    const {
      fullName,
      email,
      phone,
      country,
      educationLevel,
      currentField,
      desiredProgram,
      campus,
      motivation,
      experience,
      projets,
      availability,
      financialSituation,
      hasLaptop,
      foundAboutUs
    } = body

    // Validation des champs requis
    const requiredFields = [
      'fullName',
      'email', 
      'phone',
      'country',
      'educationLevel',
      'desiredProgram',
      'campus',
      'motivation',
      'availability',
      'financialSituation',
      'foundAboutUs'
    ]

    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          { error: `Le champ ${field} est requis` },
          { status: 400 }
        )
      }
    }

    // Créer la candidature
    const application = await prisma.application.create({
      data: {
        fullName,
        email,
        phone,
        country,
        educationLevel,
        currentField,
        desiredProgram,
        campus,
        motivation,
        experience,
        projets,
        availability,
        financialSituation,
        hasLaptop: Boolean(hasLaptop),
        foundAboutUs,
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
  } finally {
    await prisma.$disconnect()
  }
}

export async function GET() {
  try {
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
  } finally {
    await prisma.$disconnect()
  }
}
