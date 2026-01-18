'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiCalendar, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

export default function GentleBookPage() {
  const { actualTheme } = useTheme()

  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-oxford-blue'
  const mutedColor = actualTheme === 'dark' ? 'text-ghost-white/70' : 'text-oxford-blue/70'
  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const cardBg = actualTheme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
  const borderColor = actualTheme === 'dark' ? 'border-ghost-white/10' : 'border-gray-200'

  const features = [
    {
      title: '24/7 Online-Terminbuchung',
      description: 'Ihre Kunden können rund um die Uhr Termine buchen - ohne Anrufe'
    },
    {
      title: 'Service & Preis-Verwaltung',
      description: 'Einfaches Admin-Panel zur Verwaltung Ihrer Services und Preise'
    },
    {
      title: 'Automatische Kalender-Synchronisation',
      description: 'Nahtlose Integration mit Google Calendar, Outlook und mehr'
    },
    {
      title: 'WhatsApp & Instagram Integration',
      description: 'Direkte Buchungen über Ihre Social Media Kanäle'
    }
  ]

  const techStack = ['Next.js', 'TypeScript', 'Calendly API', 'WhatsApp Business', 'Instagram API']

  const benefits = [
    'Keine verpassten Buchungen mehr durch WhatsApp/Instagram Chaos',
    'Professionelles Online-Booking wie große Ketten',
    'Automatische Erinnerungen per SMS/WhatsApp',
    'Linktree-Alternative mit Buchungsfunktion',
    'Perfekt für Friseure, Beauty-Studios, Nagelstudios'
  ]

  return (
    <main className={`min-h-screen ${bgColor} pt-32 pb-20`}>
      <section className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex p-4 bg-gradient-to-br from-tropical-indigo to-aquamarine rounded-2xl mb-6">
            <HiCalendar className="w-12 h-12 text-oxford-blue" />
          </div>

          <h1 className={`text-5xl lg:text-7xl font-black mb-6 ${textColor}`}>
            GentleBook
          </h1>

          <p className="text-2xl lg:text-3xl font-bold text-tropical-indigo mb-6">
            Online-Buchung für Beauty & Local Business
          </p>

          <p className={`text-xl lg:text-2xl ${mutedColor} max-w-3xl mx-auto`}>
            Ihr digitaler Empfang: Linktree mit Online-Buchung, Service-Verwaltung und Admin-Panel. Perfekt für Friseure, Beauty-Studios und lokale Dienstleister.
          </p>
        </motion.div>

        {/* Pain Points Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={`${cardBg} backdrop-blur-xl rounded-2xl p-8 border ${borderColor} mb-12`}
        >
          <h2 className={`text-2xl font-bold mb-6 ${textColor} text-center`}>
            Schluss mit dem Chaos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-3">
                <HiCheckCircle className="w-5 h-5 text-aquamarine flex-shrink-0 mt-0.5" />
                <p className={mutedColor}>{benefit}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              className={`${cardBg} backdrop-blur-xl rounded-2xl p-8 border ${borderColor}`}
            >
              <div className="flex items-start gap-4">
                <HiCheckCircle className="w-6 h-6 text-tropical-indigo flex-shrink-0 mt-1" />
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
            Technologie-Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className={`px-6 py-3 ${cardBg} backdrop-blur-xl rounded-full border ${borderColor} ${textColor} font-medium`}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`${cardBg} backdrop-blur-xl rounded-3xl p-12 border ${borderColor} text-center`}
        >
          <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
            Ab 49€/Monat
          </h2>
          <p className={`text-lg ${mutedColor} mb-8`}>
            Monatlich kündbar, keine Setup-Gebühren
          </p>

          <Link href="/kontakt">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-tropical-indigo to-aquamarine text-oxford-blue font-bold rounded-full shadow-lg hover:shadow-tropical-indigo/50 transition-all duration-300 inline-flex items-center gap-2"
            >
              Jetzt anfragen
              <HiArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
