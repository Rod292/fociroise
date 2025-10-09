import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Location de salle de réunion à Brest - FOC Iroise | Hyper centre, 20 places',
  description: 'Louez une salle de réunion équipée en hyper centre de Brest. TV 105", visioconférence, terrasse vue mer, 20 places. Demi-journée 265€, journée 335€. PMR, parking gare.',
  keywords: [
    'location salle réunion Brest',
    'salle formation Brest',
    'espace professionnel Brest',
    'salle équipée Brest centre',
    'location salle visioconférence',
    'salle PMR Brest',
    'coworking Brest',
  ],
  openGraph: {
    title: 'Location de salle de réunion à Brest - FOC Iroise',
    description: 'Salle de réunion équipée pour 20 personnes en hyper centre de Brest. TV 105", visioconférence, terrasse vue mer.',
    type: 'website',
    locale: 'fr_FR',
    images: [
      {
        url: '/images/sallereunionfociroise.jpg',
        width: 1920,
        height: 1080,
        alt: 'Salle de réunion FOC Iroise Brest',
      },
    ],
  },
  alternates: {
    canonical: 'https://fociroise.fr/location-salle',
  },
}
