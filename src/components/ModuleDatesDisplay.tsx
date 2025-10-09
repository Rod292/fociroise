'use client'

import { useEffect, useState } from 'react'

export default function ModuleDatesDisplay() {
  const [modules, setModules] = useState<any>({
    module1: [],
    module2: [],
    module3: [],
    module4: [],
    moduleProthesiste: [],
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchModules = async () => {
      try {
        const response = await fetch('/api/modules')
        const data = await response.json()
        setModules(data.modules || {})
      } catch (error) {
        console.error('Error fetching modules:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchModules()
  }, [])

  if (loading) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
        <div className="text-center py-8">
          <p className="text-gray-600">Chargement des dates...</p>
        </div>
      </div>
    )
  }

  const brestModules = {
    module1: modules.module1?.filter((m: any) => m.location === 'Brest') || [],
    module2: modules.module2?.filter((m: any) => m.location === 'Brest') || [],
    module3: modules.module3?.filter((m: any) => m.location === 'Brest') || [],
    module4: modules.module4?.filter((m: any) => m.location === 'Brest') || [],
    moduleProthesiste: modules.moduleProthesiste?.filter((m: any) => m.location === 'Brest') || [],
  }

  const guerandeModules = {
    module1: modules.module1?.filter((m: any) => m.location === 'Guérande') || [],
    module2: modules.module2?.filter((m: any) => m.location === 'Guérande') || [],
    module3: modules.module3?.filter((m: any) => m.location === 'Guérande') || [],
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-sm">
      <div className="flex items-center gap-3 mb-8">
        <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h2 className="text-3xl font-bold text-gray-900">
          Dates 2026
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Module 1 */}
        {brestModules.module1.length > 0 && (
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
            <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-bold">1</span>
              Module 1
            </h3>
            <ul className="space-y-2 text-gray-700">
              {brestModules.module1.map((item: any) => (
                <li key={item.id} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Module 2 */}
        {brestModules.module2.length > 0 && (
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
            <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-bold">2</span>
              Module 2
            </h3>
            <ul className="space-y-2 text-gray-700">
              {brestModules.module2.map((item: any) => (
                <li key={item.id} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Module 3 */}
        {brestModules.module3.length > 0 && (
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6 border border-primary-200">
            <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-primary-600 text-white rounded-full text-sm font-bold">3</span>
              Module 3
            </h3>
            <ul className="space-y-2 text-gray-700">
              {brestModules.module3.map((item: any) => (
                <li key={item.id} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-primary-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Module 4 */}
        {brestModules.module4.length > 0 && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span className="flex items-center justify-center w-8 h-8 bg-gray-600 text-white rounded-full text-sm font-bold">4</span>
              Module 4
            </h3>
            <ul className="space-y-2 text-gray-700">
              {brestModules.module4.map((item: any) => (
                <li key={item.id} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Module Prothésiste */}
        {brestModules.moduleProthesiste.length > 0 && (
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-6 border border-gray-200 md:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 008 10.586V5L7 4z" />
              </svg>
              Module Prothésiste
            </h3>
            <ul className="space-y-2 text-gray-700">
              {brestModules.moduleProthesiste.map((item: any) => (
                <li key={item.id} className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item.date}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Guérande */}
      {(guerandeModules.module1.length > 0 || guerandeModules.module2.length > 0 || guerandeModules.module3.length > 0) && (
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-amber-300 rounded-xl p-6">
          <h3 className="text-lg font-bold text-amber-900 mb-3 flex items-center gap-2">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Sessions exceptionnelles 2026 à Guérande (44)
          </h3>
          <div className="bg-amber-100 border border-amber-300 rounded-lg p-4 mb-4">
            <p className="text-sm text-amber-900 font-medium">
              ⚠️ Il est impossible de panacher ces modules avec les sessions brestoises
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {guerandeModules.module1.length > 0 && (
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-amber-900 mb-1">Module 1</p>
                {guerandeModules.module1.map((item: any) => (
                  <p key={item.id} className="text-gray-700">{item.date}</p>
                ))}
              </div>
            )}
            {guerandeModules.module2.length > 0 && (
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-amber-900 mb-1">Module 2</p>
                {guerandeModules.module2.map((item: any) => (
                  <p key={item.id} className="text-gray-700">{item.date}</p>
                ))}
              </div>
            )}
            {guerandeModules.module3.length > 0 && (
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <p className="font-semibold text-amber-900 mb-1">Module 3</p>
                {guerandeModules.module3.map((item: any) => (
                  <p key={item.id} className="text-gray-700">{item.date}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
