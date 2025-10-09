import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 2 - Savoir traiter',
  description: 'Module 2 de la formation FOC Iroise : Maîtriser l\'ajustement occlusal, la butée incisive d\'Abjean et la plaque occlusale. Formation pratique sur 2 jours.',
}

export default function Module2Page() {
  return (
    <div className="bg-white">
      <div className="container-custom py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/programme" className="hover:text-primary-600">Programme</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Module 2</li>
            </ol>
          </nav>

          {/* Titre du module */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Module 2
            </h1>
            <p className="text-2xl sm:text-3xl text-primary-600 font-semibold mb-6">
              Savoir traiter
            </p>
            <p className="text-lg text-gray-700 bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
              <strong>Prérequis :</strong> Ce module est réservé aux participants ayant validé le module 1.
            </p>
          </div>

          {/* Objectifs */}
          <div className="mb-12 bg-primary-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Le module 2 répond aux objectifs suivants :
            </h2>
            <ul className="space-y-3">
              {[
                'Savoir utiliser la butée incisive d\'Abjean',
                'Maîtriser le réglage de la POA',
                'Maîtriser l\'ajustement occlusal',
                'Quid de la DVO, puis-je l\'augmenter sans risque ?',
                'Savoir réaliser une technique de contention parodontale respectant l\'occlusion de son patient : l\'attelle en U d\'Abjean',
                'Apprendre à transmettre les données occlusales de son patient à son prothésiste'
              ].map((objectif, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{objectif}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Programme Jour 1 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-t-xl">
              <h2 className="text-2xl font-bold">Jour 1</h2>
              <p className="text-primary-100 mt-1">Révision et ajustement occlusal</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-b-xl border-2 border-t-0 border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Révision des connaissances acquises</h3>
                  <p className="text-gray-700">Suite au module 1 et application pratique</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">L'ajustement occlusal sans changement de P.I.M.</h3>
                  <p className="text-gray-700 mb-3">Réaliser un ajustement occlusal étape par étape :</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li><strong>Étape 1 :</strong> Recherche d'un contact prématuré sur le chemin de fermeture pour chaque participant</li>
                    <li>Les autres étapes (l'ajustement occlusal en P.I.M., rétrusion, latéralité et propulsion) sont réalisées par les participants sur des fiches pédagogiques et objectivées par la vidéo projection d'un cas clinique sur parodonte affaibli</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Savoir réaliser une contention parodontale</h3>
                  <p className="text-gray-700 mb-3">L'attelle en U d'Abjean - Respecter les paramètres occlusaux de son patient :</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>La méthodologie de l'attelle en U sera explicitée et objectivée par la vidéo</li>
                    <li>Les indications de l'attelle en U seront illustrées par de nombreux cas cliniques</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Étude des cas présentés par les participants</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Images Module 2 */}
          <div className="mb-12 max-w-3xl mx-auto">
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/module2-1.png"
                  alt="Formation Module 2 - Ajustement occlusal"
                  width={363}
                  height={292}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/module2-2.png"
                  alt="Formation Module 2 - Plaque occlusale"
                  width={557}
                  height={366}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/module2-3.png"
                  alt="Formation Module 2 - Travaux pratiques"
                  width={857}
                  height={566}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Programme Jour 2 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-t-xl">
              <h2 className="text-2xl font-bold">Jour 2</h2>
              <p className="text-primary-100 mt-1">Plaque occlusale et DVO</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-b-xl border-2 border-t-0 border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">La plaque occlusale d'Abjean (POA)</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Les participants apportent leur plaque occlusale (réalisée par leur laboratoire)</li>
                    <li>Description des techniques de réalisation d'une plaque occlusale d'Abjean au laboratoire de prothèse (physique ou numérique)</li>
                    <li>Démonstration d'équilibration d'une POA</li>
                    <li>Équilibration de la POA par les participants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Quid de la DVO, puis-je l'augmenter sans risque ?</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Au travers de nombreux cas cliniques, l'importance du respect d'une DVO établie sera discuté</li>
                    <li>L'approche méthodologique de conservation de la DVO au cours des reconstitutions prothétiques sera explicitée</li>
                    <li>L'importance d'une évaluation du chemin de fermeture physiologique dans le cas d'une perte de DVO sera argumentée</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Étude de cas prothétiques à long terme</h3>
                  <p className="text-gray-700">Réalisation étape par étape tant en clinique qu'au laboratoire</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Transmettre les données fonctionnelles à son prothésiste</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>Enregistrement des paramètres condyliens sur chaque participant et transfert sur articulateur</li>
                    <li>La table incisive fonctionnelle ne peut s'effectuer correctement qu'après enregistrement des paramètres condyliens et élimination des interférences occlusales</li>
                    <li>La table incisive fonctionnelle est montrée aux participants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Discussion générale</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation et CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-gray-200">
            <div className="flex gap-4">
              <Link
                href="/programme/module-1"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Module 1
              </Link>
              <Link
                href="/programme/module-3"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
              >
                Module 3
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
            >
              Inscription
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
