import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 2 - Savoir traiter',
  description: 'Module 2 FOC Iroise : Ajustement occlusal, butée incisive d\'Abjean, plaque occlusale. Traitement des troubles de l\'occlusion. Formation occlusodontie 2 jours Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/programme/module-2',
  },
  openGraph: {
    title: 'Module 2 - Ajustement occlusal | FOC Iroise',
    description: 'Maîtriser l\'ajustement occlusal et la butée incisive d\'Abjean. Formation pratique.',
    url: 'https://fociroise.fr/programme/module-2',
  },
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Module 2 - Savoir traiter',
  description: 'Maîtriser l\'ajustement occlusal, la butée incisive d\'Abjean et la plaque occlusale. Formation pratique sur 2 jours.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'FOC Iroise',
    url: 'https://fociroise.fr',
  },
  courseCode: 'FOC-M2',
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
    { '@type': 'ListItem', position: 3, name: 'Module 2', item: 'https://fociroise.fr/programme/module-2' },
  ],
}

export default function Module2Layout({
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
