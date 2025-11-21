'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { HiExternalLink } from 'react-icons/hi'
import Image from 'next/image'

// Text content configuration for consistency
const content = {
  work: {
    badge: "Unsere Arbeit",
    title: {
      part1: "Projekte, auf die wir",
      part2: "stolz sind"
    },
    items: [
      {
        title: 'Emma Solution',
        category: 'Full-Stack Development',
        description: 'Umfassende Logistik-Management-Plattform mit Web-App, Backend-API und Android-App für Fracht- und Fahrzeugverwaltung mit Echtzeit-Tracking.',
        tags: ['React', 'TypeScript', 'ASP.NET Core 8', 'Android', 'Azure SQL'],
        color: 'from-aquamarine to-tropical-indigo',
        image: '/emma.png',
        url: 'https://emmasolution.com/',
        imagePosition: 'object-top' // Show top of website (header/navigation)
      },
      {
        title: 'Gentle Track',
        category: 'CRM System',
        description: 'Projektmanagement-System mit React Frontend und ASP.NET Core Backend für Echtzeit-Zusammenarbeit und umfassende Berichterstattung.',
        tags: ['React', 'Vite', 'ASP.NET Core 8', 'MS SQL', 'Multi-language'],
        color: 'from-tropical-indigo to-aquamarine',
        image: '/gentletrack.png',
        url: 'https://f7e2b27f.gentle-track-ui.pages.dev/',
        imagePosition: 'object-top' // Show main dashboard area
      },
      {
        title: 'Creative Hairstyling',
        category: 'Web-App',
        description: 'Moderne Friseur-Website entwickelt mit React und Vite für schnelle Performance und reaktionsschnelle Benutzeroberfläche.',
        tags: ['React', 'TypeScript', 'Vite', 'Responsive Design'],
        color: 'from-aquamarine to-oxford-blue',
        image: '/creativhairstyling.png',
        url: 'https://creative-hairstyling-3u6e.vercel.app/',
        imagePosition: 'object-[center_40%]' // Show text in the middle
      },
      {
        title: 'Hautliebe & Laser',
        category: 'Group',
        description: 'Professionelle WordPress-Website für Hautpflege und Laser-Behandlungen mit modernem Design und optimaler Performance.',
        tags: ['WordPress', 'PHP', 'Custom Theme', 'SEO'],
        color: 'from-tropical-indigo to-oxford-blue',
        image: '/hautliebe.png',
        url: 'https://hautliebeundlaser.de/',
        imagePosition: 'object-center' // Show header and services
      },
      {
        title: 'JJ Immobilienpartner',
        category: 'Group',
        description: 'Elegante Immobilien-Website mit Next.js für optimale SEO-Performance und moderne Benutzererfahrung.',
        tags: ['Next.js', 'React', 'TypeScript', 'SEO'],
        color: 'from-aquamarine to-tropical-indigo',
        image: '/janjacobi.png',
        url: 'https://www.jj-immobilienpartner.de/',
        imagePosition: 'object-[center_40%]'
      },
      {
        title: 'Kabelbrücken24',
        category: 'E-Commerce',
        description: 'E-Commerce-Plattform für Kabelbrücken mit Next.js, optimiert für Performance und Conversion.',
        tags: ['Next.js', 'React', 'TypeScript', 'E-Commerce'],
        color: 'from-tropical-indigo to-aquamarine',
        image: '/kabelbruecken.png',
        url: 'https://www.kabelbruecken24.de/',
        imagePosition: 'object-center' // Show product catalog
      },
      {
        title: 'Skinbloom Aesthetics',
        category: 'Group',
        description: 'Ästhetische Klinik-Website mit Next.js für professionelle Präsentation und optimale Ladezeiten.',
        tags: ['Next.js', 'React', 'TypeScript', 'Responsive Design'],
        color: 'from-aquamarine to-oxford-blue',
        image: '/skinbloom.png',
        url: 'https://www.skinbloom-aesthetics.ch/',
        imagePosition: 'object-[center_40%]' // Show "Verleihen Sie Ihrer Haut neuen Glanz."
      },
      {
        title: 'NRW Real Estate',
        category: 'Group',
        description: 'Immobilienportal mit Next.js für effiziente Darstellung von Immobilienangeboten und SEO-Optimierung.',
        tags: ['Next.js', 'React', 'TypeScript', 'SEO'],
        color: 'from-tropical-indigo to-oxford-blue',
        image: '/nrwrealestate.png',
        url: 'https://www.nrwrealestate.de/',
        imagePosition: 'object-[center_40%]' // Show text in the middle with top padding
      },
    ]
  }
}

