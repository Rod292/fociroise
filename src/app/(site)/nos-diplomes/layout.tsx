import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Nos diplômés - Plus de 1000 apprenants formés',
  description: 'Découvrez la carte des diplômés FOC Iroise. Plus de 1000 chirurgiens-dentistes, orthodontistes et prothésistes formés depuis 2002 en France et en Europe.',
  alternates: {
    canonical: 'https://fociroise.fr/nos-diplomes',
  },
  openGraph: {
    title: 'La carte des diplômés | FOC Iroise',
    description: 'Plus de 1000 praticiens formés depuis 2002. Découvrez notre communauté.',
    url: 'https://fociroise.fr/nos-diplomes',
  },
}

export default function NosDiplomesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
