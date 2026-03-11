// app/(site)/barrierefreiheit/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft, HiCheckCircle, HiInformationCircle } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

export default function Barrierefreiheit() {
  const { actualTheme } = useTheme()
  const isDark = actualTheme === 'dark'

  const pageBg = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600'
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
  const infoBg = isDark ? 'bg-aquamarine/5 border-aquamarine/20' : 'bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 border-gray-200'
  const warnBg = isDark ? 'bg-yellow-900/20 border-yellow-700/40' : 'bg-yellow-50 border-yellow-200'

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
            <h1 className={`text-4xl lg:text-5xl font-bold ${textColor} mb-6`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>Barrierefreiheitserklärung</h1>
            <div className="h-1 w-24 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full mb-6" />
            <p className={`text-xl ${textMuted} leading-relaxed`}>
              Gentle Group verpflichtet sich zur digitalen Barrierefreiheit für Menschen mit Behinderungen.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className={`rounded-2xl p-6 mb-10 border ${infoBg}`}>
            <div className="flex items-start gap-4">
              <HiInformationCircle className="w-6 h-6 text-aquamarine flex-shrink-0 mt-0.5" />
              <div className={textMuted}>
                <p><strong className={textColor}>Stand dieser Erklärung:</strong> 13. Dezember 2025</p>
                <p className="mt-1"><strong className={textColor}>Letzte Überprüfung:</strong> 13. Dezember 2025</p>
              </div>
            </div>
          </motion.div>

          {[
            {
              delay: 0.3,
              title: 'Konformitätsstatus',
              content: (
                <>
                  <p className={`${textMuted} mb-4 leading-relaxed`}>Die <strong className={textColor}>Web Content Accessibility Guidelines (WCAG)</strong> definieren Anforderungen für Designer und Entwickler.</p>
                  <div className={`rounded-2xl p-6 border ${cardBg}`}>
                    <p className={`font-bold mb-2 ${textColor}`}>gentle-group.com ist <span className="text-aquamarine">teilweise konform</span> mit WCAG 2.1 Level AA.</p>
                    <p className={textMuted}>"Teilweise konform" bedeutet, dass einige Teile des Inhalts nicht vollständig den Standards entsprechen.</p>
                  </div>
                </>
              )
            },
            {
              delay: 0.4,
              title: 'Barrierefreiheits-Features',
              content: (
                <div className="grid md:grid-cols-2 gap-5">
                  {[
                    { title: 'Anzeigeoptionen', features: ['Hochkontrast-Modus', 'Nachtmodus', 'Blaufilter', 'Graustufen-Ansicht', 'Sättigungs-Modus'] },
                    { title: 'Text & Schrift', features: ['Schriftgröße anpassbar', 'Lesbare Schriftart', 'Erhöhter Zeilenabstand', 'Optimierter Textabstand', 'Links unterstreichen'] },
                    { title: 'Farbenblindheit-Modi', features: ['Protanopie', 'Deuteranopie', 'Tritanopie', 'Achromatopsie', 'Plus schwächere Varianten'] },
                    { title: 'Weitere Funktionen', features: ['Cursor hervorheben', 'Größerer Mauszeiger', 'Verbesserte Fokus-Anzeige', 'Animationen stoppen', 'Vorlesefunktion'] },
                  ].map((cat) => (
                    <div key={cat.title} className={`rounded-2xl p-6 border ${cardBg}`}>
                      <h3 className={`text-lg font-bold mb-4 ${textColor}`}>{cat.title}</h3>
                      <ul className="space-y-2">
                        {cat.features.map((f) => (
                          <li key={f} className={`flex items-start gap-2 ${textMuted} text-sm`}>
                            <HiCheckCircle className="w-4 h-4 text-aquamarine flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )
            },
            {
              delay: 0.5,
              title: 'Bekannte Einschränkungen',
              content: (
                <div className={`rounded-2xl p-6 border ${warnBg}`}>
                  <ul className={`space-y-2 ${textMuted}`}>
                    <li>• Einige externe Inhalte (z.B. eingebettete 3D-Modelle) sind möglicherweise nicht vollständig barrierefrei</li>
                    <li>• Animationen können bei älteren Browsern nicht vollständig deaktiviert werden</li>
                    <li>• Die Vorlesefunktion funktioniert nur mit modernen Browsern, die die Web Speech API unterstützen</li>
                  </ul>
                </div>
              )
            },
            {
              delay: 0.6,
              title: 'Feedback und Kontakt',
              content: (
                <div className={`rounded-2xl p-8 border ${infoBg}`}>
                  <div className={`space-y-3 ${textMuted}`}>
                    <p><strong className={textColor}>Gentle Group</strong> — Berk-Can Atesoglu</p>
                    <p><strong className={textColor}>E-Mail:</strong>{' '}<a href="mailto:info@gentle-group.com" className="text-aquamarine hover:text-tropical-indigo underline">info@gentle-group.com</a></p>
                    <p><strong className={textColor}>Kontaktformular:</strong>{' '}<a href="/kontakt" className="text-aquamarine hover:text-tropical-indigo underline">gentle-group.com/kontakt</a></p>
                    <p className="text-sm mt-2">Wir bemühen uns, innerhalb von 5 Werktagen auf Ihre Anfrage zu reagieren.</p>
                  </div>
                </div>
              )
            },
          ].map(({ delay, title, content }) => (
            <motion.section key={title} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay }} className="mb-12">
              <h2 className={`text-2xl sm:text-3xl font-bold mb-6 ${textColor}`} style={{ fontWeight: 800 }}>{title}</h2>
              {content}
            </motion.section>
          ))}
        </div>
      </div>
    </main>
  )
}
