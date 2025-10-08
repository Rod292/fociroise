import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module Prothésiste',
  description: 'Module spécifique pour prothésistes dentaires - Formation FOC Iroise',
}

export default function ModuleProthesistePage() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/programme" className="hover:text-primary-600">Programme</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Module Prothésiste</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Module Prothésiste
          </h1>

          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Formation spécifique pour techniciens de laboratoire
            </p>

            <h2>Objectifs du module</h2>
            <p>
              Ce module s'adresse spécifiquement aux prothésistes dentaires et aborde la reproduction
              au laboratoire des concepts occlusaux. [À personnaliser avec le contenu détaillé]
            </p>

            <h2>Programme détaillé</h2>
            <ul>
              <li>Reproduction au laboratoire de la prothèse fixe provisoire</li>
              <li>Travail étape par étape</li>
              <li>Collaboration praticien-prothésiste</li>
              <li>[Autres points du programme]</li>
            </ul>

            <h2>Public concerné</h2>
            <p>
              Ce module est spécifiquement conçu pour les techniciens de laboratoire et prothésistes dentaires
              souhaitant approfondir leurs connaissances en occlusion et améliorer leur collaboration avec
              les praticiens.
            </p>

            <h2>Durée et modalités</h2>
            <p>
              <strong>Durée :</strong> [X jours]<br />
              <strong>Prérequis :</strong> Exercer en tant que prothésiste dentaire
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
            >
              S'inscrire à ce module
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
