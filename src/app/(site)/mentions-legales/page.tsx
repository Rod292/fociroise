import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales du site FOC Iroise Brest - Formation occlusale continue',
}

/**
 * Page Mentions Légales
 * Informations légales obligatoires (RGPD, éditeur, hébergeur, etc.)
 */
export default function MentionsLegalesPage() {
  return (
    <div className="bg-white">
      <div className="container-custom section-spacing">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12">
            Mentions Légales
          </h1>

          <div className="prose prose-lg prose-blue max-w-none">
            <p>
              Le site FOC Iroise Brest est édité par la société FOC Iroise Brest, immatriculée au
              Numéro SIREN 948086368 et ayant son siège social au 22 rue Algésiras 29200 Brest.
            </p>

            <p>
              Le directeur de la publication du site est Jacques-Olivier PERS.
            </p>

            <p>
              Le site est hébergé par la société Vercel Inc. dont le siège social est situé à
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.
            </p>

            <p>
              Pour toute question relative aux contenus du site ou à l'utilisation de ce dernier,
              vous pouvez contacter le responsable de la publication à l'adresse suivante :
              contact@fociroise.fr
            </p>

            <p>
              Les informations présentes sur le site sont non contractuelles et sujettes à
              modification sans préavis.
            </p>

            <p>
              Le site peut contenir des liens vers des sites tiers. FOC Iroise Brest ne dispose
              d'aucun moyen de contrôle sur ces sites et décline toute responsabilité quant aux
              contenus qui y sont présents.
            </p>

            <p>
              Le site FOC Iroise Brest est soumis au droit français.
            </p>

            <p>
              Il est rappelé que la confidentialité de l'ensemble des échanges sur Internet n'est
              pas garantie et que chaque internaute doit prendre toutes les mesures appropriées de
              façon à protéger ses propres données et/ou logiciels de la contamination d'éventuels
              virus circulant sur le réseau.
            </p>

            <p>
              Il convient de lire attentivement les conditions d'utilisation du site avant toute
              navigation. L'accès et l'utilisation du site FOC Iroise Brest impliquent l'acceptation
              pleine et entière des conditions d'utilisation ci-dessus décrites.
            </p>

            <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
              <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
