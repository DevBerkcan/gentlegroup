'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { HiCheckCircle, HiInformationCircle } from 'react-icons/hi'

export default function Barrierefreiheit() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aquamarine/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                Barrierefreiheitserklärung
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full mb-6" />
              <p className="text-xl text-gray-600 leading-relaxed">
                Gentle Group verpflichtet sich zur digitalen Barrierefreiheit für Menschen mit Behinderungen.
                Wir verbessern kontinuierlich die Benutzererfahrung für alle und wenden die relevanten
                Barrierefreiheitsstandards an.
              </p>
            </motion.div>

            {/* Stand der Erklärung */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 rounded-2xl p-8 mb-12 border border-gray-200"
            >
              <div className="flex items-start gap-4">
                <HiInformationCircle className="w-6 h-6 text-aquamarine flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-700 mb-2">
                    <strong>Stand dieser Erklärung:</strong> 13. Dezember 2025
                  </p>
                  <p className="text-gray-700">
                    <strong>Letzte Überprüfung:</strong> 13. Dezember 2025
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Konformitätsstatus */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800 }}>
                Konformitätsstatus
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Die <strong>Web Content Accessibility Guidelines (WCAG)</strong> definieren Anforderungen für Designer
                und Entwickler, um die Barrierefreiheit für Menschen mit Behinderungen zu verbessern.
                Es werden drei Konformitätsstufen definiert: Level A, Level AA und Level AAA.
              </p>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <p className="text-gray-900 font-bold mb-2">
                  gentle-group.com ist <span className="text-aquamarine">teilweise konform</span> mit WCAG 2.1 Level AA.
                </p>
                <p className="text-gray-600">
                  "Teilweise konform" bedeutet, dass einige Teile des Inhalts nicht vollständig den
                  Barrierefreiheitsstandards entsprechen.
                </p>
              </div>
            </motion.section>

            {/* Barrierefreiheits-Features */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800 }}>
                Barrierefreiheits-Features
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Unsere Website verfügt über ein umfassendes <strong>Barrierefreiheits-Tool</strong> (das
                Rollstuhl-Symbol unten rechts), das folgende Funktionen bietet:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Anzeigeoptionen',
                    features: [
                      'Hochkontrast-Modus',
                      'Nachtmodus',
                      'Blaufilter (manuell & automatisch)',
                      'Graustufen-Ansicht',
                      'Sättigungs-Modus'
                    ]
                  },
                  {
                    title: 'Text & Schrift',
                    features: [
                      'Schriftgröße anpassbar (80% - 200%)',
                      'Lesbare Schriftart',
                      'Erhöhter Zeilenabstand',
                      'Optimierter Textabstand',
                      'Links unterstreichen'
                    ]
                  },
                  {
                    title: 'Farbenblindheit-Modi',
                    features: [
                      'Protanopie (Rotschwäche)',
                      'Deuteranopie (Grünschwäche)',
                      'Tritanopie (Blauschwäche)',
                      'Achromatopsie (Farbenblindheit)',
                      'Plus schwächere Varianten'
                    ]
                  },
                  {
                    title: 'Weitere Funktionen',
                    features: [
                      'Cursor hervorheben',
                      'Größerer Mauszeiger',
                      'Verbesserte Fokus-Anzeige',
                      'Animationen stoppen',
                      'Lesehilfe aktivieren',
                      'Vorlesefunktion (Text-to-Speech)'
                    ]
                  }
                ].map((category, index) => (
                  <div
                    key={category.title}
                    className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontWeight: 700 }}>
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-gray-700">
                          <HiCheckCircle className="w-5 h-5 text-aquamarine flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-aquamarine/10 to-tropical-indigo/10 rounded-2xl p-6 mt-8 border border-aquamarine/20">
                <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">👴</span>
                  Schnellansichten (Quick Presets)
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Seniorenansicht:</strong> Größere Schrift, erhöhte Abstände, bessere Lesbarkeit</li>
                  <li><strong>Sehschwäche:</strong> Maximale Schriftgröße, Hochkontrast, hervorgehobener Cursor</li>
                  <li><strong>Farbschwäche:</strong> Optimierte Farbdarstellung, unterstrichene Links</li>
                </ul>
              </div>
            </motion.section>

            {/* Technische Spezifikationen */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800 }}>
                Technische Spezifikationen
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Die Barrierefreiheit von gentle-group.com basiert auf folgenden Technologien:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  'HTML5 mit semantischen Elementen',
                  'ARIA (Accessible Rich Internet Applications) Labels und Rollen',
                  'CSS3 für responsive und anpassbare Layouts',
                  'JavaScript für dynamische Barrierefreiheits-Features',
                  'Next.js 14 Framework für optimale Performance',
                  'Lokaler Storage für Speicherung der Nutzereinstellungen'
                ].map((tech) => (
                  <li key={tech} className="flex items-start gap-3 text-gray-700">
                    <HiCheckCircle className="w-5 h-5 text-tropical-indigo flex-shrink-0 mt-0.5" />
                    <span>{tech}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Bewertung und Testmethoden */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800 }}>
                Bewertung und Testmethoden
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Gentle Group hat die Barrierefreiheit von gentle-group.com durch folgende Methoden bewertet:
              </p>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-aquamarine">•</span>
                    <span><strong>Selbstbewertung:</strong> Interne Bewertung durch das Entwicklungsteam</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-aquamarine">•</span>
                    <span><strong>Automatisierte Tests:</strong> Verwendung von Lighthouse und WAVE Tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-aquamarine">•</span>
                    <span><strong>Manuelle Tests:</strong> Tastaturnavigation, Screen-Reader-Kompatibilität</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="font-bold text-aquamarine">•</span>
                    <span><strong>Browser-Tests:</strong> Chrome, Firefox, Safari, Edge (jeweils aktuelle Version)</span>
                  </li>
                </ul>
              </div>
            </motion.section>

            {/* Bekannte Einschränkungen */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800 }}>
                Bekannte Einschränkungen
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Trotz unserer Bemühungen können einige Einschränkungen bestehen:
              </p>
              <div className="bg-yellow-50 rounded-2xl p-6 border border-yellow-200">
                <ul className="space-y-2 text-gray-700">
                  <li>• Einige externe Inhalte (z.B. eingebettete 3D-Modelle) sind möglicherweise nicht vollständig barrierefrei</li>
                  <li>• Animationen können bei älteren Browsern nicht vollständig deaktiviert werden</li>
                  <li>• Die Vorlesefunktion funktioniert nur mit modernen Browsern, die die Web Speech API unterstützen</li>
                </ul>
              </div>
            </motion.section>

            {/* Feedback und Kontakt */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800 }}>
                Feedback und Kontakt
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Wir freuen uns über Ihr Feedback zur Barrierefreiheit von gentle-group.com.
                Bitte kontaktieren Sie uns, wenn Sie auf Barrierefreiheitsprobleme stoßen:
              </p>
              <div className="bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 rounded-2xl p-8 border border-gray-200">
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong className="text-gray-900">Gentle Group</strong><br />
                    Berk-Can Atesoglu
                  </p>
                  <p>
                    <strong className="text-gray-900">E-Mail:</strong>{' '}
                    <a href="mailto:info@gentle-group.com" className="text-aquamarine hover:text-tropical-indigo underline">
                      info@gentle-group.com
                    </a>
                  </p>
                  <p>
                    <strong className="text-gray-900">Kontaktformular:</strong>{' '}
                    <a href="/kontakt" className="text-aquamarine hover:text-tropical-indigo underline">
                      gentle-group.com/kontakt
                    </a>
                  </p>
                  <p className="text-sm text-gray-600 mt-4">
                    Wir bemühen uns, innerhalb von 5 Werktagen auf Ihre Anfrage zu reagieren.
                  </p>
                </div>
              </div>
            </motion.section>

            {/* Rechtliche Grundlagen */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800 }}>
                Rechtliche Grundlagen
              </h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Diese Barrierefreiheitserklärung wurde auf Grundlage folgender rechtlicher Vorgaben erstellt:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>• Richtlinie (EU) 2016/2102 des Europäischen Parlaments und des Rates</li>
                <li>• Barrierefreie-Informationstechnik-Verordnung (BITV 2.0)</li>
                <li>• Web Content Accessibility Guidelines (WCAG) 2.1</li>
                <li>• Behindertengleichstellungsgesetz (BGG)</li>
              </ul>
            </motion.section>

          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
