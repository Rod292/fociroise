import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'José Abjean - Professeur émérite',
  description: 'Pr José Abjean, créateur de la méthode Abjean en occlusodontie. Auteur de "L\'Occlusion en pratique clinique". Plaque occlusale d\'Abjean, butée incisive. Fondateur FOC Iroise.',
  alternates: {
    canonical: 'https://fociroise.fr/formateurs/jose-abjean',
  },
  openGraph: {
    title: 'Pr José Abjean - Fondateur FOC Iroise',
    description: 'Professeur émérite, auteur de L\'Occlusion en pratique clinique. Expert en occlusodontie.',
    url: 'https://fociroise.fr/formateurs/jose-abjean',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'José Abjean',
  jobTitle: 'Professeur des universités émérite',
  description: 'Ancien chef du service d\'Odontologie du CHU de Brest, auteur de plusieurs livres sur l\'occlusion dentaire.',
  worksFor: {
    '@type': 'EducationalOrganization',
    name: 'FOC Iroise',
    url: 'https://fociroise.fr',
  },
  image: 'https://fociroise.fr/images/abjean.png',
  sameAs: [],
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://fociroise.fr' },
    { '@type': 'ListItem', position: 2, name: 'Formateurs', item: 'https://fociroise.fr/formateurs' },
    { '@type': 'ListItem', position: 3, name: 'José Abjean', item: 'https://fociroise.fr/formateurs/jose-abjean' },
  ],
}

export default function JoseAbjeanPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-white min-h-screen">
        <div className="container-custom py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/formateurs" className="hover:text-primary-600">Formateurs</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">José Abjean</li>
            </ol>
          </nav>

          {/* En-tête avec photo et nom */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
            {/* Photo */}
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src="/images/abjean.png"
                  alt="José Abjean"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Nom et titre */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                José ABJEAN
              </h1>
              <p className="text-xl sm:text-2xl text-primary-600 font-semibold mb-6">
                Professeur des universités émérite
              </p>
            </div>
          </div>

          {/* Biographie */}
          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ancien chef du service d'Odontologie du CHU de Brest, responsable du service de Parodontologie et d'implantologie. Auteur de plusieurs livres sur l'occlusion dentaire dont « L'Occlusion Aspects cliniques, directives thérapeutiques » en 1977 et « L'occlusion en pratique clinique » en 2002.
            </p>
          </div>

          {/* Bouton retour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/formateurs"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l'équipe
            </Link>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}
