import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 3 - Savoir éviter les pièges',
  description: 'Module 3 FOC Iroise : DTM, dysfonctions temporo-mandibulaires, bruxisme, ajustement occlusal. Cas complexes et numérique. Formation occlusodontie à Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/programme/module-3',
  },
  openGraph: {
    title: 'Module 3 - Cas complexes | FOC Iroise',
    description: 'Dysfonctions cranio-mandibulaires et cas complexes. Formation pratique avancée.',
    url: 'https://fociroise.fr/programme/module-3',
  },
}

const courseJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Course',
  name: 'Module 3 - Savoir éviter les pièges',
  description: 'Dysfonctions cranio-mandibulaires, ajustement occlusal avancé, cas complexes et apport du numérique.',
  provider: {
    '@type': 'EducationalOrganization',
    name: 'FOC Iroise',
    url: 'https://fociroise.fr',
  },
  courseCode: 'FOC-M3',
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
    { '@type': 'ListItem', position: 3, name: 'Module 3', item: 'https://fociroise.fr/programme/module-3' },
  ],
}

export default function Module3Layout({
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
