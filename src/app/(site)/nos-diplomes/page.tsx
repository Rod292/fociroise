import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Nos diplômés',
  description: 'Découvrez les témoignages et réussites de nos anciens participants à la formation FOC Iroise.',
}

/**
 * Page Nos diplômés
 * Présentation des anciens participants, témoignages, réussites
 */
export default function NosDiplomesPage() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Nos diplômés
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Découvrez le parcours et les témoignages des praticiens formés à FOC Iroise
            </p>
          </div>

          {/* Introduction */}
          <div className="prose prose-lg prose-blue max-w-none mb-16">
            <p className="text-lg text-gray-700 leading-relaxed">
              Depuis sa création, FOC Iroise a formé de nombreux chirurgiens-dentistes et prothésistes
              à la maîtrise de l'occlusion selon la méthodologie du Professeur José Abjean.
              Nos anciens participants exercent aujourd'hui en France et à l'international,
              appliquant au quotidien les concepts et techniques acquis durant leur formation.
            </p>
          </div>

          {/* Section témoignages (structure placeholder) */}
          <div className="space-y-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Témoignages
            </h2>

            {/* Placeholder pour témoignages - à personnaliser */}
            <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-600">
              <p className="text-lg text-gray-800 italic mb-4">
                "[Témoignage d'un ancien participant - à ajouter]"
              </p>
              <p className="text-gray-700 font-medium">
                — [Nom du praticien], [Ville]
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-600">
              <p className="text-lg text-gray-800 italic mb-4">
                "[Témoignage d'un ancien participant - à ajouter]"
              </p>
              <p className="text-gray-700 font-medium">
                — [Nom du praticien], [Ville]
              </p>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-600">
              <p className="text-lg text-gray-800 italic mb-4">
                "[Témoignage d'un ancien participant - à ajouter]"
              </p>
              <p className="text-gray-700 font-medium">
                — [Nom du praticien], [Ville]
              </p>
            </div>
          </div>

          {/* Statistiques (optionnel - à personnaliser) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <p className="text-4xl font-bold text-primary-600 mb-2">[XX]</p>
              <p className="text-gray-700 font-medium">Praticiens formés</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <p className="text-4xl font-bold text-primary-600 mb-2">[XX]</p>
              <p className="text-gray-700 font-medium">Sessions organisées</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-xl">
              <p className="text-4xl font-bold text-primary-600 mb-2">[XX]%</p>
              <p className="text-gray-700 font-medium">Taux de satisfaction</p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center pt-12 border-t border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Vous souhaitez rejoindre nos diplômés ?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programme"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Découvrir le programme
              </Link>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                S'inscrire
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
