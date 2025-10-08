import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Nos diplômés',
  description: 'Depuis 2002, plus de 1000 apprenants ont suivi notre formation occlusale continue en France et en Europe.',
}

export default function NosDiplomesPage() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-6xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              La carte des diplômés depuis 2002
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Depuis 2002, notre formation occlusale continue a été suivie par plus de <strong className="text-primary-700">1000 apprenants</strong> en France et en Europe.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Nous sommes fiers de pouvoir offrir cette formation, autant aux chirurgiens-dentistes libéraux, qu'aux orthodontistes et qu'aux prothésistes dentaires. Nous croyons que cette formation, basée sur des cas cliniques à très long terme et des travaux pratiques, permettra à tous d'assurer une meilleure prise en charge de l'occlusion en pratique clinique.
              </p>
            </div>
          </div>

          {/* Carte Google Maps */}
          <div className="mb-12">
            <div className="rounded-xl overflow-hidden shadow-lg" style={{ width: '100%', overflow: 'hidden' }}>
              <iframe
                src="https://www.google.com/maps/d/u/0/embed?mid=1b9BpH2CUfwAoL3p2gD-TIPRAKHKFumQ&ehbc=2E312F"
                width="100%"
                height="600"
                style={{ border: 0, marginTop: '-60px' }}
                loading="lazy"
                title="Carte des diplômés FOC Iroise"
              />
            </div>
          </div>

          {/* Statistiques */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
              <p className="text-5xl font-bold text-primary-600 mb-3">+1000</p>
              <p className="text-gray-900 font-semibold text-lg">Apprenants formés</p>
              <p className="text-gray-600 text-sm mt-2">Depuis 2002</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border border-blue-200">
              <p className="text-5xl font-bold text-blue-600 mb-3">3</p>
              <p className="text-gray-900 font-semibold text-lg">Profils de praticiens</p>
              <p className="text-gray-600 text-sm mt-2">Dentistes, orthodontistes, prothésistes</p>
            </div>
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border border-green-200">
              <p className="text-5xl font-bold text-green-600 mb-3">20+</p>
              <p className="text-gray-900 font-semibold text-lg">Années d'expérience</p>
              <p className="text-gray-600 text-sm mt-2">Formation continue depuis 2002</p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Vous souhaitez rejoindre nos diplômés ?
            </h2>
            <p className="text-primary-100 text-lg mb-8 max-w-2xl mx-auto">
              Développez vos compétences en occlusion avec une formation reconnue depuis plus de 20 ans
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/programme"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white text-primary-700 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
              >
                Découvrir le programme
              </Link>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold bg-white/10 text-white border-2 border-white rounded-lg hover:bg-white/20 transition-colors backdrop-blur"
              >
                S'inscrire maintenant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
