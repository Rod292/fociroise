import { NextRequest, NextResponse } from 'next/server'
import { checkFirebaseAdmin } from '@/lib/firebase-admin-check'

// GET - Récupérer les modules disponibles pour le formulaire public
export async function GET(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const { searchParams } = new URL(request.url)
    const location = searchParams.get('location') // 'Brest' ou 'Guérande'

    // Requête simple sans orderBy pour éviter les index composites
    let query = firebase.db
      .collection('moduleDates')
      .where('isComplete', '==', false) as any // Seulement les modules non complets

    if (location) {
      query = query.where('location', '==', location)
    }

    const snapshot = await query.get()
    const allModules: any[] = []

    snapshot.forEach((doc: any) => {
      const data = doc.data()
      allModules.push({
        id: doc.id,
        date: data.date,
        location: data.location,
        module: data.module,
        year: data.year,
        maxPlaces: data.maxPlaces,
        currentRegistrations: data.currentRegistrations || 0,
      })
    })

    // Tri côté serveur
    allModules.sort((a, b) => {
      if (b.year !== a.year) return b.year - a.year
      if (a.module < b.module) return -1
      if (a.module > b.module) return 1
      if (a.location === 'Brest' && b.location === 'Guérande') return -1
      if (a.location === 'Guérande' && b.location === 'Brest') return 1
      return a.date.localeCompare(b.date, 'fr-FR')
    })

    // Grouper par type de module
    const modulesByType: Record<string, any[]> = {
      module1: [],
      module2: [],
      module3: [],
      module4: [],
      moduleProthesiste: [],
    }

    allModules.forEach((module) => {
      const moduleType = module.module as string

      if (!modulesByType[moduleType]) {
        modulesByType[moduleType] = []
      }

      modulesByType[moduleType].push({
        id: module.id,
        date: module.date,
        location: module.location,
        availablePlaces: module.maxPlaces - module.currentRegistrations,
      })
    })

    return NextResponse.json({ modules: modulesByType })
  } catch (error) {
    console.error('Error fetching modules:', error)
    return NextResponse.json({ error: 'Failed to fetch modules' }, { status: 500 })
  }
}
