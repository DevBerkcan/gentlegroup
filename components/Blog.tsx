// components/Blog.tsx
'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiClock, HiArrowRight } from 'react-icons/hi'

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
  return (
    <section id="blog" className="relative overflow-hidden bg-white py-24 sm:py-32 lg:py-40">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-aquamarine/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.7, type: 'spring', stiffness: 100 }} className="text-center mb-14 sm:mb-20">
          <motion.span initial={{ opacity: 0, y: 16, scale: 0.9 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, type: 'spring', stiffness: 200 }} className="inline-block px-5 py-2.5 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine font-semibold text-xs sm:text-sm mb-6 backdrop-blur-sm">
            Insights & Wissen
          </motion.span>

          <div style={{ fontWeight: 800, letterSpacing: '-0.02em' }} className="leading-[0.9] mb-6 sm:mb-8">
            <motion.span initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15, type: 'spring', stiffness: 80 }} className="block text-gray-900 text-[clamp(2.5rem,7vw,5.5rem)]">
              Blog &
            </motion.span>
            <motion.span initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25, type: 'spring', stiffness: 80 }} className="block text-aquamarine text-[clamp(2.5rem,7vw,5.5rem)]">
              Tutorials
            </motion.span>
          </div>

          <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.35 }} className="text-base sm:text-lg lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
            Praktisches Wissen zu Web-Development, KI-Integration und digitalen Trends
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.45 }}>
            <Link href="/blog">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(1, 255, 169, 0.3)' }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-base sm:text-lg shadow-lg hover:shadow-aquamarine/50 transition-all duration-300 flex items-center gap-3 mx-auto"
                style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                Alle Artikel
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {BLOG_POSTS.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

interface BlogCardProps {
  post: typeof BLOG_POSTS[0]
  index: number
}

const BlogCard = ({ post, index }: BlogCardProps) => {
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
          className="h-full bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:border-aquamarine/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-aquamarine/10 backdrop-blur-sm"
          whileHover={{ y: -4 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative h-48 sm:h-56 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${post.categoryColor} opacity-80`} />
            <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10" />
            <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white/95 backdrop-blur-sm text-oxford-blue font-bold rounded-full text-xs sm:text-sm shadow-lg">
                {post.category}
              </span>
            </div>
            <div className="absolute inset-0 bg-oxford-blue/0 group-hover:bg-oxford-blue/15 transition-all duration-500" />
          </div>

          <div className="p-5 sm:p-7 relative z-10">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 text-gray-900 group-hover:text-aquamarine transition-colors duration-300 line-clamp-2 leading-tight" style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              {post.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base mb-5 line-clamp-3 leading-relaxed">{post.excerpt}</p>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate" style={{ fontWeight: 700 }}>{post.author.name}</p>
                <p className="text-xs text-gray-500 truncate">{post.publishDate}</p>
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 ml-3 shrink-0">
                <HiClock className="w-4 h-4" />
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
