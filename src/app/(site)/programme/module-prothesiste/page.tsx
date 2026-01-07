import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module Prothésiste - Formation pour prothésistes dentaires',
  description: 'Formation occlusodontie pour prothésistes dentaires. Plaque occlusale d\'Abjean, transmission praticien/prothésiste, CFAO dentaire. Méthode Abjean à Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/programme/module-prothesiste',
  },
  openGraph: {
    title: 'Module Prothésiste | FOC Iroise',
    description: 'Formation spécialisée pour prothésistes dentaires. Optimiser les transmissions avec le praticien.',
    url: 'https://fociroise.fr/programme/module-prothesiste',
  },
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Module Prothésiste - Formation occlusale pour prothésistes',
  description: 'Savoir observer et analyser l\'occlusion individuelle et optimiser les transmissions praticien/prothésiste.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'FOC Iroise',
    url: 'https://fociroise.fr',
  },
  courseCode: 'FOC-PROTH',
  hasCourseInstance: {
    '@type': 'CourseInstance',
    courseMode: 'onsite',
    duration: 'P2D',
    location: {
      '@type': 'Place',
      name: 'FOC Iroise',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '22 rue Algésiras',
        addressLocality: 'Brest',
        postalCode: '29200',
        addressCountry: 'FR',
      },
    },
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Prothésistes dentaires',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://fociroise.fr' },
    { '@type': 'ListItem', position: 2, name: 'Programme', item: 'https://fociroise.fr/programme' },
    { '@type': 'ListItem', position: 3, name: 'Module Prothésiste', item: 'https://fociroise.fr/programme/module-prothesiste' },
  ],
}

export default function ModuleProthesistePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/programme" className="hover:text-primary-600">Programme</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Module Prothésiste</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Module Prothésiste
          </h1>

          <p className="text-2xl text-gray-700 mb-8">
            Savoir observer et analyser l'occlusion individuelle et optimiser les transmissions praticien/prothésiste
          </p>

          {/* Objectifs */}
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Le module répond aux objectifs suivants :
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Démystifier l'occlusion</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Examiner pragmatiquement l'occlusion d'un patient</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Rechercher la ou les dents susceptibles de guider les trajets occlusaux fonctionnels et qui doivent servir de référence</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Comprendre l'importance du chemin de fermeture physiologique</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Maîtriser le réglage de la plaque occlusale d'Abjean</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Comprendre l'importance de conserver une dimension verticale d'occlusion</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Optimiser la transmission des données occlusales entre praticien et prothésiste</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-700 text-lg">Appréhender l'apport du numérique en occlusodontie</span>
              </li>
            </ul>
          </div>

          {/* Introduction aux TP */}
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <p className="text-gray-700 text-lg mb-6">
              Pour la pratique de l'ajustement occlusal, des modèles pédagogiques identiques sont montés sur les articulateurs DENAR Mark II. Ainsi les 14 prothésistes peuvent effectuer les différentes étapes en suivant rigoureusement le même protocole.
            </p>
            <p className="text-gray-700 text-lg">
              Durant ces deux journées, la projection de cas cliniques illustre la démarche thérapeutique. Il est souhaitable également que les praticiens apportent un ou deux cas, qui présentent des difficultés, que nous essaierons de résoudre ensemble.
            </p>
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
                    Démystifier et comprendre l'importance de la maitrise de l'occlusion au quotidien
                  </h3>
                  <p className="text-gray-700">
                    Présentation de nombreux cas cliniques et des échecs thérapeutiques en lien avec l'occlusion
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Examen anatomo-fonctionnel de l'occlusion
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Explication théorique et application pratique sur des modèles pédagogiques identiques</li>
                    <li>Mise en application par les participants sur leurs propres modèles</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Examen fonctionnel
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Montage des modèles des participants en PIM</li>
                    <li>Prise de l'arc facial</li>
                    <li>Etude des paramètres condyliens et réglage de l'articulateur</li>
                    <li>Les trajets fonctionnels</li>
                    <li>Etude des cycles de mastication</li>
                    <li>Recherche des interférences en rétrusion, latéralité et propulsion</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Le chemin de fermeture
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Démonstration clinique</li>
                    <li>Réalisation de la butée occlusale incisive sur modèle</li>
                    <li>Réglage de la butée en bouche</li>
                    <li>Préparation de la cire d'enregistrement</li>
                    <li>Enregistrement de l'occlusion</li>
                    <li>Illustration au travers de nombreux cas cliniques de l'utilisation de la butée incisive d'Abjean en pratique quotidienne</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Travaux pratiques (par binôme) de réalisation de la ''butée''
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Enregistrement sur le chemin de fermeture</li>
                    <li>Montage sur articulateur</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    La plaque occlusale d'Abjean (POA)
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Caractéristiques de réalisation et indications</li>
                    <li>Réalisation clinique en vidéo projection</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Discussion générale
                  </h3>
                </div>
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
                  <p className="text-lg text-gray-700 font-semibold mb-6">
                    Des travaux pratiques seront proposés. Ils seront répartis en quatre ateliers tournants au sein d'un laboratoire de prothèse
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    TP 1 : Réalisation de la plaque occlusale d'Abjean en résine auto à la cheville et de la table incisive fonctionnelle (6 postes)
                  </h3>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    TP 2 : Réalisation de la plaque occlusale d'Abjean en numérique sur 3shape (2 postes)
                  </h3>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    TP 3 : Wax-up, Try-in et soudures sur logiciel Exocad et Zirkonzahn (2 postes)
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc mt-4">
                    <li>Réalisation du « wax-up » sur le chemin de fermeture physiologique avec butée</li>
                    <li>Réalisation de l'armature zircone ou métallique avec « try-in » clipsé copiant le bridge transitoire</li>
                    <li>Gestion des plages de soudure primaire et secondaire sur armature métallique avec soudure laser</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-6 border-2 border-primary-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    TP 4 : Simulation sur logiciel « Modifier » de Zirkonzahn (avec la participation d'un formateur de chez ROTEC) (6 postes)
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc mt-4">
                    <li>Meulages sélectifs sur le chemin de fermeture physiologique : gestion des prématurités sur articulateur virtuel</li>
                    <li>Validation du rapport cuspide/fosse dans la DVO du patient à proposer au praticien avant reconstitution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center pt-8 border-t border-gray-200">
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
    </>
  )
}
