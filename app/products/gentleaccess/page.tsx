'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiEye, HiCheckCircle, HiArrowRight, HiHome } from 'react-icons/hi'
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

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(false), 10000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <main className={`min-h-screen ${bgColor} pt-32 pb-20`}>

        {showHint && (
          <div className="fixed bottom-28 right-6 z-40 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-end gap-2"
            >
              <div className={`px-3 py-2 rounded-xl text-xs font-medium shadow-lg ${actualTheme === 'dark' ? 'bg-oxford-blue border border-ghost-white/20 text-ghost-white' : 'bg-white border border-gray-200 text-oxford-blue'}`}>
                Hier testen! 👇
              </div>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                className="flex justify-end pr-3"
              >
                <HiArrowRight className="w-5 h-5 text-tropical-indigo rotate-90" />
              </motion.div>
            </motion.div>
          </div>
        )}

        <section className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-4 py-2 ${cardBg} border ${borderColor} rounded-full text-sm font-medium ${mutedColor} transition-all duration-200`}
              >
                <HiHome className="w-4 h-4" />
                Zurück zur Startseite
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-tropical-indigo to-aquamarine rounded-2xl mb-6 shadow-lg shadow-tropical-indigo/20">
              <HiEye className="w-12 h-12 text-oxford-blue" />
            </div>

            <h1 className={`text-5xl lg:text-7xl font-black mb-6 ${textColor}`}>
              GentleAccess
            </h1>

            <p className="text-2xl lg:text-3xl font-bold text-tropical-indigo mb-6">
              Barrierefreiheit leicht gemacht
            </p>

            <p className={`text-xl lg:text-2xl ${mutedColor} max-w-3xl mx-auto leading-relaxed`}>
              Machen Sie Ihre Website für alle zugänglich. GentleAccess analysiert und verbessert die Barrierefreiheit automatisch.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`rounded-3xl p-8 border ${borderColor} mb-16 bg-gradient-to-br ${actualTheme === 'dark' ? 'from-tropical-indigo/10 to-aquamarine/5' : 'from-tropical-indigo/5 to-aquamarine/5'} text-center`}
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-tropical-indigo/10 rounded-xl flex items-center justify-center">
                  <HiEye className="w-5 h-5 text-tropical-indigo" />
                </div>
                <h3 className={`text-xl font-bold ${textColor}`}>
                  Jetzt direkt testen
                </h3>
              </div>

              <p className={`text-base ${mutedColor} mb-5 max-w-xl`}>
                Das Accessibility-Tool ist <span className="font-bold text-tropical-indigo">bereits aktiv</span> auf dieser Seite.
              </p>

              <div className={`inline-flex items-center gap-3 px-5 py-3 rounded-xl ${actualTheme === 'dark' ? 'bg-white/5' : 'bg-white'} border ${borderColor} shadow-sm`}>
                <span className={`text-sm font-medium ${textColor}`}>
                  Klicken Sie auf das
                </span>
                <span className="px-2 py-0.5 bg-tropical-indigo/10 text-tropical-indigo text-sm font-bold rounded-lg">
                  Icon unten rechts
                </span>
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <HiArrowRight className="w-4 h-4 text-tropical-indigo" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-12 text-center ${textColor}`}>
              So funktioniert GentleAccess
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howItWorks.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className={`${cardBg} backdrop-blur-xl rounded-2xl p-7 border ${borderColor} text-center hover:border-tropical-indigo/50 hover:shadow-lg hover:shadow-tropical-indigo/10 transition-all duration-300`}
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-tropical-indigo to-aquamarine rounded-2xl flex items-center justify-center text-xl font-black text-oxford-blue mb-5 mx-auto shadow-lg shadow-tropical-indigo/20">
                    {item.step}
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${textColor}`}>
                    {item.title}
                  </h3>
                  <p className={`${mutedColor} text-sm leading-relaxed`}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-12 text-center ${textColor}`}>
              Was GentleAccess für Sie tut
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className={`${cardBg} backdrop-blur-xl rounded-2xl p-7 border ${borderColor} hover:border-tropical-indigo/50 hover:shadow-lg hover:shadow-tropical-indigo/10 transition-all duration-300 group`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-tropical-indigo/20 to-aquamarine/20 rounded-xl flex items-center justify-center group-hover:from-tropical-indigo/30 group-hover:to-aquamarine/30 transition-all duration-300">
                      <HiCheckCircle className="w-5 h-5 text-tropical-indigo" />
                    </div>
                    <div>
                      <h3 className={`text-base font-bold mb-2 ${textColor}`}>
                        {feature.title}
                      </h3>
                      <p className={`${mutedColor} text-sm leading-relaxed`}>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className={`rounded-3xl p-10 border ${borderColor} mb-20 bg-gradient-to-br ${actualTheme === 'dark' ? 'from-tropical-indigo/10 to-aquamarine/5' : 'from-tropical-indigo/5 to-aquamarine/5'}`}
          >
            <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
              Ihre Vorteile mit GentleAccess
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                  className={`flex items-center gap-3 p-4 rounded-xl ${cardBg} border ${borderColor}`}
                >
                  <div className="flex-shrink-0 w-7 h-7 rounded-full bg-gradient-to-br from-tropical-indigo to-aquamarine flex items-center justify-center shadow-sm">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>
                  <span className={`${textColor} text-sm font-medium`}>
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
              Technologie-Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-5 py-2.5 ${cardBg} backdrop-blur-xl rounded-full border ${borderColor} ${textColor} text-sm font-medium hover:border-tropical-indigo hover:shadow-sm transition-all duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className={`rounded-3xl p-12 border ${borderColor} text-center bg-gradient-to-br ${actualTheme === 'dark' ? 'from-white/5 to-white/[0.02]' : 'from-gray-50 to-white'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-tropical-indigo/10 border border-tropical-indigo/20 rounded-full text-tropical-indigo text-sm font-medium mb-6">
              Monatlich kündbar
            </div>
            <h2 className={`text-5xl font-black mb-3 ${textColor}`}>
              Ab 19€<span className={`text-2xl font-normal ${mutedColor}`}>/Monat</span>
            </h2>
            <p className={`text-base ${mutedColor} mb-10`}>
              Keine Setup-Gebühren • Unbegrenzte Tests • Sofort einsatzbereit
            </p>

            <Link href="/kontakt">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-tropical-indigo to-aquamarine text-oxford-blue font-bold rounded-full shadow-lg shadow-tropical-indigo/30 hover:shadow-tropical-indigo/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                Jetzt anfragen
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <div className={`mt-10 pt-6 border-t ${borderColor}`}>
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-2">
                  <HiEye className="w-5 h-5 text-tropical-indigo animate-pulse" />
                  <p className={`font-bold ${textColor}`}>
                    Kostenlos testen
                  </p>
                </div>
                <p className={`text-sm ${mutedColor}`}>
                  Klicken Sie auf das{' '}
                  <span className="font-semibold text-tropical-indigo">Accessibility-Icon</span>
                  {' '}unten rechts
                </p>
              </div>
            </div>
          </motion.div>

        </section>
      </main>
    </>
  )
}
