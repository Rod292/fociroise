'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NosDiplomesPage() {
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
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8
                            rounded-full border border-primary-200 bg-white/80 backdrop-blur-sm
                            text-primary-700 text-sm font-medium shadow-sm">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"/>
              Depuis 2002
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
              La carte des diplômés
            </h1>
            <p className="text-xl text-primary-700 leading-relaxed mb-6 max-w-3xl mx-auto">
              Depuis 2002, notre formation occlusale continue a été suivie par plus de <strong className="text-primary-900">1000 apprenants</strong> en France et en Europe.
            </p>
            <p className="text-lg text-primary-600 leading-relaxed max-w-3xl mx-auto">
              Nous sommes fiers de pouvoir offrir cette formation, autant aux chirurgiens-dentistes libéraux, qu'aux orthodontistes et qu'aux prothésistes dentaires.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Carte Google Maps */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-200 via-accent-gold/30 to-primary-200 rounded-3xl blur-xl opacity-40"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white" style={{ width: '100%', overflow: 'hidden' }}>
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
          </motion.div>

          {/* Statistiques */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <motion.div
              className="group text-center p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <p className="text-5xl font-display font-bold text-accent-gold mb-2">+1000</p>
              <p className="text-primary-900 font-semibold text-lg">Apprenants formés</p>
              <p className="text-primary-600 text-sm mt-2">Depuis 2002</p>
            </motion.div>

            <motion.div
              className="group text-center p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent-cream to-accent-gold/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-accent-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <p className="text-5xl font-display font-bold text-accent-gold mb-2">3</p>
              <p className="text-primary-900 font-semibold text-lg">Profils de praticiens</p>
              <p className="text-primary-600 text-sm mt-2">Dentistes, orthodontistes, prothésistes</p>
            </motion.div>

            <motion.div
              className="group text-center p-8 bg-white rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-5xl font-display font-bold text-accent-gold mb-2">20+</p>
              <p className="text-primary-900 font-semibold text-lg">Années d'expérience</p>
              <p className="text-primary-600 text-sm mt-2">Formation continue depuis 2002</p>
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.section
            className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 rounded-2xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl"></div>
            </div>

            <div className="relative p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white mb-4">
                Vous souhaitez rejoindre nos diplômés ?
              </h2>
              <p className="text-xl text-primary-200 mb-8 max-w-2xl mx-auto">
                Développez vos compétences en occlusion avec une formation reconnue depuis plus de 20 ans
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/programme"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold
                             bg-white text-primary-900 rounded-xl
                             hover:bg-gray-100 transition-all duration-300
                             shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Découvrir le programme
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/inscription"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold
                             bg-accent-gold text-primary-900 rounded-xl
                             hover:bg-accent-gold-light transition-all duration-300
                             shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  S'inscrire maintenant
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
