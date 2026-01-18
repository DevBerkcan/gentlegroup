'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  HiArrowRight,
  HiSparkles,
  HiFilter,
  HiCheckCircle,
  HiLightningBolt,
  HiShieldCheck,
  HiTrendingUp,
  HiClock,
  HiCode,
  HiChip
} from 'react-icons/hi'

type Industry = 'Alle' | 'Beauty & Wellness' | 'Tech & Software' | 'Immobilien' | 'Personal'

interface Project {
  id: string
  title: string
  description: string
  image: string
  url: string | null
  industry: Exclude<Industry, 'Alle'>
  tags: string[]
  color: string
  stats: Record<string, string>
  highlights: string[]
}

const ALL_PROJECTS: Project[] = [
  {
    id: 'skinbloom-aesthetics',
    title: 'Skinbloom Aesthetics',
    description: 'Premium-Website für ästhetische Medizin mit umfassendem Behandlungsportfolio. Next.js-basierte Lösung mit WhatsApp-Integration, Google Analytics und professioneller Bildergalerie für Before/After-Darstellungen.',
    image: '/skinbloom.webp',
    url: 'https://www.skinbloom-aesthetics.ch',
    industry: 'Beauty & Wellness',
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
    image: '/hautliebe.webp',
    url: 'https://hautliebeundlaser.de',
    industry: 'Beauty & Wellness',
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
    image: '/creativhairstyling.webp',
    url: null,
    industry: 'Beauty & Wellness',
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
  },
  {
    id: 'nrw-realestate',
    title: 'NRW Real Estate',
    description: 'Professionelle Immobilien-Plattform mit intelligenter Suchfunktion, Objektverwaltung und CRM-Integration. Moderne Lösung für effizientes Immobilienmanagement.',
    image: '/nrwrealestate.webp',
    url: null,
    industry: 'Immobilien',
    tags: ['Next.js', 'CRM Integration', 'Search Engine'],
    color: 'from-blue-500 to-cyan-600',
    stats: {
      properties: '500+ Immobilien',
      performance: '98/100 Lighthouse Score',
      conversion: '+120% Lead-Generierung'
    },
    highlights: [
      '💻 Next.js Website mit intelligenter Suchfunktion',
      '🏢 CRM-Integration für Objektverwaltung',
      '📊 Lead-Tracking & Analytics Dashboard',
      '🔍 SEO-optimiert für lokale Immobiliensuche'
    ]
  },
  {
    id: 'gentletrack',
    title: 'GentleTrack',
    description: 'SaaS-Lösung für Projekt-Tracking und Transparenz. Echtzeit-Updates, automatische Benachrichtigungen und intuitive Benutzeroberfläche für optimales Projektmanagement.',
    image: '/gentletrack.webp',
    url: null,
    industry: 'Tech & Software',
    tags: ['React', 'SaaS', 'Real-time'],
    color: 'from-aquamarine to-tropical-indigo',
    stats: {
      users: '200+ aktive Nutzer',
      updates: 'Echtzeit-Synchronisation',
      satisfaction: '4.7★ User Rating'
    },
    highlights: [
      '💻 Full-Stack SaaS-Entwicklung (React + .NET)',
      '⚡ Echtzeit-Updates mit WebSockets',
      '📧 Automatische E-Mail-Benachrichtigungen',
      '📱 Responsive Web-App für alle Geräte'
    ]
  },
  {
    id: 'kabelbruecken',
    title: 'Kabelbrücken Shop',
    description: 'E-Commerce-Lösung für technische Produkte mit umfassender Produktdatenbank, Warenwirtschaft und Payment-Integration. Optimiert für B2B und B2C.',
    image: '/kabelbruecken.webp',
    url: null,
    industry: 'Tech & Software',
    tags: ['E-Commerce', 'Payment Integration', 'B2B/B2C'],
    color: 'from-orange-500 to-red-600',
    stats: {
      products: '1000+ Produkte',
      orders: '+250% Bestellungen',
      automation: 'Vollautomatisiert'
    },
    highlights: [
      '🛒 E-Commerce-Plattform mit Warenwirtschaft',
      '💳 Multi-Payment-Integration (PayPal, Stripe, Klarna)',
      '📦 Automatisierte Versand- & Rechnungsabwicklung',
      '🔄 B2B-Portal mit Sonderkonditionen'
    ]
  },
  {
    id: 'jan-jacobi',
    title: 'Jan Jacobi',
    description: 'Persönliche Portfolio-Website mit modernem Design und interaktiven Elementen. Fokus auf User Experience und Performance.',
    image: '/janjacobi.webp',
    url: null,
    industry: 'Personal',
    tags: ['Next.js', 'Portfolio', 'Minimal Design'],
    color: 'from-gray-600 to-gray-800',
    stats: {
      performance: '100/100 Lighthouse Score',
      loadTime: '< 0.5s Ladezeit',
      design: 'Minimalistisch & Modern'
    },
    highlights: [
      '💻 Next.js Website mit minimalistischem Design',
      '🎨 Custom Animationen mit Framer Motion',
      '⚡ Optimiert für maximale Performance',
      '📱 Fully Responsive Design'
    ]
  }
]

