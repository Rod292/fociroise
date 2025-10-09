export interface ModuleDate {
  id: string
  module: 'module1' | 'module2' | 'module3' | 'module4' | 'moduleProthesiste'
  date: string // "16 & 17 janvier"
  location: 'Brest' | 'Guérande'
  maxPlaces: number
  currentRegistrations: number
  isComplete: boolean
  year: number
  createdAt: Date
  updatedAt: Date
}

export interface Registration {
  id: string
  // Informations personnelles
  nom: string
  prenom: string
  email: string
  telephone: string
  // Adresse
  adresseProfessionnelle: string
  codePostal: string
  ville: string
  pays: string
  // Modules sélectionnés
  module1?: string
  module2?: string
  module3?: string
  module4?: string
  moduleProthesiste?: string
  isGuerande: boolean
  // Message optionnel
  message?: string
  // Métadonnées
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
  emailSent: boolean
}

export interface AdminUser {
  email: string
  role: 'admin'
  createdAt: Date
}
