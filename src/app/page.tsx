import Link from 'next/link'
import Image from 'next/image'
import { CTAButtonGroup } from '@/components/CTAButtons'
import type { Metadata } from 'next'

// ISR: revalidation toutes les heures (3600s)
export const revalidate = 3600

// Metadata SEO spécifique à la page d'accueil
export const metadata: Metadata = {
  title: 'FOC Iroise – Votre formation occlusale continue à Brest',
  description: 'Formation occlusale continue à Brest basée sur la méthodologie du Professeur José Abjean. Formation pour chirurgiens-dentistes en occlusion, prothèse et implantologie.',
  openGraph: {
    title: 'FOC Iroise – Votre formation occlusale continue à Brest',
    description: 'Formation occlusale continue à Brest pour chirurgiens-dentistes',
    type: 'website',
  },
}

/**
 * Page d'accueil (landing page) de FOC Iroise
 * Structure sémantique avec sections Hero et Contenu explicatif
 * Optimisée pour Core Web Vitals (LCP rapide, pas de JS lourd)
 */
export default function HomePage() {
  return (
    <>
      {/* Section Hero - Au-dessus de la ligne de flottaison */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-primary-50">
        {/* Motif décoratif subtil en arrière-plan */}
        <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))]" aria-hidden="true" />

        <div className="container-custom relative py-20 sm:py-28 lg:py-36">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              {/* Badge/Tag au-dessus du titre */}
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
                Formation occlusale continue
              </div>

              {/* Titre principal H1 pour SEO */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-6 leading-[1.1] tracking-tight">
                Votre formation occlusale<br className="hidden sm:block" />
                <span className="text-primary-600"> continue à Brest</span>
              </h1>

              {/* Sous-titre avec stats */}
              <div className="mb-12 max-w-3xl mx-auto">
                <p className="text-xl sm:text-2xl lg:text-3xl text-gray-600 font-light leading-relaxed mb-6">
                  Plus de <span className="font-bold text-primary-600">1000 diplômés</span> depuis 2002
                </p>
                <Link
                  href="/nos-diplomes"
                  className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors group"
                >
                  Découvrir leurs parcours
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>

              {/* Boutons CTA */}
              <CTAButtonGroup />
            </div>
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
            {/* Titre de section H2 avec décoration */}
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-2 mb-4 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold">
                Notre approche
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                L'occlusion en pratique clinique
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>

            {/* Card avec contenu */}
            <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 lg:p-16 border border-gray-100">
              {/* Paragraphe introductif avec icône */}
              <div className="flex gap-4 mb-10">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed">
                  Chaque patient possède une occlusion qui lui est propre. Les aspects anatomiques et fonctionnels sont différents et parfois bien éloignés des références de « normalité » définies bien souvent de manière dogmatique.
                </p>
              </div>

              {/* Liste des questions clés avec icônes */}
              <div className="space-y-5 mb-12">
                {[
                  "Comment reconnaître qu'une occlusion est apte à remplir sa fonction ?",
                  "Quand et comment doit-on la modifier ?",
                  "Comment inclure l'approche occlusale dans le cadre de la maladie parodontale, de la dysfonction, du traitement orthodontique, des réalisations prothétiques ou collées sur dents naturelles et en implantologie ?",
                  "Puis-je modifier la DVO et les cycles de mastication de mon patient ?",
                  "Comment reproduire au laboratoire la prothèse fixe provisoire, réalisée étape par étape ?",
                  "Comment reconstruire les dents fortement abrasées ?"
                ].map((question, index) => (
                  <div key={index} className="flex gap-4 items-start group">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                        <svg className="w-3 h-3 text-primary-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                      {question}
                    </p>
                  </div>
                ))}
              </div>

              {/* Paragraphe de conclusion avec style destacado */}
              <div className="border-l-4 border-primary-600 pl-6 py-2 bg-primary-50/50 rounded-r-lg mb-10">
                <p className="text-lg sm:text-xl text-gray-800 leading-relaxed font-medium">
                  La formation proposée par FOC Iroise Brest, basée sur la méthodologie développée par le Professeur José Abjean, au travers d'un exercice quotidien, d'une expérience clinique et de travaux de recherche, a pour objectif de guider la démarche thérapeutique occlusale du chirurgien-dentiste dans sa pratique clinique.
                </p>
              </div>

              {/* Bouton CTA vers Programme */}
              <div className="text-center">
                <Link
                  href="/programme"
                  className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-xl hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Découvrir le programme
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section équipe - Photo compacte */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre équipe de formateurs
            </h2>
            <p className="text-lg text-gray-600">
              Des praticiens expérimentés dévoués à votre réussite
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Image
              src="/images/EquipeFocIroise-1.png"
              alt="L'équipe des formateurs FOC Iroise"
              width={900}
              height={450}
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
          <div className="text-center mt-8">
            <Link
              href="/formateurs"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
            >
              En savoir plus sur l'équipe
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Section CTA finale - Design moderne avec dégradé */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        {/* Motif décoratif */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom py-20 sm:py-24 relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 text-white text-sm font-semibold backdrop-blur-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Rejoignez-nous
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à transformer votre pratique ?
            </h2>
            <p className="text-xl sm:text-2xl text-primary-100 mb-12 max-w-2xl mx-auto leading-relaxed">
              Inscrivez-vous dès maintenant ou découvrez notre équipe de formateurs expérimentés
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center">
              <Link
                href="/inscription"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-primary-600 bg-white rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-2xl hover:-translate-y-1"
              >
                S'inscrire maintenant
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/formateurs"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white border-2 border-white rounded-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-200"
              >
                Découvrir l'équipe
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            {/* Stats ou badges de confiance (optionnel) */}
            <div className="mt-16 pt-12 border-t border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">20+</div>
                  <div className="text-primary-100">Années d'expérience</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">100%</div>
                  <div className="text-primary-100">Pratique clinique</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-white mb-2">+1000</div>
                  <div className="text-primary-100">Diplômés</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
