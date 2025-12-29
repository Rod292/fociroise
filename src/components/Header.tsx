'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { mainNavigation } from '@/config/navigation'

/**
 * Header avec navigation sticky et menu mobile hamburger
 * Accessible: aria-labels, aria-expanded, navigation clavier
 * Responsive: navigation horizontale desktop, menu burger mobile
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (label: string) => {
    setOpenSubmenu(openSubmenu === label ? null : label)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="container-custom" aria-label="Navigation principale">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="flex items-center transition-opacity hover:opacity-80"
            >
              <Image
                src="/images/FocIroiseTexte.png"
                alt="FOC Iroise - Formation Occlusale Continue"
                width={140}
                height={45}
                priority
                className="h-9 lg:h-10 w-auto"
              />
            </Link>
          </div>

          {/* Navigation desktop - cachée sur mobile */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {mainNavigation.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  // Menu déroulant pour Programme
                  <>
                    <button
                      className="nav-link flex items-center gap-1"
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                      aria-haspopup="true"
                      aria-expanded={openSubmenu === item.label}
                    >
                      {item.label}
                      <svg
                        className="w-4 h-4 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {/* Sous-menu */}
                    <div
                      className={`absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                        openSubmenu === item.label ? 'opacity-100 visible' : 'opacity-0 invisible'
                      }`}
                      onMouseEnter={() => setOpenSubmenu(item.label)}
                      onMouseLeave={() => setOpenSubmenu(null)}
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  // Lien simple
                  <Link href={item.href} className="nav-link">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            {/* CTA rapides desktop */}
            <div className="flex items-center gap-3 ml-6 border-l border-gray-200 pl-6">
              <Link
                href="/inscription"
                className="px-5 py-2.5 text-sm font-semibold text-primary-900 bg-accent-gold rounded-lg hover:bg-accent-gold-light transition-all shadow-sm hover:shadow-md"
              >
                Inscription
              </Link>
              <Link
                href="/formateurs"
                className="px-5 py-2.5 text-sm font-semibold text-primary-700 border-2 border-primary-300 rounded-lg hover:border-primary-600 hover:bg-primary-50 transition-all"
              >
                L'équipe
              </Link>
            </div>
          </div>

          {/* Bouton menu mobile */}
          <button
            type="button"
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-controls="mobile-menu"
            aria-expanded={mobileMenuOpen}
            aria-label="Menu principal"
          >
            <span className="sr-only">Ouvrir le menu</span>
            {!mobileMenuOpen ? (
              // Icône hamburger
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              // Icône fermeture
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Menu mobile - visible seulement quand ouvert */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200" id="mobile-menu">
            <div className="py-4 space-y-1">
              {mainNavigation.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                        aria-expanded={openSubmenu === item.label}
                      >
                        {item.label}
                        <svg
                          className={`w-5 h-5 transition-transform ${openSubmenu === item.label ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {/* Sous-menu mobile */}
                      {openSubmenu === item.label && (
                        <div className="pl-4 space-y-1 bg-gray-50">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-gray-600 hover:text-primary-600"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-primary-600"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* CTA mobiles */}
              <div className="pt-4 pb-2 px-4 space-y-3 border-t border-gray-200 mt-4">
                <Link
                  href="/inscription"
                  className="block w-full px-4 py-3 text-center text-base font-semibold text-primary-900 bg-accent-gold rounded-lg hover:bg-accent-gold-light"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Inscription
                </Link>
                <Link
                  href="/formateurs"
                  className="block w-full px-4 py-3 text-center text-base font-semibold text-primary-700 border-2 border-primary-300 rounded-lg hover:border-primary-600 hover:bg-primary-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Découvrir l'équipe
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