const CASE_STUDIES = [
  {
    title: 'Skinbloom Aesthetics',
    subtitle: 'Wie wir die Online-Präsenz verdreifachten',
    challenge: 'Skinbloom benötigte eine moderne, vertrauenserweckende Online-Präsenz, um ihre ästhetischen Behandlungen professionell zu präsentieren und neue Kunden zu gewinnen.',
    solution: 'Entwicklung einer Next.js-basierten Website mit Before/After-Galerie, WhatsApp-Integration für direkte Anfragen und Google Analytics für Performance-Tracking.',
    results: [
      '300% mehr Website-Besucher in 3 Monaten',
      '4.8★ Google Rating mit 50+ Bewertungen',
      '85% höhere Conversion-Rate durch optimiertes UX',
      'Reduzierte Bounce-Rate um 45%'
    ],
    color: 'from-purple-500 to-indigo-600',
    icon: HiTrendingUp
  },
  {
    title: 'Creative Hairstyling',
    subtitle: 'GentleCalc steigert Online-Buchungen um 150%',
    challenge: 'Der Beauty-Salon hatte Schwierigkeiten, Online-Buchungen zu generieren. Kunden brachen den Buchungsprozess ab, da Preise intransparent waren.',
    solution: 'Integration von GentleCalc (intelligenter Preisrechner), vollständiges Corporate Design und Marketing-Kampagne mit Social Media.',
    results: [
      '+150% Online-Buchungen innerhalb 6 Wochen',
      '95/100 Lighthouse Performance Score',
      'Durchschnittliche Session-Dauer: +120%',
      'ROI: 340% im ersten Quartal'
    ],
    color: 'from-teal-500 to-cyan-600',
    icon: HiLightningBolt
  },
  {
    title: 'NRW Real Estate',
    subtitle: 'Digitale Transformation im Immobiliensektor',
    challenge: 'Veraltetes System, manuelle Objektverwaltung, keine Lead-Tracking-Möglichkeit. Immobilien wurden nicht optimal präsentiert.',
    solution: 'Entwicklung einer modernen Immobilien-Plattform mit CRM-Integration, intelligenter Suchfunktion und automatisiertem Lead-Management.',
    results: [
      '+120% Lead-Generierung',
      '500+ Immobilien erfolgreich verwaltet',
      'Zeit für Objektverwaltung: -60%',
      'Kundenzufriedenheit: 4.6★'
    ],
    color: 'from-blue-500 to-cyan-600',
    icon: HiShieldCheck
  }
]

