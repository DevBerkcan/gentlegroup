// app/(site)/impressum/page.tsx
'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

export default function Impressum() {
  const { actualTheme } = useTheme()
  const isDark = actualTheme === 'dark'

  const pageBg = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600'
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'

  useEffect(() => {
    fetch('https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/501c54d131c3b93043a744af0c259c58/document/render/html?language=de')
      .then((r) => r.text())
      .then((content) => {
        const el = document.getElementById('lc-text')
        if (el) el.innerHTML = content
      })
      .catch(console.error)
  }, [])

  return (
    <main className={`min-h-screen ${pageBg} transition-colors duration-300`}>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aquamarine/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-24 pb-36">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <Link href="/">
              <motion.span whileHover={{ x: -4 }} className={`inline-flex items-center gap-2 ${textMuted} hover:text-aquamarine transition-colors duration-300 text-sm sm:text-base cursor-pointer`}>
                <HiArrowLeft className="w-4 h-4" />
                Zurück zur Startseite
              </motion.span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-12">
            <h1 className={`text-4xl lg:text-5xl font-bold ${textColor} mb-6`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>Impressum</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full" />
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className={`mb-12 p-8 rounded-3xl border ${cardBg}`}>
            <h2 className={`text-2xl lg:text-3xl font-bold ${textColor} mb-4`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>Hinweis zu Gentle Group & GentleSuite</h2>
            <div className={`space-y-3 ${textMuted} text-base leading-relaxed`}>
              <p><strong className={textColor}>Gentle Group</strong> ist die Dachmarke für innovative Software-Lösungen unter dem Namen <strong className={textColor}>GentleSuite</strong>.</p>
              <p>Gentle Group ist <strong className={textColor}>keine eigenständige registrierte Firma</strong>, sondern eine Marke, unter der wir folgende Software-Produkte entwickeln und anbieten:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-aquamarine">Gentle Access</strong> – SaaS-Lösung für digitale Barrierefreiheit</li>
                <li><strong className="text-aquamarine">GentleCalc</strong> – Individueller Preisrechner für Beauty & Wellness</li>
                <li><strong className="text-aquamarine">GentleTrack</strong> – Projekt-Tracking und Transparenz-Tool</li>
              </ul>
              <p className="text-sm">Alle rechtlichen Angaben und verantwortliche Stellen entnehmen Sie bitte dem nachfolgenden Impressum.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`prose max-w-none ${isDark ? 'prose-invert' : ''}`}
            id="lc-text"
          />

          <noscript>
            <div className={`rounded-lg p-6 mt-8 border ${isDark ? 'bg-yellow-900/20 border-yellow-700' : 'bg-yellow-50 border-yellow-200'}`}>
              <p className={textMuted}>
                Sie können diesen Rechtstext nicht sehen, weil Sie JavaScript deaktiviert haben. Folgen Sie bitte diesem{' '}
                <a target="_blank" href="https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/501c54d131c3b93043a744af0c259c58/document/render/html?language=de" className="text-aquamarine hover:text-tropical-indigo underline font-semibold" rel="noopener noreferrer">Link</a>.
              </p>
            </div>
          </noscript>
        </div>
      </div>
    </main>
  )
}
