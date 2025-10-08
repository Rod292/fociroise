import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Programme de formation',
  description: 'Découvrez le programme complet de la formation occlusale continue FOC Iroise : 4 modules principaux et 1 module spécifique pour prothésistes.',
}

/**
 * Page Programme - Vue d'ensemble de la formation
 * Navigation vers les 5 modules détaillés
 */
export default function ProgrammePage() {
  const modules = [
    {
      title: 'Module 1',
      href: '/programme/module-1',
    },
    {
      title: 'Module 2',
      href: '/programme/module-2',
    },
    {
      title: 'Module 3',
      href: '/programme/module-3',
    },
    {
      title: 'Module 4',
      href: '/programme/module-4',
    },
  ]

  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Programme de formation
          </h1>

          <div className="prose prose-lg prose-blue max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La pratique de l'occlusion est enseignée progressivement en 3 modules de 2 journées, étalés sur une année.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Chaque étape comprend une explication théorique et une démonstration clinique ou pratique suivie de travaux pratiques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Les modules sont limités à 14 praticiens qui travaillent en binômes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modules.map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-200"
              >
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                  {module.title}
                </h2>
                <svg
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-6 h-6 text-primary-600 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
