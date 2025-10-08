'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function AlertBanner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex-shrink-0 bg-white/20 rounded-full p-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm sm:text-base font-medium">
                <strong>Information importante :</strong> Suite à un problème technique sur l'ancienne version du site, nous n'avons malheureusement pas reçu certaines inscriptions.
                Si vous vous êtes inscrit(e) récemment et n'avez pas reçu de confirmation, merci de{' '}
                <Link href="/inscription" className="underline font-bold hover:text-amber-100 transition-colors">
                  ressaisir le formulaire
                </Link>.
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-2 hover:bg-white/20 rounded-lg transition-colors"
            aria-label="Fermer le message"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
