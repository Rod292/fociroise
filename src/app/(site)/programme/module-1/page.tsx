'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Module1Page() {
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
                <li className="text-white font-medium">Module 1</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent-gold/20 text-accent-gold text-sm font-semibold">
                <span className="w-8 h-8 flex items-center justify-center rounded-full bg-accent-gold text-primary-900 font-bold">01</span>
                Premier module
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Savoir observer et analyser l'occlusion individuelle
              </h1>
              <p className="text-xl text-primary-200 max-w-3xl">
                Démystifier l'occlusion et apprendre à analyser la cinématique mandibulaire d'un patient
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16 sm:py-20">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <motion.div
            className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-primary-700 leading-relaxed mb-4">
              La pratique de l'occlusion est enseignée progressivement en 3 modules de 2 journées, étalés sur une année.
              Chaque étape comprend une explication théorique et une démonstration clinique ou pratique suivie de travaux pratiques.
            </p>
            <p className="text-lg text-primary-700 leading-relaxed">
              Les modules sont limités à <strong className="text-primary-900">14 praticiens</strong> qui travaillent en binômes.
            </p>
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
              Le module 1 répond aux objectifs suivants :
            </h2>
            <ul className="space-y-4">
              {[
                'Démystifier l\'occlusion',
                'Apprendre à analyser la cinématique mandibulaire d\'un patient',
                'Examiner pragmatiquement l\'occlusion d\'un patient',
                'Rechercher la ou les dents susceptibles de guider les trajets occlusaux fonctionnels et qui doivent servir de référence',
                'Poser l\'indication de l\'ajustement occlusal',
                'Comprendre l\'importance du chemin de fermeture physiologique'
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

          {/* Travaux pratiques */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p className="text-lg text-primary-700 leading-relaxed mb-4">
              Pour la pratique de l'ajustement occlusal, des modèles pédagogiques identiques sont montés sur les articulateurs DENAR Mark Il. Ainsi les 14 praticiens peuvent effectuer les différentes étapes en suivant rigoureusement le même protocole.
            </p>
            <p className="text-lg text-primary-700 leading-relaxed">
              Durant ces deux journées, la projection de cas cliniques illustre la démarche thérapeutique. Il est souhaitable également que les praticiens apportent un ou deux cas, qui présentent des difficultés, que nous essaierons de résoudre ensemble.
            </p>
          </motion.div>

          {/* Programme Jour 1 */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white px-8 py-6 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-gold text-primary-900 font-display font-bold text-xl">1</span>
                <div>
                  <h2 className="text-2xl font-display font-bold">Jour 1</h2>
                  <p className="text-primary-200 mt-1">Démystifier et comprendre l'importance de la maîtrise de l'occlusion au quotidien</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-2xl border-2 border-t-0 border-gray-100 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Présentation de cas cliniques</h3>
                  <p className="text-primary-700">Présentation de nombreux cas cliniques et des échecs thérapeutiques en lien avec l'occlusion</p>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Examen de la cinématique mandibulaire</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-1 ml-4">
                    <li>Démonstration clinique</li>
                    <li>Application clinique par les participants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Examen anatomo-fonctionnel de l'occlusion</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-1 ml-4">
                    <li>Explication théorique et application pratique sur des modèles pédagogiques identiques</li>
                    <li>Mise en application par les participants sur leurs propres modèles</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Examen fonctionnel</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-1 ml-4">
                    <li>Montage des modèles des participants en PIM</li>
                    <li>Prise de l'arc facial</li>
                    <li>Etude des paramètres condyliens et réglage de l'articulateur</li>
                    <li>Les trajets fonctionnels</li>
                    <li>Etude des cycles de mastication</li>
                    <li>Recherche des interférences en rétrusion, latéralité et propulsion</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Images Module 1 */}
          <motion.div
            className="mb-12 max-w-3xl mx-auto space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex gap-2 md:gap-4 justify-center">
              <div className="rounded-xl overflow-hidden shadow-lg w-[90px] md:w-auto border-2 border-white" style={{maxWidth: '183px'}}>
                <Image
                  src="/images/module1-.png"
                  alt="Travaux pratiques Module 1 - Articulateurs DENAR"
                  width={183}
                  height={455}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg w-[130px] md:w-auto border-2 border-white" style={{maxWidth: '263px'}}>
                <Image
                  src="/images/module1-2.png"
                  alt="Analyse de l'occlusion Module 1"
                  width={263}
                  height={390}
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 md:gap-4">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module1-3.png"
                  alt="Pratique clinique Module 1"
                  width={681}
                  height={469}
                  className="w-full h-auto"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/module1-4.png"
                  alt="Démonstration pratique Module 1"
                  width={631}
                  height={488}
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
            transition={{ delay: 0.5 }}
          >
            <div className="bg-gradient-to-r from-primary-800 to-primary-700 text-white px-8 py-6 rounded-t-2xl">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 flex items-center justify-center rounded-xl bg-accent-gold text-primary-900 font-display font-bold text-xl">2</span>
                <div>
                  <h2 className="text-2xl font-display font-bold">Jour 2</h2>
                  <p className="text-primary-200 mt-1">Le chemin de fermeture et travaux pratiques</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-b-2xl border-2 border-t-0 border-gray-100 shadow-lg">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Le chemin de fermeture</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-1 ml-4">
                    <li>Démonstration clinique</li>
                    <li>Réalisation de la butée occlusale incisive sur modèle</li>
                    <li>Réglage de la butée en bouche</li>
                    <li>Préparation de la cire d'enregistrement</li>
                    <li>Enregistrement de l'occlusion</li>
                    <li>Illustration au travers de nombreux cas cliniques de l'utilisation de la butée incisive d'Abjean en pratique quotidienne</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Travaux pratiques (par binôme)</h3>
                  <p className="text-primary-700 mb-2">Réalisation de la "butée" :</p>
                  <ul className="list-disc list-inside text-primary-700 space-y-1 ml-4">
                    <li>Enregistrement sur le chemin de fermeture</li>
                    <li>Montage sur articulateur</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">Repérage des prématurités occlusales</h3>
                  <p className="text-primary-700 mb-2">Travaux pratiques par binôme sur le chemin de fermeture physiologique :</p>
                  <ul className="list-disc list-inside text-primary-700 space-y-1 ml-4">
                    <li>La 1ère étape : l'ajustement occlusal sur le chemin de fermeture est réalisé en vidéo-projection et suivi d'une démonstration clinique</li>
                    <li>Recherche d'un contact prématuré sur le chemin de fermeture pour chaque participant</li>
                    <li>Les participants se mettent en binômes pour s'examiner mutuellement, analyser le chemin de fermeture, effectuer la recherche des contacts prématurés</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-display font-bold text-primary-900 mb-2">La plaque occlusale d'Abjean (POA)</h3>
                  <ul className="list-disc list-inside text-primary-700 space-y-1 ml-4">
                    <li>Caractéristiques de réalisation et indications</li>
                    <li>Réalisation clinique en vidéo projection</li>
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
            transition={{ delay: 0.6 }}
          >
            <Link
              href="/programme/module-2"
              className="inline-flex items-center gap-2 text-primary-700 hover:text-accent-gold font-semibold transition-colors group"
            >
              Module suivant
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
