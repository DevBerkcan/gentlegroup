
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import {
  HiArrowRight, HiArrowLeft, HiSparkles, HiFilter, HiCheckCircle,
  HiLightningBolt, HiShieldCheck, HiTrendingUp, HiClock, HiCode, HiChip
} from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

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
    description: 'Premium-Website für ästhetische Medizin mit umfassendem Behandlungsportfolio. Next.js-basierte Lösung mit WhatsApp-Integration, Google Analytics und professioneller Bildergalerie.',
    image: '/skinbloom.webp',
    url: 'https://www.skinbloom-aesthetics.ch',
    industry: 'Beauty & Wellness',
    tags: ['Next.js', 'WhatsApp Integration', 'Google Analytics'],
    color: 'from-purple-500 to-indigo-600',
    stats: { rating: '4.8★ Google Rating', tech: 'Next.js Framework', features: 'WhatsApp-Integration' },
    highlights: ['💻 Next.js Website-Entwicklung', '📊 Google Analytics Setup', '💬 WhatsApp-Integration', '📸 Before/After Galerie'],
  },
  {
    id: 'hautliebe-laser',
    title: 'Hautliebe & Laser',
    description: 'Fachinstitut für medizinische apparative Kosmetik mit zwei Standorten. WordPress-basierte Website mit Divi-Theme, Online-Terminbuchung und SEO-Optimierung.',
    image: '/hautliebe.webp',
    url: 'https://hautliebeundlaser.de',
    industry: 'Beauty & Wellness',
    tags: ['WordPress', 'Divi Theme', 'Online-Buchung'],
    color: 'from-rose-500 to-pink-600',
    stats: { locations: '2 Standorte', seo: 'SEO-optimiert', booking: 'Online Terminbuchung' },
    highlights: ['💻 WordPress mit Divi Theme', '📍 Multi-Standort-Verwaltung', '📅 Online-Terminbuchung', '🔍 Local SEO'],
  },
  {
    id: 'creative-hairstyling',
    title: 'Creative Hairstyling',
    description: 'Komplettlösung für Beauty-Salon: Von Corporate Identity über Website-Entwicklung bis Marketing. Inkl. GentleCalc-Integration für intelligente Preisberechnung.',
    image: '/creativhairstyling.webp',
    url: null,
    industry: 'Beauty & Wellness',
    tags: ['GentleCalc', 'Corporate Design', 'Marketing'],
    color: 'from-teal-500 to-cyan-600',
    stats: { bookings: '+150% Online-Buchungen', performance: '95/100 Lighthouse', mobile: '100% Mobile-optimiert' },
    highlights: ['🎨 Corporate Guideline', '💻 WordPress-Website', '🧮 GentleCalc-Integration', '📱 Marketing-Kampagnen'],
  },
  {
    id: 'nrw-realestate',
    title: 'NRW Real Estate',
    description: 'Professionelle Immobilien-Plattform mit intelligenter Suchfunktion, Objektverwaltung und CRM-Integration.',
    image: '/nrwrealestate.webp',
    url: null,
    industry: 'Immobilien',
    tags: ['Next.js', 'CRM Integration', 'Search Engine'],
    color: 'from-blue-500 to-cyan-600',
    stats: { properties: '500+ Immobilien', performance: '98/100 Lighthouse', conversion: '+120% Leads' },
    highlights: ['💻 Next.js mit Suchfunktion', '🏢 CRM-Integration', '📊 Lead-Tracking', '🔍 Local SEO'],
  },
  {
    id: 'gentletrack',
    title: 'GentleTrack',
    description: 'SaaS-Lösung für Projekt-Tracking und Transparenz. Echtzeit-Updates, automatische Benachrichtigungen und intuitive Benutzeroberfläche.',
    image: '/gentletrack.webp',
    url: null,
    industry: 'Tech & Software',
    tags: ['React', 'SaaS', 'Real-time'],
    color: 'from-aquamarine to-tropical-indigo',
    stats: { users: '200+ aktive Nutzer', updates: 'Echtzeit-Sync', satisfaction: '4.7★ Rating' },
    highlights: ['💻 Full-Stack SaaS', '⚡ WebSockets', '📧 E-Mail-Benachrichtigungen', '📱 Responsive'],
  },
  {
    id: 'kabelbruecken',
    title: 'Kabelbrücken Shop',
    description: 'E-Commerce-Lösung für technische Produkte mit umfassender Produktdatenbank, Warenwirtschaft und Payment-Integration.',
    image: '/kabelbruecken.webp',
    url: null,
    industry: 'Tech & Software',
    tags: ['E-Commerce', 'Payment Integration', 'B2B/B2C'],
    color: 'from-orange-500 to-red-600',
    stats: { products: '1000+ Produkte', orders: '+250% Bestellungen', automation: 'Vollautomatisiert' },
    highlights: ['🛒 E-Commerce-Plattform', '💳 Multi-Payment', '📦 Automatisierte Abwicklung', '🔄 B2B-Portal'],
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
    stats: { performance: '100/100 Lighthouse', loadTime: '< 0.5s Ladezeit', design: 'Minimalistisch' },
    highlights: ['💻 Next.js Website', '🎨 Framer Motion Animationen', '⚡ Performance-optimiert', '📱 Fully Responsive'],
  },
]

