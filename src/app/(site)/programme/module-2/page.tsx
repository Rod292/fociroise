'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Module2Page() {
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
                <li className="text-white font-medium">Module 2</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent-gold/20 text-accent-gold text-sm font-semibold">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-gold text-primary-900 font-bold">02</span>
                Deuxième module
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Savoir traiter
              </h1>
              <p className="text-xl text-primary-200 max-w-3xl">
                Maîtriser l'ajustement occlusal, la butée incisive d'Abjean et la plaque occlusale
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Prérequis */}
          <motion.div
            className="bg-gradient-to-r from-accent-cream to-accent-gold/10 border-l-4 border-accent-gold rounded-r-2xl p-6 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">
              <svg className="w-6 h-6 text-accent-gold-dark flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-primary-900 font-semibold">
                <strong>Prérequis :</strong> Ce module est réservé aux participants ayant validé le module 1.
              </p>
            </div>
          </motion.div>

          {/* Objectifs */}
          <motion.div
            className="bg-gradient-to-br from-primary-50 to-accent-cream rounded-2xl p-8 mb-12 border border-primary-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h2 className="text-2xl font-display font-bold text-primary-900 mb-6">
              Le module 2 répond aux objectifs suivants :
            </h2>
            <ul className="space-y-4">
              {[
                'Savoir utiliser la butée incisive d\'Abjean',
                'Maîtriser le réglage de la POA',
                'Maîtriser l\'ajustement occlusal',
                'Quid de la DVO, puis-je l\'augmenter sans risque ?',
                'Savoir réaliser une technique de contention parodontale respectant l\'occlusion de son patient : l\'attelle en U d\'Abjean',
                'Apprendre à transmettre les données occlusales de son patient à son prothésiste'
              ].map((objectif, index) => (
                <motion.li
                  key={index}
                  className="flex gap-4 items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.05 }}
                >
                  <span className="w-6 h-6 rounded-full bg-accent-gold flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-primary-900" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-primary-700 leading-relaxed">{objectif}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Programme Jour 1 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white px-8 py-6 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-gold text-primary-900 font-display font-bold text-xl">1</span>
                <div>
                  <h2 className="text-2xl font-display font-bold">Jour 1</h2>
                  <p className="text-primary-200 mt-1">Révision et ajustement occlusal</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-2xl border-2 border-t-0 border-gray-100 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Révision des connaissances acquises</h3>
                  <p className="text-primary-700">Suite au module 1 et application pratique</p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">L'ajustement occlusal sans changement de P.I.M.</h3>
                  <p className="text-primary-700 mb-3">Réaliser un ajustement occlusal étape par étape :</p>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li><strong>Étape 1 :</strong> Recherche d'un contact prématuré sur le chemin de fermeture pour chaque participant</li>
                    <li>Les autres étapes (l'ajustement occlusal en P.I.M., rétrusion, latéralité et propulsion) sont réalisées par les participants sur des fiches pédagogiques et objectivées par la vidéo projection d'un cas clinique sur parodonte affaibli</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Savoir réaliser une contention parodontale</h3>
                  <p className="text-primary-700 mb-3">L'attelle en U d'Abjean - Respecter les paramètres occlusaux de son patient :</p>
                  <ul className="list-disc list-inside text-primary-700 space-y-1 ml-4">
                    <li>La méthodologie de l'attelle en U sera explicitée et objectivée par la vidéo</li>
                    <li>Les indications de l'attelle en U seront illustrées par de nombreux cas cliniques</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Étude des cas présentés par les participants</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Images Module 2 */}
          <motion.div
            className="mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module2-1.png"
                  alt="Formation Module 2 - Ajustement occlusal"
                  width={363}
                  height={292}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module2-2.png"
                  alt="Formation Module 2 - Plaque occlusale"
                  width={557}
                  height={366}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module2-3.png"
                  alt="Formation Module 2 - Travaux pratiques"
                  width={857}
                  height={566}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Programme Jour 2 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white px-8 py-6 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-gold text-primary-900 font-display font-bold text-xl">2</span>
                <div>
                  <h2 className="text-2xl font-display font-bold">Jour 2</h2>
                  <p className="text-primary-200 mt-1">Plaque occlusale et DVO</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-2xl border-2 border-t-0 border-gray-100 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">La plaque occlusale d'Abjean (POA)</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Les participants apportent leur plaque occlusale (réalisée par leur laboratoire)</li>
                    <li>Description des techniques de réalisation d'une plaque occlusale d'Abjean au laboratoire de prothèse (physique ou numérique)</li>
                    <li>Démonstration d'équilibration d'une POA</li>
                    <li>Équilibration de la POA par les participants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Quid de la DVO, puis-je l'augmenter sans risque ?</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Au travers de nombreux cas cliniques, l'importance du respect d'une DVO établie sera discuté</li>
                    <li>L'approche méthodologique de conservation de la DVO au cours des reconstitutions prothétiques sera explicitée</li>
                    <li>L'importance d'une évaluation du chemin de fermeture physiologique dans le cas d'une perte de DVO sera argumentée</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Étude de cas prothétiques à long terme</h3>
                  <p className="text-primary-700">Réalisation étape par étape tant en clinique qu'au laboratoire</p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Transmettre les données fonctionnelles à son prothésiste</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Enregistrement des paramètres condyliens sur chaque participant et transfert sur articulateur</li>
                    <li>La table incisive fonctionnelle ne peut s'effectuer correctement qu'après enregistrement des paramètres condyliens et élimination des interférences occlusales</li>
                    <li>La table incisive fonctionnelle est montrée aux participants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Discussion générale</h3>
                </div>
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
            <div className="flex gap-6">
              <Link
                href="/programme/module-1"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-gold font-semibold transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Module 1
              </Link>
              <Link
                href="/programme/module-3"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-gold font-semibold transition-colors group"
              >
                Module 3
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
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
