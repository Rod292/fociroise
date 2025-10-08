import { MetadataRoute } from 'next'

/**
 * Génération du fichier robots.txt pour le SEO
 * Configuration permissive autorisant l'indexation par tous les robots
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://fociroise.fr' // À remplacer par votre domaine réel

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
