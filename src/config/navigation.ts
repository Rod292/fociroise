/**
 * Configuration centralisée de la navigation du site
 * Facilite la maintenance et assure la cohérence entre Header, Footer et sitemap
 */

export interface NavItem {
  label: string
  href: string
  children?: NavItem[]
}

export const mainNavigation: NavItem[] = [
  {
    label: 'Formateurs',
    href: '/formateurs',
  },
  {
    label: 'Programme',
    href: '/programme',
    children: [
      {
        label: 'Module 1',
        href: '/programme/module-1',
      },
      {
        label: 'Module 2',
        href: '/programme/module-2',
      },
      {
        label: 'Module 3',
        href: '/programme/module-3',
      },
      {
        label: 'Module 4',
        href: '/programme/module-4',
      },
      {
        label: 'Module Prothésiste',
        href: '/programme/module-prothesiste',
      },
    ],
  },
  {
    label: 'Inscription',
    href: '/inscription',
  },
  {
    label: 'Nos diplômés',
    href: '/nos-diplomes',
  },
  {
    label: 'Location salle',
    href: '/location-salle',
  },
]

export const footerNavigation = {
  resources: [
    { label: 'Programme', href: '/programme' },
    { label: 'Inscription & Accès', href: '/inscription' },
    { label: 'FAQ', href: '/faq' },
  ],
  about: [
    { label: 'Contact', href: '/inscription' }, // Contact fusionné avec inscription
    { label: 'Mentions Légales', href: '/mentions-legales' },
  ],
}

// Informations de contact
export const contactInfo = {
  email: 'contact@fociroise.fr',
  phone: '+33298072304',
  phoneDisplay: '02 98 07 23 04',
  address: '22 rue Algésiras, 29200 Brest',
  addressShort: 'Brest, Finistère',
}
