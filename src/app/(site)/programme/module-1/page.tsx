import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Module 1 - Savoir observer et analyser l\'occlusion individuelle',
  description: 'Module 1 de la formation FOC Iroise : Démystifier l\'occlusion et apprendre à analyser la cinématique mandibulaire. Formation pratique sur 2 jours.',
}

export default function Module1Page() {
  return (
    <div className="bg-white">
      <div className="container-custom py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/programme" className="hover:text-primary-600">Programme</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Module 1</li>
            </ol>
          </nav>

          {/* Introduction */}
          <div className="mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              La pratique de l'occlusion est enseignée progressivement en 3 modules de 2 journées, étalés sur une année.
              Chaque étape comprend une explication théorique et une démonstration clinique ou pratique suivie de travaux pratiques.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Les modules sont limités à <strong className="text-primary-600">14 praticiens</strong> qui travaillent en binômes.
            </p>
          </div>

          {/* Titre du module */}
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Module 1
            </h1>
            <p className="text-2xl sm:text-3xl text-primary-600 font-semibold">
              Savoir observer et analyser l'occlusion individuelle
            </p>
          </div>

          {/* Objectifs */}
          <div className="mb-12 bg-primary-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Le module 1 répond aux objectifs suivants :
            </h2>
            <ul className="space-y-3">
              {[
                'Démystifier l\'occlusion',
                'Apprendre à analyser la cinématique mandibulaire d\'un patient',
                'Examiner pragmatiquement l\'occlusion d\'un patient',
                'Rechercher la ou les dents susceptibles de guider les trajets occlusaux fonctionnels et qui doivent servir de référence',
                'Poser l\'indication de l\'ajustement occlusal',
                'Comprendre l\'importance du chemin de fermeture physiologique'
              ].map((objectif, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <svg className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700 leading-relaxed">{objectif}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Travaux pratiques */}
          <div className="prose prose-lg prose-blue max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed">
              Pour la pratique de l'ajustement occlusal, des modèles pédagogiques identiques sont montés sur les articulateurs DENAR Mark Il. Ainsi les 14 praticiens peuvent effectuer les différentes étapes en suivant rigoureusement le même protocole.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Durant ces deux journées, la projection de cas cliniques illustre la démarche thérapeutique. Il est souhaitable également que les praticiens apportent un ou deux cas, qui présentent des difficultés, que nous essaierons de résoudre ensemble.
            </p>
          </div>

          {/* Programme Jour 1 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-t-xl">
              <h2 className="text-2xl font-bold">Jour 1</h2>
              <p className="text-primary-100 mt-1">Démystifier et comprendre l'importance de la maîtrise de l'occlusion au quotidien</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-b-xl border-2 border-t-0 border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Présentation de cas cliniques</h3>
                  <p className="text-gray-700">Présentation de nombreux cas cliniques et des échecs thérapeutiques en lien avec l'occlusion</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Examen de la cinématique mandibulaire</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Démonstration clinique</li>
                    <li>Application clinique par les participants</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Examen anatomo-fonctionnel de l'occlusion</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Explication théorique et application pratique sur des modèles pédagogiques identiques</li>
                    <li>Mise en application par les participants sur leurs propres modèles</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Examen fonctionnel</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
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
          </div>

          {/* Programme Jour 2 */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-t-xl">
              <h2 className="text-2xl font-bold">Jour 2</h2>
              <p className="text-primary-100 mt-1">Le chemin de fermeture et travaux pratiques</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-b-xl border-2 border-t-0 border-gray-200">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Le chemin de fermeture</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Démonstration clinique</li>
                    <li>Réalisation de la butée occlusale incisive sur modèle</li>
                    <li>Réglage de la butée en bouche</li>
                    <li>Préparation de la cire d'enregistrement</li>
                    <li>Enregistrement de l'occlusion</li>
                    <li>Illustration au travers de nombreux cas cliniques de l'utilisation de la butée incisive d'Abjean en pratique quotidienne</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Travaux pratiques (par binôme)</h3>
                  <p className="text-gray-700 mb-2">Réalisation de la "butée" :</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Enregistrement sur le chemin de fermeture</li>
                    <li>Montage sur articulateur</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Repérage des prématurités occlusales</h3>
                  <p className="text-gray-700 mb-2">Travaux pratiques par binôme sur le chemin de fermeture physiologique :</p>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>La 1ère étape : l'ajustement occlusal sur le chemin de fermeture est réalisé en vidéo-projection et suivi d'une démonstration clinique</li>
                    <li>Recherche d'un contact prématuré sur le chemin de fermeture pour chaque participant</li>
                    <li>Les participants se mettent en binômes pour s'examiner mutuellement, analyser le chemin de fermeture, effectuer la recherche des contacts prématurés</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">La plaque occlusale d'Abjean (POA)</h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Caractéristiques de réalisation et indications</li>
                    <li>Réalisation clinique en vidéo projection</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Discussion générale</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation et CTA */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between pt-8 border-t border-gray-200">
            <Link
              href="/programme/module-2"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
            >
              Module 2
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/inscription"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
            >
              Inscription
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
