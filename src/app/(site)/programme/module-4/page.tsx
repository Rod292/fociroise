'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Module4Page() {
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-primary-200">
                <li><Link href="/programme" className="hover:text-white transition-colors">Programme</Link></li>
                <li>/</li>
                <li className="text-white font-medium">Module 4</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent-gold/20 text-accent-gold text-sm font-semibold">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-gold text-primary-900 font-bold">04</span>
                Module avancé
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Module 4
              </h1>
              <p className="text-xl text-primary-200 max-w-3xl">
                Approfondissement et cas cliniques des participants
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Prérequis */}
          <motion.div
            className="bg-gradient-to-r from-accent-cream to-accent-gold/10 border-l-4 border-accent-gold rounded-r-2xl p-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-accent-gold-dark flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-primary-900 font-medium">
                Ce module est réservé aux praticiens ayant suivi la formation en 2024 ou avant et qui souhaitent approfondir leur connaissance sur la méthodologie proposée lors des 3 premiers modules.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-primary-50 to-primary-100 border-l-4 border-primary-600 rounded-r-2xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <p className="text-primary-900">
              Une partie sera réservée à un approfondissement « à la carte » en fonction des souhaits des participants.
            </p>
          </motion.div>

          {/* Cas à présenter */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
              Préparation requise pour les participants
            </h2>
            <p className="text-lg text-primary-700 mb-8">
              Chaque participant à ce Module 4 devra présenter un ou deux cas (en projet, en cours ou réalisés) commentés de la façon suivante :
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary-100 text-primary-700 mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                  Si le cas est en cours :
                </h3>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></span>
                    <span>Modèles d'étude, idéalement montés en articulateur et dont le décalage entre PIM et le chemin de fermeture a été évalué</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></span>
                    <span>Radiographie panoramique complétée, si nécessaire, par des radios long cône ou un cone-beam</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></span>
                    <span>Documents photographiques</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100"
                whileHover={{ y: -4 }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-gold/20 text-accent-gold-dark mb-4">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-display font-bold text-primary-900 mb-4">
                  Si le cas est déjà réalisé :
                </h3>
                <ul className="space-y-3 text-primary-700">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></span>
                    <span>Documents photographiques étape par étape</span>
                  </li>
                </ul>
              </motion.div>
            </div>

            <p className="text-lg text-primary-700 italic bg-gray-50 rounded-xl p-4">
              De mon côté, je vous présenterai des nouveaux cas personnels documentés que nous pourrons discuter.
            </p>
          </motion.div>

          {/* Programme */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white px-8 py-6 rounded-t-2xl">
              <h2 className="text-2xl font-display font-bold">Programme</h2>
            </div>
            <div className="bg-white p-8 rounded-b-2xl border-2 border-t-0 border-gray-100 shadow-lg">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Révision des connaissances</h3>
                  <p className="text-primary-700">Evaluer les caractéristiques occlusales de chaque patient.</p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-4">
                    Thématiques pouvant être abordées (en fonction de votre retour lors de l'inscription) :
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {[
                      'Prothèse sur parodonte affaibli',
                      'Comment passer du stade parodontal au stade implantaire en respectant la DVO et les critères fonctionnels ?',
                      'Gestion des béances',
                      'La gestion des dysfonctions oro-faciales et de la DVO dans les réalisations prothétiques',
                      'Les prothèses sur dents vivantes ; Inlays, Onlays, Attelles en U. Intérêt de la Contention ?',
                      'La méthodologie prothétique sur dents et implants ; Connexion ? Prothèse vissée ? scellée ?',
                      'Les résultats à long terme des traitements complexes',
                      'Erosion',
                      'Prothèse composite',
                      'Le numérique en occlusodontie',
                      'Utilisation de la butée incisive d\'Abjean en prothèse amovible',
                      'Comment transmettre les données fonctionnelles et de DVO à son prothésiste'
                    ].map((theme, index) => (
                      <div key={index} className="flex items-start gap-2 text-primary-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2 flex-shrink-0"></span>
                        <span className="text-sm">{theme}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Discussion des cas cliniques des participants</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Photos de diplômes */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">Galerie</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="/images/Module-4Diplomes.jpg"
                  alt="Remise de diplômes Module 4"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="/images/Module-4-Diplomes2.JPG"
                  alt="Remise de diplômes Module 4"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Navigation et CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-gray-200"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Link
              href="/programme/module-3"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-gold font-semibold transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Module 3
            </Link>
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold
                         bg-accent-gold text-primary-900 rounded-xl
                         hover:bg-accent-gold-light transition-all duration-300
                         shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              S'inscrire
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
