// components/Blog.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiClock, HiArrowRight } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

const BLOG_POSTS = [
  {
    id: '1',
    title: '.NET Core Best Practices: Enterprise-Architektur für skalierbare Anwendungen',
    excerpt: 'Erfahren Sie, wie Sie mit .NET Core robuste, skalierbare Enterprise-Anwendungen entwickeln. Best Practices, Architektur-Patterns und Performance-Tipps.',
    category: 'Backend Development',
    categoryColor: 'from-purple-500 to-indigo-600',
    author: { name: 'Berk-Can Atesoglu', role: 'Lead Developer' },
    publishDate: '22. November 2024',
    readTime: '12 min',
    slug: 'dotnet-core-enterprise-best-practices',
  },
  {
    id: '2',
    title: 'Wartungsverträge für Webseiten: Warum sie unverzichtbar sind',
    excerpt: 'Website-Wartung ist mehr als Updates installieren. Erfahren Sie, was ein professioneller Wartungsvertrag umfasst und warum Ihre Website regelmäßige Pflege braucht.',
    category: 'Business & Strategy',
    categoryColor: 'from-emerald-500 to-teal-600',
    author: { name: 'Berk-Can Atesoglu', role: 'Founder & Lead Developer' },
    publishDate: '22. November 2024',
    readTime: '10 min',
    slug: 'wartungsvertraege-webseiten',
  },
  {
    id: '3',
    title: 'Webseiten-Sicherheit 2024: Best Practices für Unternehmen',
    excerpt: 'Schützen Sie Ihre Website vor Hackern! Die wichtigsten Sicherheitsmaßnahmen: SSL, Firewalls, Updates, Backups und mehr. Praktischer Leitfaden mit Checkliste.',
    category: 'Security & Compliance',
    categoryColor: 'from-red-500 to-orange-600',
    author: { name: 'Berk-Can Atesoglu', role: 'Security & Architecture' },
    publishDate: '22. November 2024',
    readTime: '15 min',
    slug: 'webseiten-sicherheit-best-practices',
  },
]

const Blog = () => {
  const { actualTheme } = useTheme()
  const isDark = actualTheme === 'dark'

  const bgColor = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-gray-900/5'

  return (
    <section id="blog" className={`relative overflow-hidden ${bgColor} py-24 sm:py-32 lg:py-40 transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-4 sm:left-8 lg:left-16 ${backgroundTextColor} font-black text-[80px] sm:text-[120px] lg:text-[180px] xl:text-[220px] leading-none select-none`}>
          BLOG
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-aquamarine/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10 mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColor}`} style={{ letterSpacing: '-0.02em' }}>
              Blog &{' '}
              <span className="text-aquamarine">Tutorials</span>
            </h2>
            <p className={`mt-3 text-base sm:text-lg ${textMuted} max-w-xl`}>
              Praktisches Wissen zu Web-Development, KI-Integration und digitalen Trends
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="shrink-0"
          >
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(1,255,169,0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-7 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-sm sm:text-base shadow-lg transition-all duration-300"
              >
                Alle Artikel
                <HiArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} isDark={isDark} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: typeof BLOG_POSTS[0]
  index: number
  isDark: boolean
}

const BlogCard = ({ post, index, isDark }: BlogCardProps) => {
  const cardBg = isDark ? 'bg-white/5 border-white/10 hover:border-aquamarine/40' : 'bg-white border-gray-200 hover:border-aquamarine/50'
  const titleColor = isDark ? 'text-ghost-white group-hover:text-aquamarine' : 'text-gray-900 group-hover:text-aquamarine'
  const excerptColor = isDark ? 'text-gray-400' : 'text-gray-600'
  const footerBorder = isDark ? 'border-white/10' : 'border-gray-200'
  const authorColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const metaColor = isDark ? 'text-gray-500' : 'text-gray-500'

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.1, type: 'spring', stiffness: 100 }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <motion.div
          className={`h-full rounded-2xl sm:rounded-3xl overflow-hidden border transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-aquamarine/10 ${cardBg}`}
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${post.categoryColor}`} />
            <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10" />

            <div className="absolute inset-0 flex items-end p-4 sm:p-5">
              <span className="px-3 sm:px-4 py-1.5 bg-black/40 backdrop-blur-sm text-white font-semibold rounded-full text-xs sm:text-sm border border-white/20">
                {post.category}
              </span>
            </div>

            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500" />
          </div>

          <div className="p-5 sm:p-6 lg:p-7">
            <h3
              className={`text-base sm:text-lg lg:text-xl font-bold mb-2.5 sm:mb-3 transition-colors duration-300 line-clamp-2 leading-snug ${titleColor}`}
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {post.title}
            </h3>
            <p className={`text-sm sm:text-base mb-4 sm:mb-5 line-clamp-3 leading-relaxed ${excerptColor}`}>
              {post.excerpt}
            </p>

            <div className={`pt-4 border-t ${footerBorder} flex items-center justify-between gap-3`}>
              <div className="flex-1 min-w-0">
                <p className={`text-sm font-semibold truncate ${authorColor}`}>{post.author.name}</p>
                <p className={`text-xs truncate mt-0.5 ${metaColor}`}>{post.publishDate}</p>
              </div>
              <div className={`flex items-center gap-1.5 shrink-0 ${metaColor}`}>
                <HiClock className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span className="text-xs sm:text-sm">{post.readTime}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  )
}

export default Blog