const CASE_STUDIES = [
  {
    title: 'Skinbloom Aesthetics',
    subtitle: 'Wie wir die Online-Präsenz verdreifachten',
    challenge: 'Skinbloom benötigte eine moderne, vertrauenserweckende Online-Präsenz, um ihre ästhetischen Behandlungen professionell zu präsentieren.',
    solution: 'Next.js-Website mit Before/After-Galerie, WhatsApp-Integration und Google Analytics.',
    results: ['300% mehr Website-Besucher in 3 Monaten', '4.8★ Google Rating mit 50+ Bewertungen', '85% höhere Conversion-Rate', 'Bounce-Rate um 45% reduziert'],
    color: 'from-purple-500 to-indigo-600',
    icon: HiTrendingUp,
  },
  {
    title: 'Creative Hairstyling',
    subtitle: 'GentleCalc steigert Online-Buchungen um 150%',
    challenge: 'Der Beauty-Salon hatte Schwierigkeiten, Online-Buchungen zu generieren. Kunden brachen ab, da Preise intransparent waren.',
    solution: 'GentleCalc-Integration, vollständiges Corporate Design und Marketing-Kampagne.',
    results: ['+150% Online-Buchungen in 6 Wochen', '95/100 Lighthouse Score', 'Session-Dauer +120%', 'ROI: 340% im ersten Quartal'],
    color: 'from-teal-500 to-cyan-600',
    icon: HiLightningBolt,
  },
  {
    title: 'NRW Real Estate',
    subtitle: 'Digitale Transformation im Immobiliensektor',
    challenge: 'Veraltetes System, manuelle Objektverwaltung, keine Lead-Tracking-Möglichkeit.',
    solution: 'Moderne Immobilien-Plattform mit CRM-Integration und automatisiertem Lead-Management.',
    results: ['+120% Lead-Generierung', '500+ Immobilien verwaltet', 'Verwaltungszeit -60%', 'Kundenzufriedenheit: 4.6★'],
    color: 'from-blue-500 to-cyan-600',
    icon: HiShieldCheck,
  },
]

const TESTIMONIALS = [
  { name: 'Sarah M.', role: 'Inhaberin, Skinbloom Aesthetics', text: 'Gentle Group hat unsere Erwartungen übertroffen! Die Website ist wunderschön und hat uns deutlich mehr Kunden gebracht.', rating: 5, color: 'from-purple-500 to-indigo-600' },
  { name: 'Michael K.', role: 'Geschäftsführer, NRW Real Estate', text: 'Professionell, schnell und zuverlässig. Das Team hat unsere komplexen Anforderungen verstanden und eine maßgeschneiderte Lösung entwickelt.', rating: 5, color: 'from-blue-500 to-cyan-600' },
  { name: 'Lisa T.', role: 'Creative Hairstyling', text: 'Die GentleCalc-Integration war ein Game-Changer für uns. 150% mehr Online-Buchungen!', rating: 5, color: 'from-teal-500 to-cyan-600' },
]

