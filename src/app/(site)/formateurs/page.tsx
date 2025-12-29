'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

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

export default function FormateursPage() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-cream">
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(15)].map((_, i) => (
              <line key={i} x1="0" y1={i * 7} x2="100" y2={i * 7}
                    stroke="currentColor" strokeWidth="0.1" className="text-primary-900"/>
            ))}
          </svg>
        </div>

        <div className="container-custom py-20 sm:py-28 relative">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8
                            rounded-full border border-primary-200 bg-white/80 backdrop-blur-sm
                            text-primary-700 text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"/>
              Expertise reconnue
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
              Notre équipe
            </h1>
            <p className="text-xl text-primary-600 leading-relaxed">
              Des praticiens expérimentés dévoués à votre réussite
            </p>
          </motion.div>
        </div>
      </section>

      {/* Grille des formateurs */}
      <section className="container-custom py-20 sm:py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {formateurs.map((formateur, index) => (
            <motion.div
              key={formateur.name}
              className="text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              {/* Photo avec effet */}
              <div className="relative mb-8">
                <div className="absolute -inset-3 bg-gradient-to-br from-primary-100 to-primary-50
                                rounded-2xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute -inset-3 bg-gradient-to-br from-accent-gold/10 to-transparent
                                rounded-2xl rotate-1 group-hover:rotate-0 transition-transform duration-500" />
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-xl">
                  <Image
                    src={formateur.image}
                    alt={formateur.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Nom */}
              <h2 className="text-2xl font-display font-bold text-primary-900 mb-2">
                {formateur.name}
              </h2>

              {/* Titre */}
              <p className="text-lg text-primary-600 mb-6">
                {formateur.title}
              </p>

              {/* Bouton Voir la Bio */}
              <Link
                href={formateur.bioUrl}
                className="inline-flex items-center gap-2 px-6 py-3 text-base font-semibold
                           text-primary-700 border-2 border-primary-200 rounded-xl
                           hover:border-accent-gold hover:text-accent-gold-dark
                           bg-white/80 backdrop-blur-sm
                           transition-all duration-300 group/btn"
              >
                Voir la Bio
                <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom py-16 sm:py-20 relative">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-6">
              Rejoignez notre formation
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Développez vos compétences en occlusion avec une équipe d'experts reconnue
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold
                           text-primary-900 bg-accent-gold rounded-xl
                           hover:bg-accent-gold-light transition-all duration-300
                           shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                S'inscrire maintenant
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/programme"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold
                           text-white border-2 border-white/30 rounded-xl
                           hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Découvrir le programme
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
