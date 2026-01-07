'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { CTAButtonGroup } from '@/components/CTAButtons'
import AnimatedLogo from '@/components/AnimatedLogo'
import AnimatedStat from '@/components/AnimatedStat'

const questions = [
  "Comment reconnaître qu'une occlusion est apte à remplir sa fonction ?",
  "Quand et comment doit-on la modifier ?",
  "Comment inclure l'approche occlusale dans le cadre de la maladie parodontale, de la dysfonction, du traitement orthodontique, des réalisations prothétiques ou collées sur dents naturelles et en implantologie ?",
  "Puis-je modifier la DVO et les cycles de mastication de mon patient ?",
  "Comment reproduire au laboratoire la prothèse fixe provisoire, réalisée étape par étape ?",
  "Comment reconstruire les dents fortement abrasées ?"
]

export default function HomePage() {
  return (
    <>
      {/* Section Hero - Design raffiné */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-cream">
        {/* Motif géométrique de précision */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(20)].map((_, i) => (
              <line key={i} x1="0" y1={i * 5} x2="100" y2={i * 5}
                    stroke="currentColor" strokeWidth="0.1" className="text-primary-900"/>
            ))}
          </svg>
        </div>

        {/* Cercle décoratif animé */}
        <motion.div
          className="absolute -right-40 -top-40 w-[600px] h-[600px] rounded-full
                     bg-gradient-to-br from-primary-100/40 to-transparent"
          animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Cercle doré subtil */}
        <motion.div
          className="absolute -left-20 bottom-20 w-[300px] h-[300px] rounded-full
                     bg-gradient-to-tr from-accent-gold/10 to-transparent"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />

        <div className="container-custom relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-5xl mx-auto">
            {/* Badge animé */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-center mb-8"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2.5
                              rounded-full border border-primary-200 bg-white/80 backdrop-blur-sm
                              text-primary-700 text-sm font-medium shadow-sm">
                <span className="w-2 h-2 rounded-full bg-accent-gold animate-pulse"/>
                Formation d'excellence depuis 2002
              </div>
            </motion.div>

            {/* Logo + Titre en disposition horizontale */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 mb-12">
              {/* Logo animé */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <AnimatedLogo />
              </motion.div>

              {/* Titre + Stats */}
              <motion.div
                className="text-center lg:text-left"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-900 leading-[1.1] tracking-tight mb-6">
                  Votre formation occlusale<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
                    continue à Brest
                  </span>
                </h1>

                <p className="text-xl sm:text-2xl lg:text-3xl text-primary-600 font-light leading-relaxed mb-4">
                  Plus de <span className="font-bold text-accent-gold">1000 diplômés</span> depuis 2002
                </p>
                <Link
                  href="/nos-diplomes"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-accent-gold font-medium transition-colors group"
                >
                  Découvrir leurs parcours
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>
            </div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <CTAButtonGroup />
            </motion.div>
          </div>
        </div>

        {/* Décoration vague pour transition fluide */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            className="w-full h-12 sm:h-16 text-white"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Section principale: L'occlusion en pratique clinique */}
      <section className="bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom py-20 sm:py-28">
          <div className="max-w-5xl mx-auto">
            {/* Titre de section */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 mb-4 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium">
                Notre approche
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
                L'occlusion en pratique clinique
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-gold mx-auto rounded-full"></div>
            </motion.div>

            {/* Paragraphe introductif */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16 border border-gray-100 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex gap-4 mb-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-primary-800 leading-relaxed">
                  Chaque patient possède une occlusion qui lui est propre. Les aspects anatomiques et fonctionnels sont différents et parfois bien éloignés des références de « normalité » définies bien souvent de manière dogmatique.
                </p>
              </div>

              {/* Grille de questions avec numérotation élégante */}
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                {questions.map((question, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group relative p-6 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100
                               hover:border-primary-200 hover:shadow-lg transition-all duration-300"
                  >
                    <span className="absolute -top-3 -left-3 w-10 h-10 flex items-center justify-center
                                     rounded-full bg-primary-700 text-white font-display font-bold text-sm
                                     group-hover:bg-accent-gold transition-colors shadow-md">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-primary-700 leading-relaxed pl-4 pt-2">{question}</p>
                  </motion.div>
                ))}
              </div>

              {/* Paragraphe de conclusion */}
              <motion.div
                className="border-l-4 border-accent-gold pl-6 py-4 bg-gradient-to-r from-accent-cream to-transparent rounded-r-lg mb-10"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-lg sm:text-xl text-primary-800 leading-relaxed font-medium">
                  La formation proposée par FOC Iroise Brest, basée sur la méthodologie développée par le Professeur José Abjean, au travers d'un exercice quotidien, d'une expérience clinique et de travaux de recherche, a pour objectif de guider la démarche thérapeutique occlusale du chirurgien-dentiste dans sa pratique clinique.
                </p>
              </motion.div>

              {/* Bouton CTA vers Programme */}
              <div className="text-center">
                <Link
                  href="/programme"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white
                             bg-gradient-to-r from-primary-700 to-primary-600 rounded-xl
                             hover:from-primary-800 hover:to-primary-700 transition-all duration-300
                             shadow-lg hover:shadow-xl hover:-translate-y-0.5
                             focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Découvrir le programme
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section équipe - 2 colonnes avec effet de profondeur */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-24">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Colonne gauche: Texte */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-2 mb-4 rounded-full border border-primary-200 bg-primary-50 text-primary-700 text-sm font-medium">
                  Notre équipe
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary-900 mb-6">
                  Notre équipe de formateurs
                </h2>
                <p className="text-xl text-primary-600 leading-relaxed mb-6">
                  Des praticiens expérimentés dévoués à votre réussite
                </p>
                <p className="text-lg text-primary-700 leading-relaxed mb-8">
                  Notre équipe de formateurs réunit des experts reconnus en occlusodontie,
                  partageant une approche pédagogique basée sur la pratique clinique et
                  l'expérience terrain.
                </p>
                <Link
                  href="/formateurs"
                  className="inline-flex items-center gap-2 px-6 py-3 text-lg font-semibold
                             text-white bg-primary-700 rounded-lg
                             hover:bg-primary-800 transition-all duration-300
                             shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  En savoir plus sur l'équipe
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </motion.div>

              {/* Colonne droite: Image avec effet de profondeur */}
              <motion.div
                className="relative group"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {/* Cadres décoratifs */}
                <div className="absolute -inset-4 bg-gradient-to-br from-primary-100 to-primary-50
                                rounded-3xl -rotate-2 group-hover:rotate-0 transition-transform duration-500" />
                <div className="absolute -inset-4 bg-gradient-to-br from-accent-gold/20 to-transparent
                                rounded-3xl rotate-1 group-hover:rotate-0 transition-transform duration-500" />

                <Image
                  src="/images/EquipeFocIroise-1-optimized.jpg"
                  alt="L'équipe des formateurs FOC Iroise"
                  width={600}
                  height={400}
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />

                {/* Badge flottant */}
                <motion.div
                  className="absolute -bottom-4 -right-4 px-6 py-3 bg-white rounded-xl shadow-lg
                             border border-gray-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <span className="text-accent-gold font-display font-bold text-2xl">20+</span>
                  <span className="text-primary-600 text-sm ml-2">ans d'expertise</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section CTA finale - Design moderne avec dégradé */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900">
        {/* Motif décoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom py-20 sm:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/10 text-white text-sm font-semibold backdrop-blur-sm border border-white/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <svg className="w-5 h-5 text-accent-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Rejoignez-nous
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Prêt à transformer votre pratique ?
            </motion.h2>
            <motion.p
              className="text-xl sm:text-2xl text-primary-200 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Inscrivez-vous dès maintenant ou découvrez notre équipe de formateurs expérimentés
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/inscription"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold
                           text-primary-900 bg-accent-gold rounded-xl
                           hover:bg-accent-gold-light transition-all duration-300
                           shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                S'inscrire maintenant
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/formateurs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold
                           text-white border-2 border-white/30 rounded-xl
                           hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
              >
                Découvrir l'équipe
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Stats animées */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <AnimatedStat value={20} suffix="+" label="Années d'expérience" />
                <AnimatedStat value={100} suffix="%" label="Pratique clinique" />
                <AnimatedStat value={1000} prefix="+" label="Diplômés" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
