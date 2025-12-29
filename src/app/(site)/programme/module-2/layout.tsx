import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 2 - Savoir traiter',
  description: 'Module 2 de la formation FOC Iroise : Maîtriser l\'ajustement occlusal, la butée incisive d\'Abjean et la plaque occlusale. Formation pratique sur 2 jours.',
}

export default function Module2Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
