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
    { date: '16 & 17 janvier', location: 'Brest' },
    { date: '30 & 31 janvier', location: 'Brest' },
    { date: '13 & 14 février', location: 'Brest' },
  ],
  module2: [
    { date: '13 & 14 mars', location: 'Brest' },
    { date: '27 & 28 mars', location: 'Brest' },
    { date: '10 & 11 avril', location: 'Brest' },
  ],
  module3: [
    { date: '11 & 12 septembre', location: 'Brest' },
    { date: '25 & 26 septembre', location: 'Brest' },
    { date: '9 & 10 octobre', location: 'Brest' },
  ],
  module4: [
    { date: 'Sur demande', location: 'Brest' },
  ],
  moduleProthesiste: [
    { date: '27 & 28 février', location: 'Brest' },
  ],
}

const modulesGuerande = {
  module1: [
    { date: '24 & 25 avril', location: 'Guérande' },
  ],
  module2: [
    { date: '12 & 13 juin', location: 'Guérande' },
  ],
  module3: [
    { date: '23 & 24 octobre', location: 'Guérande' },
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
