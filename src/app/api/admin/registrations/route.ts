import { NextRequest, NextResponse } from 'next/server'
import { checkFirebaseAdmin } from '@/lib/firebase-admin-check'
import { Registration } from '@/types/admin'

// GET - Récupérer toutes les inscriptions
export async function GET(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const { searchParams } = new URL(request.url)
    const status = searchParams.get('status')
    const moduleDate = searchParams.get('moduleDate')

    let query = firebase.db.collection('registrations').orderBy('createdAt', 'desc')

    if (status) {
      query = query.where('status', '==', status) as any
    }

    const snapshot = await query.get()
    let registrations: Registration[] = []

    snapshot.forEach((doc) => {
      registrations.push({ id: doc.id, ...doc.data() } as Registration)
    })

    // Filtrer par date de module si spécifié
    if (moduleDate) {
      registrations = registrations.filter(
        (reg) =>
          reg.module1 === moduleDate ||
          reg.module2 === moduleDate ||
          reg.module3 === moduleDate ||
          reg.moduleProthesiste === moduleDate
      )
    }

    return NextResponse.json({ registrations })
  } catch (error) {
    console.error('Error fetching registrations:', error)
    return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 })
  }
}

// PATCH - Mettre à jour une inscription
export async function PATCH(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const data = await request.json()
    const { id, ...updates } = data

    if (!id) {
      return NextResponse.json({ error: 'Registration ID is required' }, { status: 400 })
    }

    await firebase.db.collection('registrations').doc(id).update({
      ...updates,
      updatedAt: new Date(),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error updating registration:', error)
    return NextResponse.json({ error: 'Failed to update registration' }, { status: 500 })
  }
}

// DELETE - Supprimer une inscription
export async function DELETE(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json({ error: 'Registration ID is required' }, { status: 400 })
    }

    await firebase.db.collection('registrations').doc(id).delete()

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting registration:', error)
    return NextResponse.json({ error: 'Failed to delete registration' }, { status: 500 })
  }
}
