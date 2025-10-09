import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 3 - Savoir éviter les pièges',
  description: 'Module 3 de la formation FOC Iroise : Dysfonctions cranio-mandibulaires, ajustement occlusal, cas complexes et apport du numérique',
}

export default function Module3Page() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/programme" className="hover:text-primary-600">Programme</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Module 3</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Module 3
          </h1>

          <p className="text-2xl text-gray-700 mb-8">
            Savoir éviter les pièges
          </p>

          {/* Prerequisite warning */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
            <p className="text-amber-900 font-medium">
              Ce module est réservé aux participants ayant validé les modules 1 et 2.
            </p>
          </div>

          {/* Objectifs */}
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Le module 3 répond aux objectifs suivants :
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Apprendre à traiter les dysfonctions cranio-mandibulaires</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Maîtriser l'ajustement occlusal en changeant la P.I.M.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Apprendre à traiter les cas complexes (Erosion, bruxisme, prothèse sur parodonte affaibli, béance, prothèse dento-implanto-portée…)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Appréhender l'apport du numérique en occlusodontie</span>
              </li>
            </ul>
          </div>

          {/* Jour 1 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-t-xl px-8 py-6">
              <h2 className="text-2xl font-bold">Jour 1</h2>
            </div>
            <div className="bg-gray-50 rounded-b-xl p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Vérification des connaissances acquises et appliquées (suite au module 1 & 2)
                  </h3>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    La dysfonction cranio-mandibulaire
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Symptomatologie des dysfonctions cranio-mandibulaires (Douleurs, altération de la cinématique, craquements…)</li>
                    <li>Examen de la cinématique mandibulaire</li>
                    <li>Examen des ATM et palpation musculaire avec démonstration et TP sur les participants</li>
                    <li>Etiologie des dysfonctions cranio-mandibulaires</li>
                    <li>Traitements non chirurgicaux et chirurgicaux des dysfonctions cranio-mandibulaires et résultats</li>
                    <li>Schéma décisionnel du traitement des luxations discales irréductibles</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Méthode de l'ajustement occlusal en changeant la P.I.M. du patient
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Explication théorique</li>
                    <li>Ajustement occlusal sur modèle pédagogique par les participants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Gestion des béances et des fonctions oro-faciales
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Explication théorique des béances primitives et secondaires</li>
                    <li>Conduite à tenir devant une béance secondaire</li>
                    <li>Conduite à tenir devant une béance primitive</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Etude des cas présentés par les participants
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Images Module 3 */}
          <div className="mb-12 max-w-4xl mx-auto space-y-2 md:space-y-4">
            {/* Première ligne : 3 images */}
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/module3-1.png"
                  alt="Formation Module 3 - Dysfonctions cranio-mandibulaires"
                  width={531}
                  height={422}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/module3-2.png"
                  alt="Formation Module 3 - Cas complexes"
                  width={849}
                  height={561}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/module3-3.png"
                  alt="Formation Module 3 - Numérique en occlusodontie"
                  width={990}
                  height={669}
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Deuxième ligne : 2 images */}
            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/module3-4.png"
                  alt="Formation Module 3 - Travaux pratiques"
                  width={1003}
                  height={669}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md">
                <Image
                  src="/images/module3-5.png"
                  alt="Formation Module 3 - Validation des connaissances"
                  width={1003}
                  height={632}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          {/* Jour 2 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-t-xl px-8 py-6">
              <h2 className="text-2xl font-bold">Jour 2</h2>
            </div>
            <div className="bg-gray-50 rounded-b-xl p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    L'ajustement occlusal en implantologie
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Principes généraux</li>
                    <li>Reconstitutions dento-implanto-portés</li>
                    <li>Reconstitutions type « All-on »</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Traitement des cas complexes
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Réalisations prothétiques sur parodonte affaibli</li>
                    <li>Le bruxisme : étiologie et thérapeutique</li>
                    <li>Les problèmes posés par la DVO</li>
                    <li>La prothèse sur dents vivantes</li>
                    <li>Comment respecter le parallélisme ?</li>
                    <li>Comment assurer le passage de la prothèse sur parodonte affaibli à la prothèse sur implants, en respectant les paramètres occlusaux et la DVO du patient ?</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Etude de cas à long terme
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Présentation des cas (modèles, radio, diapositives)</li>
                    <li>Etablissement des plans de traitement par les participants</li>
                    <li>Confrontation avec les résultats obtenus à long terme</li>
                    <li>Discussion actualisée</li>
                    <li>Réalisation, étape par étape, d'une prothèse fixe totale maxillaire</li>
                    <li>Construction prothétique sur dents fortement abrasées</li>
                    <li>Comment respecter la DVO et les cycles de mastication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Apport du numérique dans la gestion de l'occlusion
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Les différents systèmes d'analyse numérique de l'occlusion seront évoqués</li>
                    <li>Comment permettre le passage des données numériques vers un articulateur physique dans le cas des reconstitutions céramo-métalliques ou stratifiées ?</li>
                    <li>Une démonstration d'une analyse numérique complète de l'occlusion sera faite sur les participants</li>
                    <li>Quelle utilisation pour l'articulateur virtuel ?</li>
                    <li>Au travers de nombreux cas cliniques, l'apport de l'outil numérique sera illustré</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Discussion générale
                  </h3>
                  <p className="text-gray-700">
                    Validation des connaissances et remise du diplôme
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-gray-200">
            <div className="flex gap-4">
              <Link
                href="/programme/module-2"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Module 2
              </Link>
              <Link
                href="/programme/module-4"
                className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
              >
                Module 4
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
