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
            <h2>Éditeur du site</h2>
            <p>
              <strong>FOC Iroise Brest</strong><br />
              Formation Occlusale Continue<br />
              [Adresse complète à ajouter]<br />
              [Code postal et ville]<br />
              Téléphone : [Numéro de téléphone]<br />
              Email : [Email de contact]
            </p>

            <h2>Directeur de la publication</h2>
            <p>
              [Nom du directeur de publication]
            </p>

            <h2>Hébergement</h2>
            <p>
              Ce site est hébergé par :<br />
              [Nom de l'hébergeur]<br />
              [Adresse de l'hébergeur]<br />
              [Téléphone de l'hébergeur]
            </p>

            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur
              et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour
              les documents téléchargeables et les représentations iconographiques et photographiques.
            </p>
            <p>
              La reproduction de tout ou partie de ce site sur un support électronique ou autre quel qu'il soit
              est formellement interdite sauf autorisation expresse du directeur de la publication.
            </p>

            <h2>Protection des données personnelles (RGPD)</h2>
            <p>
              Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique
              et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition
              aux données personnelles vous concernant.
            </p>
            <p>
              Les informations recueillies sur ce site sont enregistrées dans un fichier informatisé par
              FOC Iroise pour la gestion des inscriptions et des contacts. Elles sont conservées pendant
              [durée de conservation] et sont destinées à [finalités].
            </p>
            <p>
              Pour exercer vos droits, vous pouvez contacter notre responsable du traitement des données :<br />
              Email : [email RGPD]<br />
              Courrier : [adresse postale]
            </p>

            <h2>Cookies</h2>
            <p>
              Ce site n'utilise actuellement pas de cookies de tracking ou de publicité.
              [À adapter selon l'utilisation réelle de cookies]
            </p>

            <h2>Crédits</h2>
            <p>
              Conception et développement : [Nom du développeur/agence]<br />
              Photographies : [Crédits photos si applicable]
            </p>

            <h2>Conditions d'utilisation</h2>
            <p>
              L'utilisation du site FOC Iroise implique l'acceptation pleine et entière des conditions
              générales d'utilisation décrites ci-après. Ces conditions d'utilisation sont susceptibles
              d'être modifiées ou complétées à tout moment.
            </p>

            <h2>Limitation de responsabilité</h2>
            <p>
              Les informations contenues sur ce site sont aussi précises que possible et le site est
              périodiquement remis à jour, mais peut toutefois contenir des inexactitudes, des omissions
              ou des lacunes. Si vous constatez une erreur, merci de nous la signaler pour que nous
              puissions la corriger.
            </p>

            <h2>Litiges</h2>
            <p>
              Les présentes conditions sont régies par les lois françaises et tout litige qui ne pourrait
              faire l'objet d'un règlement amiable sera porté devant les tribunaux compétents.
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
