import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 3',
  description: 'Module 3 de la formation FOC Iroise : Prothèse fixe et réhabilitations occlusales',
}

export default function Module3Page() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/programme" className="hover:text-primary-600">Programme</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Module 3</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Module 3
          </h1>

          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Prothèse fixe et réhabilitations occlusales
            </p>

            <h2>Objectifs du module</h2>
            <p>
              Ce module se concentre sur les aspects prothétiques et les réhabilitations occlusales complexes.
              [À personnaliser avec le contenu détaillé]
            </p>

            <h2>Programme détaillé</h2>
            <ul>
              <li>[Point du programme 1]</li>
              <li>[Point du programme 2]</li>
              <li>[Point du programme 3]</li>
            </ul>

            <h2>Durée et modalités</h2>
            <p>
              <strong>Durée :</strong> [X jours]<br />
              <strong>Prérequis :</strong> Modules 1 et 2 recommandés
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
