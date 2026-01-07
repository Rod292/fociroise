import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Pascale Bellon - Docteur en chirurgie dentaire',
  description: 'Biographie de Pascale Bellon, docteur en chirurgie dentaire, spécialiste en parodontologie et formatrice FOC Iroise à Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/formateurs/pascale-bellon',
  },
  openGraph: {
    title: 'Dr Pascale Bellon - Formatrice FOC Iroise',
    description: 'Docteur en chirurgie dentaire, spécialiste en parodontologie et implantologie.',
    url: 'https://fociroise.fr/formateurs/pascale-bellon',
  },
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Pascale Bellon',
  jobTitle: 'Docteur en chirurgie dentaire',
  description: 'Ancienne assistante en parodontologie à la Faculté d\'Odontologie de Brest, spécialiste en parodontologie et implantologie.',
  worksFor: {
    '@type': 'EducationalOrganization',
    name: 'FOC Iroise',
    url: 'https://fociroise.fr',
  },
  image: 'https://fociroise.fr/images/bellon.png',
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://fociroise.fr' },
    { '@type': 'ListItem', position: 2, name: 'Formateurs', item: 'https://fociroise.fr/formateurs' },
    { '@type': 'ListItem', position: 3, name: 'Pascale Bellon', item: 'https://fociroise.fr/formateurs/pascale-bellon' },
  ],
}

export default function PascaleBellonPage() {
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
              <li className="text-gray-900 font-medium">Pascale Bellon</li>
            </ol>
          </nav>

          {/* En-tête avec photo et nom */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
            {/* Photo */}
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src="/images/bellon.png"
                  alt="Pascale Bellon"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Nom et titre */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                Pascale BELLON
              </h1>
              <p className="text-xl sm:text-2xl text-primary-600 font-semibold mb-6">
                Docteur en chirurgie dentaire
              </p>
            </div>
          </div>

          {/* Biographie */}
          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">
              Ancienne assistante en parodontologie à la Faculté d'Odontologie de Brest, CES de Parodontologie, CES de Biologie buccale, DU d'implantologie chirurgicale.
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
