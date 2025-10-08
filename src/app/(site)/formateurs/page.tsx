import type { Metadata } from 'next'
import Image from 'next/image'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Formateurs',
  description: 'Découvrez l\'équipe de formateurs FOC Iroise, experts en occlusion dentaire et formés à la méthodologie du Professeur José Abjean.',
}

/**
 * Page Formateurs - Présentation de l'équipe pédagogique
 * Structure prête pour intégrer photos et biographies
 */
export default function FormateursPage() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        {/* En-tête de page */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Nos formateurs
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Une équipe d'experts passionnés, formés à la méthodologie du Professeur José Abjean,
            dédiée à l'excellence de votre formation en occlusion dentaire.
          </p>
        </div>

        {/* Photo d'équipe (placeholder - à remplacer avec votre image) */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="relative aspect-[16/9] bg-gradient-to-br from-primary-100 to-blue-100 rounded-xl overflow-hidden shadow-lg">
            {/* Placeholder - remplacer par: */}
            {/* <Image
              src="/images/equipe-formateurs.jpg"
              alt="L'équipe des formateurs FOC Iroise"
              fill
              className="object-cover"
              priority
            /> */}
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="text-gray-500 text-lg font-medium">
                Photo de l'équipe à ajouter dans /public/images/
              </p>
            </div>
          </div>
        </div>

        {/* Section de contenu (à personnaliser avec vos formateurs) */}
        <div className="max-w-4xl mx-auto prose prose-lg prose-blue">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Une expertise reconnue
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Les formateurs de FOC Iroise sont des praticiens expérimentés qui partagent leur savoir-faire
            et leur expérience clinique au quotidien. Formés à la méthodologie développée par le
            Professeur José Abjean, ils vous accompagnent tout au long de votre parcours de formation.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">
            Une pédagogie centrée sur la pratique
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Notre approche pédagogique privilégie l'apprentissage par la pratique et l'analyse de cas cliniques.
            Chaque module alterne théorie, démonstrations et travaux pratiques pour une assimilation optimale
            des concepts occlusaux.
          </p>

          {/* Zone pour ajouter les biographies individuelles des formateurs */}
          <div className="mt-16 space-y-12">
            {/* Exemple de structure pour un formateur - à répéter et personnaliser */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                [Nom du formateur]
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                [Biographie, parcours, spécialités...]
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>[Formation/diplôme]</li>
                <li>[Expérience clinique]</li>
                <li>[Domaines d'expertise]</li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA vers inscription */}
        <div className="max-w-3xl mx-auto text-center mt-16 pt-12 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Vous souhaitez vous former avec notre équipe ?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Découvrez notre programme de formation et inscrivez-vous à la prochaine session
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/programme"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Voir le programme
            </a>
            <a
              href="/inscription"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
            >
              S'inscrire
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
