import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 1 - Savoir observer et analyser l\'occlusion individuelle',
  description: 'Module 1 FOC Iroise : Analyser l\'occlusion selon la méthode Abjean. Cinématique mandibulaire, articulateur DENAR, arc facial. Formation occlusodontie 2 jours à Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/programme/module-1',
  },
  openGraph: {
    title: 'Module 1 - Analyse de l\'occlusion | FOC Iroise',
    description: 'Apprendre à analyser l\'occlusion individuelle. Travaux pratiques sur articulateurs DENAR.',
    url: 'https://fociroise.fr/programme/module-1',
  },
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Module 1 - Savoir observer et analyser l\'occlusion individuelle',
  description: 'Démystifier l\'occlusion et apprendre à analyser la cinématique mandibulaire d\'un patient. Formation pratique sur 2 jours.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'FOC Iroise',
    url: 'https://fociroise.fr',
  },
  courseCode: 'FOC-M1',
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
  offers: {
    '@type': 'Offer',
    price: '1100',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
  },
  audience: {
    '@type': 'Audience',
    audienceType: 'Chirurgiens-dentistes',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://fociroise.fr' },
    { '@type': 'ListItem', position: 2, name: 'Programme', item: 'https://fociroise.fr/programme' },
    { '@type': 'ListItem', position: 3, name: 'Module 1', item: 'https://fociroise.fr/programme/module-1' },
  ],
}

export default function Module1Layout({
  children,
}: {
  children: React.ReactNode
}) {
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
      {children}
    </>
  )
}
