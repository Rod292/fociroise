'use client'

import { useState } from 'react'

const MODULE_DATES_2026 = {
  module1: [
    '16 & 17 janvier 2026',
    '30 & 31 janvier 2026',
    '13 & 14 février 2026',
  ],
  module2: [
    '13 & 14 mars 2026',
    '27 & 28 mars 2026',
    '10 & 11 avril 2026',
  ],
  module3: [
    '11 & 12 septembre 2026',
    '25 & 26 septembre 2026',
    '9 & 10 octobre 2026',
  ],
  moduleProthesiste: [
    '27 & 28 février 2026',
  ],
  guerande: [
    'Module 1: 24 & 25 avril 2026 à Guérande',
    'Module 2: 12 & 13 juin 2026 à Guérande',
    'Module 3: 23 & 24 octobre 2026 à Guérande',
  ],
}

export default function InscriptionForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    adresseProfessionnelle: '',
    codePostal: '',
    ville: '',
    pays: 'France',
    email: '',
    telephone: '',
    module1: '',
    module2: '',
    module3: '',
    moduleProthesiste: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch('/api/inscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          nom: '',
          prenom: '',
          adresseProfessionnelle: '',
          codePostal: '',
          ville: '',
          pays: 'France',
          email: '',
          telephone: '',
          module1: '',
          module2: '',
          module3: '',
          moduleProthesiste: '',
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="nom" className="block text-sm font-medium text-gray-900 mb-2">
            Nom *
          </label>
          <input
            type="text"
            id="nom"
            name="nom"
            required
            value={formData.nom}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="prenom" className="block text-sm font-medium text-gray-900 mb-2">
            Prénom *
          </label>
          <input
            type="text"
            id="prenom"
            name="prenom"
            required
            value={formData.prenom}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="adresseProfessionnelle" className="block text-sm font-medium text-gray-900 mb-2">
          Adresse professionnelle *
        </label>
        <input
          type="text"
          id="adresseProfessionnelle"
          name="adresseProfessionnelle"
          required
          value={formData.adresseProfessionnelle}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label htmlFor="codePostal" className="block text-sm font-medium text-gray-900 mb-2">
            Code postal *
          </label>
          <input
            type="text"
            id="codePostal"
            name="codePostal"
            required
            value={formData.codePostal}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="ville" className="block text-sm font-medium text-gray-900 mb-2">
            Ville *
          </label>
          <input
            type="text"
            id="ville"
            name="ville"
            required
            value={formData.ville}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="pays" className="block text-sm font-medium text-gray-900 mb-2">
            Pays *
          </label>
          <input
            type="text"
            id="pays"
            name="pays"
            required
            value={formData.pays}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
            Adresse e-mail *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>

        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-900 mb-2">
            Téléphone *
          </label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            required
            value={formData.telephone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Sélection des modules</h3>

        <div>
          <label htmlFor="module1" className="block text-sm font-medium text-gray-900 mb-2">
            Module 1
          </label>
          <select
            id="module1"
            name="module1"
            value={formData.module1}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Sélectionner une date</option>
            {MODULE_DATES_2026.module1.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="module2" className="block text-sm font-medium text-gray-900 mb-2">
            Module 2
          </label>
          <select
            id="module2"
            name="module2"
            value={formData.module2}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Sélectionner une date</option>
            {MODULE_DATES_2026.module2.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="module3" className="block text-sm font-medium text-gray-900 mb-2">
            Module 3
          </label>
          <select
            id="module3"
            name="module3"
            value={formData.module3}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Sélectionner une date</option>
            {MODULE_DATES_2026.module3.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="moduleProthesiste" className="block text-sm font-medium text-gray-900 mb-2">
            Module Prothésiste
          </label>
          <select
            id="moduleProthesiste"
            name="moduleProthesiste"
            value={formData.moduleProthesiste}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Sélectionner une date</option>
            {MODULE_DATES_2026.moduleProthesiste.map((date) => (
              <option key={date} value={date}>{date}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
          Message (facultatif)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
        />
      </div>

      {status === 'success' && (
        <div className="bg-green-50 border-l-4 border-green-400 p-4">
          <p className="text-green-900 font-medium">
            Votre demande d'inscription a été envoyée avec succès ! Nous vous contacterons prochainement.
          </p>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4">
          <p className="text-red-900 font-medium">
            Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 text-lg font-semibold text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande d\'inscription'}
      </button>
    </form>
  )
}
