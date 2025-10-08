# FOC Iroise - Site web

Site web de la formation occlusale continue FOC Iroise à Brest.

## Stack technique

- **Framework**: Next.js 15 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS + Tailwind Typography
- **Optimisations**: ISR (Incremental Static Regeneration)

## Installation

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Builder pour la production
npm run build

# Lancer en production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000).

## Structure du projet

```
/src
  /app
    layout.tsx           # Layout principal avec Header/Footer
    page.tsx            # Page d'accueil (landing)
    globals.css         # Styles globaux Tailwind
    sitemap.ts          # Génération du sitemap SEO
    robots.ts           # Génération du robots.txt
    /(site)
      /formateurs       # Page équipe de formateurs
      /programme        # Page programme + sous-pages modules
      /inscription      # Page inscription & contact
      /nos-diplomes     # Page témoignages diplômés
      /location-salle   # Page location de salle
      /mentions-legales # Page mentions légales
  /components
    Header.tsx          # Navigation principale
    Footer.tsx          # Pied de page
    CTAButtons.tsx      # Boutons d'action réutilisables
  /config
    navigation.ts       # Configuration centralisée navigation & contact
```

## Personnalisation à faire

### 1. Images
Ajoutez vos images dans `/public/images/` :
- Logo FOC Iroise (plusieurs formats si disponibles)
- Photo de l'équipe des formateurs
- Autres visuels nécessaires

Ensuite, remplacez les placeholders dans :
- [src/components/Header.tsx](src/components/Header.tsx) (logo)
- [src/app/(site)/formateurs/page.tsx](src/app/(site)/formateurs/page.tsx) (photo équipe)

### 2. Informations de contact
Modifiez [src/config/navigation.ts](src/config/navigation.ts) :
- `email`: votre email de contact
- `phone`: votre numéro de téléphone
- `address`: votre adresse complète

### 3. Contenu des pages
Personnalisez le contenu dans :
- **Formateurs** : biographies, spécialités, parcours
- **Programme** : durées des modules, contenus détaillés
- **Nos diplômés** : témoignages réels, statistiques
- **Location salle** : équipements, tarifs, photos
- **Mentions légales** : informations légales complètes

### 4. SEO
Dans [src/app/sitemap.ts](src/app/sitemap.ts) et [src/app/robots.ts](src/app/robots.ts) :
- Remplacez `https://fociroise.fr` par votre domaine réel

Dans [src/app/layout.tsx](src/app/layout.tsx) :
- Ajustez la `metadataBase` avec votre domaine

### 5. Couleurs (optionnel)
Si vous souhaitez ajuster la palette médicale bleue :
- Modifiez [tailwind.config.js](tailwind.config.js) section `colors.primary`

## Optimisations SEO incluses

✅ Metadata API Next.js sur toutes les pages
✅ Sitemap.xml généré automatiquement
✅ Robots.txt permissif
✅ Balises sémantiques HTML5 (header, nav, main, footer, section)
✅ Structure H1/H2 correcte
✅ ISR (revalidation 3600s) pour pages statiques
✅ OpenGraph pour réseaux sociaux

## Accessibilité

✅ Navigation clavier complète
✅ Aria-labels sur éléments interactifs
✅ Focus visible
✅ Contraste de couleurs conforme WCAG
✅ Tailles de clic minimales (44x44px)

## Performance

✅ Pas de JavaScript côté client superflu
✅ Tailwind CSS optimisé (purge en production)
✅ Images Next.js optimisées (quand ajoutées)
✅ Fonts système (Inter) avec display:swap
✅ ISR pour temps de chargement rapide

## Prochaines étapes

1. **Installation** : `npm install`
2. **Ajouter vos images** dans `/public/images/`
3. **Personnaliser le contenu** des pages
4. **Mettre à jour les infos de contact** dans `navigation.ts`
5. **Tester en local** : `npm run dev`
6. **Déployer** (Vercel, Netlify, etc.)

## Support

Pour toute question sur la structure technique du site, consultez la [documentation Next.js](https://nextjs.org/docs).
