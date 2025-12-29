'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { contactInfo } from '@/config/navigation'
import InscriptionFormWizard from '@/components/InscriptionFormWizard'
import ModuleDatesDisplay from '@/components/ModuleDatesDisplay'

export default function InscriptionPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom py-16 sm:py-20 relative">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8
                            rounded-full border border-white/20 bg-white/10 backdrop-blur-sm
                            text-white text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"/>
              Rejoignez-nous
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
              Formulaire d'inscription
            </h1>
            <p className="text-xl text-primary-200 max-w-2xl mx-auto">
              Rejoignez notre formation occlusale continue et développez votre expertise
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Information compacte */}
          <motion.div
            className="bg-white rounded-2xl p-8 mb-8 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary-100 rounded-xl">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-xl font-display font-bold text-primary-900">Informations sur la formation</h2>
            </div>
            <div className="space-y-4 text-primary-700">
              <p className="leading-relaxed">
                La pratique de l'occlusion est enseignée progressivement en <strong className="text-primary-900">3 modules de 2 journées</strong>, étalés sur une année. Chaque étape comprend une explication théorique et une démonstration clinique ou pratique suivie de travaux pratiques.
              </p>
              <p className="leading-relaxed">
                Les modules sont limités à <strong className="text-primary-900">14 praticiens</strong> qui travaillent en binômes. <strong className="text-accent-gold-dark">Tarif par module : 1 100€</strong> (inscription, repas du midi, articulateur et gros matériel inclus).
              </p>
            </div>
          </motion.div>

          {/* Conditions et informations */}
          <motion.div
            className="bg-gradient-to-br from-primary-50 to-accent-cream border-l-4 border-accent-gold rounded-r-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-6 h-6 text-accent-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <h3 className="font-display font-bold text-primary-900">Conditions d'inscription</h3>
            </div>
            <div className="space-y-3 text-primary-700 text-sm">
              <p className="leading-relaxed">
                L'inscription ne sera définitive qu'à la réception du règlement du Module 1 (le chèque sera déposé en banque quinze jours avant la date du module).
              </p>
              <p className="leading-relaxed">
                Après réception du bulletin d'inscription, des renseignements complémentaires concernant le petit matériel personnel vous seront communiqués.
              </p>
              <p className="leading-relaxed">
                Sélectionnez les dates correspondant à un cycle complet de 3 modules. <strong className="text-primary-900">Si vous venez en groupe, un formulaire par participant est requis.</strong> Si une date n'est plus disponible, nous vous contacterons.
              </p>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div
            className="bg-white border-2 border-gray-100 rounded-2xl p-6 md:p-8 mb-12 shadow-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <InscriptionFormWizard />
          </motion.div>

          {/* Dates 2026 - Dynamique */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <ModuleDatesDisplay />
          </motion.div>

          {/* Nous contacter */}
          <motion.div
            className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white rounded-2xl p-8 mb-12 shadow-xl relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold">
                  Nous contacter
                </h2>
              </div>
              <p className="text-lg text-primary-200 mb-8">
                En cas de demande particulière, merci de nous contacter aux coordonnées suivantes :
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <a href={`mailto:${contactInfo.email}`} className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 border border-white/10 hover:border-white/30">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent-gold/20 rounded-lg group-hover:bg-accent-gold/30 transition-colors">
                      <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 mb-1">Email</p>
                      <p className="font-semibold text-sm">{contactInfo.email}</p>
                    </div>
                  </div>
                </a>
                <a href={`tel:${contactInfo.phone}`} className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-5 transition-all duration-300 border border-white/10 hover:border-white/30">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent-gold/20 rounded-lg group-hover:bg-accent-gold/30 transition-colors">
                      <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 mb-1">Téléphone</p>
                      <p className="font-semibold text-sm">{contactInfo.phoneDisplay}</p>
                    </div>
                  </div>
                </a>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-accent-gold/20 rounded-lg">
                      <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-primary-300 mb-1">Adresse</p>
                      <p className="font-semibold text-sm">{contactInfo.address}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Comment se rendre à la formation */}
          <motion.div
            className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-12 shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary-100 rounded-xl">
                <svg className="w-6 h-6 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900">
                Comment se rendre à la formation ?
              </h2>
            </div>

            <p className="text-lg text-primary-700 mb-8 leading-relaxed">
              Brest est une ville côtière située dans le Finistère, en Bretagne. Elle est connue pour ses ports de plaisance, ses forts militaires et son centre historique.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <motion.div
                className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-700 rounded-xl group-hover:bg-primary-800 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 640 512">
                      <path d="M381 114.9L186.1 41.8c-16.7-6.2-35.2-5.3-51.1 2.7L89.1 67.4C78 73 77.2 88.5 87.6 95.2l146.9 94.5L136 240 77.8 214.1c-8.7-3.9-18.8-3.7-27.3 .6L18.3 230.8c-9.3 4.7-11.8 16.8-5 24.7l73.1 85.3c6.1 7.1 15 11.2 24.3 11.2H248.4c5 0 9.9-1.2 14.3-3.4L535.6 212.2c46.5-23.3 82.5-63.3 100.8-112C645.9 75 627.2 48 600.2 48H542.8c-20.2 0-40.2 4.8-58.2 14L381 114.9zM0 480c0 17.7 14.3 32 32 32H608c17.7 0 32-14.3 32-32s-14.3-32-32-32H32c-17.7 0-32 14.3-32 32z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-900">En avion</h3>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Aéroport de Brest-Bretagne avec vols directs depuis Paris, Lyon, Marseille et Nantes. Navette tramway disponible (15 min en taxi recommandé).
                </p>
              </motion.div>

              <motion.div
                className="group bg-gradient-to-br from-accent-cream to-accent-gold/10 rounded-2xl p-6 border border-accent-gold/30 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-accent-gold rounded-xl group-hover:bg-accent-gold-dark transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 448 512">
                      <path d="M96 0C43 0 0 43 0 96V352c0 48 35.2 87.7 81.1 94.9l-46 46C28.1 499.9 33.1 512 43 512H82.7c8.5 0 16.6-3.4 22.6-9.4L160 448H288l54.6 54.6c6 6 14.1 9.4 22.6 9.4H405c10 0 15-12.1 7.9-19.1l-46-46c46-7.1 81.1-46.9 81.1-94.9V96c0-53-43-96-96-96H96zM64 96c0-17.7 14.3-32 32-32H352c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V96zM224 288a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-900">En train</h3>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Gare SNCF de Brest. Paris-Montparnasse (3h25), Rennes (2h), Nantes et Lorient. À 850m de nos locaux en centre-ville.
                </p>
              </motion.div>

              <motion.div
                className="group bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 border border-primary-200 hover:shadow-lg transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary-600 rounded-xl group-hover:bg-primary-700 transition-colors">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M135.2 117.4L109.1 192H402.9l-26.1-74.6C372.3 104.6 360.2 96 346.6 96H165.4c-13.6 0-25.7 8.6-30.2 21.4zM39.6 196.8L74.8 96.3C88.3 57.8 124.6 32 165.4 32H346.6c40.8 0 77.1 25.8 90.6 64.3l35.2 100.5c23.2 9.6 39.6 32.5 39.6 59.2V400v48c0 17.7-14.3 32-32 32H448c-17.7 0-32-14.3-32-32V400H96v48c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V400 256c0-26.7 16.4-49.6 39.6-59.2zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm288 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"/>
                    </svg>
                  </div>
                  <h3 className="text-lg font-display font-bold text-primary-900">En voiture</h3>
                </div>
                <p className="text-primary-700 text-sm leading-relaxed">
                  Autoroute A11 (Paris/Nantes) ou route nationale 12 (Rennes/Quimper). Parkings publics en centre-ville.
                </p>
              </motion.div>
            </div>

            <div className="bg-gradient-to-r from-primary-50 to-accent-cream rounded-xl p-5 border-l-4 border-accent-gold">
              <p className="text-primary-700">
                <strong className="text-primary-900">Bon à savoir :</strong> Brest est une ville agréable à visiter, avec de nombreux sites touristiques à découvrir. N'hésitez pas à prendre le temps de vous promener dans le centre-ville et de découvrir ses rues piétonnes, ses boutiques et ses restaurants. Bon voyage !
              </p>
            </div>
          </motion.div>

          {/* Hôtels à proximité */}
          <motion.div
            className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white rounded-2xl p-8 shadow-xl text-center relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent-gold rounded-full blur-3xl"></div>
            </div>

            <div className="relative">
              <div className="inline-flex items-center justify-center gap-3 mb-4">
                <div className="p-3 bg-white/10 rounded-xl backdrop-blur-sm">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h2 className="text-2xl sm:text-3xl font-display font-bold">
                  Hôtels à proximité
                </h2>
              </div>
              <p className="text-primary-200 mb-8 max-w-md mx-auto">
                Trouvez l'hébergement idéal pour votre séjour à Brest
              </p>
              <a
                href="https://www.google.fr/travel/search?q=hotels%20brest&ap=SAFoAQ&ts=CAESCgoCCAMKAggDEAAaIAoCGgASGhIUCgcI5w8QARgaEgcI5w8QARgbGAEyAhAAKgkKBToDRVVSGgA&g2lb=2502548%2C2503771%2C2503781%2C4258168%2C4284970%2C4306835%2C4718358%2C4723331%2C4731329%2C4754388%2C4757164%2C4814050%2C4861688%2C4864715%2C4867855%2C4874190%2C4879519%2C4886082%2C4886480%2C4893075%2C4902277%2C4903082%2C4906050%2C4910829%2C4912820%2C4920622%2C4926165%2C4928676%2C4928680%2C4929666&qs=CAE4Bg&ved=0CAAQ5JsGahcKEwjQ8qbE_aP8AhUAAAAAHQAAAAAQJQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold
                           bg-accent-gold text-primary-900 rounded-xl
                           hover:bg-accent-gold-light transition-all duration-300
                           shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                Découvrir les Hôtels
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
