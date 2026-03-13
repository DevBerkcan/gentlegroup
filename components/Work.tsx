'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { HiExternalLink, HiArrowRight, HiArrowLeft } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from '@/contexts/ThemeContext'

const content = {
  work: {
    items: [
      {
        title: 'Emma Solution',
        category: 'Full-Stack Development',
        description: 'Umfassende Logistik-Management-Plattform mit Web-App, Backend-API und Android-App für Fracht- und Fahrzeugverwaltung mit Echtzeit-Tracking.',
        tags: ['React', 'TypeScript', 'ASP.NET Core 8', 'Android', 'Azure SQL'],
        color: 'from-aquamarine to-tropical-indigo',
        image: '/emma.webp',
        url: 'https://emmasolution.com/',
        imagePosition: 'object-top',
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
      },
      {
        title: 'Teretnjaci',
        category: 'Full-Stack Development',
        description: 'News-Plattform rund um Trucks und Logistik als Web-App, Android-App und iOS-App. Admins verwalten Beiträge über ein Admin-Portal. Nutzer sehen alle Posts auf der Startseite.',
        tags: ['React', 'Vite', 'Node.js', 'MySQL', 'Android', 'iOS', 'Cloudflare', 'cPanel'],
        color: 'from-aquamarine to-tropical-indigo',
        image: '/teretnjaci.png',
        url: '#',
        imagePosition: 'object-top',
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
      },
    ],
  },
}