const PROCESS_STEPS = [
  { number: '01', title: 'Erstgespräch & Analyse', description: 'Wir lernen Ihr Business kennen, analysieren Ihre Ziele und entwickeln eine maßgeschneiderte Strategie.', icon: HiSparkles, color: 'from-aquamarine to-tropical-indigo' },
  { number: '02', title: 'Konzept & Design', description: 'Erstellung von Wireframes, Design-Mockups und User-Journey-Maps für optimale UX.', icon: HiCode, color: 'from-purple-500 to-indigo-600' },
  { number: '03', title: 'Entwicklung', description: 'Agile Entwicklung mit regelmäßigen Updates. Sie sehen den Fortschritt in Echtzeit.', icon: HiChip, color: 'from-blue-500 to-cyan-600' },
  { number: '04', title: 'Testing & Launch', description: 'Umfassende Tests, Performance-Optimierung und erfolgreicher Go-Live.', icon: HiCheckCircle, color: 'from-teal-500 to-cyan-600' },
  { number: '05', title: 'Support & Wartung', description: 'Kontinuierlicher Support, Updates und Optimierungen für langfristigen Erfolg.', icon: HiShieldCheck, color: 'from-rose-500 to-pink-600' },
]

const TECH_STACK = [
  { name: 'Next.js', category: 'Frontend', color: 'from-gray-700 to-gray-900' },
  { name: 'React', category: 'Frontend', color: 'from-blue-400 to-blue-600' },
  { name: '.NET Core', category: 'Backend', color: 'from-purple-500 to-purple-700' },
  { name: 'TypeScript', category: 'Language', color: 'from-blue-500 to-blue-700' },
  { name: 'Azure', category: 'Cloud', color: 'from-blue-500 to-cyan-500' },
  { name: 'WordPress', category: 'CMS', color: 'from-blue-600 to-indigo-600' },
  { name: 'Tailwind CSS', category: 'Styling', color: 'from-cyan-400 to-cyan-600' },
  { name: 'PostgreSQL', category: 'Database', color: 'from-blue-600 to-blue-800' },
]

const FAQS = [
  { question: 'Wie lange dauert die Entwicklung einer Website?', answer: 'Je nach Umfang zwischen 4–12 Wochen. Einfache Websites sind in 4–6 Wochen fertig, komplexe E-Commerce- oder SaaS-Lösungen benötigen 8–12 Wochen.' },
  { question: 'Was kostet eine professionelle Website?', answer: 'Unsere Projekte starten bei €3.500 für Business-Websites und gehen bis €25.000+ für umfassende SaaS-Lösungen.' },
  { question: 'Bietet ihr auch Wartung & Support an?', answer: 'Ja! Wir bieten Wartungsverträge ab €149/Monat: Updates, Sicherheits-Patches, Backups, Performance-Optimierung und Support.' },
  { question: 'Welche Technologien verwendet ihr?', answer: 'Next.js, React, .NET Core, Azure Cloud, WordPress – die Wahl hängt von Ihren spezifischen Anforderungen ab.' },
  { question: 'Kann ich die Website selbst pflegen?', answer: 'Absolut! Wir entwickeln benutzerfreundliche CMS-Lösungen und schulen Sie im Umgang. Alternativ übernehmen wir die Pflege.' },
]

const INDUSTRIES: Industry[] = ['Alle', 'Beauty & Wellness', 'Tech & Software', 'Immobilien', 'Personal']

