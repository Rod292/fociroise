'use client'

import { useEffect, useState } from 'react'
import { auth } from '@/lib/firebase'
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { ModuleDate, Registration } from '@/types/admin'

export default function AdminPage() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [activeTab, setActiveTab] = useState<'modules' | 'registrations'>('modules')

  // Modules state
  const [modules, setModules] = useState<ModuleDate[]>([])
  const [showAddModule, setShowAddModule] = useState(false)

  // Registrations state
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'pending' | 'confirmed' | 'cancelled'>('all')

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user)
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

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err: any) {
      setError('Échec de la connexion. Vérifiez vos identifiants.')
      console.error(err)
    }
  }

  const handleLogout = async () => {
    await signOut(auth)
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
            <p className="text-gray-600 mt-2">Connectez-vous pour accéder au panneau d'administration</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Mot de passe
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              Se connecter
            </button>
          </form>
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
              👥 Inscriptions
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
          />
        ) : (
          <RegistrationsTab
            registrations={registrations}
            selectedStatus={selectedStatus}
            onStatusChange={setSelectedStatus}
            onUpdateStatus={updateRegistrationStatus}
            onDelete={deleteRegistration}
          />
        )}
      </div>
    </div>
  )
}

// Modules Tab Component
function ModulesTab({ modules, onRefresh, onToggleComplete }: any) {
  const groupedModules = modules.reduce((acc: any, module: ModuleDate) => {
    const key = `${module.year}-${module.module}`
    if (!acc[key]) acc[key] = []
    acc[key].push(module)
    return acc
  }, {})

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Modules et dates</h2>
        <button
          onClick={onRefresh}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
        >
          ➕ Ajouter un module
        </button>
      </div>

      {Object.entries(groupedModules).map(([key, mods]: [string, any]) => {
        const [year, module] = key.split('-')
        return (
          <div key={key} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                {module.replace('module', 'Module ')} - {year}
              </h3>
            </div>
            <div className="divide-y divide-gray-200">
              {mods.map((mod: ModuleDate) => (
                <div key={mod.id} className="px-6 py-4 flex items-center justify-between">
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
                      {mod.currentRegistrations} / {mod.maxPlaces} places
                    </p>
                  </div>
                  <button
                    onClick={() => onToggleComplete(mod)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                      mod.isComplete
                        ? 'bg-green-100 text-green-700 hover:bg-green-200'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {mod.isComplete ? 'Réouvrir' : 'Marquer complet'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )
      })}

      {modules.length === 0 && (
        <div className="bg-white rounded-lg shadow p-8 text-center">
          <p className="text-gray-500">Aucun module trouvé. Ajoutez votre premier module.</p>
        </div>
      )}
    </div>
  )
}

// Registrations Tab Component
function RegistrationsTab({ registrations, selectedStatus, onStatusChange, onUpdateStatus, onDelete }: any) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold text-gray-900">Inscriptions</h2>
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
                  <div className="text-sm text-gray-500">{reg.ville}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{reg.email}</div>
                  <div className="text-sm text-gray-500">{reg.telephone}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 space-y-1">
                    {reg.module1 && <div>M1: {reg.module1}</div>}
                    {reg.module2 && <div>M2: {reg.module2}</div>}
                    {reg.module3 && <div>M3: {reg.module3}</div>}
                    {reg.moduleProthesiste && <div className="text-amber-600">MP: {reg.moduleProthesiste}</div>}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <select
                    value={reg.status}
                    onChange={(e) => onUpdateStatus(reg.id, e.target.value)}
                    className="text-sm border-gray-300 rounded-md"
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
          <div className="p-8 text-center text-gray-500">
            Aucune inscription trouvée.
          </div>
        )}
      </div>
    </div>
  )
}
