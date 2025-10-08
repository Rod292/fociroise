import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Formateurs',
  description: 'Découvrez l\'équipe de formateurs FOC Iroise : José Abjean, Jacques-Olivier Pers et Pascale Bellon.',
}

/**
 * Page Formateurs - Équipe pédagogique FOC Iroise
 */
export default function FormateursPage() {
  const formateurs = [
    {
      name: 'José ABJEAN',
      title: 'Professeur émérite',
      image: '/images/abjean.png',
      bioUrl: '/formateurs/jose-abjean',
    },
    {
      name: 'Jacques-Olivier PERS',
      title: 'Professeur de classe exceptionnelle',
      image: '/images/pers.png',
      bioUrl: '/formateurs/jacques-olivier-pers',
    },
    {
      name: 'Pascale BELLON',
      title: 'Docteur en chirurgie dentaire',
      image: '/images/bellon.png',
      bioUrl: '/formateurs/pascale-bellon',
    },
  ]

  return (
    <div className="bg-white min-h-screen">
      <div className="container-custom py-20 sm:py-28">
        {/* Titre de la page */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Notre équipe
          </h1>
        </div>

        {/* Grille des formateurs */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {formateurs.map((formateur) => (
            <div key={formateur.name} className="text-center group">
              {/* Photo */}
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-gray-100">
                <Image
                  src={formateur.image}
                  alt={formateur.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Nom */}
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {formateur.name}
              </h2>

              {/* Titre */}
              <p className="text-lg text-gray-600 mb-6 capitalize">
                {formateur.title}
              </p>

              {/* Bouton Voir la Bio */}
              <Link
                href={formateur.bioUrl}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
              >
                Voir la Bio
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
