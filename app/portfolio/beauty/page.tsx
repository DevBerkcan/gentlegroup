'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight, HiSparkles, HiHeart, HiStar, HiCheckCircle } from 'react-icons/hi'
import Footer from '@/components/Footer'

const BEAUTY_PROJECTS = [
  {
    id: 'skinbloom-aesthetics',
    title: 'Skinbloom Aesthetics',
    description: 'Premium-Auftritt für ästhetische Medizin inkl. vollautomatischer Anfrage-Strecke. Fokus: Vertrauen aufbauen, 24/7 erreichbar sein und Beratungen planbar machen.',
    image: '/skinbloom.png',
    url: 'https://www.skinbloom-aesthetics.ch',
    tags: ['Next.js', 'WhatsApp Integration', 'Google Analytics'],
    color: 'from-purple-500 to-indigo-600',
    goal: 'Mehr hochwertige Beratungsanfragen für minimal-invasive Behandlungen ohne Telefon-Pingpong.',
    outcome: [
      '+180 % mehr Online-Anfragen in den ersten 90 Tagen',
      '4.8★ Google-Bewertung dank klarer Social-Proof-Sektion',
      '24/7 WhatsApp-Lead-Strecke und automatisierte Rückrufe'
    ],
    implementation: [
      'Conversion-Landingpage mit klarer Terminführung und GentleCalc-Formular',
      'Next.js Performance-Stack inkl. Tracking & Analytics Setups',
      'Visuelle Behandlungsgalerie zur Vertrauensbildung vor dem Termin'
    ]
  },
  {
    id: 'hautliebe-laser',
    title: 'Hautliebe & Laser',
    description: 'Fachinstitut für apparative Kosmetik mit zwei Standorten (Wuppertal & Duisburg). Ziel: Telefonaufkommen entzerren und Neukundinnen auf beide Standorte verteilen.',
    image: '/hautliebe.png',
    url: 'https://hautliebeundlaser.de',
    tags: ['WordPress', 'Divi Theme', 'Online-Buchung'],
    color: 'from-rose-500 to-pink-600',
    goal: 'Online-Buchung ausbauen und beide Städte sichtbar voneinander abgrenzen.',
    outcome: [
      '62 % der Termine werden heute online gebucht – keine Telefon-Warteschleifen mehr',
      'Standortspezifische Landingpages liefern +90 % mehr lokale Rankings',
      'Direkte WhatsApp-Anfragen für Laserbehandlungen innerhalb weniger Klicks'
    ],
    implementation: [
      'WordPress + Divi mit eigenem Multi-Standort-Modul und Standort-Switcher',
      'Schema.org & Local SEO Setup inkl. Bewertungs-Widgets',
      'Termin- und WhatsApp-Buttons auf jeder Sektion für schnelle Conversion'
    ]
  },
  {
    id: 'creative-hairstyling',
    title: 'Creative Hairstyling',
    description: 'Komplettlösung für Boutique-Salon: neue Marke, Preiskommunikation, Online-Auftritt und Kampagnen mit messbaren Buchungen.',
    image: '/creativhairstyling.png',
    url: null,
    tags: ['GentleCalc', 'Corporate Design', 'Marketing'],
    color: 'from-teal-500 to-cyan-600',
    goal: 'Marken-Relaunch mit klarer Preisstrategie und Online-Terminführung.',
    outcome: [
      '+150 % Online-Buchungen nach Kampagnenstart',
      '95/100 Lighthouse Score → Top-Mobile-Erlebnis',
      'Preise werden interaktiv erklärt, dadurch weniger Einwand-Gespräche'
    ],
    implementation: [
      'Corporate Design & Storytelling mit Moodboards und Shooting-Guides',
      'GentleCalc als intelligenter Preisrechner inkl. Upsell-Logiken',
      'Holistischer Marketing-Funnel (Social Ads, Automationen und Landingpages)'
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
              <span className="block text-gray-900 mb-2">Mehr Termine für dein</span>
              <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent">
                Beauty- oder Kosmetikstudio
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Wir entwickeln Websites für Beauty-Studios, die Vertrauen aufbauen, online sichtbar sind
              und messbar mehr Buchungen bringen – statt nur hübsch auszusehen.
            </p>

            <div className="flex flex-col items-center gap-6 mb-10">
              <Link href="/#contact">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 40px rgba(236, 72, 153, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-12 py-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-full text-xl shadow-xl hover:shadow-pink-500/50 transition-all duration-300"
                  style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
                >
                  Kostenlose Studio-Analyse buchen
                </motion.button>
              </Link>

              <div className="flex flex-col md:flex-row items-center gap-4 text-gray-600 text-sm md:text-base">
                {[ 'spezialisiert auf Beauty & Wellness', 'WhatsApp & Online-Buchung integriert', 'DSGVO- & Google-ready' ].map(text => (
                  <div key={text} className="flex items-center gap-2">
                    <HiCheckCircle className="text-pink-500 w-5 h-5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: HiHeart, label: 'laufende Beauty-Studios', value: '15+' },
                { icon: HiStar, label: 'Ø Terminsteigerung pro Launch', value: '+120 %' },
                { icon: HiSparkles, label: 'Google-Bewertungen unserer Kunden', value: '4.9★' }
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
                title: 'Termin-starke Websites',
                description: 'Next.js oder WordPress – immer mit klarer Conversational Flow, Buchung & WhatsApp.',
                color: 'from-purple-500 to-indigo-600'
              },
              {
                icon: '🧮',
                title: 'GentleCalc & Preisführung',
                description: 'Intelligenter Preisrechner erklärt Behandlungen, upsellt Pakete und qualifiziert Anfragen.',
                color: 'from-pink-500 to-rose-600'
              },
              {
                icon: '🎨',
                title: 'Brand & Shooting-Guide',
                description: 'Markenstory, Farben, Moodboards – damit deine Bilder und Texte konsistent wirken.',
                color: 'from-teal-500 to-cyan-600'
              },
              {
                icon: '📱',
                title: 'Social Ads & Funnels',
                description: 'Meta/Google-Kampagnen landen auf Landingpages mit CRM-Automationen.',
                color: 'from-indigo-500 to-purple-600'
              },
              {
                icon: '📅',
                title: 'Online-Buchung & WhatsApp',
                description: '24/7 Terminbuchung, Warteliste & WhatsApp-Antworten – immer DSGVO-konform.',
                color: 'from-rose-500 to-pink-600'
              },
              {
                icon: '📊',
                title: 'Analytics & Optimierung',
                description: 'Clarity, GA4, Conversion-Tracking und laufende CRO-Sprints.',
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

      {/* Online Booking Showcase */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-flex items-center gap-2 px-4 py-2 bg-pink-50 text-pink-600 rounded-full text-sm font-semibold mb-6">
                <HiSparkles className="w-4 h-4" /> 24/7 Online-Buchung
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                Termine kommen, während dein Studio geschlossen ist.
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Wir integrieren Buchung, Wartelisten und WhatsApp so, dass Interessentinnen nie lange suchen.
                Jede Sektion deiner Seite hat eine klare Aktion – Termin, WhatsApp oder Beratung.
              </p>
              <ul className="space-y-4 text-gray-700 mb-8">
                {[
                  'Direkte Verfügbarkeiten & SMS/WhatsApp-Bestätigung',
                  'Funnel für Neukunden inkl. Fragebogen (GentleCalc)',
                  'Automatische Erinnerungen & Follow-up Sequenzen'
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-full shadow-lg"
                  style={{ fontWeight: 700 }}
                >
                  Demo der Buchungsstrecke zeigen lassen
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-3xl border border-gray-200 shadow-2xl p-6">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-semibold text-gray-500">Live Buchungsboard</span>
                    <span className="text-sm text-pink-500 font-semibold">Beauty Studio Zürich</span>
                  </div>
                  <div className="h-1 rounded-full bg-gray-100">
                    <div className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full w-3/4" />
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { treatment: 'HydraFacial Deluxe', time: '09:30', status: 'bestätigt' },
                    { treatment: 'Laser Haarentfernung', time: '12:00', status: 'wartet auf Rückfrage' },
                    { treatment: 'Medical Needling', time: '15:15', status: 'WhatsApp Follow-up' }
                  ].map(slot => (
                    <div key={slot.treatment} className="p-4 border border-gray-100 rounded-2xl bg-gray-50 flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-gray-900">{slot.treatment}</p>
                        <p className="text-sm text-gray-500">{slot.status}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Termin</p>
                        <p className="text-lg font-bold text-gray-900">{slot.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -bottom-10 -right-6 bg-white border border-gray-200 shadow-xl rounded-2xl p-4 w-48">
                <p className="text-xs text-gray-500 mb-1">Anfragen letzte 7 Tage</p>
                <p className="text-3xl font-bold text-gray-900">+38</p>
                <p className="text-xs text-green-500 font-semibold">+154 % zu Vorwoche</p>
              </div>
            </motion.div>
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
              Jedes Projekt startet mit einem klaren Conversion-Ziel. Erst wenn Buchungen, Anfragen
              oder Bewertungen steigen, ist das Projekt abgeschlossen.
            </p>
          </motion.div>

          <div className="space-y-24">
            {BEAUTY_PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Post-Project CTA */}
      <section className="py-16 lg:py-20">
        <div className="max-w-[1100px] mx-auto px-8 lg:px-16">
          <div className="rounded-[32px] bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white p-10 lg:p-16 shadow-2xl text-center">
            <p className="uppercase tracking-[0.3em] text-sm font-semibold mb-4">Nächster Schritt</p>
            <h3 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              Möchtest du ähnliche Ergebnisse für dein Studio?
            </h3>
            <p className="text-lg text-white/80 mb-8">
              Wir zeigen dir, welche Behandlungen das größte Potenzial haben, wie deine Buchungsstrecke aussehen sollte
              und welche Inhalte Vertrauen schaffen.
            </p>
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-pink-600 font-bold rounded-full text-lg shadow-lg"
              >
                Kostenlose Studio-Analyse buchen
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Beauty Expertise */}
      <section className="py-20 lg:py-32 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="inline-flex items-center gap-2 px-4 py-2 bg-white text-pink-600 rounded-full text-sm font-semibold mb-6 border border-pink-100">
                <HiHeart className="w-4 h-4" /> Warum wir Beauty verstehen
              </p>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
                Wir arbeiten extrem eng mit Beauty-Studios in der Schweiz und Deutschland zusammen.
              </h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Jede Optimierung testen wir erst in unserem Studio, bevor sie in Kundenprojekten landet. Wir sprechen die Sprache
                deiner Kundinnen, kennen Pain Points im Alltag (No-Shows, Telefonstress, Preisdiskussionen) und bauen Lösungen,
                die sofort im Alltag funktionieren.
              </p>
              <div className="grid grid-cols-1 gap-4">
                {[
                  'Eigene Clarity-Datenbank mit >500 Beauty-Sessions',
                  'Erprobte WhatsApp-Skripte und Vorlagen für Folgekommunikation',
                  'Content-Framework aus realen Kampagnen (CH & DE)'
                ].map(item => (
                  <div key={item} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-2xl">
                <p className="text-sm text-gray-500 mb-4">Inhalte der Studio-Analyse</p>
                <ul className="space-y-4 text-gray-700">
                  {[
                    { label: 'Behandlungs-Fokus', value: 'Was verkauft sich online am besten?' },
                    { label: 'Content & Proof', value: 'Welche Bilder & Videos fehlen?' },
                    { label: 'Buchungsflow', value: 'Wie viele Klicks bis zum Termin?' },
                    { label: 'Clarity Insights', value: 'Heatmaps & Scrolltiefe' }
                  ].map(item => (
                    <li key={item.label} className="p-4 border border-gray-100 rounded-2xl bg-gray-50">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500 mb-1">{item.label}</p>
                      <p className="text-base font-semibold text-gray-900">{item.value}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
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

      <Footer />
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

          {/* Outcome Blocks */}
          <div className="space-y-4 mb-10">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">🎯 Ziel</p>
              <p className="text-lg text-gray-800">{project.goal}</p>
            </div>
            <div className="bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-200 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">📈 Ergebnis</p>
              <ul className="space-y-3 text-gray-800">
                {project.outcome.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <HiCheckCircle className="w-5 h-5 text-pink-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl border border-gray-200 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-3">🛠 Umsetzung</p>
              <ul className="space-y-3 text-gray-800">
                {project.implementation.map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <HiSparkles className="w-5 h-5 text-purple-500 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
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
