import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nos formateurs',
  description: 'Découvrez l\'équipe de formateurs FOC Iroise : Pr José Abjean, Pr Jacques-Olivier Pers et Dr Pascale Bellon. Des experts reconnus en occlusodontie à Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/formateurs',
  },
  openGraph: {
    title: 'Notre équipe de formateurs | FOC Iroise',
    description: 'Des praticiens expérimentés en occlusodontie. Plus de 20 ans d\'expertise.',
    url: 'https://fociroise.fr/formateurs',
  },
}

export default function FormateursLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
