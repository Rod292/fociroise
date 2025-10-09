import { NextRequest, NextResponse } from 'next/server'
import { adminDb } from '@/lib/firebase-admin'

// GET - Récupérer les modules disponibles pour le formulaire public
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location') // 'Brest' ou 'Guérande'

    let query = adminDb
      .collection('moduleDates')
      .where('isComplete', '==', false) // Seulement les modules non complets
      .orderBy('year')
      .orderBy('module')

    if (location) {
      query = query.where('location', '==', location) as any
    }

    const snapshot = await query.get()
    const modulesByType: Record<string, any[]> = {
      module1: [],
      module2: [],
      module3: [],
      moduleProthesiste: [],
    }

    snapshot.forEach((doc) => {
      const data = doc.data()
      const moduleType = data.module as string

      if (modulesByType[moduleType]) {
        modulesByType[moduleType].push({
          id: doc.id,
          date: data.date,
          location: data.location,
          availablePlaces: data.maxPlaces - data.currentRegistrations,
        })
      }
    })

    return NextResponse.json({ modules: modulesByType })
  } catch (error) {
    console.error('Error fetching modules:', error)
    return NextResponse.json({ error: 'Failed to fetch modules' }, { status: 500 })
  }
}
