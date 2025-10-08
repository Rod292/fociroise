import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Jacques-Olivier Pers - Professeur de classe exceptionnelle',
  description: 'Biographie du Professeur Jacques-Olivier Pers, professeur de classe exceptionnelle et chercheur en immunologie.',
}

export default function JacquesOlivierPersPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="container-custom py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-8 text-sm" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-gray-600">
              <li><Link href="/formateurs" className="hover:text-primary-600">Formateurs</Link></li>
              <li>/</li>
              <li className="text-gray-900 font-medium">Jacques-Olivier Pers</li>
            </ol>
          </nav>

          {/* En-tête avec photo et nom */}
          <div className="flex flex-col md:flex-row gap-8 mb-12 items-start">
            {/* Photo */}
            <div className="flex-shrink-0 w-full md:w-64">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg">
                <Image
                  src="/images/pers.png"
                  alt="Jacques-Olivier Pers"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Nom et titre */}
            <div className="flex-1">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                Jacques-Olivier PERS
              </h1>
              <p className="text-xl sm:text-2xl text-primary-600 font-semibold mb-6">
                Professeur de classe exceptionnelle
              </p>
            </div>
          </div>

          {/* Biographie */}
          <div className="prose prose-lg prose-blue max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Professeur des Universités de classe exceptionnelle-Praticien hospitalier de 2008 à 2023, habilité à diriger les recherches, docteur de l'Université de Bretagne Occidentale (spécialité Immunologie), docteur en chirurgie-dentaire, spécialiste en Médecine Bucco-Dentaire (Parodontologie, Prothèses complexes, Occlusodontie), président de l'Institut Français pour la recherche en Odontologie (IFRO).
            </p>

            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Jacques-Olivier Pers est l'auteur de plus de 250 publications scientifiques internationales dans le cadre de travaux originaux et revues générales dont plus de 200 sont référencées dans la base de données Medline. Son facteur h est de 62 pour plus de 13000 citations. Il a contribué à 10 ouvrages, a délivré plus de 400 communications orales à des congrès internationaux ou des sociétés savantes et a répondu à plus de 80 invitations dans de prestigieuses universités et organismes (NIH/NICDR, Tokyo, Athènes, Séoul…). Il est titulaire de 4 brevets et a obtenu 6 financements européens. Il a dirigé, de 2011 à 2022, l'équipe de recherche EA 2216 « Immunologie et pathologie » et a obtenu en 2017 la reconnaissance par l'Inserm pour l'UMR 1227 « Lymphocytes B et auto-immunité, LBAI » à Brest. Tous ses travaux ont contribué à améliorer la compréhension des fonctions des lymphocytes B dans l'auto-immunité et plus particulièrement dans le syndrome de Gougerot-Sjögren et les maladies parodontales.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Dans le même temps et depuis 20 ans, il participe à l'éveil des chirurgiens-dentistes à l'occlusion dans le cadre de la formation dispensée par le professeur José Abjean.
            </p>
          </div>

          {/* Bouton retour */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              href="/formateurs"
              className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors group"
            >
              <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Retour à l'équipe
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
