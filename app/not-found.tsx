'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white">

      <div className="relative overflow-hidden min-h-[80vh] flex items-center justify-center">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-aquamarine/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/2 right-1/4 w-[600px] h-[600px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* 404 Number */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[120px] lg:text-[180px] font-bold mb-6 bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent"
              style={{ fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              404
            </motion.h1>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Seite nicht gefunden
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg lg:text-xl text-gray-600 mb-12 max-w-xl mx-auto"
            >
              Die gewünschte Seite existiert leider nicht. Vielleicht finden Sie auf unserer Startseite, was Sie suchen?
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link
                href="/"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold text-lg rounded-full hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300 hover:scale-105"
              >
                Zur Startseite
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </motion.div>

            {/* Additional Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 flex flex-wrap justify-center gap-6 text-gray-600"
            >
              <Link href="/#services" className="hover:text-aquamarine transition-colors duration-300">
                Services
              </Link>
              <Link href="/#work" className="hover:text-aquamarine transition-colors duration-300">
                Portfolio
              </Link>
              <Link href="/#team" className="hover:text-aquamarine transition-colors duration-300">
                Team
              </Link>
              <Link href="/#contact" className="hover:text-aquamarine transition-colors duration-300">
                Kontakt
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </main>
  )
}
