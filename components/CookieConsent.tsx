'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
}

const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>(DEFAULT_PREFERENCES)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      // Show banner after short delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000)
      return () => clearTimeout(timer)
    }
  }, [])

  // Listen for "Cookie-Einstellungen" click from Footer
  useEffect(() => {
    const handleSettingsClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('[data-cc="c-settings"]')) {
        e.preventDefault()
        // Load existing preferences
        const saved = localStorage.getItem('cookie-preferences')
        if (saved) {
          try {
            setPreferences(JSON.parse(saved))
          } catch {
            setPreferences(DEFAULT_PREFERENCES)
          }
        }
        setShowDetails(true)
        setIsVisible(true)
      }
    }

    document.addEventListener('click', handleSettingsClick)
    return () => document.removeEventListener('click', handleSettingsClick)
  }, [])

  const saveConsent = (prefs: CookiePreferences) => {
    localStorage.setItem('cookie-preferences', JSON.stringify(prefs))

    if (prefs.analytics || prefs.marketing) {
      localStorage.setItem('cookie-consent', 'accepted')
      window.dispatchEvent(new Event('cookie-consent-given'))
    } else {
      localStorage.setItem('cookie-consent', 'declined')
    }

    setIsVisible(false)
    setShowDetails(false)
  }

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setPreferences(allAccepted)
    saveConsent(allAccepted)
  }

  const declineOptional = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
    }
    setPreferences(onlyNecessary)
    saveConsent(onlyNecessary)
  }

  const saveSelection = () => {
    saveConsent(preferences)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-[9990] p-4 sm:p-6"
        >
          <div className="max-w-4xl mx-auto bg-oxford-blue/95 backdrop-blur-xl rounded-2xl border border-ghost-white/10 shadow-2xl p-6 sm:p-8">
            {!showDetails ? (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-ghost-white mb-2">
                    Wir respektieren Ihre Privatsphare
                  </h3>
                  <p className="text-ghost-white/70 text-sm leading-relaxed">
                    Wir verwenden Cookies, um Ihre Erfahrung zu verbessern, den Website-Traffic zu analysieren
                    und personalisierte Inhalte bereitzustellen. Sie konnen wahlen, welche Cookies Sie zulassen mochten.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-sm shadow-lg hover:shadow-aquamarine/30 transition-all duration-300 hover:scale-105"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={declineOptional}
                    className="px-6 py-3 bg-ghost-white/10 text-ghost-white font-semibold rounded-full text-sm border border-ghost-white/20 hover:border-ghost-white/40 transition-all duration-300"
                  >
                    Nur notwendige
                  </button>
                  <button
                    onClick={() => setShowDetails(true)}
                    className="px-6 py-3 text-aquamarine font-semibold text-sm hover:underline transition-all duration-300"
                  >
                    Einstellungen anpassen
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-ghost-white mb-2">
                    Cookie-Einstellungen
                  </h3>
                  <p className="text-ghost-white/70 text-sm leading-relaxed">
                    Wahlen Sie aus, welche Cookie-Kategorien Sie zulassen mochten.
                  </p>
                </div>

                <div className="space-y-4 mb-6">
                  {/* Necessary - always on */}
                  <div className="flex items-center justify-between p-4 bg-ghost-white/5 rounded-xl">
                    <div>
                      <p className="text-ghost-white font-semibold text-sm">Notwendig</p>
                      <p className="text-ghost-white/60 text-xs mt-1">
                        Erforderlich fur grundlegende Website-Funktionen wie Navigation und Sicherheit.
                      </p>
                    </div>
                    <div className="w-12 h-6 bg-aquamarine/30 rounded-full flex items-center px-1 cursor-not-allowed">
                      <div className="w-4 h-4 bg-aquamarine rounded-full ml-auto" />
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="flex items-center justify-between p-4 bg-ghost-white/5 rounded-xl">
                    <div>
                      <p className="text-ghost-white font-semibold text-sm">Analyse</p>
                      <p className="text-ghost-white/60 text-xs mt-1">
                        Helfen uns zu verstehen, wie Besucher mit der Website interagieren (Google Analytics, Clarity).
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                        preferences.analytics ? 'bg-aquamarine/30' : 'bg-ghost-white/20'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          preferences.analytics
                            ? 'bg-aquamarine ml-auto'
                            : 'bg-ghost-white/50 ml-0'
                        }`}
                      />
                    </button>
                  </div>

                  {/* Marketing */}
                  <div className="flex items-center justify-between p-4 bg-ghost-white/5 rounded-xl">
                    <div>
                      <p className="text-ghost-white font-semibold text-sm">Marketing</p>
                      <p className="text-ghost-white/60 text-xs mt-1">
                        Werden verwendet, um Besuchern relevante Werbung anzuzeigen (Meta Pixel).
                      </p>
                    </div>
                    <button
                      onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                      className={`w-12 h-6 rounded-full flex items-center px-1 transition-colors duration-300 ${
                        preferences.marketing ? 'bg-aquamarine/30' : 'bg-ghost-white/20'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${
                          preferences.marketing
                            ? 'bg-aquamarine ml-auto'
                            : 'bg-ghost-white/50 ml-0'
                        }`}
                      />
                    </button>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={saveSelection}
                    className="px-6 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-sm shadow-lg hover:shadow-aquamarine/30 transition-all duration-300 hover:scale-105"
                  >
                    Auswahl speichern
                  </button>
                  <button
                    onClick={acceptAll}
                    className="px-6 py-3 bg-ghost-white/10 text-ghost-white font-semibold rounded-full text-sm border border-ghost-white/20 hover:border-ghost-white/40 transition-all duration-300"
                  >
                    Alle akzeptieren
                  </button>
                  <button
                    onClick={() => setShowDetails(false)}
                    className="px-6 py-3 text-ghost-white/70 font-semibold text-sm hover:text-ghost-white transition-all duration-300"
                  >
                    Zuruck
                  </button>
                </div>
              </>
            )}

            <div className="mt-4 pt-4 border-t border-ghost-white/10">
              <a
                href="/datenschutzerklaerung"
                className="text-ghost-white/50 text-xs hover:text-aquamarine transition-colors duration-300"
              >
                Mehr in unserer Datenschutzerklarung
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
