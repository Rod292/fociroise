import { NextRequest, NextResponse } from 'next/server'
import { checkFirebaseAdmin } from '@/lib/firebase-admin-check'
import { ModuleDate } from '@/types/admin'

// GET - Récupérer tous les modules
export async function GET(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const { searchParams } = new URL(request.url)
    const year = searchParams.get('year')
    const location = searchParams.get('location')

    let query = firebase.db.collection('moduleDates').orderBy('year', 'desc').orderBy('module')

    if (year) {
      query = query.where('year', '==', parseInt(year)) as any
    }

    if (location) {
      query = query.where('location', '==', location) as any
    }

    const snapshot = await query.get()
    const modules: any[] = []

    snapshot.forEach((doc) => {
      const data = doc.data()
      modules.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.() || data.createdAt,
        updatedAt: data.updatedAt?.toDate?.() || data.updatedAt,
      })
    })

    return NextResponse.json({ modules })
  } catch (error) {
    console.error('Error fetching modules:', error)
    return NextResponse.json({ error: 'Failed to fetch modules' }, { status: 500 })
  }
}

// POST - Créer un nouveau module/date
export async function POST(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const data = await request.json()

    const moduleDate: Omit<ModuleDate, 'id'> = {
      module: data.module,
      date: data.date,
      location: data.location,
      maxPlaces: data.maxPlaces || 14,
      currentRegistrations: 0,
      isComplete: false,
      year: data.year,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const docRef = await firebase.db.collection('moduleDates').add(moduleDate)

    return NextResponse.json({ id: docRef.id, ...moduleDate })
  } catch (error) {
    console.error('Error creating module:', error)
    return NextResponse.json({ error: 'Failed to create module' }, { status: 500 })
  }
}

// PATCH - Mettre à jour un module
export async function PATCH(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const data = await request.json()
    const { id, ...updates } = data

    if (!id) {
      return NextResponse.json({ error: 'Module ID is required' }, { status: 400 })
    }

    await firebase.db.collection('moduleDates').doc(id).update({
      ...updates,
      updatedAt: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating module:', error)
    return NextResponse.json({ error: 'Failed to update module' }, { status: 500 })
  }
}

// DELETE - Supprimer un module
export async function DELETE(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Module ID is required' }, { status: 400 })
    }

    await firebase.db.collection('moduleDates').doc(id).delete()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting module:', error)
    return NextResponse.json({ error: 'Failed to delete module' }, { status: 500 })
  }
}
