import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 4 - Perfectionnement',
  description: 'Module 4 FOC Iroise : Perfectionnement en occlusodontie, analyse de vos cas cliniques, remise du diplôme. Méthode Abjean. Formation à Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/programme/module-4',
  },
  openGraph: {
    title: 'Module 4 - Perfectionnement | FOC Iroise',
    description: 'Approfondissement et analyse des cas cliniques des participants.',
    url: 'https://fociroise.fr/programme/module-4',
  },
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Module 4 - Perfectionnement',
  description: 'Approfondissement, cas cliniques des participants et perfectionnement des techniques occlusales.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'FOC Iroise',
    url: 'https://fociroise.fr',
  },
  courseCode: 'FOC-M4',
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
    { '@type': 'ListItem', position: 3, name: 'Module 4', item: 'https://fociroise.fr/programme/module-4' },
  ],
}

export default function Module4Layout({
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
