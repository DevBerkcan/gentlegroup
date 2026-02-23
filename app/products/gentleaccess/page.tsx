'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiEye, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

export default function GentleAccessPage() {
  const { actualTheme } = useTheme()
  const [showHint, setShowHint] = useState(true)

  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-oxford-blue'
  const mutedColor = actualTheme === 'dark' ? 'text-ghost-white/70' : 'text-oxford-blue/70'
  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const cardBg = actualTheme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
  const borderColor = actualTheme === 'dark' ? 'border-ghost-white/10' : 'border-gray-200'

  const features = [
    {
      title: 'WCAG 2.1 Compliance-Check',
      description: 'Automatische Überprüfung Ihrer Website auf Barrierefreiheits-Standards'
    },
    {
      title: 'Automatische Optimierungen',
      description: 'KI-gestützte Verbesserungen für bessere Zugänglichkeit'
    },
    {
      title: 'Screen-Reader Kompatibilität',
      description: 'Optimierung für Screenreader und assistive Technologien'
    },
    {
      title: 'Kontrast-Anpassungen',
      description: 'Automatische Anpassung von Farbkontrasten für bessere Lesbarkeit'
    },
    {
      title: 'Keyboard Navigation',
      description: 'Optimierung für Tastatur-Navigation ohne Maus'
    },
    {
      title: 'Live Testing auf Ihrer Website',
      description: 'Einmalig installiert, arbeitet GentleAccess automatisch'
    }
  ]

  const techStack = ['.NET Core', 'Azure AI', 'WCAG 2.1', 'ARIA', 'Accessibility Testing', 'React']

  const benefits = [
    'Bis zu 30% mehr Reichweite',
    'Rechtliche Compliance (BITV, WCAG)',
    'Bessere SEO-Bewertung',
    'Positive Nutzererfahrung für alle',
    'Zukunftssichere Technologie',
    'Einfache Integration in jede Website'
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Installation',
      description: 'GentleAccess wird einmalig in Ihre Website integriert'
    },
    {
      step: '2',
      title: 'Automatische Analyse',
      description: 'KI analysiert Ihre Website auf Barrierefreiheits-Probleme'
    },
    {
      step: '3',
      title: 'Echtzeit-Optimierung',
      description: 'Probleme werden automatisch und in Echtzeit behoben'
    },
    {
      step: '4',
      title: 'Kontinuierliches Monitoring',
      description: 'GentleAccess überwacht und optimiert kontinuierlich'
    }
  ]

  // Auto-hide hint after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHint(false)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <main className={`min-h-screen ${bgColor} pt-32 pb-20`}>
        {/* Hint Arrow pointing to the accessibility icon */}
        {showHint && (
          <div className="fixed bottom-32 right-24 z-40 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >


              {/* Arrow pointing to icon */}
              <motion.div
                animate={{
                  x: [-20, 0, -20],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="flex items-center"
              >
                <div className="flex items-center">
                  <div className="w-12 h-1 bg-tropical-indigo/50 rounded-l" />
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-tropical-indigo/50 border-b-[10px] border-b-transparent" />
                </div>
                <div className="ml-2">
                  <HiEye className="w-8 h-8 text-tropical-indigo animate-pulse" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        )}

        <section className="max-w-[1400px] mx-auto px-8 lg:px-16">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-tropical-indigo to-aquamarine rounded-2xl mb-6">
              <HiEye className="w-12 h-12 text-oxford-blue" />
            </div>

            <h1 className={`text-5xl lg:text-7xl font-black mb-6 ${textColor}`}>
              GentleAccess
            </h1>

            <p className="text-2xl lg:text-3xl font-bold text-tropical-indigo mb-6">
              Barrierefreiheit leicht gemacht
            </p>

            <p className={`text-xl lg:text-2xl ${mutedColor} max-w-3xl mx-auto`}>
              Machen Sie Ihre Website für alle zugänglich. GentleAccess analysiert und verbessert die Barrierefreiheit automatisch.
            </p>
          </motion.div>

          {/* Simple Demo Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`${cardBg} backdrop-blur-xl rounded-3xl p-8 border ${borderColor} mb-16 text-center relative`}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-4 mb-6">
                <HiEye className="w-10 h-10 text-tropical-indigo" />
                <h3 className={`text-2xl font-bold ${textColor}`}>
                  Jetzt direkt testen
                </h3>
              </div>
              
              <p className={`text-lg ${mutedColor} mb-6 max-w-2xl`}>
                Das Accessibility-Tool ist <span className="font-bold text-tropical-indigo">bereits aktiv</span> auf dieser Seite.
              </p>

              <div className={`p-4 rounded-xl ${actualTheme === 'dark' ? 'bg-white/5' : 'bg-gray-50'} border ${borderColor}`}>
                <p className={`font-medium ${textColor} mb-2`}>
                   Klicken Sie auf das <span className="text-tropical-indigo">Icon unten rechts</span>
                </p>
                <p className={`text-sm ${mutedColor}`}>
                  (Das Accessibility-Icon ist immer sichtbar)
                </p>
              </div>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-12 text-center ${textColor}`}>
              So funktioniert GentleAccess
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`${cardBg} backdrop-blur-xl rounded-2xl p-8 border ${borderColor} text-center hover:border-tropical-indigo/50 transition-all duration-300`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-tropical-indigo to-aquamarine rounded-full flex items-center justify-center text-2xl font-bold text-oxford-blue mb-6 mx-auto">
                    {item.step}
                  </div>
                  <h3 className={`text-xl font-bold mb-3 ${textColor}`}>
                    {item.title}
                  </h3>
                  <p className={mutedColor}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-12 text-center ${textColor}`}>
              Was GentleAccess für Sie tut
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className={`${cardBg} backdrop-blur-xl rounded-2xl p-8 border ${borderColor} hover:border-tropical-indigo/50 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-tropical-indigo/20 to-aquamarine/20 rounded-xl flex items-center justify-center">
                      <HiCheckCircle className="w-6 h-6 text-tropical-indigo" />
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                        {feature.title}
                      </h3>
                      <p className={mutedColor}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`${cardBg} backdrop-blur-xl rounded-3xl p-12 border ${borderColor} mb-20`}
          >
            <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
              Ihre Vorteile mit GentleAccess
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-tropical-indigo flex items-center justify-center mt-1">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className={`${textColor} font-medium`}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
              Technologie-Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-6 py-3 ${cardBg} backdrop-blur-xl rounded-full border ${borderColor} ${textColor} font-medium hover:border-tropical-indigo transition-colors duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pricing & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className={`${cardBg} backdrop-blur-xl rounded-3xl p-12 border ${borderColor} text-center`}
          >
            <div className="max-w-2xl mx-auto">
              <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
                Ab 49€/Monat
              </h2>
              <p className={`text-lg ${mutedColor} mb-8`}>
                Monatlich kündbar • Keine Setup-Gebühren • Unbegrenzte Tests
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link href="/kontakt">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-tropical-indigo to-aquamarine text-oxford-blue font-bold rounded-full shadow-lg hover:shadow-tropical-indigo/50 transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                  >
                    Jetzt anfragen
                    <HiArrowRight className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>

              {/* Test Hint */}
              <div className={`mt-6 pt-6 border-t ${borderColor}`}>
                <div className="flex flex-col items-center gap-3">
                  <div className="flex items-center gap-3">
                    <HiEye className="w-6 h-6 text-tropical-indigo animate-pulse" />
                    <p className={`font-bold text-lg ${textColor}`}>
                      Jetzt kostenlos testen
                    </p>
                  </div>
                  <p className={`text-center ${mutedColor}`}>
                    Klicken Sie auf das <span className="font-semibold text-tropical-indigo">Accessibility-Icon</span> unten rechts
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </>
  )
}