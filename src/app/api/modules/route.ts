import { NextRequest, NextResponse } from 'next/server'
import { checkFirebaseAdmin } from '@/lib/firebase-admin-check'

// GET - Récupérer les modules disponibles pour le formulaire public
export async function GET(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location') // 'Brest' ou 'Guérande'

    let query = firebase.db
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
      module4: [],
      moduleProthesiste: [],
    }

    snapshot.forEach((doc) => {
      const data = doc.data()
      const moduleType = data.module as string

      if (!modulesByType[moduleType]) {
        modulesByType[moduleType] = []
      }

      modulesByType[moduleType].push({
        id: doc.id,
        date: data.date,
        location: data.location,
        availablePlaces: data.maxPlaces - (data.currentRegistrations || 0),
      })
    })

    return NextResponse.json({ modules: modulesByType })
  } catch (error) {
    console.error('Error fetching modules:', error)
    return NextResponse.json({ error: 'Failed to fetch modules' }, { status: 500 })
  }
}
