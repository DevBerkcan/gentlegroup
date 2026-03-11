'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import { HiExternalLink } from 'react-icons/hi'
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

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

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

        {/* ── Section header ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-8 mb-10 sm:mb-16">
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
            className="flex items-center gap-3 shrink-0 sm:pb-1"
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

        {/* ── Stacked cards ── */}
        <motion.div
          style={{ y: cardY, opacity: cardOpacity }}
          className="min-h-[70vh] flex items-start justify-center relative cursor-default mb-16 sm:mb-20"
        >
          <div ref={projectsContainerRef} className="w-full max-w-[1400px] px-0 sm:px-4 relative" style={{ perspective: '2000px' }}>
            {content.work.items.map((project, index) => {
              const offset = index - activeProject
              const isActive = index === activeProject
              const isPeeking = offset > 0 && offset <= 2

              return (
                <motion.div
                  key={project.title}
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
                  <div className="project-box-content group relative cursor-pointer" onClick={() => handleProjectClick(project.url)}>
                    <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/20 to-tropical-indigo/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105" />

                    <div className="relative min-h-[480px] sm:min-h-[560px] lg:min-h-[620px] bg-gradient-to-br from-gray-900 to-black border border-aquamarine/20 rounded-2xl sm:rounded-3xl overflow-hidden hover:border-aquamarine/50 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
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
                              src={project.image}
                              alt={project.title}
                              fill
                              className={`object-cover ${project.imagePosition || 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                              quality={90}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                          </div>

                          <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
                            {project.category}
                          </span>

                          <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 group-hover:text-aquamarine transition-colors duration-300 text-ghost-white" style={{ letterSpacing: '-0.02em' }}>
                            {project.title}
                          </h3>

                          <p className="text-ghost-white/70 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                            {project.description}
                          </p>
                        </div>

                        <div>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                            {project.tags.map((tag) => (
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

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16 sm:mt-20"
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
