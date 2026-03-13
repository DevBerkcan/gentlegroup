// app/(site)/blog/page.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiClock, HiArrowLeft } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

const BLOG_POSTS = [
  {
    id: '1',
    title: 'Next.js 15 & React 19: Performance-Boost für moderne Web-Apps',
    excerpt: 'Entdecken Sie die neuesten Features von Next.js 15 und React 19. Server Components, Streaming und App Router für blitzschnelle Performance.',
    category: 'Web Development',
    categoryColor: 'from-aquamarine to-tropical-indigo',
    author: { name: 'Berk-Can Atesoglu', role: 'Full-Stack Developer' },
    publishDate: '15. März 2024',
    readTime: '8 min',
    slug: 'nextjs-15-react-19-performance',
  },
  {
    id: '2',
    title: 'KI-Integration in Business-Prozesse: Praxisleitfaden 2024',
    excerpt: 'Von ChatGPT über Azure OpenAI bis zu Custom AI-Lösungen: Wie Sie KI gewinnbringend in Ihre Geschäftsprozesse integrieren.',
    category: 'KI & Automatisierung',
    categoryColor: 'from-tropical-indigo to-aquamarine',
    author: { name: 'Medin Turkes', role: 'AI Solutions Architect' },
    publishDate: '10. März 2024',
    readTime: '12 min',
    slug: 'ki-integration-business-prozesse',
  },
  {
    id: '3',
    title: 'KI-Chatbot Integration: Der komplette Leitfaden 2024',
    excerpt: 'Von der Planung bis zum Go-Live: Wie Sie intelligente Chatbots erfolgreich in Ihre Website integrieren und Kundenservice automatisieren.',
    category: 'KI & Automatisierung',
    categoryColor: 'from-aquamarine to-tropical-indigo',
    author: { name: 'Berk-Can Atesoglu', role: 'Full-Stack Developer' },
    publishDate: '5. März 2024',
    readTime: '10 min',
    slug: 'ki-chatbot-integration-guide',
  },
  {
    id: '4',
    title: 'TypeScript Best Practices: Type-Safety für Enterprise-Apps',
    excerpt: 'Fortgeschrittene TypeScript-Patterns für sichere und wartbare Enterprise-Anwendungen. Generics, Utility Types und mehr.',
    category: 'Web Development',
    categoryColor: 'from-tropical-indigo to-aquamarine',
    author: { name: 'Medin Turkes', role: 'Developer' },
    publishDate: '1. März 2024',
    readTime: '15 min',
    slug: 'typescript-best-practices-enterprise',
  },
  {
    id: '5',
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
    id: '6',
    title: 'Wartungsverträge für Webseiten: Warum sie unverzichtbar sind',
    excerpt: 'Website-Wartung ist mehr als Updates installieren. Erfahren Sie, was ein professioneller Wartungsvertrag umfasst und warum Ihre Website regelmäßige Pflege braucht.',
    category: 'Business & Strategy',
    categoryColor: 'from-emerald-500 to-teal-600',
    author: { name: 'Berk-Can Atesoglu', role: 'Founder & Lead Developer' },
    publishDate: '22. November 2024',
    readTime: '10 min',
    slug: 'wartungsvertraege-webseiten',
  },
]

interface BlogCardProps {
  post: typeof BLOG_POSTS[0]
  index: number
  isDark: boolean
}

const BlogCard = ({ post, index, isDark }: BlogCardProps) => {
  const cardBg = isDark
    ? 'bg-white/5 border-white/10 hover:border-aquamarine/40'
    : 'bg-white border-gray-200 hover:border-aquamarine/50'
  const titleColor = isDark
    ? 'text-ghost-white group-hover:text-aquamarine'
    : 'text-gray-900 group-hover:text-aquamarine'
  const excerptColor = isDark ? 'text-gray-400' : 'text-gray-600'
  const footerBorder = isDark ? 'border-white/10' : 'border-gray-200'
  const authorColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const metaColor = isDark ? 'text-gray-500' : 'text-gray-500'

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.55, delay: index * 0.09, type: 'spring', stiffness: 100 }}
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

          <div className="p-5 sm:p-7">
            <h3
              className={`text-base sm:text-lg lg:text-xl font-bold mb-2.5 transition-colors duration-300 line-clamp-2 leading-snug ${titleColor}`}
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {post.title}
            </h3>
            <p className={`text-sm sm:text-base mb-4 line-clamp-3 leading-relaxed ${excerptColor}`}>
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

export default function BlogPage() {
  const { actualTheme } = useTheme()
  const isDark = actualTheme === 'dark'

  const pageBg = isDark ? 'bg-black' : 'bg-white'
  const gridBg = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-white/10'

  return (
    <main className={`min-h-screen ${pageBg} transition-colors duration-300`}>
      <section className="relative overflow-hidden bg-oxford-blue py-24 sm:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-aquamarine/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-tropical-indigo/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
          <div className={`absolute top-16 left-4 sm:left-8 lg:left-16 ${backgroundTextColor} font-black text-[80px] sm:text-[120px] lg:text-[180px] leading-none select-none`}>
            BLOG
          </div>
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12 sm:mb-16"
          >
            <Link href="/">
              <motion.span
                whileHover={{ x: -4 }}
                className="inline-flex items-center gap-2 text-ghost-white/70 hover:text-aquamarine transition-colors duration-300 text-sm sm:text-base cursor-pointer"
              >
                <HiArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                Zurück zur Startseite
              </motion.span>
            </Link>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, type: 'spring', stiffness: 100 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 12, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine font-semibold text-xs sm:text-sm mb-4 backdrop-blur-sm"
              >
                Insights & Wissen
              </motion.span>

              <div style={{ fontWeight: 800, letterSpacing: '-0.02em' }} className="leading-[0.9]">
                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15, type: 'spring', stiffness: 80 }}
                  className="block text-ghost-white text-[clamp(2.8rem,7vw,5.5rem)]"
                >
                  Alle
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.25, type: 'spring', stiffness: 80 }}
                  className="block text-aquamarine text-[clamp(2.8rem,7vw,5.5rem)]"
                >
                  Artikel
                </motion.span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="lg:pb-2"
            >
              <p className="text-base sm:text-lg lg:text-xl text-ghost-white/70 max-w-md">
                Praktisches Wissen zu Web-Development, KI-Integration und digitalen Trends
              </p>
              <p className="text-xs sm:text-sm text-ghost-white/40 mt-2">
                {BLOG_POSTS.length} Artikel verfügbar
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className={`py-16 sm:py-20 lg:py-24 ${gridBg} transition-colors duration-300`}>
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
            {BLOG_POSTS.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
