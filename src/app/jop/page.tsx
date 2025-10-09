'use client'

import { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase'
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { ModuleDate, Registration } from '@/types/admin'

const ALLOWED_EMAILS = [
  'jacquesolivier.pers@gmail.com',
  'rodrigue.pers29@gmail.com'
]

export default function AdminPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'modules' | 'registrations'>('modules')

  // Modules state
  const [modules, setModules] = useState<ModuleDate[]>([])
  const [showAddModule, setShowAddModule] = useState(false)
  const [showAddRegistration, setShowAddRegistration] = useState(false)

  // Registrations state
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      // Vérifier si l'email est autorisé
      if (user && !ALLOWED_EMAILS.includes(user.email || '')) {
        setError('Accès non autorisé. Cet email n\'a pas les permissions administrateur.')
        signOut(auth)
        setUser(null)
      } else {
        setUser(user)
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  useEffect(() => {
    if (user) {
      if (activeTab === 'modules') {
        fetchModules()
      } else {
        fetchRegistrations()
      }
    }
  }, [user, activeTab, selectedStatus])

  const handleGoogleLogin = async () => {
    setError('')
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)

      // Vérifier si l'email est autorisé
      if (!ALLOWED_EMAILS.includes(result.user.email || '')) {
        setError('Accès non autorisé. Seuls jacquesolivier.pers@gmail.com et rodrigue.pers29@gmail.com peuvent accéder.')
        await signOut(auth)
      }
    } catch (err: any) {
      if (err.code === 'auth/popup-closed-by-user') {
        setError('Connexion annulée.')
      } else {
        setError('Échec de la connexion. Veuillez réessayer.')
      }
      console.error(err)
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
    setError('')
  }

  const fetchModules = async () => {
    try {
      const res = await fetch('/api/admin/modules')
      const data = await res.json()
      setModules(data.modules || [])
    } catch (err) {
      console.error('Error fetching modules:', err)
    }
  }

  const fetchRegistrations = async () => {
    try {
      const url = selectedStatus === 'all'
        ? '/api/admin/registrations'
        : `/api/admin/registrations?status=${selectedStatus}`
      const res = await fetch(url)
      const data = await res.json()
      setRegistrations(data.registrations || [])
    } catch (err) {
      console.error('Error fetching registrations:', err)
    }
  }

  const toggleModuleComplete = async (module: ModuleDate) => {
    try {
      await fetch('/api/admin/modules', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: module.id,
          isComplete: !module.isComplete,
        }),
      })
      fetchModules()
    } catch (err) {
      console.error('Error updating module:', err)
    }
  }

  const deleteModule = async (moduleId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce module ? Cette action est irréversible.')) return

    try {
      await fetch(`/api/admin/modules?id=${moduleId}`, {
        method: 'DELETE',
      })
      fetchModules()
    } catch (err) {
      console.error('Error deleting module:', err)
    }
  }

  const updateRegistrationStatus = async (regId: string, newStatus: 'pending' | 'confirmed' | 'cancelled') => {
    try {
      await fetch('/api/admin/registrations', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          id: regId,
          status: newStatus,
        }),
      })
      fetchRegistrations()
    } catch (err) {
      console.error('Error updating registration:', err)
    }
  }

  const deleteRegistration = async (regId: string) => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer cette inscription ?')) return

    try {
      await fetch(`/api/admin/registrations?id=${regId}`, {
        method: 'DELETE',
      })
      fetchRegistrations()
    } catch (err) {
      console.error('Error deleting registration:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Administration FOC Iroise</h1>
            <p className="text-gray-600 mt-2">Connectez-vous avec votre compte Google</p>
          </div>

          {error && (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded mb-6">
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          )}

          <button
            onClick={handleGoogleLogin}
            className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all shadow-sm"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Se connecter avec Google
          </button>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              Accès réservé aux administrateurs autorisés
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">📊 Administration FOC Iroise</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user.email}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('modules')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'modules'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📅 Gestion des modules
            </button>
            <button
              onClick={() => setActiveTab('registrations')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'registrations'
                  ? 'border-primary-600 text-primary-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              👥 Inscriptions ({registrations.length})
            </button>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'modules' ? (
          <ModulesTab
            modules={modules}
            onRefresh={fetchModules}
            onToggleComplete={toggleModuleComplete}
            onDelete={deleteModule}
            onShowAdd={() => setShowAddModule(true)}
          />
        ) : (
          <RegistrationsTab
            registrations={registrations}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            onUpdateStatus={updateRegistrationStatus}
            onDelete={deleteRegistration}
            onShowAdd={() => setShowAddRegistration(true)}
          />
        )}
      </div>

      {/* Add Module Modal */}
      {showAddModule && (
        <AddModuleModal
          onClose={() => setShowAddModule(false)}
          onSuccess={() => {
            setShowAddModule(false)
            fetchModules()
          }}
        />
      )}

      {/* Add Registration Modal */}
      {showAddRegistration && (
        <AddRegistrationModal
          modules={modules}
          onClose={() => setShowAddRegistration(false)}
          onSuccess={() => {
            setShowAddRegistration(false)
            fetchRegistrations()
          }}
        />
      )}
    </div>
  )
}

