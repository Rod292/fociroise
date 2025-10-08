import Link from 'next/link'

/**
 * Composant de boutons CTA (Call-to-Action) réutilisables
 * Variants: primary (bleu plein) et secondary (bordure bleue)
 * Accessible: focus visible, tailles de clic suffisantes (min 44x44px)
 */

interface CTAButtonProps {
  href: string
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
  className?: string
}

export function CTAButton({
  href,
  variant = 'primary',
  children,
  className = ''
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 min-h-[44px]'

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50'
  }

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  )
}

/**
 * Groupe de boutons CTA pour Hero section
 * Responsive: stack vertical sur mobile, horizontal sur desktop
 */
export function CTAButtonGroup() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
      <CTAButton href="/inscription" variant="primary">
        Inscription
      </CTAButton>
      <CTAButton href="/formateurs" variant="secondary">
        Découvrir L'équipe
      </CTAButton>
    </div>
  )
}
