'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiShieldCheck, HiOutlineCake, HiExternalLink } from 'react-icons/hi'
import Script from 'next/script'

const CookieModal = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setTimeout(() => setIsOpen(true), 1000)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    // Trigger Analytics initialization event
    window.dispatchEvent(new Event('cookie-consent-given'))
    setIsOpen(false)
  }

  const rejectCookies = () => {
    localStorage.setItem('cookie-consent', 'rejected')
    setIsOpen(false)
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-gradient-to-br from-oxford-blue to-oxford-blue/95 border border-ghost-white/20 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden"
            >
              {/* Background Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-32 h-32 bg-aquamarine/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-tropical-indigo/10 rounded-full blur-2xl" />
              </div>

              <div className="relative z-10 p-8">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-aquamarine/20 rounded-xl">
                    <HiOutlineCake className="w-6 h-6 text-aquamarine" />
                  </div>
                  <h3 className="text-2xl font-bold text-ghost-white">
                    Cookie-Einstellungen
                  </h3>
                </div>

                {/* Main Content */}
                <div className="space-y-4">
                  <p className="text-ghost-white/80 leading-relaxed">
                    Wir verwenden Cookies und ähnliche Technologien, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Einige Cookies sind notwendig für die Funktion der Seite, andere helfen uns, Ihr Erlebnis zu verbessern und unsere Services zu optimieren.
                  </p>

                  {/* Cookie Details */}
                  {showDetails && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="bg-ghost-white/5 rounded-xl p-4 space-y-3"
                    >
                      <h4 className="font-semibold text-ghost-white text-sm">Verwendete Tools & Services:</h4>
                      <ul className="text-ghost-white/70 text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-aquamarine rounded-full" />
                          <span>Google Tag Manager - Website-Analytics und Conversion-Tracking</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-aquamarine rounded-full" />
                          <span>Google Analytics 4 - Nutzerverhalten und Traffic-Analyse</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-aquamarine rounded-full" />
                          <span>Meta Pixel - Social Media Marketing und Retargeting</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-aquamarine rounded-full" />
                          <span>Microsoft Clarity - Heatmaps und Session-Aufzeichnungen</span>
                        </li>
                      </ul>
                    </motion.div>
                  )}

                  {/* Features */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <HiShieldCheck className="w-5 h-5 text-aquamarine flex-shrink-0" />
                      <span className="text-ghost-white/90 text-sm">
                        100% DSGVO-konform und transparent
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HiShieldCheck className="w-5 h-5 text-aquamarine flex-shrink-0" />
                      <span className="text-ghost-white/90 text-sm">
                        Volle Kontrolle über Ihre Daten - keine Weitergabe an Dritte ohne Einwilligung
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <HiShieldCheck className="w-5 h-5 text-aquamarine flex-shrink-0" />
                      <span className="text-ghost-white/90 text-sm">
                        Jederzeit änderbar in den Datenschutzeinstellungen
                      </span>
                    </div>
                  </div>

                  {/* Details Toggle */}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center gap-2 text-aquamarine/80 hover:text-aquamarine text-sm transition-colors"
                  >
                    <span>{showDetails ? 'Weniger anzeigen' : 'Mehr Details anzeigen'}</span>
                    <motion.div
                      animate={{ rotate: showDetails ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiExternalLink className="w-4 h-4" />
                    </motion.div>
                  </button>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <motion.button
                    onClick={acceptCookies}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-xl shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                  >
                    Alle akzeptieren
                  </motion.button>
                  <motion.button
                    onClick={rejectCookies}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 px-6 py-3 bg-ghost-white/10 text-ghost-white border border-ghost-white/30 rounded-xl font-bold backdrop-blur-sm hover:bg-ghost-white/20 transition-all duration-300"
                  >
                    Nur notwendige
                  </motion.button>
                </div>

                {/* Legal Links */}
                <div className="flex flex-wrap gap-4 justify-center mt-4 text-sm">
                  <a 
                    href="/datenschutz" 
                    className="text-aquamarine/80 hover:text-aquamarine transition-colors flex items-center gap-1"
                  >
                    Datenschutzerklärung
                    <HiExternalLink className="w-3 h-3" />
                  </a>
                  <a 
                    href="/impressum" 
                    className="text-aquamarine/80 hover:text-aquamarine transition-colors flex items-center gap-1"
                  >
                    Impressum
                    <HiExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Close Button */}
              <motion.button
                onClick={rejectCookies}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute top-4 right-4 p-2 text-ghost-white/60 hover:text-ghost-white transition-colors"
              >
                <HiX className="w-5 h-5" />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Structured Data Scripts - Only load after consent */}
      <Script
        id="structured-data-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Gentle Group',
            legalName: 'Berk-Can Atesoglu',
            url: 'https://gentle-Group.com',
            logo: 'https://gentle-Group.com/logo.svg',
            description: 'Professionelle Webentwicklung, Softwarelösungen und KI-Integration aus Düsseldorf',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Oberbilker Allee 319',
              addressLocality: 'Düsseldorf',
              postalCode: '40227',
              addressCountry: 'DE'
            },
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              areaServed: 'DE',
              availableLanguage: ['de', 'en']
            },
            sameAs: [
              'https://www.linkedin.com/company/gentle-Group',
              'https://github.com/gentle-Group'
            ]
          })
        }}
      />

      <Script
        id="structured-data-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Gentle Group',
            url: 'https://gentle-Group.com',
            description: 'Professionelle Webentwicklung, Softwarelösungen und KI-Integration',
            inLanguage: 'de-DE'
          })
        }}
      />

      <Script
        id="structured-data-local-business"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Gentle Group',
            image: 'https://gentle-Group.com/logo.svg',
            '@id': 'https://gentle-Group.com',
            url: 'https://gentle-Group.com',
            telephone: '+49-XXX-XXXXXXX',
            priceRange: '€€',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Oberbilker Allee 319',
              addressLocality: 'Düsseldorf',
              postalCode: '40227',
              addressCountry: 'DE'
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 51.2099,
              longitude: 6.7727
            },
            openingHoursSpecification: {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: [
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday'
              ],
              opens: '09:00',
              closes: '18:00'
            }
          })
        }}
      />
    </>
  )
}

export default CookieModal