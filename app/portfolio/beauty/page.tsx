'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight, HiSparkles, HiHeart, HiStar } from 'react-icons/hi'

const BEAUTY_PROJECTS = [
  {
    id: 'skinbloom-aesthetics',
    title: 'Skinbloom Aesthetics',
    description: 'Premium-Website für ästhetische Medizin mit umfassendem Behandlungsportfolio. Next.js-basierte Lösung mit WhatsApp-Integration, Google Analytics und professioneller Bildergalerie für Before/After-Darstellungen.',
    image: '/skinbloom.png',
    url: 'https://www.skinbloom-aesthetics.ch',
    tags: ['Next.js', 'WhatsApp Integration', 'Google Analytics'],
    color: 'from-purple-500 to-indigo-600',
    stats: {
      rating: '4.8★ Google Rating',
      tech: 'Next.js Framework',
      features: 'WhatsApp-Integration'
    },
    highlights: [
      '💻 Next.js Website-Entwicklung (React Framework)',
      '📊 Google Analytics & Conversion Tracking Setup',
      '💬 WhatsApp-Integration für direkte Kundenanfragen',
      '📸 Before/After Galerie für Behandlungsergebnisse'
    ]
  },
  {
    id: 'hautliebe-laser',
    title: 'Hautliebe & Laser',
    description: 'Fachinstitut für medizinische apparative Kosmetik mit zwei Standorten (Wuppertal & Duisburg). WordPress-basierte Website mit Divi-Theme, Online-Terminbuchung und SEO-Optimierung für lokale Sichtbarkeit.',
    image: '/hautliebe.png',
    url: 'https://hautliebeundlaser.de',
    tags: ['WordPress', 'Divi Theme', 'Online-Buchung'],
    color: 'from-rose-500 to-pink-600',
    stats: {
      locations: '2 Standorte',
      seo: 'SEO-optimiert (Schema.org)',
      booking: 'Online Terminbuchung'
    },
    highlights: [
      '💻 WordPress-Website mit Divi Premium Theme',
      '📍 Multi-Standort-Verwaltung (Wuppertal & Duisburg)',
      '📅 Online-Terminbuchungssystem Integration',
      '🔍 Local SEO & Schema.org Strukturierung'
    ]
  },
  {
    id: 'creative-hairstyling',
    title: 'Creative Hairstyling',
    description: 'Komplettlösung für Beauty-Salon: Von Corporate Identity über Website-Entwicklung bis Marketing. Inkl. GentleCalc-Integration für intelligente Preisberechnung und Online-Terminbuchung.',
    image: '/creativhairstyling.png',
    url: null,
    tags: ['GentleCalc', 'Corporate Design', 'Marketing'],
    color: 'from-teal-500 to-cyan-600',
    stats: {
      bookings: '+150% Online-Buchungen',
      performance: '95/100 Lighthouse Score',
      mobile: '100% Mobile-optimiert'
    },
    highlights: [
      '🎨 Corporate Guideline & Markenidentität',
      '💻 Website-Entwicklung mit WordPress',
      '🧮 GentleCalc-Integration (Intelligenter Preisrechner)',
      '📱 Marketing-Kampagnen & Social Media Setup'
    ]
  }
]

