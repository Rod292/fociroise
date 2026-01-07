import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Programme de formation occlusale',
  description: 'Programme de formation en occlusodontie selon la méthode Abjean. 4 modules : analyse occlusion, ajustement occlusal, DTM, perfectionnement. Formation dentaire à Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/programme',
  },
  openGraph: {
    title: 'Programme de formation occlusale | FOC Iroise',
    description: 'Formation progressive en 3 modules. Théorie, démonstrations cliniques et travaux pratiques.',
    url: 'https://fociroise.fr/programme',
  },
}

// JSON-LD CourseGroup pour le programme
const courseGroupJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Programme de formation FOC Iroise',
  description: 'Formation occlusale progressive en 3 modules pour chirurgiens-dentistes',
  numberOfItems: 4,
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      url: 'https://fociroise.fr/programme/module-1',
      name: 'Module 1 - Savoir observer et analyser l\'occlusion individuelle',
    },
    {
      '@type': 'ListItem',
      position: 2,
      url: 'https://fociroise.fr/programme/module-2',
      name: 'Module 2 - Ajustement occlusal et prothèse fixée',
    },
    {
      '@type': 'ListItem',
      position: 3,
      url: 'https://fociroise.fr/programme/module-3',
      name: 'Module 3 - Prothèse amovible et implantologie',
    },
    {
      '@type': 'ListItem',
      position: 4,
      url: 'https://fociroise.fr/programme/module-4',
      name: 'Module 4 - Perfectionnement et cas complexes',
    },
  ],
}

export default function ProgrammeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseGroupJsonLd) }}
      />
      {children}
    </>
  )
}
