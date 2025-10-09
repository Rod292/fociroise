// Script pour initialiser les modules dans Firestore
// Exécuter avec: npx tsx scripts/seed-modules.ts

import { initializeApp, cert } from 'firebase-admin/app'
import { getFirestore } from 'firebase-admin/firestore'
import * as dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const app = initializeApp({
  credential: cert({
    projectId: process.env.FIREBASE_PROJECT_ID!,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL!,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n')!,
  }),
})

const db = getFirestore(app)

const modules2026 = {
  module1: [
    { date: '15-16 février 2026', location: 'Brest' },
    { date: '22-23 mars 2026', location: 'Brest' },
    { date: '17-18 mai 2026', location: 'Brest' },
  ],
  module2: [
    { date: '7-8 juin 2026', location: 'Brest' },
    { date: '13-14 septembre 2026', location: 'Brest' },
    { date: '11-12 octobre 2026', location: 'Brest' },
  ],
  module3: [
    { date: '8-9 novembre 2026', location: 'Brest' },
    { date: '6-7 décembre 2026', location: 'Brest' },
  ],
  moduleProthesiste: [
    { date: '10-11 janvier 2026', location: 'Brest' },
  ],
}

const modulesGuerande = {
  module1: [
    { date: '19-20 avril 2026', location: 'Guérande' },
  ],
  module2: [
    { date: '31 mai-1er juin 2026', location: 'Guérande' },
  ],
  module3: [
    { date: '20-21 septembre 2026', location: 'Guérande' },
  ],
}

async function seedModules() {
  console.log('🌱 Initialisation des modules dans Firestore...')

  try {
    // Modules Brest
    for (const [moduleName, dates] of Object.entries(modules2026)) {
      for (const { date, location } of dates) {
        await db.collection('moduleDates').add({
          module: moduleName,
          date,
          location,
          maxPlaces: 14,
          currentRegistrations: 0,
          isComplete: false,
          year: 2026,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        console.log(`✅ Ajouté: ${moduleName} - ${date} (${location})`)
      }
    }

    // Modules Guérande
    for (const [moduleName, dates] of Object.entries(modulesGuerande)) {
      for (const { date, location } of dates) {
        await db.collection('moduleDates').add({
          module: moduleName,
          date,
          location,
          maxPlaces: 14,
          currentRegistrations: 0,
          isComplete: false,
          year: 2026,
          createdAt: new Date(),
          updatedAt: new Date(),
        })
        console.log(`✅ Ajouté: ${moduleName} - ${date} (${location})`)
      }
    }

    console.log('\n🎉 Initialisation terminée avec succès !')
  } catch (error) {
    console.error('❌ Erreur lors de l\'initialisation:', error)
  }

  process.exit(0)
}

seedModules()
