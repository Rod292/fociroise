import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Nos diplômés',
  description: 'Depuis 2002, plus de 1000 apprenants ont suivi notre formation occlusale continue en France et en Europe.',
}

export default function NosDiplomesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
