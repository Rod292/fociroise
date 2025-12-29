import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 4',
  description: 'Module 4 de la formation FOC Iroise : Approfondissement et cas cliniques des participants',
}

export default function Module4Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
