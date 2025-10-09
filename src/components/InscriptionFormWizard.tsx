'use client'

import { useState, useEffect } from 'react'

const MODULE_DATES_2026 = {
  module1: [
    { date: '16 & 17 janvier', id: 'm1-jan16' },
    { date: '30 & 31 janvier', id: 'm1-jan30' },
    { date: '13 & 14 février', id: 'm1-feb13' },
  ],
  module2: [
    { date: '13 & 14 mars', id: 'm2-mar13' },
    { date: '27 & 28 mars', id: 'm2-mar27' },
    { date: '10 & 11 avril', id: 'm2-apr10' },
  ],
  module3: [
    { date: '11 & 12 septembre', id: 'm3-sep11' },
    { date: '25 & 26 septembre', id: 'm3-sep25' },
    { date: '9 & 10 octobre', id: 'm3-oct9' },
  ],
  moduleProthesiste: [
    { date: '27 & 28 février', id: 'mp-feb27' },
  ],
  guerande: [
    { date: 'Module 1: 24 & 25 avril', id: 'g-m1-apr24' },
    { date: 'Module 2: 12 & 13 juin', id: 'g-m2-jun12' },
    { date: 'Module 3: 23 & 24 octobre', id: 'g-m3-oct23' },
  ],
}

export default function InscriptionFormWizard() {
  const [step, setStep] = useState(1)
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
    module4: '',
    moduleProthesiste: '',
    isGuerande: false,
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [addressSuggestions, setAddressSuggestions] = useState<any[]>([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchTimeout, setSearchTimeout] = useState<NodeJS.Timeout | null>(null)

  const searchAddress = async (query: string) => {
    if (query.length < 3) {
      setAddressSuggestions([])
      setShowSuggestions(false)
      return
    }

    const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
    console.log('🔍 Searching address:', query)
    console.log('🔑 Token exists:', !!token)

    try {
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(query)}.json?access_token=${token}&country=FR&language=fr&types=address&limit=5`
      console.log('📍 Fetching from Mapbox API')

      const response = await fetch(url)
      const data = await response.json()

      console.log('✅ Response status:', response.status)
      console.log('📦 Features found:', data.features?.length || 0)

      if (data.features && data.features.length > 0) {
        setAddressSuggestions(data.features)
        setShowSuggestions(true)
        console.log('✨ Showing suggestions')
      } else {
        setAddressSuggestions([])
        setShowSuggestions(false)
        console.log('⚠️ No suggestions found')
      }
    } catch (error) {
      console.error('❌ Error fetching address:', error)
      setAddressSuggestions([])
      setShowSuggestions(false)
    }
  }

  const selectAddress = (feature: any) => {
    const address = feature.place_name
    const context = feature.context || []

    let postcode = ''
    let city = ''
    let country = 'France'

    context.forEach((item: any) => {
      if (item.id.startsWith('postcode')) postcode = item.text
      if (item.id.startsWith('place')) city = item.text
      if (item.id.startsWith('country')) country = item.text
    })

    setFormData({
      ...formData,
      adresseProfessionnelle: address.split(',')[0],
      codePostal: postcode,
      ville: city,
      pays: country,
    })
    setShowSuggestions(false)
    setAddressSuggestions([])
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })

    // Trigger address search for address field with debounce
    if (name === 'adresseProfessionnelle') {
      if (searchTimeout) {
        clearTimeout(searchTimeout)
      }
      const timeout = setTimeout(() => {
        searchAddress(value)
      }, 300)
      setSearchTimeout(timeout)
    }

    // Clear error when user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' })
    }
  }

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis'
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis'
    if (!formData.email.trim()) newErrors.email = 'L\'email est requis'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide'
    if (!formData.telephone.trim()) newErrors.telephone = 'Le téléphone est requis'
    if (!formData.adresseProfessionnelle.trim()) newErrors.adresseProfessionnelle = 'L\'adresse est requise'
    if (!formData.codePostal.trim()) newErrors.codePostal = 'Le code postal est requis'
    if (!formData.ville.trim()) newErrors.ville = 'La ville est requise'

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.isGuerande) {
      // Vérifier que les 3 modules Brest sont sélectionnés
      if (!formData.module1) newErrors.module1 = 'Sélectionnez une date pour le Module 1'
      if (!formData.module2) newErrors.module2 = 'Sélectionnez une date pour le Module 2'
      if (!formData.module3) newErrors.module3 = 'Sélectionnez une date pour le Module 3'
    } else {
      // Pour Guérande, vérifier que le cycle complet est sélectionné
      if (!formData.module1 || !formData.module2 || !formData.module3) {
        newErrors.module1 = 'Vous devez sélectionner le cycle complet à Guérande'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (step === 1 && validateStep1()) {
      setStep(2)
    } else if (step === 2 && validateStep2()) {
      setStep(3)
    }
  }

  const handleBack = () => {
    setStep(step - 1)
  }

  const handleModuleSelect = (module: 'module1' | 'module2' | 'module3' | 'module4' | 'moduleProthesiste', value: string) => {
    setFormData({ ...formData, [module]: formData[module] === value ? '' : value })
    if (errors[module]) {
      setErrors({ ...errors, [module]: '' })
    }
  }

  const handleGuerandeToggle = () => {
    if (!formData.isGuerande) {
      // Switch to Guérande
      setFormData({
        ...formData,
        isGuerande: true,
        module1: 'Module 1: 24 & 25 avril',
        module2: 'Module 2: 12 & 13 juin',
        module3: 'Module 3: 23 & 24 octobre',
      })
    } else {
      // Switch to Brest
      setFormData({
        ...formData,
        isGuerande: false,
        module1: '',
        module2: '',
        module3: '',
      })
    }
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
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="mb-6 flex justify-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Inscription envoyée avec succès !
        </h3>
        <p className="text-gray-700 mb-8">
          Nous avons bien reçu votre demande d'inscription. Vous recevrez un email de confirmation prochainement.
        </p>
        <button
          onClick={() => {
            setStatus('idle')
            setStep(1)
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
              module4: '',
              moduleProthesiste: '',
              isGuerande: false,
              message: '',
            })
          }}
          className="px-6 py-3 text-primary-600 border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors font-semibold"
        >
          Nouvelle inscription
        </button>
      </div>
    )
  }

  return (
    <div>
      {/* Progress indicator */}
      <div className="mb-8">
        <div className="flex items-center mb-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`flex items-center ${s < 3 ? 'flex-1' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-colors ${
                s <= step ? 'bg-primary-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                {s < step ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : s}
              </div>
              {s < 3 && (
                <div className={`flex-1 h-1 mx-2 rounded transition-colors ${
                  s < step ? 'bg-primary-600' : 'bg-gray-200'
                }`} />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between text-xs sm:text-sm text-gray-600 mt-2">
          <span className={step === 1 ? 'font-semibold text-primary-600' : ''}>Informations</span>
          <span className={step === 2 ? 'font-semibold text-primary-600' : ''}>Modules</span>
          <span className={step === 3 ? 'font-semibold text-primary-600' : ''}>Confirmation</span>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Vos informations personnelles
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-900 mb-2">
                  Nom *
                </label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.nom ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.nom && <p className="mt-1 text-sm text-red-600">{errors.nom}</p>}
              </div>

              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-900 mb-2">
                  Prénom *
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="prenom"
                  value={formData.prenom}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.prenom ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.prenom && <p className="mt-1 text-sm text-red-600">{errors.prenom}</p>}
              </div>
            </div>

            <div className="relative">
              <label htmlFor="adresseProfessionnelle" className="block text-sm font-medium text-gray-900 mb-2">
                Adresse professionnelle *
                <span className="text-xs text-gray-500 font-normal ml-2">
                  (avec suggestions automatiques)
                </span>
              </label>
              <input
                type="text"
                id="adresseProfessionnelle"
                name="adresseProfessionnelle"
                autoComplete="off"
                value={formData.adresseProfessionnelle}
                onChange={handleChange}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
                placeholder="Commencez à taper votre adresse..."
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.adresseProfessionnelle ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.adresseProfessionnelle && <p className="mt-1 text-sm text-red-600">{errors.adresseProfessionnelle}</p>}

              {/* Suggestions dropdown */}
              {showSuggestions && addressSuggestions.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {addressSuggestions.map((suggestion, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => selectAddress(suggestion)}
                      className="w-full text-left px-4 py-3 hover:bg-primary-50 transition-colors border-b border-gray-100 last:border-b-0"
                    >
                      <div className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{suggestion.place_name}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              )}
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
                  autoComplete="postal-code"
                  value={formData.codePostal}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.codePostal ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.codePostal && <p className="mt-1 text-sm text-red-600">{errors.codePostal}</p>}
              </div>

              <div>
                <label htmlFor="ville" className="block text-sm font-medium text-gray-900 mb-2">
                  Ville *
                </label>
                <input
                  type="text"
                  id="ville"
                  name="ville"
                  autoComplete="address-level2"
                  value={formData.ville}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.ville ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.ville && <p className="mt-1 text-sm text-red-600">{errors.ville}</p>}
              </div>

              <div>
                <label htmlFor="pays" className="block text-sm font-medium text-gray-900 mb-2">
                  Pays *
                </label>
                <input
                  type="text"
                  id="pays"
                  name="pays"
                  autoComplete="country"
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
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-medium text-gray-900 mb-2">
                  Téléphone *
                </label>
                <input
                  type="tel"
                  id="telephone"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                    errors.telephone ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.telephone && <p className="mt-1 text-sm text-red-600">{errors.telephone}</p>}
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Module Selection */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Sélection des modules
              </h3>

              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    if (formData.isGuerande) {
                      handleGuerandeToggle()
                    }
                  }}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    !formData.isGuerande
                      ? 'bg-primary-600 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  📍 Brest
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (!formData.isGuerande) {
                      handleGuerandeToggle()
                    }
                  }}
                  className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all ${
                    formData.isGuerande
                      ? 'bg-amber-500 text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  📍 Guérande
                </button>
              </div>
            </div>

            {formData.isGuerande && (
              <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-4">
                <p className="text-sm text-amber-900 font-medium">
                  ⚠️ Sessions exceptionnelles à Guérande (44) - Il est impossible de panacher ces modules avec les sessions brestoises
                </p>
              </div>
            )}

            {!formData.isGuerande ? (
              <>
                {/* Module 1 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Module 1 *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {MODULE_DATES_2026.module1.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleModuleSelect('module1', item.date)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.module1 === item.date
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{item.date}</span>
                          {formData.module1 === item.date && (
                            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.module1 && <p className="mt-2 text-sm text-red-600">{errors.module1}</p>}
                </div>

                {/* Module 2 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Module 2 *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {MODULE_DATES_2026.module2.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleModuleSelect('module2', item.date)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.module2 === item.date
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{item.date}</span>
                          {formData.module2 === item.date && (
                            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.module2 && <p className="mt-2 text-sm text-red-600">{errors.module2}</p>}
                </div>

                {/* Module 3 */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Module 3 *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {MODULE_DATES_2026.module3.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleModuleSelect('module3', item.date)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.module3 === item.date
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{item.date}</span>
                          {formData.module3 === item.date && (
                            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                  {errors.module3 && <p className="mt-2 text-sm text-red-600">{errors.module3}</p>}
                </div>

                {/* Module Prothésiste */}
                <div>
                  <label className="block text-sm font-medium text-gray-900 mb-3">
                    Module Prothésiste <span className="text-gray-500 font-normal">(facultatif)</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {MODULE_DATES_2026.moduleProthesiste.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => handleModuleSelect('moduleProthesiste', item.date)}
                        className={`p-4 rounded-lg border-2 text-left transition-all ${
                          formData.moduleProthesiste === item.date
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-gray-900">{item.date}</span>
                          {formData.moduleProthesiste === item.date && (
                            <svg className="w-5 h-5 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <div className="bg-white border-2 border-amber-300 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-4">Cycle complet Guérande 2026</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Module 1: 24 & 25 avril</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Module 2: 12 & 13 juin</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-amber-50 rounded-lg">
                    <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="font-medium">Module 3: 23 & 24 octobre</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && (
          <div className="space-y-6">
            {/* Warning banner */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <p className="text-blue-900 font-medium flex items-center gap-2">
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                Veuillez vérifier attentivement vos informations avant de confirmer votre inscription
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Récapitulatif de votre inscription
            </h3>

            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Informations personnelles</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Nom :</span>
                    <span className="ml-2 font-medium">{formData.nom}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Prénom :</span>
                    <span className="ml-2 font-medium">{formData.prenom}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">Email :</span>
                    <span className="ml-2 font-medium">{formData.email}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">Téléphone :</span>
                    <span className="ml-2 font-medium">{formData.telephone}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">Adresse :</span>
                    <span className="ml-2 font-medium">{formData.adresseProfessionnelle}, {formData.codePostal} {formData.ville}, {formData.pays}</span>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Modules sélectionnés {formData.isGuerande && '(Guérande)'}</h4>
                <ul className="space-y-2 text-sm">
                  {formData.module1 && (
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{formData.module1}</span>
                    </li>
                  )}
                  {formData.module2 && (
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{formData.module2}</span>
                    </li>
                  )}
                  {formData.module3 && (
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">{formData.module3}</span>
                    </li>
                  )}
                  {formData.moduleProthesiste && (
                    <li className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Module Prothésiste: {formData.moduleProthesiste}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                Message complémentaire (facultatif)
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Avez-vous des questions ou des demandes particulières ?"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>

            {status === 'error' && (
              <div className="bg-red-50 border-l-4 border-red-400 p-4">
                <p className="text-red-900 font-medium">
                  Une erreur s'est produite. Veuillez réessayer ou nous contacter directement.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="flex justify-between mt-8 pt-6 border-t">
          {step > 1 && (
            <button
              type="button"
              onClick={handleBack}
              className="px-6 py-3 text-gray-700 border-2 border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
            >
              ← Précédent
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={handleNext}
              className="ml-auto px-6 py-3 text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
            >
              Suivant →
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={status === 'loading'}
              className="ml-auto px-8 py-3 text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                'Confirmer et envoyer mon inscription'
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  )
}