const TESTIMONIALS = [
  {
    name: 'Sarah M.',
    role: 'Inhaberin, Skinbloom Aesthetics',
    text: 'Gentle Group hat unsere Erwartungen übertroffen! Die Website ist wunderschön, funktioniert einwandfrei und hat uns deutlich mehr Kunden gebracht. Die WhatsApp-Integration ist Gold wert.',
    rating: 5,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    name: 'Michael K.',
    role: 'Geschäftsführer, NRW Real Estate',
    text: 'Professionell, schnell und zuverlässig. Das Team hat unsere komplexen Anforderungen verstanden und eine maßgeschneiderte Lösung entwickelt. Absolute Empfehlung!',
    rating: 5,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    name: 'Lisa T.',
    role: 'Creative Hairstyling',
    text: 'Die GentleCalc-Integration war ein Game-Changer für uns. Unsere Kunden lieben die Transparenz bei den Preisen und wir haben 150% mehr Online-Buchungen!',
    rating: 5,
    color: 'from-teal-500 to-cyan-600'
  }
]

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Erstgespräch & Analyse',
    description: 'Wir lernen Ihr Business kennen, analysieren Ihre Ziele und entwickeln eine maßgeschneiderte Strategie.',
    icon: HiSparkles,
    color: 'from-aquamarine to-tropical-indigo'
  },
  {
    number: '02',
    title: 'Konzept & Design',
    description: 'Erstellung von Wireframes, Design-Mockups und User-Journey-Maps für optimale UX.',
    icon: HiCode,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    number: '03',
    title: 'Entwicklung',
    description: 'Agile Entwicklung mit regelmäßigen Updates. Sie sehen den Fortschritt in Echtzeit.',
    icon: HiChip,
    color: 'from-blue-500 to-cyan-600'
  },
  {
    number: '04',
    title: 'Testing & Launch',
    description: 'Umfassende Tests, Performance-Optimierung und erfolgreicher Go-Live Ihrer Website.',
    icon: HiCheckCircle,
    color: 'from-teal-500 to-cyan-600'
  },
  {
    number: '05',
    title: 'Support & Wartung',
    description: 'Kontinuierlicher Support, Updates und Optimierungen für langfristigen Erfolg.',
    icon: HiShieldCheck,
    color: 'from-rose-500 to-pink-600'
  }
]

