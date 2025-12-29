import type { Metadata } from 'next'

export const revalidate = 0

export const metadata: Metadata = {
  title: 'Inscription',
  description: 'Inscrivez-vous à la formation occlusale continue FOC Iroise à Brest. Informations pratiques et modalités d\'inscription.',
}

export default function InscriptionLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