const Work = () => {
  const ref = useRef(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const projectsContainerRef = useRef<HTMLDivElement>(null)
  const [activeProject, setActiveProject] = useState(0)
  const [isScrolling, setIsScrolling] = useState(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Multiple scroll transformations for parallax effects (same as Services)
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yFast = useTransform(scrollYProgress, [0, 1], [150, -150])
  const ySlow = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  // Staggered entrance for project cards
  const cardY = useTransform(scrollYProgress, [0, 0.3, 0.6], [100, 0, 0])
  const cardOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 1])

  // Wheel scroll handler with boundary detection
useEffect(() => {
  const projectsContainer = projectsContainerRef.current
  if (!projectsContainer) return

  let ticking = false
  const onWheel = (e: WheelEvent) => {
    const target = e.target as HTMLElement
    const isInsideProjectsContainer = projectsContainer.contains(target)
    
    if (isInsideProjectsContainer) {
      const isProjectContent = target.closest('.project-box-content')
      if (isProjectContent) {
        // Check if we're at boundaries and should allow natural scroll
        const isScrollingDown = e.deltaY > 10
        const isScrollingUp = e.deltaY < -10
        const isAtLastProject = activeProject === content.work.items.length - 1
        const isAtFirstProject = activeProject === 0

        // Allow natural scroll at boundaries to continue to next/previous section
        if ((isScrollingDown && isAtLastProject) || (isScrollingUp && isAtFirstProject)) {
          // Don't prevent default, allow natural scrolling
          return
        }

        // Prevent default for project navigation
        e.preventDefault()
        
        if (ticking || isScrolling) return
        ticking = true
        setIsScrolling(true)

        if (isScrollingDown) {
          setActiveProject((current) => {
            return Math.min(current + 1, content.work.items.length - 1)
          })
        } else if (isScrollingUp) {
          setActiveProject((current) => {
            return Math.max(current - 1, 0)
          })
        }

        setTimeout(() => {
          ticking = false
          setIsScrolling(false)
        }, 600)
      }
    }
  }

  document.addEventListener('wheel', onWheel, { passive: false })
  return () => document.removeEventListener('wheel', onWheel)
}, [isScrolling, activeProject])  // WICHTIG: activeProject zu dependencies hinzufügen!

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setActiveProject((current) => {
          if (current === content.work.items.length - 1) {
            return 0
          }
          return Math.min(current + 1, content.work.items.length - 1)
        })
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setActiveProject((current) => {
          if (current === 0) {
            return content.work.items.length - 1
          }
          return Math.max(current - 1, 0)
        })
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const handleProjectClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="work" ref={ref} className="py-32 lg:py-40 relative overflow-hidden bg-black">
      {/* Enhanced Background Elements with Parallax (same as Services) */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles/glows with different speeds */}
        <motion.div
          style={{ y: yFast, rotate, scale }}
          className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-tropical-indigo/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: ySlow, rotate: useTransform(scrollYProgress, [0, 1], [-3, 3]) }}
          className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-aquamarine/8 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-[80px]"
        />
        
        {/* Animated grid pattern */}
        <motion.div
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.03]),
            scale: useTransform(scrollYProgress, [0, 0.4], [0.5, 1])
          }}
          className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px]"
        />
      </div>

      <div ref={containerRef} className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Enhanced Section Header with Scale Effect (same as Services) */}
        <motion.div
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              type: "spring", 
              stiffness: 200 
            }}
            className="inline-block px-6 py-3 bg-tropical-indigo/10 border border-tropical-indigo/30 rounded-full text-tropical-indigo font-semibold text-sm mb-8 backdrop-blur-sm"
          >
            {content.work.badge}
          </motion.span>
          <div style={{ fontWeight: 800, letterSpacing: '-0.02em' }} className="leading-[0.9]">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: "spring",
                stiffness: 80
              }}
              className="block text-ghost-white text-[clamp(3rem,8vw,6rem)]"
            >
              {content.work.title.part1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                type: "spring",
                stiffness: 80
              }}
              className="block text-tropical-indigo text-[clamp(3rem,8vw,6rem)]"
            >
              {content.work.title.part2}
            </motion.span>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-ghost-white/70 max-w-4xl mx-auto mt-8"
          >
          </motion.p>
        </motion.div>

        {/* Enhanced Stacked Projects Section with Peeking Effect */}
        <motion.div 
          style={{ y: cardY, opacity: cardOpacity }}
          ref={containerRef}
          className="min-h-[70vh] flex items-start justify-center relative cursor-default mb-20"
        >
          <div 
            ref={projectsContainerRef}
            className="w-full max-w-[1400px] px-4 relative"
            style={{ perspective: '2000px' }}
          >
            {content.work.items.map((project, index) => {
              const offset = index - activeProject
              const isActive = index === activeProject
              const isPeeking = offset > 0 && offset <= 2 // Show 2 cards peeking from behind
              
              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{
                    y: isActive ? 0 : offset > 0 ? -30 - (offset * 15) : 100,
                    scale: isActive ? 1 : isPeeking ? 0.95 - (offset * 0.02) : 0.9,
                    opacity: isActive ? 1 : isPeeking ? 1 : 0,
                    zIndex: isActive ? 30 : isPeeking ? 20 - offset : 0,
                    rotateX: isActive ? 0 : isPeeking ? 2 + (offset * 1) : 0,
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="absolute left-0 right-0 mx-auto w-full"
                  style={{ 
                    top: '0%',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div 
                    className="project-box-content group relative cursor-pointer"
                    onClick={() => handleProjectClick(project.url)}
                  >
                    {/* Background shine effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/20 to-tropical-indigo/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105" />
                    
                    <div className="relative h-[650px] bg-gradient-to-br from-gray-900 to-black border border-aquamarine/20 rounded-3xl overflow-hidden hover:border-aquamarine/50 transition-all duration-500 shadow-2xl backdrop-blur-sm">
                      {/* Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                      
                      {/* Grid Pattern */}
                      <div className="absolute inset-0 bg-[linear-gradient(rgba(1,255,169,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,255,169,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />

                      {/* Enhanced Hover Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/8 to-tropical-indigo/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Animated Border on Hover */}
                      <motion.div 
                        className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(90deg, transparent, rgba(1, 255, 169, 0.4), rgba(100, 100, 255, 0.4), transparent)',
                          backgroundSize: '200% 100%',
                        }}
                        animate={{
                          backgroundPosition: ['0% 0%', '200% 0%'],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'linear',
                        }}
                      />

                      {/* Content */}
                      <div className="relative z-10 h-full p-10 flex flex-col justify-between">
                        <div>
                          {/* Project Image with Optimized Positioning */}
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative w-full h-48 mb-6 rounded-2xl overflow-hidden border border-aquamarine/20 group-hover:border-aquamarine/40 transition-colors duration-300"
                          >
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className={`object-cover ${project.imagePosition || 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                              quality={90}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                            
                            {/* Position Indicator */}
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              whileHover={{ opacity: 1, scale: 1 }}
                              className="absolute top-3 right-3 bg-black/70 text-ghost-white text-xs px-2 py-1 rounded-full backdrop-blur-sm"
                            >
                              {project.imagePosition === 'object-top' ? 'Header-Bereich' : 
                               project.imagePosition === 'object-center' ? 'Hauptinhalt' : 
                               project.imagePosition?.includes('center') ? 'Zentrierter Inhalt' : 'Website'}
                            </motion.div>
                          </motion.div>

                          {/* Category Badge */}
                          <motion.span 
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="inline-block px-4 py-2 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine text-sm font-semibold mb-6"
                          >
                            {project.category}
                          </motion.span>
                          
                          {/* Title */}
                          <motion.h3 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
                            className="text-4xl md:text-5xl font-bold mb-6 group-hover:text-aquamarine transition-colors duration-300 text-ghost-white"
                          >
                            {project.title}
                          </motion.h3>
                          
                          {/* Description */}
                          <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                            className="text-ghost-white/70 text-lg lg:text-xl mb-8 leading-relaxed"
                          >
                            {project.description}
                          </motion.p>
                        </div>

                        <div>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-2 mb-6">
                            {project.tags.map((tag, i) => (
                              <motion.span
                                key={tag}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ 
                                  duration: 0.4, 
                                  delay: index * 0.1 + i * 0.1,
                                  type: "spring",
                                  stiffness: 200
                                }}
                                className="px-4 py-2 bg-black/50 border border-ghost-white/10 rounded-full text-ghost-white/60 text-sm hover:border-aquamarine/30 transition-colors duration-300"
                              >
                                {tag}
                              </motion.span>
                            ))}
                          </div>

                          {/* Link */}
                          <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                            className="flex items-center gap-3 text-aquamarine font-semibold text-lg group-hover:gap-5 transition-all duration-300"
                          >
                            <span>Projekt ansehen</span>
                            <motion.div whileHover={{ x: 5 }}>
                              <HiExternalLink className="text-2xl" />
                            </motion.div>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Enhanced CTA with scroll progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-1 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full max-w-md mx-auto mb-8 origin-left"
          />
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(169, 122, 255, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-6 border-2 border-tropical-indigo text-tropical-indigo font-bold rounded-full text-xl hover:bg-tropical-indigo hover:text-black transition-all duration-300"
          >
            Alle Projekte ansehen
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Work