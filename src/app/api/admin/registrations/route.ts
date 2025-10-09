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
    let registrations: any[] = []

    snapshot.forEach((doc) => {
      const data = doc.data()
      registrations.push({
        id: doc.id,
        ...data,
        createdAt: data.createdAt?.toDate?.() || data.createdAt,
        updatedAt: data.updatedAt?.toDate?.() || data.updatedAt,
      })
    })

    // Filtrer par date de module si spécifié
    if (moduleDate) {
      registrations = registrations.filter(
        (reg) =>
          reg.module1 === moduleDate ||
          reg.module2 === moduleDate ||
          reg.module3 === moduleDate ||
          reg.module4 === moduleDate ||
          reg.moduleProthesiste === moduleDate
      )
    }

    return NextResponse.json({ registrations })
  } catch (error) {
    console.error('Error fetching registrations:', error)
    return NextResponse.json({ error: 'Failed to fetch registrations' }, { status: 500 })
  }
}

// POST - Créer une inscription manuellement
export async function POST(request: NextRequest) {
  const firebase = checkFirebaseAdmin()
  if ('error' in firebase) return firebase.error

  try {
    const data = await request.json()

    const registration: Omit<Registration, 'id'> = {
      nom: data.nom,
      prenom: data.prenom,
      email: data.email,
      telephone: data.telephone,
      adresseProfessionnelle: data.adresseProfessionnelle,
      codePostal: data.codePostal,
      ville: data.ville,
      pays: data.pays,
      module1: data.module1,
      module2: data.module2,
      module3: data.module3,
      moduleProthesiste: data.moduleProthesiste,
      isGuerande: data.isGuerande || false,
      message: data.message || '',
      status: data.status || 'pending',
      createdAt: new Date(),
      updatedAt: new Date(),
      emailSent: data.emailSent || false,
    }

    const docRef = await firebase.db.collection('registrations').add(registration)

    // Mettre à jour le nombre d'inscriptions pour chaque module
    const updateModuleRegistrations = async (moduleDate: string) => {
      if (!moduleDate) return

      const modulesSnapshot = await firebase.db
        .collection('moduleDates')
        .where('date', '==', moduleDate)
        .get()

      modulesSnapshot.forEach(async (doc) => {
        await doc.ref.update({
          currentRegistrations: (doc.data().currentRegistrations || 0) + 1,
          updatedAt: new Date(),
        })
      })
    }

    await Promise.all([
      updateModuleRegistrations(data.module1),
      updateModuleRegistrations(data.module2),
      updateModuleRegistrations(data.module3),
      updateModuleRegistrations(data.moduleProthesiste),
    ])

    return NextResponse.json({ success: true, id: docRef.id })
  } catch (error) {
    console.error('Error creating registration:', error)
    return NextResponse.json({ error: 'Failed to create registration' }, { status: 500 })
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
