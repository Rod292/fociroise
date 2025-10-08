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
      description: 'Fondamentaux de l\'occlusion et analyse fonctionnelle',
      duration: 'X jours',
    },
    {
      title: 'Module 2',
      href: '/programme/module-2',
      description: 'Occlusion et pathologies : dysfonctions et parodontie',
      duration: 'X jours',
    },
    {
      title: 'Module 3',
      href: '/programme/module-3',
      description: 'Prothèse fixe et réhabilitations occlusales',
      duration: 'X jours',
    },
    {
      title: 'Module 4',
      href: '/programme/module-4',
      description: 'Cas complexes et implantologie',
      duration: 'X jours',
    },
    {
      title: 'Module Prothésiste',
      href: '/programme/module-prothesiste',
      description: 'Formation spécifique pour techniciens de laboratoire',
      duration: 'X jours',
    },
  ]

  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        {/* En-tête de page */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Programme de formation
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Une formation complète en occlusion, structurée en modules progressifs,
            basée sur la méthodologie du Professeur José Abjean.
          </p>
        </div>

        {/* Présentation générale */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="prose prose-lg prose-blue max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Une approche pédagogique progressive
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La formation FOC Iroise propose un parcours complet en 4 modules principaux,
              permettant d'acquérir progressivement les compétences nécessaires à la maîtrise
              de l'occlusion en pratique clinique quotidienne.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Chaque module alterne enseignement théorique, démonstrations cliniques et travaux
              pratiques, pour une assimilation optimale des concepts et techniques.
            </p>
          </div>
        </div>

        {/* Grille des modules */}
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Les modules de formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {modules.map((module) => (
              <Link
                key={module.href}
                href={module.href}
                className="group relative bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-primary-500 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                  {module.title}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {module.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-500">
                    Durée : {module.duration}
                  </span>
                  <svg
                    className="w-6 h-6 text-primary-600 transform group-hover:translate-x-1 transition-transform"
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
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="max-w-4xl mx-auto mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Informations pratiques
          </h2>
          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Public concerné :</strong> Chirurgiens-dentistes et prothésistes dentaires
              (module spécifique)
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Lieu :</strong> Brest, Finistère
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              <strong>Pédagogie :</strong> Formation alliant théorie, démonstrations et travaux pratiques
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              <strong>Méthodologie :</strong> Basée sur l'approche du Professeur José Abjean
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto text-center mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Intéressé par notre formation ?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
            >
              S'inscrire maintenant
            </Link>
            <Link
              href="/formateurs"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Rencontrer l'équipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
