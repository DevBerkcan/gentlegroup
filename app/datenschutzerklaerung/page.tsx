'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Datenschutzerklaerung() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load Legal Cockpit content
    fetch(`https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/845b064664783b00d23f4ecddf2b3648/document/render/html?language=de`)
      .then((result) => result.text())
      .then((content) => {
        const element = document.getElementById('lc-text')
        if (element) {
          element.innerHTML = content
        }
      })
      .catch((error) => {
        console.error('Error loading privacy policy:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  return (
    <main className="min-h-screen bg-white">

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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-12"
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                Datenschutzerklärung
              </h1>
              <div className="h-1 w-24 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              id="lc-text"
            >
              {/* Legal Cockpit content will be loaded here */}
            </motion.div>

            <noscript>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mt-8">
                <p className="text-gray-700 mb-4">
                  Sie können diesen Rechtstext nicht sehen, weil Sie JavaScript deaktiviert haben.
                  Folgen Sie bitte diesem{' '}
                  <a
                    target="_blank"
                    href="https://app.cockpit.legal/api/cockpit/resources/legaldocumentshare/845b064664783b00d23f4ecddf2b3648/document/render/html?language=de"
                    className="text-aquamarine hover:text-tropical-indigo underline font-semibold"
                    rel="noopener noreferrer"
                  >
                    Link
                  </a>,
                  um den Rechtstext anzuzeigen.
                </p>
              </div>
            </noscript>
          </motion.div>
        </div>
      </div>

    </main>
  )
}
