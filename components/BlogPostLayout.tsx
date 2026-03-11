// components/BlogPostLayout.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiClock, HiArrowLeft, HiUser, HiCalendar, HiArrowRight } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

interface BlogPostLayoutProps {
  title: string
  category: string
  categoryColor: string
  author: { name: string; role: string }
  publishDate: string
  readTime: string
  coverImage: string
  content: {
    intro: string
    sections: { heading: string; content: string; image?: string }[]
    conclusion: string
  }
}

const BlogPostLayout = ({ title, category, categoryColor, author, publishDate, readTime, coverImage, content }: BlogPostLayoutProps) => {
  const { actualTheme } = useTheme()
  const isDark = actualTheme === 'dark'

  const pageBg = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600'
  const textBody = isDark ? 'text-gray-300' : 'text-gray-700'
  const borderColor = isDark ? 'border-white/10' : 'border-gray-200'
  const cardBg = isDark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-200'
  const sectionBg = isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
  const conclusionBg = isDark ? 'bg-aquamarine/5 border-aquamarine/20' : 'bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 border-aquamarine/20'
  const shareBg = isDark ? 'bg-white/5 border-white/10' : 'bg-gray-50 border-gray-200'
  const headingColor = isDark ? 'text-ghost-white' : 'text-gray-900'

  return (
    <main className={`min-h-screen ${pageBg} transition-colors duration-300`}>
      <section className="relative h-[55vh] sm:h-[60vh] bg-oxford-blue overflow-hidden">
        <div className="absolute inset-0">
          <Image src={coverImage} alt={title} fill className="object-cover opacity-30" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-oxford-blue/50 via-oxford-blue/75 to-oxford-blue" />
        </div>

        <div className="relative z-10 h-full flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 sm:pb-14 lg:pb-16 w-full">
            <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="mb-6 sm:mb-8">
              <Link href="/#blog">
                <motion.span whileHover={{ x: -4 }} className="inline-flex items-center gap-2 text-ghost-white/80 hover:text-aquamarine transition-colors duration-300 text-sm sm:text-base cursor-pointer">
                  <HiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  Zurück zum Blog
                </motion.span>
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-3 sm:mb-4">
              <span className={`inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r ${categoryColor} text-white font-bold rounded-full text-xs sm:text-sm`}>
                {category}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-3 sm:gap-5 text-white/70 text-xs sm:text-sm"
            >
              <div className="flex items-center gap-1.5">
                <HiUser className="w-4 h-4" />
                <span className="font-medium text-white/90">{author.name}</span>
                <span className="text-white/40">•</span>
                <span>{author.role}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HiCalendar className="w-4 h-4" />
                <span>{publishDate}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <HiClock className="w-4 h-4" />
                <span>{readTime} Lesezeit</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-12"
        >
          <p className={`text-base sm:text-xl lg:text-2xl leading-relaxed font-medium ${textBody}`}>
            {content.intro}
          </p>
        </motion.div>

        {content.sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="mb-10 sm:mb-12"
          >
            <h2
              className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 ${headingColor}`}
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {section.heading}
            </h2>
            {section.image && (
              <div className="relative w-full h-[240px] sm:h-[340px] lg:h-[400px] mb-5 sm:mb-6 rounded-2xl overflow-hidden">
                <Image src={section.image} alt={section.heading} fill className="object-cover" sizes="(max-width: 768px) 100vw, 896px" />
              </div>
            )}
            <div className="space-y-4">
              {section.content.split('\n\n').map((paragraph, pIndex) => (
                <p key={pIndex} className={`leading-relaxed text-sm sm:text-base lg:text-lg ${textBody}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.section>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-12 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border ${conclusionBg}`}
        >
          <h2 className={`text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 ${headingColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            Fazit
          </h2>
          <p className={`text-base sm:text-xl leading-relaxed ${textBody}`}>{content.conclusion}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-8 sm:mt-12 p-5 sm:p-8 border rounded-2xl sm:rounded-3xl shadow-sm ${cardBg}`}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-black text-xl sm:text-2xl font-bold shrink-0">
              {author.name.charAt(0)}
            </div>
            <div>
              <h3 className={`text-base sm:text-xl font-bold ${textColor}`}>{author.name}</h3>
              <p className={`text-sm ${textMuted}`}>{author.role}</p>
            </div>
          </div>
          <p className={`text-sm sm:text-base ${textMuted}`}>
            Experte für moderne Web-Technologien und digitale Transformation bei Gentle Group.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`mt-8 sm:mt-12 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border ${shareBg}`}
        >
          <h3 className={`text-base sm:text-lg font-bold mb-4 ${textColor}`}>Artikel teilen</h3>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {[
              {
                label: 'LinkedIn',
                color: 'bg-[#0077B5] hover:bg-[#006097]',
                onClick: () => {
                  const url = encodeURIComponent(window.location.href)
                  window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank', 'width=600,height=400')
                },
                icon: (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                label: 'X',
                color: 'bg-black hover:bg-gray-800',
                onClick: () => {
                  const url = encodeURIComponent(window.location.href)
                  const text = encodeURIComponent(title)
                  window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank', 'width=600,height=400')
                },
                icon: (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                label: 'WhatsApp',
                color: 'bg-[#25D366] hover:bg-[#1DA851]',
                onClick: () => {
                  const url = encodeURIComponent(window.location.href)
                  const text = encodeURIComponent(`${title} - Gentle Group`)
                  window.open(`https://wa.me/?text=${text}%20${url}`, '_blank')
                },
                icon: (
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                ),
              },
            ].map(({ label, color, onClick, icon }) => (
              <button
                key={label}
                onClick={onClick}
                className={`flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 ${color} text-white font-semibold rounded-full text-xs sm:text-sm transition-colors`}
                aria-label={`Auf ${label} teilen`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 sm:mt-14 text-center p-8 sm:p-12 bg-gradient-to-br from-oxford-blue to-oxford-blue/90 rounded-2xl sm:rounded-3xl"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
            Interessiert an unseren Leistungen?
          </h3>
          <p className="text-sm sm:text-xl text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Lassen Sie uns gemeinsam Ihr nächstes Projekt verwirklichen.
          </p>
          <Link href="/kontakt">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(1,255,169,0.3)' }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-sm sm:text-base shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
            >
              Jetzt Kontakt aufnehmen
              <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </article>
    </main>
  )
}

export default BlogPostLayout
