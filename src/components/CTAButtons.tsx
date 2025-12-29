import Link from 'next/link'

/**
 * Composant de boutons CTA (Call-to-Action) réutilisables
 * Variants: primary (bleu-gris), accent (doré), secondary (bordure)
 * Accessible: focus visible, tailles de clic suffisantes (min 44x44px)
 */

interface CTAButtonProps {
  href: string
  variant?: 'primary' | 'secondary' | 'accent'
  children: React.ReactNode
  className?: string
}

export function CTAButton({
  href,
  variant = 'primary',
  children,
  className = ''
}: CTAButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 min-h-[48px] hover:-translate-y-0.5'

  const variantStyles = {
    primary: 'bg-gradient-to-r from-primary-700 to-primary-600 text-white hover:from-primary-800 hover:to-primary-700 shadow-lg hover:shadow-xl',
    accent: 'bg-accent-gold text-primary-900 hover:bg-accent-gold-light shadow-lg hover:shadow-xl',
    secondary: 'bg-white/80 backdrop-blur-sm text-primary-700 border-2 border-primary-200 hover:border-primary-300 hover:bg-white'
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
      <CTAButton href="/inscription" variant="accent">
        <span>Inscription</span>
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </CTAButton>
      <CTAButton href="/formateurs" variant="secondary">
        Découvrir l'équipe
      </CTAButton>
    </div>
  )
}