const TECH_STACK = [
  { name: 'Next.js', category: 'Frontend', color: 'from-gray-800 to-gray-900' },
  { name: 'React', category: 'Frontend', color: 'from-blue-400 to-blue-600' },
  { name: '.NET Core', category: 'Backend', color: 'from-purple-500 to-purple-700' },
  { name: 'TypeScript', category: 'Language', color: 'from-blue-500 to-blue-700' },
  { name: 'Azure', category: 'Cloud', color: 'from-blue-500 to-cyan-500' },
  { name: 'WordPress', category: 'CMS', color: 'from-blue-600 to-indigo-600' },
  { name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-400 to-cyan-600' },
  { name: 'PostgreSQL', category: 'Database', color: 'from-blue-600 to-blue-800' }
]

const FAQS = [
  {
    question: 'Wie lange dauert die Entwicklung einer Website?',
    answer: 'Je nach Umfang zwischen 4-12 Wochen. Einfache Websites sind in 4-6 Wochen fertig, komplexe E-Commerce- oder SaaS-Lösungen benötigen 8-12 Wochen. Wir arbeiten agil und Sie sehen den Fortschritt in Echtzeit.'
  },
  {
    question: 'Was kostet eine professionelle Website?',
    answer: 'Unsere Projekte starten bei €3.500 für Business-Websites und gehen bis €25.000+ für umfassende SaaS-Lösungen. Im kostenlosen Erstgespräch erstellen wir ein individuelles Angebot basierend auf Ihren Anforderungen.'
  },
  {
    question: 'Bietet ihr auch Wartung & Support an?',
    answer: 'Ja! Wir bieten verschiedene Wartungsverträge ab €149/Monat. Diese umfassen Updates, Sicherheits-Patches, Backups, Performance-Optimierung und technischen Support.'
  },
  {
    question: 'Welche Technologien verwendet ihr?',
    answer: 'Wir setzen auf moderne, bewährte Technologien: Next.js, React, .NET Core, Azure Cloud, WordPress. Die Technologie-Wahl hängt von Ihren spezifischen Anforderungen ab.'
  },
  {
    question: 'Kann ich die Website selbst pflegen?',
    answer: 'Absolut! Wir entwickeln benutzerfreundliche CMS-Lösungen (WordPress, Custom CMS) und schulen Sie im Umgang. Alternativ übernehmen wir die Pflege für Sie.'
  }
]

const INDUSTRIES: Industry[] = ['Alle', 'Beauty & Wellness', 'Tech & Software', 'Immobilien', 'Personal']

export default function PortfolioPage() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('Alle')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const filteredProjects = selectedIndustry === 'Alle'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(project => project.industry === selectedIndustry)

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-aquamarine/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-tropical-indigo/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aquamarine/10 to-tropical-indigo/10 border border-aquamarine/30 rounded-full mb-8"
            >
              <HiSparkles className="w-5 h-5 text-aquamarine" />
              <span className="text-aquamarine font-semibold text-sm">50+ erfolgreiche Projekte</span>
            </motion.div>

            <h1
              className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold mb-6 leading-[0.95]"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              <span className="block text-gray-900 mb-2">Portfolio & Referenzen</span>
              <span className="block bg-gradient-to-r from-aquamarine via-tropical-indigo to-purple-500 bg-clip-text text-transparent">
                Digitale Erfolgsgeschichten
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Von Beauty & Wellness über E-Commerce bis zu komplexen SaaS-Lösungen –
              entdecken Sie unsere erfolgreichen Projekte und Case Studies.
            </p>
          </motion.div>

          {/* Industry Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <div className="flex items-center gap-2 text-gray-600 font-semibold">
              <HiFilter className="w-5 h-5" />
              <span>Branche:</span>
            </div>
            {INDUSTRIES.map(industry => (
              <motion.button
                key={industry}
                onClick={() => setSelectedIndustry(industry)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  selectedIndustry === industry
                    ? 'bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue shadow-lg'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-aquamarine'
                }`}
              >
                {industry}
              </motion.button>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="text-center text-gray-600 mb-8"
          >
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Projekt' : 'Projekte'} gefunden
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedIndustry}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-24"
            >
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Case Studies */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              <span className="text-gray-900">Case Studies:</span>{' '}
              <span className="bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent">
                Messbare Erfolge
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Wie wir unseren Kunden zu messbarem Erfolg verholfen haben
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CASE_STUDIES.map((caseStudy, index) => (
              <CaseStudyCard key={caseStudy.title} caseStudy={caseStudy} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Das sagen unsere <span className="text-aquamarine">Kunden</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Unser <span className="text-tropical-indigo">Prozess</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von der Idee zur fertigen Lösung – transparent und effizient
            </p>
          </motion.div>

          <div className="space-y-6">
            {PROCESS_STEPS.map((step, index) => (
              <ProcessStepCard key={step.number} step={step} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              <span className="text-gray-900">Unsere</span>{' '}
              <span className="bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent">
                Technologien
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Moderne, bewährte Tools für maximale Performance und Skalierbarkeit
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {TECH_STACK.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}>
                  <HiCode className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1" style={{ fontWeight: 700 }}>
                  {tech.name}
                </h3>
                <p className="text-sm text-gray-600">{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Häufig gestellte <span className="text-aquamarine">Fragen</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <span className="text-lg font-bold text-gray-900" style={{ fontWeight: 700 }}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openFAQ === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <HiArrowRight className="w-5 h-5 text-aquamarine rotate-90" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 text-gray-600 text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Booking Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/10 via-tropical-indigo/10 to-purple-500/10" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />

        <div className="relative z-10 max-w-5xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <HiSparkles className="w-16 h-16 text-aquamarine mx-auto mb-8" />

            <h2
              className="text-[clamp(2rem,5vw,3.5rem)] font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Bereit für Ihr<br />
              <span className="bg-gradient-to-r from-aquamarine via-tropical-indigo to-purple-500 bg-clip-text text-transparent">
                Erfolgsprojekt?
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie wir
              Ihre digitale Vision Wirklichkeit werden lassen können.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(1, 255, 169, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-xl shadow-xl hover:shadow-aquamarine/50 transition-all duration-300 inline-flex items-center gap-3"
                  style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  Kostenloses Erstgespräch
                  <HiArrowRight className="w-6 h-6" />
                </motion.button>
              </Link>

              <Link href="/project-questionnaire">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-white text-oxford-blue font-bold rounded-full text-xl shadow-lg border-2 border-aquamarine hover:bg-aquamarine/5 transition-all duration-300 inline-flex items-center gap-3"
                  style={{ fontWeight: 700 }}
                >
                  <HiClock className="w-6 h-6 text-aquamarine" />
                  Projekt-Fragebogen
                </motion.button>
              </Link>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
              {[
                { icon: HiCheckCircle, text: 'Kostenloses Erstgespräch' },
                { icon: HiLightningBolt, text: 'Schnelle Umsetzung' },
                { icon: HiShieldCheck, text: '100% Zufriedenheitsgarantie' }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <item.icon className="w-10 h-10 text-aquamarine" />
                  <p className="text-gray-700 font-semibold">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// Component: ProjectCard
interface ProjectCardProps {
  project: Project
  index: number
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
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

          <div className="absolute inset-0 bg-gradient-to-t from-oxford-blue/80 via-oxford-blue/40 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-8">
            <div className="text-white">
              <p className="text-sm font-semibold mb-2">Projekt ansehen</p>
              <div className="flex gap-2 flex-wrap">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute -top-6 -right-6 z-30"
        >
          <div className={`px-6 py-3 bg-gradient-to-r ${project.color} text-white rounded-2xl shadow-xl font-bold text-sm`}>
            {project.industry}
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

// Component: CaseStudyCard
interface CaseStudyCardProps {
  caseStudy: typeof CASE_STUDIES[0]
  index: number
}

function CaseStudyCard({ caseStudy, index }: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${caseStudy.color} flex items-center justify-center mb-6 shadow-lg`}>
        <caseStudy.icon className="w-8 h-8 text-white" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontWeight: 800 }}>
        {caseStudy.title}
      </h3>
      <p className="text-aquamarine font-semibold mb-6">{caseStudy.subtitle}</p>

      <div className="space-y-4 mb-6">
        <div>
          <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Herausforderung</h4>
          <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-gray-500 uppercase mb-2">Lösung</h4>
          <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <h4 className="text-sm font-bold text-gray-500 uppercase mb-4">Ergebnisse</h4>
        <ul className="space-y-2">
          {caseStudy.results.map((result, idx) => (
            <li key={idx} className="flex items-start gap-2 text-gray-700">
              <HiCheckCircle className="w-5 h-5 text-aquamarine flex-shrink-0 mt-0.5" />
              <span className="text-sm leading-relaxed">{result}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

// Component: TestimonialCard
interface TestimonialCardProps {
  testimonial: typeof TESTIMONIALS[0]
  index: number
}

function TestimonialCard({ testimonial, index }: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-300"
    >
      <div className="flex gap-1 mb-6">
        {[...Array(testimonial.rating)].map((_, i) => (
          <HiSparkles key={i} className="w-6 h-6 text-yellow-400" />
        ))}
      </div>

      <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
        "{testimonial.text}"
      </p>

      <div className="flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-gray-900" style={{ fontWeight: 700 }}>
            {testimonial.name}
          </p>
          <p className="text-sm text-gray-600">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Component: ProcessStepCard
interface ProcessStepCardProps {
  step: typeof PROCESS_STEPS[0]
  index: number
}

function ProcessStepCard({ step, index }: ProcessStepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-8"
    >
      <div className="flex-shrink-0">
        <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
          <step.icon className="w-12 h-12 text-white" />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-4 mb-3">
          <span className="text-4xl font-bold text-gray-300" style={{ fontWeight: 800 }}>
            {step.number}
          </span>
          <h3 className="text-2xl font-bold text-gray-900" style={{ fontWeight: 800 }}>
            {step.title}
          </h3>
        </div>
        <p className="text-gray-600 text-lg leading-relaxed">
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}