// Modules Tab Component
function ModulesTab({ modules, onRefresh, onToggleComplete, onDelete, onShowAdd }: any) {
  const groupedModules = modules.reduce((acc: any, module: ModuleDate) => {
    const key = `${module.year}-${module.module}`
    if (!acc[key]) acc[key] = []
    acc[key].push(module)
    return acc
  }, {})

  const moduleLabels: Record<string, string> = {
    module1: 'Module 1',
    module2: 'Module 2',
    module3: 'Module 3',
    moduleProthesiste: 'Module Prothésiste (Facultatif)'
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Modules et dates</h2>
        <button
          onClick={onShowAdd}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Ajouter un module
        </button>
      </div>

      {Object.entries(groupedModules).map(([key, mods]: [string, any]) => {
        const [year, module] = key.split('-')
        return (
          <div key={key} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {moduleLabels[module] || module} - {year}
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {mods.map((mod: ModuleDate) => (
                <div key={mod.id} className="px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-gray-900">{mod.date}</span>
                      <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                        📍 {mod.location}
                      </span>
                      {mod.isComplete && (
                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
                          ✓ Complet
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      <span className={mod.currentRegistrations >= mod.maxPlaces ? 'text-red-600 font-semibold' : ''}>
                        {mod.currentRegistrations} / {mod.maxPlaces} places
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onToggleComplete(mod)}
                      className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                        mod.isComplete
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                      }`}
                    >
                      {mod.isComplete ? '🔓 Réouvrir' : '🔒 Marquer complet'}
                    </button>
                    <button
                      onClick={() => onDelete(mod.id)}
                      className="px-4 py-2 rounded-lg font-medium text-sm bg-red-100 text-red-700 hover:bg-red-200 transition-colors"
                    >
                      🗑️ Supprimer
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {modules.length === 0 && (
        <div className="bg-white rounded-lg shadow p-12 text-center">
          <div className="text-6xl mb-4">📅</div>
          <p className="text-gray-500 text-lg mb-4">Aucun module trouvé</p>
          <button
            onClick={onShowAdd}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
          >
            Ajouter votre premier module
          </button>
        </div>
      )}
    </div>
  )
}

// Registrations Tab Component
function RegistrationsTab({ registrations, selectedStatus, onStatusChange, onUpdateStatus, onDelete, onShowAdd }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Inscriptions</h2>
        <div className="flex gap-2">
          <button
            onClick={onShowAdd}
            className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Ajouter manuellement
          </button>
        </div>
      </div>

      <div className="flex gap-2">
        {(['all', 'pending', 'confirmed', 'cancelled'] as const).map((status) => (
          <button
            key={status}
            onClick={() => onStatusChange(status)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedStatus === status
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {status === 'all' ? 'Toutes' : status === 'pending' ? 'En attente' : status === 'confirmed' ? 'Confirmées' : 'Annulées'}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Participant</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modules</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Statut</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {registrations.map((reg: Registration) => (
              <tr key={reg.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{reg.prenom} {reg.nom}</div>
                  <div className="text-sm text-gray-500">{reg.ville} - {reg.isGuerande ? 'Guérande' : 'Brest'}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{reg.email}</div>
                  <div className="text-sm text-gray-500">{reg.telephone}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 space-y-1">
                    {reg.module1 && <div>• M1: {reg.module1}</div>}
                    {reg.module2 && <div>• M2: {reg.module2}</div>}
                    {reg.module3 && <div>• M3: {reg.module3}</div>}
                    {reg.moduleProthesiste && <div className="text-amber-600">• MP: {reg.moduleProthesiste}</div>}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={reg.status}
                    onChange={(e) => onUpdateStatus(reg.id, e.target.value)}
                    className="text-sm border-gray-300 rounded-md focus:ring-primary-500 focus:border-primary-500"
                  >
                    <option value="pending">En attente</option>
                    <option value="confirmed">Confirmée</option>
                    <option value="cancelled">Annulée</option>
                  </select>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <button
                    onClick={() => onDelete(reg.id)}
                    className="text-red-600 hover:text-red-800 font-medium"
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {registrations.length === 0 && (
          <div className="p-12 text-center text-gray-500">
            <div className="text-6xl mb-4">👥</div>
            <p className="text-lg">Aucune inscription trouvée</p>
          </div>
        )}
      </div>
    </div>
  )
}

// Add Module Modal Component
function AddModuleModal({ onClose, onSuccess }: any) {
  const [formData, setFormData] = useState({
    module: 'module1',
    date: '',
    location: 'Brest',
    year: 2026,
    maxPlaces: 14
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const res = await fetch('/api/admin/modules', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        onSuccess()
      } else {
        alert('Erreur lors de l\'ajout du module')
      }
    } catch (err) {
      console.error('Error adding module:', err)
      alert('Erreur lors de l\'ajout du module')
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ajouter un module</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Module</label>
            <select
              value={formData.module}
              onChange={(e) => setFormData({ ...formData, module: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              required
            >
              <option value="module1">Module 1</option>
              <option value="module2">Module 2</option>
              <option value="module3">Module 3</option>
              <option value="moduleProthesiste">Module Prothésiste</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Date (ex: "15-16 février 2026")</label>
            <input
              type="text"
              value={formData.date}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              placeholder="15-16 février 2026"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Lieu</label>
            <select
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              required
            >
              <option value="Brest">Brest</option>
              <option value="Guérande">Guérande</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Année</label>
            <input
              type="number"
              value={formData.year}
              onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Places max</label>
            <input
              type="number"
              value={formData.maxPlaces}
              onChange={(e) => setFormData({ ...formData, maxPlaces: parseInt(e.target.value) })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

// Add Registration Modal Component
function AddRegistrationModal({ modules, onClose, onSuccess }: any) {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    adresseProfessionnelle: '',
    codePostal: '',
    ville: '',
    pays: 'France',
    module1: '',
    module2: '',
    module3: '',
    moduleProthesiste: '',
    isGuerande: false,
    message: '',
    status: 'confirmed' as 'pending' | 'confirmed' | 'cancelled',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // First create the registration in Firestore via API
      const res = await fetch('/api/admin/registrations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          createdAt: new Date(),
          updatedAt: new Date(),
          emailSent: false,
        }),
      })

      if (res.ok) {
        onSuccess()
      } else {
        alert('Erreur lors de l\'ajout de l\'inscription')
      }
    } catch (err) {
      console.error('Error adding registration:', err)
      alert('Erreur lors de l\'ajout de l\'inscription')
    }
  }

  const availableModules = modules.filter((m: ModuleDate) =>
    !m.isComplete && m.location === (formData.isGuerande ? 'Guérande' : 'Brest')
  )

  const module1Options = availableModules.filter((m: ModuleDate) => m.module === 'module1')
  const module2Options = availableModules.filter((m: ModuleDate) => m.module === 'module2')
  const module3Options = availableModules.filter((m: ModuleDate) => m.module === 'module3')
  const moduleProthesisteOptions = availableModules.filter((m: ModuleDate) => m.module === 'moduleProthesiste')

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full p-6 my-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ajouter une inscription manuellement</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Informations personnelles */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Nom *</label>
              <input
                type="text"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Prénom *</label>
              <input
                type="text"
                value={formData.prenom}
                onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Téléphone *</label>
              <input
                type="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>

          {/* Adresse */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Adresse professionnelle *</label>
            <input
              type="text"
              value={formData.adresseProfessionnelle}
              onChange={(e) => setFormData({ ...formData, adresseProfessionnelle: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Code postal *</label>
              <input
                type="text"
                value={formData.codePostal}
                onChange={(e) => setFormData({ ...formData, codePostal: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ville *</label>
              <input
                type="text"
                value={formData.ville}
                onChange={(e) => setFormData({ ...formData, ville: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Pays *</label>
              <input
                type="text"
                value={formData.pays}
                onChange={(e) => setFormData({ ...formData, pays: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              />
            </div>
          </div>

          {/* Localisation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Localisation</label>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setFormData({ ...formData, isGuerande: false, module1: '', module2: '', module3: '', moduleProthesiste: '' })}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  !formData.isGuerande ? 'bg-primary-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                📍 Brest
              </button>
              <button
                type="button"
                onClick={() => setFormData({ ...formData, isGuerande: true, module1: '', module2: '', module3: '', moduleProthesiste: '' })}
                className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
                  formData.isGuerande ? 'bg-amber-500 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                📍 Guérande
              </button>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Module 1 *</label>
              <select
                value={formData.module1}
                onChange={(e) => setFormData({ ...formData, module1: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              >
                <option value="">Sélectionner une date</option>
                {module1Options.map((m: ModuleDate) => (
                  <option key={m.id} value={m.date}>{m.date} ({m.maxPlaces - m.currentRegistrations} places)</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Module 2 *</label>
              <select
                value={formData.module2}
                onChange={(e) => setFormData({ ...formData, module2: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              >
                <option value="">Sélectionner une date</option>
                {module2Options.map((m: ModuleDate) => (
                  <option key={m.id} value={m.date}>{m.date} ({m.maxPlaces - m.currentRegistrations} places)</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Module 3 *</label>
              <select
                value={formData.module3}
                onChange={(e) => setFormData({ ...formData, module3: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                required
              >
                <option value="">Sélectionner une date</option>
                {module3Options.map((m: ModuleDate) => (
                  <option key={m.id} value={m.date}>{m.date} ({m.maxPlaces - m.currentRegistrations} places)</option>
                ))}
              </select>
            </div>

            {moduleProthesisteOptions.length > 0 && (
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Module Prothésiste (facultatif)</label>
                <select
                  value={formData.moduleProthesiste}
                  onChange={(e) => setFormData({ ...formData, moduleProthesiste: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
                >
                  <option value="">Aucun</option>
                  {moduleProthesisteOptions.map((m: ModuleDate) => (
                    <option key={m.id} value={m.date}>{m.date} ({m.maxPlaces - m.currentRegistrations} places)</option>
                  ))}
                </select>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Statut</label>
            <select
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500"
            >
              <option value="pending">En attente</option>
              <option value="confirmed">Confirmée</option>
              <option value="cancelled">Annulée</option>
            </select>
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              Ajouter l'inscription
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
