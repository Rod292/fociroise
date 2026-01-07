import type { Metadata } from 'next'
import Link from 'next/link'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'FAQ - Questions fréquentes sur l\'occlusodontie',
  description: 'Questions fréquentes sur la méthode Abjean, la plaque occlusale, le traitement du bruxisme et des DTM. Formation occlusodontie FOC Iroise à Brest.',
  alternates: {
    canonical: 'https://fociroise.fr/faq',
  },
  openGraph: {
    title: 'FAQ | FOC Iroise - Formation occlusale',
    description: 'Réponses à vos questions sur l\'occlusodontie, la méthode Abjean et nos formations.',
    url: 'https://fociroise.fr/faq',
  },
}

const faqData = [
  {
    question: "Qu'est-ce que la méthode Abjean ?",
    answer: "La méthode Abjean est une approche pragmatique de l'occlusodontie développée par le Professeur José Abjean. Elle repose sur l'analyse du chemin de fermeture physiologique et l'utilisation d'outils spécifiques comme la butée incisive d'Abjean et la plaque occlusale d'Abjean (POA)."
  },
  {
    question: "Qu'est-ce que la plaque occlusale d'Abjean (POA) ?",
    answer: "La plaque occlusale d'Abjean est un dispositif amovible en résine rigide, positionné au maxillaire, utilisé pour le traitement des dysfonctions temporo-mandibulaires et du bruxisme. Elle permet, par son réglage sur le chemin de fermeture physiologique, de soulager les tensions musculaires et de mettre au repos les articulations temporo-mandibulaires."
  },
  {
    question: "À qui s'adresse la formation FOC Iroise ?",
    answer: "La formation s'adresse aux chirurgiens-dentistes, orthodontistes et prothésistes dentaires souhaitant maîtriser l'occlusodontie. Groupes limités à 14 praticiens pour un apprentissage pratique optimal."
  },
  {
    question: "Quelle est la durée et le prix de la formation ?",
    answer: "La formation complète comprend 4 modules de 2 jours chacun (8 jours au total). Chaque module coûte 1100€. La formation se déroule à Brest et exceptionnellement sur Guérande."
  },
  {
    question: "Comment traiter le bruxisme avec la méthode Abjean ?",
    answer: "Le traitement du bruxisme selon la méthodologie d'Abjean passe par l'analyse du chemin de fermeture physiologique, la réalisation de la plaque occlusale d'Abjean et une équilibration occlusale qui permettra de supprimer prématurités et interférences."
  },
  {
    question: "Qu'est-ce qu'une DTM (dysfonction temporo-mandibulaire) ?",
    answer: "Une DTM est un trouble affectant l'articulation de la mâchoire, pouvant provoquer douleurs, craquements, limitation d'ouverture buccale. La formation FOC Iroise enseigne le diagnostic et le traitement de ces pathologies."
  }
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqData.map(item => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer
    }
  }))
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://fociroise.fr' },
    { '@type': 'ListItem', position: 2, name: 'FAQ', item: 'https://fociroise.fr/faq' },
  ],
}

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <div className="bg-white">
        <div className="container-custom section-spacing">
          <div className="max-w-4xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-8 text-sm" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-gray-600">
                <li><Link href="/" className="hover:text-primary-600">Accueil</Link></li>
                <li>/</li>
                <li className="text-gray-900 font-medium">FAQ</li>
              </ol>
            </nav>

            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Questions fréquentes
            </h1>

            <p className="text-xl text-gray-600 mb-12">
              Retrouvez les réponses aux questions les plus courantes sur l'occlusodontie et la méthode Abjean.
            </p>

            <div className="space-y-8">
              {faqData.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 sm:p-8"
                >
                  <h2 className="text-xl font-bold text-gray-900 mb-4">
                    {item.question}
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-primary-50 rounded-2xl p-8 sm:p-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Une question sur la formation ?
              </h2>
              <p className="text-gray-600 mb-6">
                Contactez-nous pour plus d'informations sur nos prochaines sessions.
              </p>
              <Link
                href="/inscription"
                className="inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md"
              >
                S'inscrire à la formation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
