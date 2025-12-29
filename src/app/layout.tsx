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
  description: 'Formation occlusale continue à Brest basée sur la méthodologie du Professeur José Abjean. Formation pour chirurgiens-dentistes en occlusion, prothèse et implantologie.',
  keywords: ['formation occlusale', 'formation dentaire Brest', 'occlusion dentaire', 'chirurgien-dentiste', 'FOC Iroise', 'José Abjean'],
  authors: [{ name: 'FOC Iroise Brest' }],
  creator: 'FOC Iroise Brest',
  publisher: 'FOC Iroise Brest',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fociroise.fr'),
  icons: {
    icon: '/images/LogoWhite.png',
    shortcut: '/images/LogoWhite.png',
    apple: '/images/LogoWhite.png',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fociroise.fr',
    title: 'FOC Iroise – Formation occlusale continue à Brest',
    description: 'Formation occlusale continue à Brest pour chirurgiens-dentistes',
    siteName: 'FOC Iroise Brest',
    images: [
      {
        url: '/images/LogoWhite.png',
        width: 1200,
        height: 630,
        alt: 'FOC Iroise - Formation Occlusale Continue',
      },
    ],
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
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
