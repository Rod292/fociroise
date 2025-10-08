import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 4',
  description: 'Module 4 de la formation FOC Iroise : Approfondissement et cas cliniques des participants',
}

export default function Module4Page() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/programme" className="hover:text-primary-600">Programme</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Module 4</li>
            </ol>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">
            Module 4
          </h1>

          {/* Prerequisite warning */}
          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 mb-8">
            <p className="text-amber-900 font-medium">
              Ce module est réservé aux praticiens ayant suivi la formation en 2024 ou avant et qui souhaitent approfondir leur connaissance sur la méthodologie proposée lors des 3 premiers modules.
            </p>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-12">
            <p className="text-blue-900 mb-3">
              Une partie sera réservée à un approfondissement « à la carte » en fonction des souhaits des participants.
            </p>
          </div>

          {/* Cas à présenter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Préparation requise pour les participants
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Chaque participant à ce Module 4 devra présenter un ou deux cas (en projet, en cours ou réalisés) commentés de la façon suivante :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Si le cas est en cours :
                </h3>
                <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                  <li>Modèles d'étude, idéalement montés en articulateur et dont le décalage entre PIM et le chemin de fermeture a été évalué</li>
                  <li>Radiographie panoramique complétée, si nécessaire, par des radios long cône ou un cone-beam</li>
                  <li>Documents photographiques</li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Si le cas est déjà réalisé :
                </h3>
                <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                  <li>Documents photographiques étape par étape</li>
                </ul>
              </div>
            </div>

            <p className="text-lg text-gray-700 italic">
              De mon côté, je vous présenterai des nouveaux cas personnels documentés que nous pourrons discuter.
            </p>
          </div>

          {/* Programme */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-t-xl px-8 py-6">
              <h2 className="text-2xl font-bold">Programme</h2>
            </div>
            <div className="bg-gray-50 rounded-b-xl p-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Révision des connaissances
                  </h3>
                  <p className="text-gray-700">
                    Evaluer les caractéristiques occlusales de chaque patient.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Propositions de thématiques pouvant être abordées (en fonction de votre retour lors de l'inscription) :
                  </h3>
                  <ul className="space-y-3 text-gray-700 ml-6 list-disc">
                    <li>Prothèse sur parodonte affaibli</li>
                    <li>Comment passer du stade parodontal au stade implantaire en respectant la DVO et les critères fonctionnels ?</li>
                    <li>Gestion des béances</li>
                    <li>La gestion des dysfonctions oro-faciales et de la DVO dans les réalisations prothétiques</li>
                    <li>Les prothèses sur dents vivantes ; Inlays, Onlays, Attelles en U. Intérêt de la Contention ?</li>
                    <li>La méthodologie prothétique sur dents et implants ; Connexion ? Prothèse vissée ? scellée ?</li>
                    <li>Les résultats à long terme des traitements complexes</li>
                    <li>Erosion</li>
                    <li>Prothèse composite</li>
                    <li>Le numérique en occlusodontie</li>
                    <li>Utilisation de la butée incisive d'Abjean en prothèse amovible</li>
                    <li>Comment transmettre les données fonctionnelles et de DVO à son prothésiste</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    Discussion des cas cliniques des participants
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/programme/module-3"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Module 3
            </Link>
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
            >
              Inscription
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
