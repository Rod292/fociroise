import type { Metadata } from 'next'
import { Fraunces, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Analytics } from '@vercel/analytics/next'

// Police display pour les titres - élégante et académique
const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
})

// Police body moderne et lisible
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
})

// Metadata SEO pour toute l'application
export const metadata: Metadata = {
  title: {
    default: 'FOC Iroise – Formation occlusale continue à Brest',
    template: '%s | FOC Iroise Brest'
  },
  description: 'Formation occlusale continue à Brest selon la méthode du Pr José Abjean. Occlusodontie, DTM, bruxisme, plaque occlusale. Formation pour chirurgiens-dentistes et prothésistes.',
  keywords: ['formation occlusale', 'formation dentaire Brest', 'occlusion dentaire', 'chirurgien-dentiste', 'FOC Iroise', 'José Abjean', 'méthode Abjean', 'formation continue dentaire', 'occlusodontie', 'DTM', 'dysfonction temporo-mandibulaire', 'bruxisme', 'plaque occlusale', 'ajustement occlusal', 'troubles occlusion', 'formation prothésiste dentaire'],
  authors: [{ name: 'FOC Iroise Brest' }],
  creator: 'FOC Iroise Brest',
  publisher: 'FOC Iroise Brest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fociroise.fr'),
  alternates: {
    canonical: 'https://fociroise.fr',
  },
  icons: {
    icon: '/images/LogoWhite-optimized.png',
    shortcut: '/images/LogoWhite-optimized.png',
    apple: '/images/LogoWhite-optimized.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fociroise.fr',
    title: 'FOC Iroise – Formation occlusale continue à Brest',
    description: 'Formation occlusale continue à Brest pour chirurgiens-dentistes. Plus de 1000 diplômés depuis 2002.',
    siteName: 'FOC Iroise Brest',
    images: [
      {
        url: '/images/LogoWhite-optimized.png',
        width: 1200,
        height: 630,
        alt: 'FOC Iroise - Formation Occlusale Continue à Brest',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FOC Iroise – Formation occlusale continue à Brest',
    description: 'Formation occlusale continue pour chirurgiens-dentistes. Méthodologie du Pr José Abjean. Plus de 1000 diplômés.',
    images: ['/images/LogoWhite-optimized.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

// JSON-LD Organization et LocalBusiness pour le SEO
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  '@id': 'https://fociroise.fr/#organization',
  name: 'FOC Iroise',
  alternateName: 'Formation Occlusale Continue Iroise',
  url: 'https://fociroise.fr',
  logo: 'https://fociroise.fr/images/LogoWhite-optimized.png',
  description: 'Formation occlusale continue à Brest pour chirurgiens-dentistes. Méthodologie du Professeur José Abjean.',
  foundingDate: '2002',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 rue Algésiras',
    addressLocality: 'Brest',
    postalCode: '29200',
    addressRegion: 'Finistère',
    addressCountry: 'FR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+33298072304',
    contactType: 'customer service',
    availableLanguage: 'French',
  },
  sameAs: [
    'https://www.instagram.com/fociroise/',
  ],
}

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://fociroise.fr/#localbusiness',
  name: 'FOC Iroise - Formation Dentaire',
  image: 'https://fociroise.fr/images/LogoWhite-optimized.png',
  url: 'https://fociroise.fr',
  telephone: '+33298072304',
  email: 'contact@fociroise.fr',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '22 rue Algésiras',
    addressLocality: 'Brest',
    postalCode: '29200',
    addressRegion: 'Finistère',
    addressCountry: 'FR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 48.3904,
    longitude: -4.4861,
  },
  priceRange: '€€',
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* JSON-LD pour SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        {/* Header avec navigation accessible */}
        <Header />

        {/* Contenu principal - balise sémantique main pour accessibilité */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer avec informations de contact et liens */}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
