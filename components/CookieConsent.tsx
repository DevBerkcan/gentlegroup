'use client'

import { useState, useEffect } from 'react'

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setShowBanner(true)
    } else {
      // Consent wurde bereits gegeben, Analytics laden
      window.dispatchEvent(new Event('cookie-consent-given'))
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowBanner(false)
    window.dispatchEvent(new Event('cookie-consent-given'))
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t-2 border-gray-200 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm text-gray-700">
            <p className="font-semibold mb-2">Cookie-Einstellungen</p>
            <p>
              Wir verwenden Cookies und ähnliche Technologien, um die Nutzung unserer Website zu analysieren
              und personalisierte Inhalte bereitzustellen. Mit Ihrer Zustimmung helfen Sie uns, unsere
              Dienstleistungen zu verbessern.{' '}
              <a href="/datenschutz" className="underline hover:text-blue-600">
                Mehr erfahren
              </a>
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button
              onClick={rejectCookies}
              className="px-6 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Ablehnen
            </button>
            <button
              onClick={acceptCookies}
              className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Akzeptieren
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
