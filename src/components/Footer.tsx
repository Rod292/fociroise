import Link from 'next/link'
import Image from 'next/image'
import { footerNavigation, contactInfo } from '@/config/navigation'

/**
 * Footer avec colonnes de liens et informations de contact
 * Accessible: balises sémantiques, liens contrastés, aria-labels pour icônes
 * Responsive: colonnes empilées sur mobile, grille sur desktop
 */
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100 border-t border-gray-200">
      <div className="container-custom py-16 lg:py-20">
        {/* Grille de colonnes responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12">
          {/* Colonne 1: Logo + Description */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-6 transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/FocIroiseTexte.png"
                alt="FOC Iroise"
                width={160}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Formation occlusale continue à Brest, basée sur la méthodologie du Professeur José Abjean
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 text-sm text-gray-600">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span className="leading-tight">{contactInfo.address}</span>
              </div>
            </div>
          </div>

          {/* Colonne 2: Ressources */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary-600 rounded-full"></div>
              Ressources
            </h3>
            <ul className="space-y-3">
              {footerNavigation.resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: À propos */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary-600 rounded-full"></div>
              À propos
            </h3>
            <ul className="space-y-3">
              {footerNavigation.about.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 hover:text-primary-600 transition-colors inline-flex items-center gap-2 group"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover:text-primary-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-5 flex items-center gap-2">
              <div className="w-1 h-4 bg-primary-600 rounded-full"></div>
              Contact
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-primary-600 transition-colors group"
                  aria-label={`Envoyer un email à ${contactInfo.email}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <svg
                      className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="pt-1">{contactInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="flex items-start gap-3 text-sm text-gray-600 hover:text-primary-600 transition-colors group"
                  aria-label={`Appeler le ${contactInfo.phoneDisplay}`}
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <svg
                      className="w-4 h-4 text-primary-600 group-hover:text-white transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="pt-1">{contactInfo.phoneDisplay}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Séparateur et copyright */}
        <div className="mt-12 pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600">
              &copy; {new Date().getFullYear()} FOC Iroise Brest. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="/mentions-legales"
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-gray-400">•</span>
              <a
                href="#"
                className="text-sm text-gray-600 hover:text-primary-600 transition-colors"
              >
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
