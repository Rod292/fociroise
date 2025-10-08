import type { Metadata } from 'next'
import { contactInfo } from '@/config/navigation'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Inscription',
  description: 'Inscrivez-vous à la formation occlusale continue FOC Iroise à Brest. Informations pratiques et modalités d\'inscription.',
}

/**
 * Page Inscription & Contact
 * Informations pratiques et formulaire de contact (à implémenter selon besoin)
 */
export default function InscriptionPage() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Inscription & Accès
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Rejoignez notre prochaine session de formation en occlusion dentaire
            </p>
          </div>

          {/* Informations de contact */}
          <div className="bg-primary-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Comment nous contacter
            </h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
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
                <div>
                  <p className="font-medium text-gray-900">Email</p>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-primary-600 hover:text-primary-700 text-lg"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
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
                <div>
                  <p className="font-medium text-gray-900">Téléphone</p>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-primary-600 hover:text-primary-700 text-lg"
                  >
                    {contactInfo.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <svg
                  className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div>
                  <p className="font-medium text-gray-900">Localisation</p>
                  <p className="text-gray-700">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Informations pratiques */}
          <div className="prose prose-lg prose-blue max-w-none mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Modalités d'inscription
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed">
              Pour vous inscrire à l'un de nos modules de formation, contactez-nous par email ou par téléphone.
              Nous vous communiquerons les dates des prochaines sessions et les modalités pratiques.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Informations pratiques
            </h3>

            <ul className="space-y-3">
              <li>
                <strong>Public concerné :</strong> Chirurgiens-dentistes (modules 1 à 4) et prothésistes dentaires
                (module prothésiste)
              </li>
              <li>
                <strong>Lieu de formation :</strong> Brest, Finistère
              </li>
              <li>
                <strong>Pédagogie :</strong> Alternance théorie, démonstrations et travaux pratiques
              </li>
              <li>
                <strong>Nombre de participants :</strong> Groupes limités pour garantir un enseignement personnalisé
              </li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
              Prise en charge
            </h3>

            <p className="text-lg text-gray-700 leading-relaxed">
              La formation peut être prise en charge par les organismes de formation continue professionnelle.
              Nous vous accompagnons dans vos démarches administratives.
            </p>
          </div>

          {/* CTA vers programme */}
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Vous hésitez encore ?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Consultez le programme détaillé de nos modules de formation
            </p>
            <a
              href="/programme"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              Voir le programme complet
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
