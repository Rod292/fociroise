import type { Metadata } from 'next'
import Link from 'next/link'
import { contactInfo } from '@/config/navigation'
import InscriptionFormWizard from '@/components/InscriptionFormWizard'
import ModuleDatesDisplay from '@/components/ModuleDatesDisplay'

export const revalidate = 0

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
            <InscriptionFormWizard />
          </div>

          {/* Dates 2026 - Dynamique */}
          <ModuleDatesDisplay />

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
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/>
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
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM224 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
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
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
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
