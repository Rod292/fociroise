import type { Metadata } from 'next'
import { contactInfo } from '@/config/navigation'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Location de salle de réunion à Brest',
  description: 'Louez une salle de réunion en hyper centre ville de Brest. Salle équipée pour 20 personnes avec TV 105", visioconférence, terrasse vue mer.',
}

export default function LocationSallePage() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-5xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Louez une salle de réunion en hyper centre ville de Brest
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              En hyper centre ville de Brest, FOC Iroise Brest met à la disposition des professionnels son espace de travail
            </p>
          </div>

          {/* Photo placeholder */}
          <div className="mb-12 bg-gray-100 rounded-xl h-96 flex items-center justify-center border border-gray-200">
            <p className="text-gray-500 italic">Photo de la salle à venir</p>
          </div>

          {/* Présentation */}
          <div className="mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Une salle de formation disponible à tout moment et pour la durée souhaitée dans des <strong className="text-primary-700">locaux neufs, PMR, équipés et fonctionnels</strong>
            </p>
          </div>

          {/* Équipements */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Équipement et atouts
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: '📺', text: 'TV 105" pouces' },
                { icon: '💻', text: 'Système de visioconférence' },
                { icon: '☕', text: 'Machine à café' },
                { icon: '🪑', text: '20 places assises' },
                { icon: '🧊', text: 'Réfrigérateur' },
                { icon: '📡', text: 'Wifi haut débit ou filaire' },
                { icon: '📝', text: 'Tableau blanc' },
                { icon: '🌊', text: 'Terrasse vue mer et toits de Brest' },
                { icon: '♿', text: 'Accessible PMR' },
                { icon: '🚉', text: 'Proximité gare à 5 minutes' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 bg-gray-50 rounded-lg p-4 border border-gray-200">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-gray-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tarifs */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Tarifs</h2>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
                <p className="text-sm text-primary-100 mb-2">Demi-journée</p>
                <p className="text-4xl font-bold mb-3">265€ <span className="text-lg font-normal">TTC</span></p>
                <div className="space-y-1 text-sm text-primary-100">
                  <p>• 8h30 - 12h30</p>
                  <p>• 14h - 18h</p>
                  <p>• 18h30 - 22h30</p>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur rounded-lg p-6 border border-white/20">
                <p className="text-sm text-primary-100 mb-2">Journée complète</p>
                <p className="text-4xl font-bold mb-3">335€ <span className="text-lg font-normal">TTC</span></p>
                <div className="space-y-1 text-sm text-primary-100">
                  <p>• 8h30 - 18h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="bg-gray-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Devis et Réservations par Téléphone
            </h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <a href={`mailto:${contactInfo.email}`} className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Email</p>
                  <p className="text-primary-600 font-medium">{contactInfo.email}</p>
                </div>
              </a>

              <a href={`tel:${contactInfo.phone}`} className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg border border-gray-200 hover:border-primary-500 transition-colors">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Téléphone</p>
                  <p className="text-primary-600 font-medium">{contactInfo.phoneDisplay}</p>
                </div>
              </a>

              <div className="flex flex-col items-center gap-3 p-4 bg-white rounded-lg border border-gray-200">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-1">Adresse</p>
                  <p className="text-gray-700 font-medium text-sm">{contactInfo.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
