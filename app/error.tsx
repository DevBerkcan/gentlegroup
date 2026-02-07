'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <main className="min-h-screen bg-oxford-blue flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <span className="text-8xl font-black bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent">
            500
          </span>
        </div>

        <h1 className="text-3xl font-bold text-ghost-white mb-4">
          Etwas ist schiefgelaufen
        </h1>

        <p className="text-ghost-white/70 mb-8 leading-relaxed">
          Es ist ein unerwarteter Fehler aufgetreten. Bitte versuchen Sie es erneut
          oder kehren Sie zur Startseite zurueck.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="px-8 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full shadow-lg hover:shadow-aquamarine/30 transition-all duration-300 hover:scale-105"
          >
            Erneut versuchen
          </button>

          <Link
            href="/"
            className="px-8 py-3 bg-ghost-white/10 text-ghost-white font-semibold rounded-full border border-ghost-white/20 hover:border-ghost-white/40 transition-all duration-300 text-center"
          >
            Zur Startseite
          </Link>
        </div>
      </div>
    </main>
  )
}
