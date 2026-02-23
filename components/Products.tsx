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
    features: [
      'Live-Status Ihrer Projekte',
      'Automatische Updates',
      'Transparente Kommunikation',
      'Meilenstein-Tracking'
    ],
    pricing: 'Ab 29€/Monat',
    link: '/products/gentletrack'
  },
  {
    id: 'gentleaccess',
    name: 'GentleAccess',
    tagline: 'Barrierefreiheit leicht gemacht',
    description: 'Machen Sie Ihre Website für alle zugänglich. GentleAccess analysiert und verbessert die Barrierefreiheit automatisch.',
    icon: HiEye,
    gradient: 'from-tropical-indigo to-aquamarine',
    features: [
      'WCAG 2.1 Compliance-Check',
      'Automatische Optimierungen',
      'Screen-Reader Kompatibilität',
      'Kontrast-Anpassungen'
    ],
    pricing: 'Ab 49€/Monat',
    link: '/products/gentleaccess'
  },
  {
    id: 'gentlecalc',
    name: 'GentleCalc',
    tagline: 'Preisrechner für Beauty & Wellness',
    description: 'Individueller Preisrechner speziell für Beauty-Bereiche. Ihre Kunden erhalten sofort transparente Preise.',
    icon: HiCalculator,
    gradient: 'from-aquamarine to-tropical-indigo',
    features: [
      'Individuell konfigurierbar',
      'Automatische Preisberechnung',
      'Lead-Generierung',
      'Direkte Buchungsanfragen'
    ],
    pricing: 'Ab 39€/Monat',
    link: '/products/gentlecalc'
  },
  {
    id: 'gentlebook',
    name: 'GentleBook',
    tagline: 'Online-Buchung für Beauty & Local Business',
    description: 'Ihr digitaler Empfang: Linktree mit Online-Buchung, Service-Verwaltung und Admin-Panel. Perfekt für Friseure, Beauty-Studios und lokale Dienstleister.',
    icon: HiCalendar,
    gradient: 'from-tropical-indigo to-aquamarine',
    features: [
      '24/7 Online-Terminbuchung',
      'Service & Preis-Verwaltung',
      'Automatische Kalender-Synchronisation',
      'WhatsApp & Instagram Integration'
    ],
    pricing: 'Ab 49€/Monat',
    link: '/products/gentlebook'
  }
]

const Products = () => {
  return (
    <section id="products" className="relative overflow-hidden bg-gradient-to-br from-oxford-blue via-oxford-blue to-oxford-blue/95 py-32 lg:py-40">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-aquamarine/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tropical-indigo/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-aquamarine font-bold text-lg mb-4 uppercase tracking-wider">
              Unsere Software-Produkte
            </p>
            <h2 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-aquamarine via-tropical-indigo to-aquamarine bg-clip-text text-transparent">
                Gentle Suite
              </span>
            </h2>
            <p className="text-xl lg:text-2xl text-ghost-white/80 max-w-3xl mx-auto">
              Professionelle Tools für Ihr digitales Business – flexibel im Abo
            </p>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
        </motion.div>
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
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="h-full bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-ghost-white/10 hover:border-aquamarine/50 transition-all duration-500 hover:shadow-2xl hover:shadow-aquamarine/20 hover:-translate-y-2">
        {/* Icon */}
        <div className="mb-6">
          <div className={`inline-flex p-4 bg-gradient-to-br ${product.gradient} rounded-2xl`}>
            <Icon className="w-8 h-8 text-oxford-blue" />
          </div>
        </div>

        {/* Product Name & Tagline */}
        <h3 className="text-3xl font-black text-ghost-white mb-2">
          {product.name}
        </h3>
        <p className="text-aquamarine font-semibold mb-4">
          {product.tagline}
        </p>

        {/* Description */}
        <p className="text-ghost-white/70 mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {product.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2 text-ghost-white/80">
              <HiCheckCircle className="w-5 h-5 text-aquamarine flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>

        {/* Pricing & CTA */}
        <div className="pt-6 border-t border-ghost-white/10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-ghost-white">
                {product.pricing}
              </p>
              <p className="text-sm text-ghost-white/60">
                Monatlich kündbar
              </p>
            </div>
            <Link href={product.link}>
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
              >
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default React.memo(Products)
