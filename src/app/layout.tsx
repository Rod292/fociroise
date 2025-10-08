import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Police système optimisée pour la lisibilité médicale/professionnelle
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
  metadataBase: new URL('https://fociroise.fr'), // À remplacer par votre domaine réel
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://fociroise.fr',
    title: 'FOC Iroise – Formation occlusale continue à Brest',
    description: 'Formation occlusale continue à Brest pour chirurgiens-dentistes',
    siteName: 'FOC Iroise Brest',
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
    <html lang="fr" className={inter.variable}>
      <body className="flex min-h-screen flex-col">
        {/* Header avec navigation accessible */}
        <Header />

        {/* Contenu principal - balise sémantique main pour accessibilité */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer avec informations de contact et liens */}
        <Footer />
      </body>
    </html>
  )
}