export default function BeautyPortfolio() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Effects */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-full mb-8"
            >
              <HiSparkles className="w-5 h-5 text-pink-500" />
              <span className="text-pink-600 font-semibold text-sm">Beauty & Wellness Portfolio</span>
            </motion.div>

            {/* Heading */}
            <h1
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-6 leading-[0.95]"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              <span className="block text-gray-900 mb-2">Digitale Lösungen für</span>
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Beauty & Wellness
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Professionelle Webauftritte, die Ihre Schönheit und Expertise perfekt in Szene setzen.
              Moderne Technologie trifft auf elegantes Design.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: HiHeart, label: 'Zufriedene Beauty-Kunden', value: '15+' },
                { icon: HiStar, label: 'Durchschnittliche Bewertung', value: '4.9★' },
                { icon: HiSparkles, label: 'Mehr Online-Buchungen', value: '+180%' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 shadow-lg"
                >
                  <stat.icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gray-900 mb-1" style={{ fontWeight: 800 }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Unsere <span className="text-purple-500">Leistungen</span> für Sie
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Komplettlösungen für Beauty & Wellness: Von der Markenentwicklung bis zur fertigen Website mit intelligenten Tools.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '💻',
                title: 'Website-Entwicklung',
                description: 'Moderne, responsive Websites mit WordPress oder Next.js – perfekt auf Ihre Bedürfnisse zugeschnitten.',
                color: 'from-purple-500 to-indigo-600'
              },
              {
                icon: '🧮',
                title: 'GentleCalc Integration',
                description: 'Intelligenter Preisrechner für Ihre Behandlungen – erhöht Transparenz und Conversion-Rate.',
                color: 'from-pink-500 to-rose-600'
              },
              {
                icon: '🎨',
                title: 'Corporate Design',
                description: 'Professionelle Markenidentität mit Logo, Farbkonzept und umfassender Guideline.',
                color: 'from-teal-500 to-cyan-600'
              },
              {
                icon: '📱',
                title: 'Marketing & SEO',
                description: 'Social Media Setup, Google Ads, Local SEO – damit Sie online gefunden werden.',
                color: 'from-indigo-500 to-purple-600'
              },
              {
                icon: '📅',
                title: 'Online-Buchungssysteme',
                description: 'Nahtlose Integration von Terminbuchung direkt auf Ihrer Website.',
                color: 'from-rose-500 to-pink-600'
              },
              {
                icon: '📊',
                title: 'Analytics & Tracking',
                description: 'Google Analytics, Conversion-Tracking und detaillierte Auswertungen für Ihren Erfolg.',
                color: 'from-cyan-500 to-teal-600'
              }
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4" style={{ fontWeight: 800 }}>
                  {service.title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Unsere <span className="text-pink-500">Beauty-Projekte</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jedes Projekt wurde individuell entwickelt, um die einzigartige Identität
              und die Bedürfnisse unserer Beauty-Kunden perfekt widerzuspiegeln.
            </p>
          </motion.div>

          <div className="space-y-24">
            {BEAUTY_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-indigo-500/10" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HiSparkles className="w-16 h-16 text-pink-500 mx-auto mb-8" />

            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Bereit für Ihren digitalen<br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Beauty-Auftritt?
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre Schönheitsdienstleistungen
              perfekt präsentiert und neue Kunden gewinnt.
            </p>

            <Link href="/#contact">
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(236, 72, 153, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-full text-xl shadow-xl hover:shadow-pink-500/50 transition-all duration-300 inline-flex items-center gap-3"
                style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                Jetzt Kontakt aufnehmen
                <HiArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

interface ProjectCardProps {
  project: typeof BEAUTY_PROJECTS[0]
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
    >
      {/* Image */}
      <motion.div
        className={`relative ${isEven ? '' : 'lg:col-start-2'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10`} />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/80 via-oxford-blue/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
            <div className="text-white">
              <p className="text-sm font-semibold mb-2">Projekt ansehen</p>
              <div className="flex gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Floating Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -top-6 -right-6 z-30"
        >
          <div className={`px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-2xl shadow-xl font-bold text-sm`}>
            Case Study
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3
            className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            {project.title}
          </h3>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-3 mb-8">
            {project.tags.map(tag => (
              <span
                key={tag}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 gap-4 mb-8">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <HiSparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900" style={{ fontWeight: 700 }}>
                    {value}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Service Highlights */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-4" style={{ fontWeight: 700 }}>
              Unsere Leistungen:
            </h4>
            <ul className="space-y-3">
              {project.highlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700">
                  <span className="text-lg flex-shrink-0">{highlight.split(' ')[0]}</span>
                  <span className="text-base leading-relaxed">{highlight.substring(highlight.indexOf(' ') + 1)}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Live Website Button */}
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 0, 0, 0.15)" }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 bg-gradient-to-r ${project.color} text-white font-bold rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3`}
                style={{ fontWeight: 700 }}
              >
                Live-Website ansehen
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  )
}
