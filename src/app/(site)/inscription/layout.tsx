import type { Metadata } from 'next'

export const revalidate = 0

export const metadata: Metadata = {
  title: 'Inscription à la formation',
  description: 'Inscrivez-vous à la formation occlusale FOC Iroise à Brest. 3 modules de 2 jours, groupes de 14 praticiens. Tarif : 1100€ par module.',
  alternates: {
    canonical: 'https://fociroise.fr/inscription',
  },
  openGraph: {
    title: 'Inscription | FOC Iroise Brest',
    description: 'Formulaire d\'inscription à la formation occlusale. Prochaines sessions disponibles.',
    url: 'https://fociroise.fr/inscription',
  },
}

export default function InscriptionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
