'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const modules = [
  {
    number: '01',
    title: 'Module 1',
    subtitle: 'Savoir observer et analyser l\'occlusion individuelle',
    href: '/programme/module-1',
  },
  {
    number: '02',
    title: 'Module 2',
    subtitle: 'Ajustement occlusal et prothèse fixée',
    href: '/programme/module-2',
  },
  {
    number: '03',
    title: 'Module 3',
    subtitle: 'Prothèse amovible et implantologie',
    href: '/programme/module-3',
  },
  {
    number: '04',
    title: 'Module 4',
    subtitle: 'Perfectionnement et cas complexes',
    href: '/programme/module-4',
  },
]

export default function ProgrammePage() {
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
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-5 py-2.5 mb-8
                              rounded-full border border-primary-200 bg-white/80 backdrop-blur-sm
                              text-primary-700 text-sm font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"/>
                Formation progressive
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 mb-6">
                Programme de formation
              </h1>
            </div>

            {/* Info cards */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary-100 text-center">
                <div className="text-3xl font-display font-bold text-accent-gold mb-1">3</div>
                <div className="text-sm text-primary-600">Modules principaux</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary-100 text-center">
                <div className="text-3xl font-display font-bold text-accent-gold mb-1">2</div>
                <div className="text-sm text-primary-600">Jours par module</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-5 border border-primary-100 text-center">
                <div className="text-3xl font-display font-bold text-accent-gold mb-1">14</div>
                <div className="text-sm text-primary-600">Praticiens max</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <p className="text-lg text-primary-700 leading-relaxed mb-4">
                La pratique de l'occlusion est enseignée progressivement en <strong className="text-primary-900">3 modules de 2 journées</strong>, étalés sur une année.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed mb-4">
                Chaque étape comprend une explication théorique et une démonstration clinique ou pratique suivie de travaux pratiques.
              </p>
              <p className="text-lg text-primary-700 leading-relaxed">
                Les modules sont limités à <strong className="text-primary-900">14 praticiens</strong> qui travaillent en binômes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="container-custom py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-display font-bold text-primary-900 mb-4">
              Parcours de formation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-gold mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {modules.map((module, index) => (
              <motion.div
                key={module.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={module.href}
                  className="group relative block bg-white border-2 border-gray-100 rounded-2xl p-6
                             hover:border-primary-200 hover:shadow-xl transition-all duration-300"
                >
                  {/* Numéro */}
                  <span className="absolute -top-4 -left-2 w-12 h-12 flex items-center justify-center
                                   rounded-xl bg-primary-700 text-white font-display font-bold
                                   group-hover:bg-accent-gold transition-colors shadow-lg">
                    {module.number}
                  </span>

                  <div className="pt-4">
                    <h3 className="text-xl font-display font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-primary-600 text-sm leading-relaxed mb-4">
                      {module.subtitle}
                    </p>

                    <div className="flex items-center gap-2 text-primary-600 font-medium group-hover:text-accent-gold transition-colors">
                      <span>Découvrir</span>
                      <svg
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Module Prothésiste */}
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/programme/module-prothesiste"
              className="group block bg-gradient-to-br from-primary-50 to-accent-cream border-2 border-primary-100
                         rounded-2xl p-6 hover:border-primary-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 mb-3 rounded-full bg-accent-gold/20 text-accent-gold-dark text-xs font-semibold">
                    Module spécifique
                  </div>
                  <h3 className="text-xl font-display font-bold text-primary-900 mb-2">
                    Module Prothésiste
                  </h3>
                  <p className="text-primary-600 text-sm">
                    Formation dédiée aux prothésistes dentaires
                  </p>
                </div>
                <svg
                  className="w-8 h-8 text-primary-400 group-hover:text-accent-gold group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          </motion.div>
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
              Prêt à vous former ?
            </h2>
            <p className="text-xl text-primary-200 mb-8">
              Tarif par module : <span className="font-bold text-accent-gold">1 100€</span>
              <br/>
              <span className="text-sm">(inscription, repas du midi, articulateur et gros matériel inclus)</span>
            </p>
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
          </motion.div>
        </div>
      </section>
    </div>
  )
}
