import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 1 - Savoir observer et analyser l\'occlusion individuelle',
  description: 'Module 1 de la formation FOC Iroise : Démystifier l\'occlusion et apprendre à analyser la cinématique mandibulaire. Formation pratique sur 2 jours.',
}

export default function Module1Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
