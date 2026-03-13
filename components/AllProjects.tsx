'use client'

import { motion, AnimatePresence } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { HiExternalLink, HiSearch, HiX, HiArrowRight, HiSparkles, HiFilter } from 'react-icons/hi'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

type Category = 'Alle' | 'Full-Stack Development' | 'CRM System' | 'Web-App' | 'Group' | 'E-Commerce' | 'Booking System' | 'Tool' | 'Landing Page'

interface Project {
  title: string
  category: Exclude<Category, 'Alle'>
  description: string
  tags: string[]
  color: string
  image: string
  url: string | null
  imagePosition: string
  highlights: string[]
  stats: Record<string, string>
}

const projects: Project[] = [
  {
    title: 'Emma Solution',
    category: 'Full-Stack Development',
    description: 'Umfassende Logistik-Management-Plattform mit Web-App, Backend-API und Android-App für Fracht- und Fahrzeugverwaltung mit Echtzeit-Tracking.',
    tags: ['React', 'TypeScript', 'ASP.NET Core 8', 'Android', 'Azure SQL'],
    color: 'from-aquamarine to-tropical-indigo',
    image: '/emma.webp',
    url: 'https://emmasolution.com/',
    imagePosition: 'object-top',
    highlights: ['Web-App für Frachtverwaltung', 'Backend-API mit ASP.NET Core 8', 'Android-App für Fahrer', 'Echtzeit-Fahrzeug-Tracking', 'Azure SQL Datenbank'],
    stats: { platform: 'Web + Android', backend: 'ASP.NET Core 8', database: 'Azure SQL' },
  },
  {
    title: 'Gentle Track',
    category: 'CRM System',
    description: 'Projektmanagement-System mit React Frontend und ASP.NET Core Backend für Echtzeit-Zusammenarbeit und umfassende Berichterstattung.',
    tags: ['React', 'Vite', 'ASP.NET Core 8', 'MS SQL', 'Multi-language'],
    color: 'from-tropical-indigo to-aquamarine',
    image: '/gentletrack.webp',
    url: 'https://f7e2b27f.gentle-track-ui.pages.dev/',
    imagePosition: 'object-top',
    highlights: ['Echtzeit-Projektverfolgung', 'Multi-language Unterstützung', 'Umfassende Berichterstattung', 'ASP.NET Core 8 Backend', 'MS SQL Datenbank'],
    stats: { frontend: 'React + Vite', backend: 'ASP.NET Core 8', sprachen: 'Multi-language' },
  },
  {
    title: 'Creative Hairstyling',
    category: 'Web-App',
    description: 'Moderne Friseur-Website entwickelt mit React und Vite für schnelle Performance und reaktionsschnelle Benutzeroberfläche.',
    tags: ['React', 'TypeScript', 'Vite', 'Responsive Design'],
    color: 'from-aquamarine to-oxford-blue',
    image: '/creativhairstyling.webp',
    url: 'https://creative-hairstyling-3u6e.vercel.app/',
    imagePosition: 'object-[center_40%]',
    highlights: ['React + Vite für schnelle Performance', 'Vollständig responsives Design', 'TypeScript für Typsicherheit', 'Modernes UI/UX'],
    stats: { framework: 'React + Vite', sprache: 'TypeScript', hosting: 'Vercel' },
  },
  {
    title: 'Hautliebe & Laser',
    category: 'Group',
    description: 'Professionelle WordPress-Website für Hautpflege und Laser-Behandlungen mit modernem Design und optimaler Performance.',
    tags: ['WordPress', 'PHP', 'Custom Theme', 'SEO'],
    color: 'from-tropical-indigo to-oxford-blue',
    image: '/hautliebe.webp',
    url: 'https://hautliebeundlaser.de/',
    imagePosition: 'object-center',
    highlights: ['Custom WordPress Theme', 'SEO-Optimierung', 'PHP Backend', 'Professionelles Design'],
    stats: { cms: 'WordPress', sprache: 'PHP', optimierung: 'SEO' },
  },
  {
    title: 'JJ Immobilienpartner',
    category: 'Group',
    description: 'Elegante Immobilien-Website mit Next.js für optimale SEO-Performance und moderne Benutzererfahrung.',
    tags: ['Next.js', 'React', 'TypeScript', 'SEO'],
    color: 'from-aquamarine to-tropical-indigo',
    image: '/janjacobi.webp',
    url: 'https://www.jj-immobilienpartner.de/',
    imagePosition: 'object-[center_40%]',
    highlights: ['Next.js für optimales SEO', 'Modernes Immobilien-Layout', 'TypeScript', 'Responsives Design'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', optimierung: 'SEO' },
  },
  {
    title: 'Kabelbrücken24',
    category: 'E-Commerce',
    description: 'E-Commerce-Plattform für Kabelbrücken mit Next.js, optimiert für Performance und Conversion.',
    tags: ['Next.js', 'React', 'TypeScript', 'E-Commerce'],
    color: 'from-tropical-indigo to-aquamarine',
    image: '/kabelbruecken.webp',
    url: 'https://www.kabelbruecken24.de/',
    imagePosition: 'object-center',
    highlights: ['Next.js E-Commerce-Plattform', 'Produktkatalog', 'Performance-optimiert', 'TypeScript'],
    stats: { framework: 'Next.js', typ: 'E-Commerce', sprache: 'TypeScript' },
  },
  {
    title: 'Skinbloom Aesthetics',
    category: 'Group',
    description: 'Ästhetische Klinik-Website mit Next.js für professionelle Präsentation und optimale Ladezeiten.',
    tags: ['Next.js', 'React', 'TypeScript', 'Responsive Design'],
    color: 'from-aquamarine to-oxford-blue',
    image: '/skinbloom.webp',
    url: 'https://www.skinbloom-aesthetics.ch/',
    imagePosition: 'object-[center_40%]',
    highlights: ['Next.js für schnelle Ladezeiten', 'Professionelles Klinik-Design', 'Responsiv auf allen Geräten', 'TypeScript'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', hosting: 'Vercel' },
  },
  {
    title: 'NRW Real Estate',
    category: 'Group',
    description: 'Immobilienportal mit Next.js für effiziente Darstellung von Immobilienangeboten und SEO-Optimierung.',
    tags: ['Next.js', 'React', 'TypeScript', 'SEO'],
    color: 'from-tropical-indigo to-oxford-blue',
    image: '/nrwrealestate.webp',
    url: 'https://www.nrwrealestate.de/',
    imagePosition: 'object-[center_40%]',
    highlights: ['Next.js Immobilienportal', 'SEO-Optimierung', 'Immobilienangebote-Verwaltung', 'TypeScript'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', optimierung: 'SEO' },
  },
  {
    title: 'Teretnjaci',
    category: 'Full-Stack Development',
    description: 'News-Plattform rund um Trucks und Logistik als Web-App, Android-App und iOS-App. Admins verwalten Beiträge über ein Admin-Portal. Nutzer sehen alle Posts auf der Startseite.',
    tags: ['React', 'Vite', 'Node.js', 'MySQL', 'Android', 'iOS', 'Cloudflare', 'cPanel'],
    color: 'from-aquamarine to-tropical-indigo',
    image: '/teretnjaci.png',
    url: 'https://teretnjaci.ba',
    imagePosition: 'object-top',
    highlights: ['Web-App mit React + Vite', 'Node.js Backend auf cPanel', 'MySQL Datenbank', 'Android-App live im Store', 'iOS-App live im Store', 'Admin-Portal für Beiträge', 'Frontend auf Cloudflare'],
    stats: { platform: 'Web + Android + iOS', backend: 'Node.js + MySQL', frontend: 'Cloudflare' },
  },
  {
    title: 'Skinbloom Buchungssystem',
    category: 'Booking System',
    description: 'Buchungsplattform für Skinbloom Aesthetics. Admins verwalten Buchungen, Zeitblockierungen, Services, Mitarbeiter und Kunden. Mitarbeiter sehen nur ihren eigenen Kalender. Kunden buchen online mit Service- und Mitarbeiterwahl.',
    tags: ['Next.js', 'React', 'C#', 'ASP.NET', 'MS SQL', 'SMTP', 'Vercel'],
    color: 'from-tropical-indigo to-aquamarine',
    image: '/skinbloombooking.png',
    url: 'https://skinbloombooking.gentlegroup.de/',
    imagePosition: 'object-top',
    highlights: ['Admin-Dashboard für Buchungsverwaltung', 'Zeitblockierung für Mitarbeiter', 'Mitarbeiter-Login mit eigenem Kalender', 'Service- und Kundenverwaltung', 'E-Mail-Versand via SMTP', 'Online-Buchung für Kunden', 'C# ASP.NET Backend auf ASP Monster', 'MS SQL Datenbank'],
    stats: { frontend: 'Next.js auf Vercel', backend: 'C# ASP.NET auf ASP Monster', datenbank: 'MS SQL' },
  },
  {
    title: 'Skinbloom Preisrechner',
    category: 'Tool',
    description: 'Preisrechner für Skinbloom Aesthetics. Admins legen Kunden, Services, Kategorien und Preise fest. Am Ende wird ein Kostenvoranschlag als PDF exportiert.',
    tags: ['Next.js', 'React', 'TypeScript', 'C#', 'ASP.NET', 'MS SQL', 'PDF', 'Vercel'],
    color: 'from-aquamarine to-oxford-blue',
    image: '/skinbloompreisrechner.png',
    url: 'https://skinbloompreisrechner.gentlegroup.de/skinbloom',
    imagePosition: 'object-top',
    highlights: ['Admin-Verwaltung für Services und Preise', 'Kundenverwaltung', 'Service-Kategorien', 'PDF-Export als Kostenvoranschlag', 'C# ASP.NET Backend', 'MS SQL Datenbank'],
    stats: { frontend: 'Next.js auf Vercel', backend: 'C# ASP.NET auf ASP Monster', export: 'PDF-Kostenvoranschlag' },
  },
  {
    title: 'Zoey Preisrechner',
    category: 'Tool',
    description: 'Einfacher Preisrechner zur schnellen Berechnung von Preisen und Rabatten ohne Kundenverwaltung oder Service-Konfiguration.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    color: 'from-tropical-indigo to-oxford-blue',
    image: '/zoeypreisrechner.png',
    url: 'https://zoey-preisrechner.vercel.app/',
    imagePosition: 'object-top',
    highlights: ['Schnelle Preisberechnung', 'Rabatt-Kalkulation', 'Einfaches UI ohne Verwaltung', 'Next.js auf Vercel'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', hosting: 'Vercel' },
  },
  {
    title: 'VIPShuttle24',
    category: 'Landing Page',
    description: 'Elegante Landing Page für erstklassigen Chauffeur-Service in Düsseldorf und NRW. Diskretion, Pünktlichkeit und Komfort auf höchstem Niveau.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    color: 'from-aquamarine to-tropical-indigo',
    image: '/vipshuttle24.png',
    url: 'https://vipshuttle-24.de/',
    imagePosition: 'object-center',
    highlights: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', hosting: 'Vercel' },
  },
  {
    title: 'Dario Barber',
    category: 'Booking System',
    description: 'Linktree und Buchungssystem für Dario Barber. Kunden buchen online, Admins verwalten Termine, Services und Mitarbeiter – gleicher Funktionsumfang wie das Skinbloom Buchungssystem.',
    tags: ['Next.js', 'React', 'C#', 'ASP.NET', 'MS SQL', 'Vercel'],
    color: 'from-tropical-indigo to-aquamarine',
    image: '/dariobarber.png',
    url: 'https://limktree-keinfriseur.vercel.app/',
    imagePosition: 'object-top',
    highlights: ['Linktree-Seite', 'Online-Buchungssystem', 'Admin-Dashboard', 'Mitarbeiter-Kalender', 'Service-Verwaltung', 'C# ASP.NET Backend', 'MS SQL Datenbank'],
    stats: { frontend: 'Next.js auf Vercel', backend: 'C# ASP.NET auf ASP Monster', datenbank: 'MS SQL' },
  },
  {
    title: 'Casa del Soul Tattoostudio',
    category: 'Booking System',
    description: 'Linktree und Buchungssystem für Casa del Soul Tattoostudio. Gleicher Funktionsumfang wie das Skinbloom Buchungssystem und Dario Barber.',
    tags: ['Next.js', 'React', 'C#', 'ASP.NET', 'MS SQL', 'Vercel'],
    color: 'from-aquamarine to-oxford-blue',
    image: '/casadelsoul.png',
    url: 'https://casa-del-soul-tattoostudio.vercel.app/',
    imagePosition: 'object-top',
    highlights: ['Linktree-Seite', 'Online-Buchungssystem', 'Admin-Dashboard', 'Mitarbeiter-Kalender', 'Service-Verwaltung', 'C# ASP.NET Backend', 'MS SQL Datenbank'],
    stats: { frontend: 'Next.js auf Vercel', backend: 'C# ASP.NET auf ASP Monster', datenbank: 'MS SQL' },
  },
  {
    title: 'Hautliebe Preisrechner',
    category: 'Tool',
    description: 'Preisrechner für Hautliebe. Einfache Berechnung von Preisen und Rabatten – gleicher Funktionsumfang wie der Zoey Preisrechner.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    color: 'from-tropical-indigo to-oxford-blue',
    image: '/zoeypreisrechner.png',
    url: 'https://hautliebepreisrechner-fyg2.vercel.app/api/auth/signin',
    imagePosition: 'object-top',
    highlights: ['Schnelle Preisberechnung', 'Rabatt-Kalkulation', 'Einfaches UI ohne Verwaltung', 'Next.js auf Vercel'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', hosting: 'Vercel' },
  },
  {
    title: 'Autocenter Kaddoura',
    category: 'Landing Page',
    description: 'Professionelle Landing Page für Autocenter Kaddoura. Modernes Design mit Next.js und optimaler Performance.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    color: 'from-aquamarine to-tropical-indigo',
    image: '/kaddoura.png',
    url: 'https://kaddouraautocenter.vercel.app/',
    imagePosition: 'object-center',
    highlights: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', hosting: 'Vercel' },
  },
  {
    title: 'Golden Ticket',
    category: 'Landing Page',
    description: 'Ansprechende Landing Page für Golden Ticket. Entwickelt mit Next.js, React und TypeScript für schnelle Ladezeiten.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    color: 'from-tropical-indigo to-aquamarine',
    image: '/goldenticket.png',
    url: 'https://goldentickethomepage.vercel.app/',
    imagePosition: 'object-center',
    highlights: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', hosting: 'Vercel' },
  },
  {
    title: 'Sweet Funnel Gewinnspiel',
    category: 'Landing Page',
    description: 'Landing Page für Sweet Funnel Gewinnspiel. Gleicher Aufbau und Technologie-Stack wie Golden Ticket.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    color: 'from-aquamarine to-oxford-blue',
    image: '/sweetsfunnel.png',
    url: 'https://sweetfunnelgewinnspiel.vercel.app/',
    imagePosition: 'object-center',
    highlights: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', hosting: 'Vercel' },
  },
  {
    title: 'Sweets Funnel',
    category: 'Landing Page',
    description: 'Landing Page für Sweets Funnel. Gleicher Aufbau und Technologie-Stack wie Golden Ticket.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vercel'],
    color: 'from-tropical-indigo to-oxford-blue',
    image: '/sweetsfunnel.png',
    url: 'https://sweetsfunnel.vercel.app/',
    imagePosition: 'object-center',
    highlights: ['Professionelle Landing Page', 'Next.js für schnelle Ladezeiten', 'Responsives Design', 'TypeScript'],
    stats: { framework: 'Next.js', sprache: 'TypeScript', hosting: 'Vercel' },
  },
]

const ALL_CATEGORIES: Category[] = [
  'Alle',
  'Full-Stack Development',
  'CRM System',
  'Web-App',
  'Group',
  'E-Commerce',
  'Booking System',
  'Tool',
  'Landing Page',
]

interface ProjectCardProps {
  project: Project
  index: number
  isDark: boolean
  textColor: string
  textMuted: string
  cardBg: string
}

function ProjectCard({ project, index, isDark, textColor, textMuted, cardBg }: ProjectCardProps) {
  const isEven = index % 2 === 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.04 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
    >
      <motion.div
        className={`relative ${isEven ? '' : 'lg:col-start-2'}`}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 z-10`} />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover ${project.imagePosition || 'object-top'}`}
            sizes="(max-width: 1024px) 100vw, 50vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 z-20 flex items-end p-6">
            <div className="flex gap-2 flex-wrap">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs font-semibold">{tag}</span>
              ))}
            </div>
          </div>
        </div>
        <div className={`absolute -top-4 -right-4 z-30 px-4 py-2 bg-gradient-to-r ${project.color} text-white rounded-xl shadow-xl font-bold text-xs sm:text-sm`}>
          {project.category}
        </div>
      </motion.div>

      <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <h3
            className={`text-3xl sm:text-4xl font-bold mb-4 ${textColor}`}
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            {project.title}
          </h3>

          <p className={`text-base sm:text-lg mb-5 leading-relaxed ${textMuted}`}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map(tag => (
              <span
                key={tag}
                className={`px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold ${
                  isDark ? 'bg-white/10 text-ghost-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {tag}
              </span>
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
            <h4 className={`text-sm font-bold mb-3 ${textColor}`}>Leistungen:</h4>
            <ul className="space-y-2">
              {project.highlights.map((h, i) => (
                <li key={i} className={`flex items-start gap-2 text-sm ${textMuted}`}>
                  <HiSparkles className="w-4 h-4 text-aquamarine flex-shrink-0 mt-0.5" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.url && (
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-7 py-3.5 bg-gradient-to-r ${project.color} text-white font-bold rounded-full text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2`}
                style={{ fontWeight: 700 }}
              >
                Live-Website ansehen
                <HiExternalLink className="w-4 h-4" />
              </motion.button>
            </a>
          )}
        </motion.div>
      </div>
    </motion.article>
  )
}

