import type { Metadata } from 'next'
import Link from 'next/link'
import { contactInfo } from '@/config/navigation'
import InscriptionForm from '@/components/InscriptionForm'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Inscription',
  description: 'Inscrivez-vous à la formation occlusale continue FOC Iroise à Brest. Informations pratiques et modalités d\'inscription.',
}

export default function InscriptionPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="container-custom py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              Formulaire d'inscription
            </h1>
            <p className="text-lg text-primary-100">
              Rejoignez notre formation occlusale continue
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          {/* Information compacte */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-gray-700">
              <p className="leading-relaxed">
                La pratique de l'occlusion est enseignée progressivement en <strong className="text-primary-700">3 modules de 2 journées</strong>, étalés sur une année. Chaque étape comprend une explication théorique et une démonstration clinique ou pratique suivie de travaux pratiques.
              </p>
              <p className="leading-relaxed">
                Les modules sont limités à <strong className="text-primary-700">14 praticiens</strong> qui travaillent en binômes. <strong>Tarif par module : 1 100€</strong> (inscription, repas du midi, articulateur et gros matériel inclus).
              </p>
            </div>
          </div>

          {/* Conditions et informations */}
          <div className="bg-blue-50 border-l-4 border-blue-400 rounded-r-xl p-5 mb-8">
            <div className="space-y-3 text-gray-700 text-sm">
              <p className="leading-relaxed">
                <strong className="text-blue-900">Conditions d'inscription :</strong> L'inscription ne sera définitive qu'à la réception du règlement du Module 1 (le chèque sera déposé en banque quinze jours avant la date du module).
              </p>
              <p className="leading-relaxed">
                Après réception du bulletin d'inscription, des renseignements complémentaires concernant le petit matériel personnel vous seront communiqués.
              </p>
              <p className="leading-relaxed">
                Sélectionnez les dates correspondant à un cycle complet de 3 modules. <strong>Si vous venez en groupe, un formulaire par participant est requis.</strong> Si une date n'est plus disponible, nous vous contacterons.
              </p>
            </div>
          </div>

          {/* Formulaire */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 mb-12">
            <InscriptionForm />
          </div>

          {/* Dates 2026 */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">
                Dates 2026
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-bold">1</span>
                  Module 1
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    16 & 17 janvier
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    30 & 31 janvier
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    13 & 14 février
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-bold">2</span>
                  Module 2
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    13 & 14 mars
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    27 & 28 mars
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    10 & 11 avril
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
                <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-bold">3</span>
                  Module 3
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    11 & 12 septembre
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    25 & 26 septembre
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    9 & 10 octobre
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 bg-gray-600 text-white rounded-full text-sm font-bold">4</span>
                  Module 4
                </h3>
                <p className="text-gray-600 italic">Sur demande</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 md:col-span-2 lg:col-span-2">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
                  </svg>
                  Module Prothésiste
                </h3>
                <p className="text-gray-700">27 & 28 février</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6">
              <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
                <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Sessions exceptionnelles 2026 à Guérande (44)
              </h3>
              <div className="bg-amber-100 border border-amber-300 rounded-lg p-4 mb-4">
                <p className="text-sm text-amber-900 font-medium">
                  ⚠️ Il est impossible de panacher ces modules avec les sessions brestoises
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-1">Module 1</p>
                  <p className="text-gray-700">24 & 25 avril</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-1">Module 2</p>
                  <p className="text-gray-700">12 & 13 juin</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-amber-200">
                  <p className="font-semibold text-amber-900 mb-1">Module 3</p>
                  <p className="text-gray-700">23 & 24 octobre</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nous contacter */}
          <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white rounded-xl p-8 mb-12 shadow-lg">
            <div className="flex items-center gap-3 mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h2 className="text-3xl font-bold">
                Nous contacter
              </h2>
            </div>
            <p className="text-lg text-primary-100 mb-6">
              En cas de demande particulière, merci de nous contacter aux coordonnées suivantes :
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <a href={`mailto:${contactInfo.email}`} className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-4 transition-colors border border-white/20">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="text-sm text-primary-100">Email</p>
                    <p className="font-semibold">{contactInfo.email}</p>
                  </div>
                </div>
              </a>
              <a href={`tel:${contactInfo.phone}`} className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-lg p-4 transition-colors border border-white/20">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="text-sm text-primary-100">Téléphone</p>
                    <p className="font-semibold">{contactInfo.phoneDisplay}</p>
                  </div>
                </div>
              </a>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-primary-100">Adresse</p>
                    <p className="font-semibold">{contactInfo.address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comment se rendre à la formation */}
          <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              <h2 className="text-3xl font-bold text-gray-900">
                Comment se rendre à la formation?
              </h2>
            </div>

            <p className="text-lg text-gray-700 mb-8">
              Brest est une ville côtière située dans le Finistère, en Bretagne. Elle est connue pour ses ports de plaisance, ses forts militaires et son centre historique. Si vous souhaitez vous rendre à Brest, voici quelques options pour y arriver:
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-900">En avion</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Aéroport de Brest-Bretagne avec vols directs depuis Paris, Lyon, Marseille et Nantes. Navette tramway disponible (15 min en taxi recommandé).
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-green-600 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-green-900">En train</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Gare SNCF de Brest. Paris-Montparnasse (3h25), Rennes (2h), Nantes et Lorient. À 850m de nos locaux en centre-ville.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-purple-900">En voiture</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Autoroute A11 (Paris/Nantes) ou route nationale 12 (Rennes/Quimper). Parkings publics en centre-ville.
                </p>
              </div>
            </div>

            <p className="text-gray-700 bg-gray-50 rounded-lg p-4 border-l-4 border-primary-600">
              <strong>Bon à savoir :</strong> Brest est une ville agréable à visiter, avec de nombreux sites touristiques à découvrir. N'hésitez pas à prendre le temps de vous promener dans le centre-ville et de découvrir ses rues piétonnes, ses boutiques et ses restaurants. Bon voyage !
            </p>
          </div>

          {/* Hôtels à proximité */}
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl p-8 shadow-lg text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              <h2 className="text-3xl font-bold">
                Hôtels à proximité
              </h2>
            </div>
            <p className="text-gray-300 mb-6">
              Trouvez l'hébergement idéal pour votre séjour à Brest
            </p>
            <a
              href="https://www.google.fr/travel/search?q=hotels%20brest&ap=SAFoAQ&ts=CAESCgoCCAMKAggDEAAaIAoCGgASGhIUCgcI5w8QARgaEgcI5w8QARgbGAEyAhAAKgkKBToDRVVSGgA&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4306835%2C4718358%2C4723331%2C4731329%2C4754388%2C4757164%2C4814050%2C4861688%2C4864715%2C4867855%2C4874190%2C4879519%2C4886082%2C4886480%2C4893075%2C4902277%2C4903082%2C4906050%2C4910829%2C4912820%2C4920622%2C4926165%2C4928676%2C4928680%2C4929666&qs=CAE4Bg&ved=0CAAQ5JsGahcKEwjQ8qbE_aP8AhUAAAAAHQAAAAAQJQ"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              Découvrir les Hôtels
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
