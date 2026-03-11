'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import React, { useRef, useState } from 'react'
import { HiExternalLink, HiSearch, HiX } from 'react-icons/hi'
import Image from 'next/image'
import { useTheme } from '@/contexts/ThemeContext'

const projects = [
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
]

const allCategories = ['Alle', ...Array.from(new Set(projects.map((p) => p.category)))]

const AllProjects = () => {
  const { actualTheme } = useTheme()
  const ref = useRef(null)
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Alle')
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const isDark = actualTheme === 'dark'
  const bgColor = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const subTextColor = isDark ? 'text-ghost-white/60' : 'text-gray-500'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-gray-900/5'

  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const yFast = useTransform(scrollYProgress, [0, 1], [150, -150])
  const ySlow = useTransform(scrollYProgress, [0, 1], [50, -50])

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === 'Alle' || p.category === activeCategory
    const matchesSearch =
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()))
    return matchesCategory && matchesSearch
  })

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
        <motion.div
          style={{ y: yFast }}
          className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-tropical-indigo/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: ySlow }}
          className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-aquamarine/8 rounded-full blur-[100px]"
        />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <h1 className={`text-5xl lg:text-6xl font-bold ${textColor}`}>ALLE PROJEKTE</h1>
          <p className={`mt-4 text-lg lg:text-xl ${subTextColor} max-w-2xl`}>
            Ein vollständiger Überblick über unsere Arbeit. Von Full-Stack-Entwicklung bis E-Commerce.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
        >
          <div className="flex flex-wrap gap-2">
            {allCategories.map((cat) => (
              <motion.button
                key={cat}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-aquamarine text-black border-aquamarine'
                    : isDark
                      ? 'bg-transparent border-ghost-white/20 text-ghost-white/70 hover:border-aquamarine/50'
                      : 'bg-transparent border-gray-300 text-gray-600 hover:border-aquamarine/50'
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>

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

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8"
        >
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.45, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => window.open(project.url, '_blank', 'noopener,noreferrer')}
              className="group relative cursor-pointer"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/20 to-tropical-indigo/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105" />

              <div className="relative bg-gradient-to-br from-gray-900 to-black border border-aquamarine/20 rounded-3xl overflow-hidden hover:border-aquamarine/50 transition-all duration-500 shadow-2xl h-full flex flex-col">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(1,255,169,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(1,255,169,0.03)_1px,transparent_1px)] bg-[size:30px_30px] opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/8 to-tropical-indigo/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-6 sm:p-8 flex flex-col h-full">
                  <div className="relative w-full h-44 mb-5 rounded-2xl overflow-hidden border border-aquamarine/20 group-hover:border-aquamarine/40 transition-colors duration-300 shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className={`object-cover ${project.imagePosition || 'object-top'} group-hover:scale-105 transition-transform duration-500`}
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    <motion.div
                      animate={{ opacity: hoveredIndex === index ? 1 : 0, scale: hoveredIndex === index ? 1 : 0.85 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-3 right-3 bg-black/70 text-ghost-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1.5"
                    >
                      <HiExternalLink className="text-aquamarine" />
                      Besuchen
                    </motion.div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <span className="inline-block px-3 py-1.5 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine text-xs font-semibold mb-4 self-start">
                      {project.category}
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold mb-3 text-ghost-white group-hover:text-aquamarine transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-ghost-white/70 text-sm sm:text-base leading-relaxed mb-5 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-black/50 border border-ghost-white/10 rounded-full text-ghost-white/60 text-xs hover:border-aquamarine/30 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-aquamarine font-semibold text-sm group-hover:gap-3 transition-all duration-300 mt-auto">
                      <span>Projekt ansehen</span>
                      <HiExternalLink className="text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

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