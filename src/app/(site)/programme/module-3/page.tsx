'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Module3Page() {
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
                <li className="text-white font-medium">Module 3</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent-gold/20 text-accent-gold text-sm font-semibold">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-gold text-primary-900 font-bold">03</span>
                Troisième module
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Savoir éviter les pièges
              </h1>
              <p className="text-xl text-primary-200 max-w-3xl">
                Dysfonctions cranio-mandibulaires, ajustement occlusal, cas complexes et apport du numérique
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
                Ce module est réservé aux participants ayant validé les modules 1 et 2.
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
              Le module 3 répond aux objectifs suivants :
            </h2>
            <ul className="space-y-4">
              {[
                'Apprendre à traiter les dysfonctions cranio-mandibulaires',
                'Maîtriser l\'ajustement occlusal en changeant la P.I.M.',
                'Apprendre à traiter les cas complexes (Erosion, bruxisme, prothèse sur parodonte affaibli, béance, prothèse dento-implanto-portée…)',
                'Appréhender l\'apport du numérique en occlusodontie'
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
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-2xl border-2 border-t-0 border-gray-100 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Vérification des connaissances acquises et appliquées</h3>
                  <p className="text-primary-700">Suite au module 1 & 2</p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">La dysfonction cranio-mandibulaire</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Symptomatologie des dysfonctions cranio-mandibulaires (Douleurs, altération de la cinématique, craquements…)</li>
                    <li>Examen de la cinématique mandibulaire</li>
                    <li>Examen des ATM et palpation musculaire avec démonstration et TP sur les participants</li>
                    <li>Etiologie des dysfonctions cranio-mandibulaires</li>
                    <li>Traitements non chirurgicaux et chirurgicaux des dysfonctions cranio-mandibulaires et résultats</li>
                    <li>Schéma décisionnel du traitement des luxations discales irréductibles</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Méthode de l'ajustement occlusal en changeant la P.I.M. du patient</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Explication théorique</li>
                    <li>Ajustement occlusal sur modèle pédagogique par les participants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Gestion des béances et des fonctions oro-faciales</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Explication théorique des béances primitives et secondaires</li>
                    <li>Conduite à tenir devant une béance secondaire</li>
                    <li>Conduite à tenir devant une béance primitive</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Etude des cas présentés par les participants</h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Images Module 3 */}
          <motion.div
            className="mb-12 max-w-4xl mx-auto space-y-2 md:space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module3-1.png"
                  alt="Formation Module 3 - Dysfonctions cranio-mandibulaires"
                  width={531}
                  height={422}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module3-2.png"
                  alt="Formation Module 3 - Cas complexes"
                  width={849}
                  height={561}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module3-3.png"
                  alt="Formation Module 3 - Numérique en occlusodontie"
                  width={990}
                  height={669}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module3-4.png"
                  alt="Formation Module 3 - Travaux pratiques"
                  width={1003}
                  height={669}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module3-5.png"
                  alt="Formation Module 3 - Validation des connaissances"
                  width={1003}
                  height={632}
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
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-2xl border-2 border-t-0 border-gray-100 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">L'ajustement occlusal en implantologie</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Principes généraux</li>
                    <li>Reconstitutions dento-implanto-portés</li>
                    <li>Reconstitutions type « All-on »</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Traitement des cas complexes</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Réalisations prothétiques sur parodonte affaibli</li>
                    <li>Le bruxisme : étiologie et thérapeutique</li>
                    <li>Les problèmes posés par la DVO</li>
                    <li>La prothèse sur dents vivantes</li>
                    <li>Comment respecter le parallélisme ?</li>
                    <li>Comment assurer le passage de la prothèse sur parodonte affaibli à la prothèse sur implants, en respectant les paramètres occlusaux et la DVO du patient ?</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Etude de cas à long terme</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Présentation des cas (modèles, radio, diapositives)</li>
                    <li>Etablissement des plans de traitement par les participants</li>
                    <li>Confrontation avec les résultats obtenus à long terme</li>
                    <li>Discussion actualisée</li>
                    <li>Réalisation, étape par étape, d'une prothèse fixe totale maxillaire</li>
                    <li>Construction prothétique sur dents fortement abrasées</li>
                    <li>Comment respecter la DVO et les cycles de mastication</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Apport du numérique dans la gestion de l'occlusion</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-2 ml-4">
                    <li>Les différents systèmes d'analyse numérique de l'occlusion seront évoqués</li>
                    <li>Comment permettre le passage des données numériques vers un articulateur physique dans le cas des reconstitutions céramo-métalliques ou stratifiées ?</li>
                    <li>Une démonstration d'une analyse numérique complète de l'occlusion sera faite sur les participants</li>
                    <li>Quelle utilisation pour l'articulateur virtuel ?</li>
                    <li>Au travers de nombreux cas cliniques, l'apport de l'outil numérique sera illustré</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Discussion générale</h3>
                  <p className="text-primary-700">Validation des connaissances et remise du diplôme</p>
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
                href="/programme/module-2"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-gold font-semibold transition-colors group"
              >
                <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Module 2
              </Link>
              <Link
                href="/programme/module-4"
                className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-gold font-semibold transition-colors group"
              >
                Module 4
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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