const AllProjects = () => {
  const { actualTheme } = useTheme()
  const ref = useRef(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<Category>('Alle')

  const isDark = actualTheme === 'dark'
  const bgColor = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const subTextColor = isDark ? 'text-ghost-white/60' : 'text-gray-500'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-gray-900/5'
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === 'Alle' || p.category === activeCategory
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const filterBtn = (active: boolean) =>
    active
      ? 'bg-gradient-to-r from-aquamarine to-tropical-indigo text-black shadow-lg'
      : isDark
        ? 'bg-white/10 text-ghost-white border border-white/20 hover:border-aquamarine/40'
        : 'bg-white text-gray-700 border border-gray-300 hover:border-aquamarine'

  return (
    <section
      ref={ref}
      className={`min-h-screen py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-8 lg:left-16 ${backgroundTextColor} font-black text-[80px] lg:text-[140px] xl:text-[180px] leading-none select-none`}>
          PROJEKTE
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-tropical-indigo/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-aquamarine/8 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className={`text-5xl lg:text-6xl font-bold ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            ALLE PROJEKTE
          </h1>
          <p className={`mt-4 text-lg lg:text-xl ${subTextColor} max-w-2xl`}>
            Ein vollständiger Überblick über unsere Arbeit. Von Full-Stack-Entwicklung bis E-Commerce.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 flex flex-col gap-4"
        >
          <div className="flex flex-wrap gap-2 items-center">
            <div className={`flex items-center gap-2 ${subTextColor} font-semibold text-sm`}>
              <HiFilter className="w-4 h-4" />
              <span>Kategorie:</span>
            </div>
            {ALL_CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filterBtn(activeCategory === cat)}`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

          <div className="flex items-center justify-between gap-4">
            <div className={`relative w-full sm:w-72 flex items-center border rounded-full px-4 py-2.5 transition-all duration-300 ${
              isDark ? 'bg-black/50 border-ghost-white/20 focus-within:border-aquamarine/60' : 'bg-white border-gray-200 focus-within:border-aquamarine/60'
            }`}>
              <HiSearch className={`shrink-0 text-lg mr-2 ${isDark ? 'text-ghost-white/40' : 'text-gray-400'}`} />
              <input
                type="text"
                placeholder="Suchen..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={`flex-1 bg-transparent outline-none text-sm ${isDark ? 'text-ghost-white placeholder-ghost-white/30' : 'text-gray-800 placeholder-gray-400'}`}
              />
              {search && (
                <button onClick={() => setSearch('')} className="ml-2 shrink-0">
                  <HiX className={`text-base ${isDark ? 'text-ghost-white/40 hover:text-ghost-white/80' : 'text-gray-400 hover:text-gray-700'} transition-colors`} />
                </button>
              )}
            </div>
            <p className={`text-sm ${subTextColor} shrink-0`}>
              {filtered.length} {filtered.length === 1 ? 'Projekt' : 'Projekte'}
            </p>
          </div>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`text-center py-24 ${subTextColor}`}
          >
            <p className="text-2xl font-semibold mb-2">Keine Projekte gefunden</p>
            <p className="text-base">Versuchen Sie einen anderen Suchbegriff oder eine andere Kategorie.</p>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + search}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-16 lg:space-y-24"
          >
            {filtered.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                isDark={isDark}
                textColor={textColor}
                textMuted={subTextColor}
                cardBg={cardBg}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-20"
        >
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(169, 122, 255, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-6 border-2 border-tropical-indigo text-tropical-indigo font-bold rounded-full text-xl hover:bg-tropical-indigo hover:text-black transition-all duration-300"
          >
            Projekt starten
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(AllProjects)
