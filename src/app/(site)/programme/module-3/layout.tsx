import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 3 - Savoir éviter les pièges',
  description: 'Module 3 de la formation FOC Iroise : Dysfonctions cranio-mandibulaires, ajustement occlusal, cas complexes et apport du numérique',
}

export default function Module3Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