export default function PortfolioPage() {
  const { actualTheme } = useTheme()
  const isDark = actualTheme === 'dark'
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>('Alle')
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const pageBg = isDark ? 'bg-black' : 'bg-white'
  const sectionAltBg = isDark ? 'bg-white/[0.03]' : 'bg-gray-50'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600'
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
  const dividerColor = isDark ? 'border-white/10' : 'border-gray-200'

  const filterBtn = (active: boolean) =>
    active
      ? 'bg-gradient-to-r from-aquamarine to-tropical-indigo text-black shadow-lg'
      : isDark
        ? 'bg-white/10 text-ghost-white border border-white/20 hover:border-aquamarine/40'
        : 'bg-white text-gray-700 border border-gray-300 hover:border-aquamarine'

  const filteredProjects = selectedIndustry === 'Alle'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter(p => p.industry === selectedIndustry)

  return (
    <main className={`min-h-screen ${pageBg} transition-colors duration-300`}>

      {/* ── Hero ── */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-aquamarine/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <Link href="/">
              <motion.span whileHover={{ x: -4 }} className={`inline-flex items-center gap-2 ${textMuted} hover:text-aquamarine transition-colors duration-300 text-sm cursor-pointer`}>
                <HiArrowLeft className="w-4 h-4" />
                Zurück zur Startseite
              </motion.span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-10">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="inline-flex items-center gap-2 px-5 py-2.5 bg-aquamarine/10 border border-aquamarine/30 rounded-full mb-6">
              <HiSparkles className="w-4 h-4 text-aquamarine" />
              <span className="text-aquamarine font-semibold text-sm">50+ erfolgreiche Projekte</span>
            </motion.div>

            <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Portfolio &{' '}
              <span className="bg-gradient-to-r from-aquamarine via-tropical-indigo to-purple-500 bg-clip-text text-transparent">
                Referenzen
              </span>
            </h1>
            <p className={`text-lg sm:text-xl ${textMuted} max-w-3xl mx-auto`}>
              Von Beauty & Wellness über E-Commerce bis zu komplexen SaaS-Lösungen – entdecken Sie unsere erfolgreichen Projekte.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="flex flex-wrap justify-center gap-3 mb-5">
            <div className={`flex items-center gap-2 ${textMuted} font-semibold text-sm`}>
              <HiFilter className="w-4 h-4" />
              <span>Branche:</span>
            </div>
            {INDUSTRIES.map(industry => (
              <motion.button key={industry} onClick={() => setSelectedIndustry(industry)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${filterBtn(selectedIndustry === industry)}`}>
                {industry}
              </motion.button>
            ))}
          </motion.div>

          <p className={`text-center text-sm ${textMuted}`}>
            {filteredProjects.length} {filteredProjects.length === 1 ? 'Projekt' : 'Projekte'} gefunden
          </p>
        </div>
      </section>

      {/* ── Projects ── */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <AnimatePresence mode="wait">
            <motion.div key={selectedIndustry} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="space-y-16 lg:space-y-24">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} isDark={isDark} textColor={textColor} textMuted={textMuted} cardBg={cardBg} dividerColor={dividerColor} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className={`py-16 lg:py-24 ${sectionAltBg} transition-colors duration-300`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Case Studies:{' '}
              <span className="bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent">Messbare Erfolge</span>
            </h2>
            <p className={`text-lg ${textMuted} max-w-2xl mx-auto`}>Wie wir unseren Kunden zu messbarem Erfolg verholfen haben</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {CASE_STUDIES.map((cs, index) => (
              <motion.div key={cs.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -6 }} className={`rounded-3xl p-6 sm:p-8 border shadow-lg hover:shadow-2xl transition-all duration-300 ${cardBg}`}>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cs.color} flex items-center justify-center mb-5 shadow-lg`}>
                  <cs.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-xl font-bold mb-1 ${textColor}`} style={{ fontWeight: 800 }}>{cs.title}</h3>
                <p className="text-aquamarine font-semibold text-sm mb-5">{cs.subtitle}</p>
                <div className="space-y-4 mb-5">
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${textMuted}`}>Herausforderung</h4>
                    <p className={`text-sm leading-relaxed ${textMuted}`}>{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className={`text-xs font-bold uppercase tracking-widest mb-1.5 ${textMuted}`}>Lösung</h4>
                    <p className={`text-sm leading-relaxed ${textMuted}`}>{cs.solution}</p>
                  </div>
                </div>
                <div className={`border-t pt-5 ${dividerColor}`}>
                  <h4 className={`text-xs font-bold uppercase tracking-widest mb-3 ${textMuted}`}>Ergebnisse</h4>
                  <ul className="space-y-2">
                    {cs.results.map((r, i) => (
                      <li key={i} className={`flex items-start gap-2 text-sm ${textMuted}`}>
                        <HiCheckCircle className="w-4 h-4 text-aquamarine flex-shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Das sagen unsere <span className="text-aquamarine">Kunden</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {TESTIMONIALS.map((t, index) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5 }} className={`rounded-3xl p-6 sm:p-8 border shadow-lg hover:shadow-2xl transition-all duration-300 ${cardBg}`}>
                <div className="flex gap-1 mb-5">
                  {[...Array(t.rating)].map((_, i) => (
                    <HiSparkles key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className={`text-base leading-relaxed mb-5 italic ${textMuted}`}>"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-bold text-sm ${textColor}`}>{t.name}</p>
                    <p className={`text-xs ${textMuted}`}>{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={`py-16 lg:py-24 ${sectionAltBg} transition-colors duration-300`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Unser <span className="text-tropical-indigo">Prozess</span>
            </h2>
            <p className={`text-lg ${textMuted} max-w-2xl mx-auto`}>Von der Idee zur fertigen Lösung – transparent und effizient</p>
          </motion.div>

          <div className="space-y-4">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className={`rounded-2xl sm:rounded-3xl p-5 sm:p-7 border shadow-lg flex items-center gap-5 sm:gap-8 transition-all duration-300 hover:shadow-xl ${cardBg}`}>
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className={`text-2xl sm:text-3xl font-black ${isDark ? 'text-white/20' : 'text-gray-200'}`}>{step.number}</span>
                    <h3 className={`text-lg sm:text-xl font-bold ${textColor}`} style={{ fontWeight: 800 }}>{step.title}</h3>
                  </div>
                  <p className={`text-sm sm:text-base leading-relaxed ${textMuted}`}>{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Unsere{' '}
              <span className="bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent">Technologien</span>
            </h2>
            <p className={`text-lg ${textMuted} max-w-2xl mx-auto`}>Moderne, bewährte Tools für maximale Performance und Skalierbarkeit</p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
            {TECH_STACK.map((tech, index) => (
              <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} whileHover={{ scale: 1.05, y: -4 }} className={`rounded-2xl p-5 border shadow-lg hover:shadow-xl transition-all duration-300 text-center ${cardBg}`}>
                <div className={`w-14 h-14 mx-auto mb-3 rounded-xl bg-gradient-to-br ${tech.color} flex items-center justify-center shadow-lg`}>
                  <HiCode className="w-7 h-7 text-white" />
                </div>
                <h3 className={`text-base font-bold mb-0.5 ${textColor}`} style={{ fontWeight: 700 }}>{tech.name}</h3>
                <p className={`text-xs ${textMuted}`}>{tech.category}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={`py-16 lg:py-24 ${sectionAltBg} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-center mb-12">
            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Häufig gestellte <span className="text-aquamarine">Fragen</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.08 }} className={`rounded-2xl border overflow-hidden ${cardBg}`}>
                <button onClick={() => setOpenFAQ(openFAQ === index ? null : index)} className={`w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 transition-colors duration-200 ${isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'}`}>
                  <span className={`text-base sm:text-lg font-bold ${textColor}`} style={{ fontWeight: 700 }}>{faq.question}</span>
                  <motion.div animate={{ rotate: openFAQ === index ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0">
                    <HiArrowRight className="w-5 h-5 text-aquamarine rotate-90" />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {openFAQ === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                      <div className={`px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base leading-relaxed ${textMuted}`}>{faq.answer}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/5 via-tropical-indigo/5 to-purple-500/5 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <HiSparkles className="w-12 h-12 sm:w-16 sm:h-16 text-aquamarine mx-auto mb-6" />

            <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Bereit für Ihr{' '}
              <span className="bg-gradient-to-r from-aquamarine via-tropical-indigo to-purple-500 bg-clip-text text-transparent">
                Erfolgsprojekt?
              </span>
            </h2>

            <p className={`text-lg sm:text-xl ${textMuted} mb-10 max-w-2xl mx-auto leading-relaxed`}>
              Lassen Sie uns in einem kostenlosen Erstgespräch besprechen, wie wir Ihre digitale Vision Wirklichkeit werden lassen können.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/#contact">
                <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(1, 255, 169, 0.3)' }} whileTap={{ scale: 0.95 }} className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-base sm:text-lg shadow-xl transition-all duration-300 inline-flex items-center gap-3" style={{ fontWeight: 800 }}>
                  Kostenloses Erstgespräch
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link href="/project-questionnaire">
                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-8 sm:px-12 py-4 sm:py-5 font-bold rounded-full text-base sm:text-lg border-2 border-aquamarine transition-all duration-300 inline-flex items-center gap-3 ${isDark ? 'text-ghost-white hover:bg-aquamarine/10' : 'text-oxford-blue hover:bg-aquamarine/5'}`} style={{ fontWeight: 700 }}>
                  <HiClock className="w-5 h-5 text-aquamarine" />
                  Projekt-Fragebogen
                </motion.button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-14 max-w-3xl mx-auto">
              {[
                { icon: HiCheckCircle, text: 'Kostenloses Erstgespräch' },
                { icon: HiLightningBolt, text: 'Schnelle Umsetzung' },
                { icon: HiShieldCheck, text: '100% Zufriedenheitsgarantie' },
              ].map(({ icon: Icon, text }, index) => (
                <motion.div key={text} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: index * 0.1 }} className="flex flex-col items-center gap-2">
                  <Icon className="w-8 h-8 text-aquamarine" />
                  <p className={`font-semibold text-sm ${textMuted}`}>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
  isDark: boolean
  textColor: string
  textMuted: string
  cardBg: string
  dividerColor: string
}

function ProjectCard({ project, index, isDark, textColor, textMuted, cardBg, dividerColor }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.05 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
    >
      {/* Image */}
      <motion.div className={`relative ${isEven ? '' : 'lg:col-start-2'}`} whileHover={{ scale: 1.02 }} transition={{ duration: 0.3 }}>
        <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10`} />
          <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
            <div className="flex gap-2 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={`absolute -top-4 -right-4 z-30 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-xl shadow-xl font-bold text-xs sm:text-sm`}>
          {project.industry}
        </div>
      </motion.div>

      {/* Content */}
      <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
        <motion.div initial={{ opacity: 0, x: isEven ? -20 : 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.15 }}>
          <h3 className={`text-3xl sm:text-4xl font-bold mb-4 ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>{project.title}</h3>
          <p className={`text-base sm:text-lg mb-5 leading-relaxed ${textMuted}`}>{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold ${isDark ? 'bg-white/10 text-ghost-white' : 'bg-gray-100 text-gray-700'}`}>{tag}</span>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-3 mb-6">
            {Object.entries(project.stats).map(([key, value]) => (
              <div key={key} className={`flex items-center gap-3 p-3 sm:p-4 rounded-xl border ${cardBg}`}>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center flex-shrink-0`}>
                  <HiSparkles className="w-5 h-5 text-white" />
                </div>
                <span className={`text-sm sm:text-base font-bold ${textColor}`}>{value}</span>
              </div>
            ))}
          </div>

          <div className={`rounded-2xl p-5 border mb-6 ${cardBg}`}>
            <h4 className={`text-sm font-bold mb-3 ${textColor}`}>Unsere Leistungen:</h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${textMuted}`}>
                  <span className="flex-shrink-0">{h.split(' ')[0]}</span>
                  <span>{h.substring(h.indexOf(' ') + 1)}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className={`px-7 py-3.5 bg-gradient-to-r ${project.color} text-white font-bold rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2`} style={{ fontWeight: 700 }}>
                Live-Website ansehen
                <HiArrowRight className="w-4 h-4" />
              </motion.button>
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  )
}