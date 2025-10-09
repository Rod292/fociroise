# Configuration du panneau d'administration FOC Iroise

## 🔧 Étapes de configuration

### 1. Activer Cloud Firestore

Visitez ce lien pour activer l'API Firestore dans votre projet :
https://console.developers.google.com/apis/api/firestore.googleapis.com/overview?project=fociroise-7a148

Cliquez sur "ACTIVER" et attendez quelques minutes.

### 2. Créer la base de données Firestore

1. Allez sur https://console.firebase.google.com/project/fociroise-7a148/firestore
2. Cliquez sur "Créer une base de données"
3. Choisissez le mode "Production"
4. Sélectionnez une région (par exemple : `europe-west1`)

### 3. Configurer l'authentification Firebase

1. Allez sur https://console.firebase.google.com/project/fociroise-7a148/authentication
2. Cliquez sur "Commencer"
3. Activez "Email/Password" comme méthode de connexion
4. Ajoutez votre compte admin :
   - Email: `contact@fociroise.fr` (ou votre email admin)
   - Mot de passe: (choisissez un mot de passe sécurisé)

### 4. Configurer les règles de sécurité Firestore

Dans Firestore > Règles, ajoutez :

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Seuls les utilisateurs authentifiés (admin) peuvent lire/écrire
    match /{document=**} {
      allow read, write: if request.auth != null;
    }
  }
}
```

### 5. Initialiser les données

Une fois Firestore activé, exécutez :

```bash
npx tsx scripts/seed-modules.ts
```

Cela va créer tous les modules 2026 (Brest et Guérande) dans la base de données.

## 🎯 Accès au panneau d'administration

URL : **https://fociroise.fr/jop**

### Connexion

- Email : `contact@fociroise.fr` (ou l'email configuré)
- Mot de passe : celui que vous avez défini

## 📋 Fonctionnalités disponibles

### Gestion des modules

- ✅ Voir tous les modules par année et localisation
- ✅ Marquer un module comme "Complet" (il disparaîtra du formulaire)
- ✅ Voir le nombre d'inscriptions actuel vs places max (14)
- ➕ Ajouter de nouveaux modules/dates
- 🗑️ Supprimer des modules

### Gestion des inscriptions

- ✅ Voir toutes les inscriptions
- ✅ Filtrer par statut : En attente / Confirmées / Annulées
- ✅ Changer le statut d'une inscription
- ✅ Voir les détails complets (contact, modules choisis, etc.)
- 🗑️ Supprimer une inscription (désistement)

### Statistiques automatiques

- Compteur automatique d'inscriptions par module
- Mise à jour automatique lors de nouvelles inscriptions
- Suivi en temps réel du remplissage

## 🔒 Sécurité

- Authentification Firebase obligatoire
- Seuls les comptes autorisés peuvent accéder à /jop
- Les données sont stockées de manière sécurisée dans Firestore
- Les clés privées sont dans .env.local (gitignore)

## 📊 Structure des données

### Collection `moduleDates`
```typescript
{
  id: string
  module: 'module1' | 'module2' | 'module3' | 'moduleProthesiste'
  date: string // "15-16 février 2026"
  location: 'Brest' | 'Guérande'
  maxPlaces: number // 14
  currentRegistrations: number
  isComplete: boolean
  year: number // 2026
  createdAt: Date
  updatedAt: Date
}
```

### Collection `registrations`
```typescript
{
  id: string
  nom: string
  prenom: string
  email: string
  telephone: string
  adresseProfessionnelle: string
  codePostal: string
  ville: string
  pays: string
  module1?: string
  module2?: string
  module3?: string
  moduleProthesiste?: string
  isGuerande: boolean
  message?: string
  status: 'pending' | 'confirmed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
  emailSent: boolean
}
```

## 🚀 Workflow complet

1. **Nouvelle inscription** → Formulaire public (/inscription)
2. **Sauvegarde** → Firebase Firestore (collection `registrations`)
3. **Emails** → Envoi automatique admin + user (via Resend)
4. **Compteur** → Incrémentation automatique du `currentRegistrations`
5. **Gestion** → Admin peut voir/modifier via /jop
6. **Module complet** → Admin marque comme complet → disparaît du formulaire

## ⚙️ Variables d'environnement requises

Toutes déjà configurées dans `.env.local` :

- `FIREBASE_PROJECT_ID`
- `FIREBASE_CLIENT_EMAIL`
- `FIREBASE_PRIVATE_KEY`
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
