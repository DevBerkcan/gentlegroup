'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiChartBar, HiCheckCircle, HiArrowRight } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

export default function GentleTrackPage() {
  const { actualTheme } = useTheme()

  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-oxford-blue'
  const mutedColor = actualTheme === 'dark' ? 'text-ghost-white/70' : 'text-oxford-blue/70'
  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const cardBg = actualTheme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
  const borderColor = actualTheme === 'dark' ? 'border-ghost-white/10' : 'border-gray-200'

  const features = [
    {
      title: 'Live-Status Ihrer Projekte',
      description: 'Behalten Sie den Überblick über alle laufenden Projekte in Echtzeit'
    },
    {
      title: 'Automatische Updates',
      description: 'Benachrichtigungen bei wichtigen Meilensteinen und Änderungen'
    },
    {
      title: 'Transparente Kommunikation',
      description: 'Direkte Kommunikation zwischen Team und Kunden'
    },
    {
      title: 'Meilenstein-Tracking',
      description: 'Visualisierung des Projektfortschritts mit klaren Meilensteinen'
    }
  ]

  const techStack = ['React', 'Vite', 'ASP.NET Core 8', 'MS SQL', 'Azure']

  return (
    <main className={`min-h-screen ${bgColor} pt-32 pb-20`}>
      {/* Hero Section */}
      <section className="max-w-[1400px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-flex p-4 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-2xl mb-6">
            <HiChartBar className="w-12 h-12 text-oxford-blue" />
          </div>

          <h1 className={`text-5xl lg:text-7xl font-black mb-6 ${textColor}`}>
            GentleTrack
          </h1>

          <p className="text-2xl lg:text-3xl font-bold text-aquamarine mb-6">
            Projekt-Tracking in Echtzeit
          </p>

          <p className={`text-xl lg:text-2xl ${mutedColor} max-w-3xl mx-auto`}>
            Behalten Sie den Überblick über alle Ihre Projekte. GentleTrack ermöglicht es Ihren Kunden, den Fortschritt live zu verfolgen.
          </p>
        </motion.div>

        {/* Features Grid */}
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
                <HiCheckCircle className="w-6 h-6 text-aquamarine flex-shrink-0 mt-1" />
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

        {/* Tech Stack */}
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

        {/* Pricing & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className={`${cardBg} backdrop-blur-xl rounded-3xl p-12 border ${borderColor} text-center`}
        >
          <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
            Ab 29€/Monat
          </h2>
          <p className={`text-lg ${mutedColor} mb-8`}>
            Monatlich kündbar, keine Setup-Gebühren
          </p>

          <Link href="/kontakt">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full shadow-lg hover:shadow-aquamarine/50 transition-all duration-300 inline-flex items-center gap-2"
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
