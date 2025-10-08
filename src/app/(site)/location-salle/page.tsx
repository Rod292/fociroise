import type { Metadata } from 'next'
import Link from 'next/link'
import { contactInfo } from '@/config/navigation'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Location de salle',
  description: 'Location de salle de formation à Brest - FOC Iroise. Espace équipé pour formations médicales et dentaires.',
}

/**
 * Page Location de salle
 * Informations sur la location de l'espace de formation
 */
export default function LocationSallePage() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Location de salle
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Un espace de formation moderne et équipé à Brest
            </p>
          </div>

          {/* Présentation */}
          <div className="prose prose-lg prose-blue max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Notre espace de formation
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              FOC Iroise met à disposition sa salle de formation équipée pour l'organisation
              de formations médicales, dentaires ou de réunions professionnelles à Brest.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Équipements disponibles
            </h3>

            <ul className="space-y-3 mb-8">
              <li>[Capacité d'accueil]</li>
              <li>[Équipements audiovisuels]</li>
              <li>[Matériel technique]</li>
              <li>[Services inclus]</li>
              <li>[Accessibilité]</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Configurations possibles
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Notre salle peut être configurée selon vos besoins :
            </p>

            <ul className="space-y-2 mb-8">
              <li>Configuration formation (tables et chaises)</li>
              <li>Configuration atelier pratique</li>
              <li>Configuration conférence</li>
              <li>Configuration séminaire</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Tarifs et disponibilités
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              Les tarifs de location varient selon la durée et la configuration souhaitée.
              Contactez-nous pour connaître nos disponibilités et recevoir un devis personnalisé.
            </p>
          </div>

          {/* Contact */}
          <div className="bg-primary-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Demande de renseignements
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Pour toute demande de location ou information complémentaire, contactez-nous :
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-primary-600 hover:text-primary-700 text-lg font-medium"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-4">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-primary-600 hover:text-primary-700 text-lg font-medium"
                >
                  {contactInfo.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Localisation */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Localisation
            </h3>
            <p className="text-lg text-gray-700 mb-4">
              <strong>Adresse :</strong> {contactInfo.address}
            </p>
            <p className="text-gray-600">
              [Détails d'accès : parking, transports en commun, etc. - à ajouter]
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