const Work = () => {
  const { actualTheme } = useTheme()
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectsContainerRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)
  const touchStartY = useRef<number | null>(null)

  const isDark = actualTheme === 'dark'
  const bgColor = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-gray-900/5'

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yFast = useTransform(scrollYProgress, [0, 1], [150, -150])
  const ySlow = useTransform(scrollYProgress, [0, 1], [50, -50])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])
  const cardY = useTransform(scrollYProgress, [0, 0.3, 0.6], [100, 0, 0])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1])

  const goNext = useCallback(() => {
    setActiveProject((current) => Math.min(current + 1, content.work.items.length - 1))
  }, [])

  const goPrev = useCallback(() => {
    setActiveProject((current) => Math.max(current - 1, 0))
  }, [])

  const onWheel = useCallback(
    (e: WheelEvent) => {
      const projectsContainer = projectsContainerRef.current
      if (!projectsContainer) return
      const target = e.target as HTMLElement
      const isInsideProjectsContainer = projectsContainer.contains(target)
      if (isInsideProjectsContainer) {
        const isProjectContent = target.closest('.project-box-content')
        if (isProjectContent) {
          const isScrollingDown = e.deltaY > 10
          const isScrollingUp = e.deltaY < -10
          const isAtLastProject = activeProject === content.work.items.length - 1
          const isAtFirstProject = activeProject === 0
          if ((isScrollingDown && isAtLastProject) || (isScrollingUp && isAtFirstProject)) return
          e.preventDefault()
          if (isScrolling) return
          setIsScrolling(true)
          if (isScrollingDown) {
            setActiveProject((current) => Math.min(current + 1, content.work.items.length - 1))
          } else if (isScrollingUp) {
            setActiveProject((current) => Math.max(current - 1, 0))
          }
          setTimeout(() => setIsScrolling(false), 600)
        }
      }
    },
    [activeProject, isScrolling]
  )

  useEffect(() => {
    document.addEventListener('wheel', onWheel, { passive: false })
    return () => document.removeEventListener('wheel', onWheel)
  }, [onWheel])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveProject((current) =>
          current === content.work.items.length - 1 ? 0 : Math.min(current + 1, content.work.items.length - 1)
        )
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveProject((current) =>
          current === 0 ? content.work.items.length - 1 : Math.max(current - 1, 0)
        )
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStartY.current === null) return
    const delta = touchStartY.current - e.changedTouches[0].clientY
    if (Math.abs(delta) > 40) {
      if (delta > 0) {
        setActiveProject((current) => Math.min(current + 1, content.work.items.length - 1))
      } else {
        setActiveProject((current) => Math.max(current - 1, 0))
      }
    }
    touchStartY.current = null
  }, [])

  const handleProjectClick = (url: string) => {
    if (url === '#') return
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  const project = content.work.items[activeProject]

  return (
    <section id="work" ref={ref} className={`py-24 sm:py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-4 sm:left-8 lg:left-16 ${backgroundTextColor} font-black text-[80px] sm:text-[120px] lg:text-[160px] xl:text-[200px] leading-none select-none`}>
          UNSERE ARBEIT
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div style={{ y: yFast, rotate, scale }} className="absolute top-1/4 right-10 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-tropical-indigo/10 rounded-full blur-[120px]" />
        <motion.div style={{ y: ySlow, rotate: useTransform(scrollYProgress, [0, 1], [-3, 3]) }} className="absolute bottom-1/4 left-10 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-aquamarine/8 rounded-full blur-[100px]" />
        <motion.div style={{ y }} className="absolute top-1/2 left-1/4 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-purple-400/5 rounded-full blur-[80px]" />
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.03]), scale: useTransform(scrollYProgress, [0, 0.4], [0.5, 1]) }}
          className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px]"
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-8 mb-10 sm:mb-16" style={{ alignItems: 'flex-start' }}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColor}`}>
              UNSERE ARBEIT
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${textMuted} max-w-xl`}>
              Projekte, auf die wir stolz sind.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center gap-3 shrink-0"
          >
            <div className="text-right hidden sm:block">
              <p className={`text-sm font-semibold ${textColor}`}>
                {activeProject + 1} / {content.work.items.length}
              </p>
              <p className={`text-xs ${textMuted}`}>Scroll zum Navigieren</p>
            </div>
            <div className="flex flex-col gap-1.5">
              {content.work.items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveProject(i)}
                  className={`block w-1 rounded-full transition-all duration-300 ${
                    i === activeProject
                      ? 'h-6 bg-aquamarine'
                      : isDark
                        ? 'h-2 bg-white/20 hover:bg-white/40'
                        : 'h-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Projekt ${i + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ y: cardY, opacity: cardOpacity }}
          className="hidden lg:block relative cursor-default mb-8"
        >
          <div ref={projectsContainerRef} className="w-full max-w-[1400px] px-0 sm:px-4 relative" style={{ perspective: '2000px', height: '620px' }}>
            {content.work.items.map((proj, index) => {
              const offset = index - activeProject
              const isActive = index === activeProject
              const isPeeking = offset > 0 && offset <= 2
              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    y: isActive ? 0 : offset > 0 ? -30 - offset * 15 : 100,
                    scale: isActive ? 1 : isPeeking ? 0.95 - offset * 0.02 : 0.9,
                    opacity: isActive ? 1 : isPeeking ? 1 : 0,
                    zIndex: isActive ? 30 : isPeeking ? 20 - offset : 0,
                    rotateX: isActive ? 0 : isPeeking ? 2 + offset * 1 : 0,
                  }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 right-0 mx-auto w-full"
                  style={{ top: '0%', transformStyle: 'preserve-3d', willChange: isActive || isPeeking ? 'transform, opacity' : 'auto' }}
                >
                  <div className="project-box-content group relative cursor-pointer" onClick={() => handleProjectClick(proj.url)}>
                    <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/20 to-tropical-indigo/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105" />
                    <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] bg-gradient-to-br from-gray-900 to-black border border-aquamarine/20 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-aquamarine/50 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                      <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(1,255,169,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,255,169,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
                      <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/8 to-tropical-indigo/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <motion.div
                        className="absolute inset-0 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{ background: 'linear-gradient(90deg, transparent, rgba(1, 255, 169, 0.4), rgba(100, 100, 255, 0.4), transparent)', backgroundSize: '200% 100%' }}
                        animate={{ backgroundPosition: ['0% 0%', '200% 0%'] }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                      />
                      <div className="relative z-10 h-full p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                        <div>
                          <div className="relative w-full h-40 sm:h-48 mb-5 sm:mb-6 rounded-xl sm:rounded-2xl overflow-hidden border border-aquamarine/20 group-hover:border-aquamarine/40 transition-colors duration-300">
                            <Image
                              src={proj.image}
                              alt={proj.title}
                              fill
                              className={`object-cover ${proj.imagePosition || 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                              quality={90}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>
                          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                            {proj.category}
                          </span>
                          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 group-hover:text-aquamarine transition-colors duration-300 text-ghost-white" style={{ letterSpacing: '-0.02em' }}>
                            {proj.title}
                          </h3>
                          <p className="text-ghost-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                            {proj.description}
                          </p>
                        </div>
                        <div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                            {proj.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-black/50 border border-ghost-white/10 rounded-full text-ghost-white/60 text-xs sm:text-sm hover:border-aquamarine/30 transition-colors duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-3 text-aquamarine font-semibold text-base sm:text-lg group-hover:gap-5 transition-all duration-300">
                            <span>Projekt ansehen</span>
                            <HiExternalLink className="text-xl sm:text-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        <div className="lg:hidden mb-10">
          <div
            className="relative touch-pan-y"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <motion.div
              key={activeProject}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative cursor-pointer"
              onClick={() => handleProjectClick(project.url)}
            >
              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-aquamarine/20 rounded-2xl overflow-hidden shadow-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                <div className="relative z-10 p-5 flex flex-col gap-4">
                  <div className="relative w-full h-44 rounded-xl overflow-hidden border border-aquamarine/20">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.imagePosition || 'object-top'}`}
                      quality={85}
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>
                  <span className="inline-block self-start px-3 py-1.5 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine text-xs font-semibold">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-ghost-white" style={{ letterSpacing: '-0.02em' }}>
                    {project.title}
                  </h3>
                  <p className="text-ghost-white/70 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-black/50 border border-ghost-white/10 rounded-full text-ghost-white/60 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-aquamarine font-semibold text-sm">
                    <span>Projekt ansehen</span>
                    <HiExternalLink className="text-base" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex items-center justify-between mt-5">
            <button
              onClick={goPrev}
              disabled={activeProject === 0}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-aquamarine/30 text-aquamarine text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <HiArrowLeft className="text-base" />
              Zurück
            </button>
            <span className={`text-sm font-semibold ${textColor}`}>
              {activeProject + 1} / {content.work.items.length}
            </span>
            <button
              onClick={goNext}
              disabled={activeProject === content.work.items.length - 1}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-aquamarine/30 text-aquamarine text-sm font-semibold disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              Weiter
              <HiArrowRight className="text-base" />
            </button>
          </div>

          <div className="flex justify-center gap-1.5 mt-4">
            {content.work.items.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveProject(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === activeProject
                    ? 'w-6 h-2 bg-aquamarine'
                    : isDark
                      ? 'w-2 h-2 bg-white/20'
                      : 'w-2 h-2 bg-gray-300'
                }`}
                aria-label={`Projekt ${i + 1}`}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-8 sm:mt-16"
        >
          <Link href="/projects" passHref legacyBehavior>
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(169, 122, 255, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 sm:px-12 py-4 sm:py-6 border-2 border-tropical-indigo text-tropical-indigo font-bold rounded-full text-base sm:text-xl hover:bg-tropical-indigo hover:text-black transition-all duration-300"
            >
              Alle Projekte ansehen
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(Work)
