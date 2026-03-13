// components/Products.tsx
'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiChartBar, HiEye, HiCalculator, HiCalendar, HiArrowRight, HiCheckCircle } from 'react-icons/hi'

const PRODUCTS = [
  {
    id: 'gentletrack',
    name: 'GentleTrack',
    tagline: 'Projekt-Tracking in Echtzeit',
    description: 'Behalten Sie den Überblick über alle Ihre Projekte. GentleTrack ermöglicht es Ihren Kunden, den Fortschritt live zu verfolgen.',
    icon: HiChartBar,
    gradient: 'from-aquamarine to-tropical-indigo',
    features: ['Live-Status Ihrer Projekte', 'Automatische Updates', 'Transparente Kommunikation', 'Meilenstein-Tracking'],
    pricing: 'Ab 9€/Monat',
    link: '/products/gentletrack',
  },
  {
    id: 'gentleaccess',
    name: 'GentleAccess',
    tagline: 'Barrierefreiheit leicht gemacht',
    description: 'Machen Sie Ihre Website für alle zugänglich. GentleAccess analysiert und verbessert die Barrierefreiheit automatisch.',
    icon: HiEye,
    gradient: 'from-tropical-indigo to-aquamarine',
    features: ['WCAG 2.1 Compliance-Check', 'Automatische Optimierungen', 'Screen-Reader Kompatibilität', 'Kontrast-Anpassungen'],
    pricing: 'Ab 19€/Monat',
    link: '/products/gentleaccess',
  },
  {
    id: 'gentlecalc',
    name: 'GentleCalc',
    tagline: 'Preisrechner für Beauty & Wellness',
    description: 'Individueller Preisrechner speziell für Beauty-Bereiche. Ihre Kunden erhalten sofort transparente Preise.',
    icon: HiCalculator,
    gradient: 'from-aquamarine to-tropical-indigo',
    features: ['Individuell konfigurierbar', 'Automatische Preisberechnung', 'Lead-Generierung', 'Direkte Buchungsanfragen'],
    pricing: 'Ab 19€/Monat',
    link: '/products/gentlecalc',
  },
  {
    id: 'gentlebook',
    name: 'GentleBook',
    tagline: 'Online-Buchung für Beauty & Local Business',
    description: 'Ihr digitaler Empfang: Linktree mit Online-Buchung, Service-Verwaltung und Admin-Panel. Perfekt für Friseure, Beauty-Studios und lokale Dienstleister.',
    icon: HiCalendar,
    gradient: 'from-tropical-indigo to-aquamarine',
    features: ['24/7 Online-Terminbuchung', 'Service & Preis-Verwaltung', 'Automatische Kalender-Synchronisation', 'WhatsApp & Instagram Integration'],
    pricing: 'Ab 19€/Monat',
    link: '/products/gentlebook',
  },
]

const Products = () => {
  return (
    <section id="products" className="relative overflow-hidden bg-gradient-to-br from-oxford-blue via-oxford-blue to-oxford-blue/95 py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-aquamarine/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-tropical-indigo/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-aquamarine font-bold text-sm sm:text-base lg:text-lg mb-3 sm:mb-4 uppercase tracking-wider"
          >
            Unsere Software-Produkte
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[clamp(2.8rem,7vw,5.5rem)] font-black mb-4 sm:mb-6"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            <span className="bg-gradient-to-r from-aquamarine via-tropical-indigo to-aquamarine bg-clip-text text-transparent">
              Gentle Suite
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-2xl text-ghost-white/80 max-w-3xl mx-auto px-4"
          >
            Professionelle Tools für Ihr digitales Business – flexibel im Abo
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface ProductCardProps {
  product: typeof PRODUCTS[0]
  index: number
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const Icon = product.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className="group"
    >
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.3 }}
        className="h-full bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-ghost-white/10 hover:border-aquamarine/50 transition-all duration-500 hover:shadow-2xl hover:shadow-aquamarine/20 flex flex-col"
      >
        <div className="mb-5 sm:mb-6">
          <div className={`inline-flex p-3 sm:p-4 bg-gradient-to-br ${product.gradient} rounded-xl sm:rounded-2xl shadow-lg`}>
            <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-oxford-blue" />
          </div>
        </div>

        <h3 className="text-2xl sm:text-3xl font-black text-ghost-white mb-1.5 sm:mb-2" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
          {product.name}
        </h3>
        <p className="text-aquamarine font-semibold text-sm sm:text-base mb-3 sm:mb-4">{product.tagline}</p>
        <p className="text-ghost-white/70 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed flex-1">{product.description}</p>

        <ul className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-ghost-white/80">
              <HiCheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-aquamarine flex-shrink-0 mt-0.5" />
              <span className="text-xs sm:text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4 sm:pt-5 border-t border-ghost-white/10 mt-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xl sm:text-2xl font-bold text-ghost-white">{product.pricing}</p>
              <p className="text-xs sm:text-sm text-ghost-white/60 mt-0.5">Monatlich kündbar</p>
            </div>
            <Link href={product.link}>
              <motion.button
                whileHover={{ scale: 1.08, x: 3 }}
                whileTap={{ scale: 0.95 }}
                className={`p-2.5 sm:p-3 bg-gradient-to-r ${product.gradient} rounded-full text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300`}
                aria-label={`Mehr zu ${product.name}`}
              >
                <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default React.memo(Products)
