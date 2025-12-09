'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiClock, HiArrowRight } from 'react-icons/hi'

const BLOG_POSTS = [
  {
    id: '1',
    title: '.NET Core Best Practices: Enterprise-Architektur für skalierbare Anwendungen',
    excerpt:
      'Erfahren Sie, wie Sie mit .NET Core robuste, skalierbare Enterprise-Anwendungen entwickeln. Best Practices, Architektur-Patterns und Performance-Tipps.',
    category: 'Backend Development',
    categoryColor: 'from-purple-500 to-indigo-600',
    author: {
      name: 'Berk-Can Atesoglu',
      role: 'Lead Developer',
    },
    publishDate: '22. November 2024',
    readTime: '12 min',
    slug: 'dotnet-core-enterprise-best-practices',
  },
  {
    id: '2',
    title: 'Wartungsverträge für Webseiten: Warum sie unverzichtbar sind',
    excerpt:
      'Website-Wartung ist mehr als Updates installieren. Erfahren Sie, was ein professioneller Wartungsvertrag umfasst und warum Ihre Website regelmäßige Pflege braucht.',
    category: 'Business & Strategy',
    categoryColor: 'from-emerald-500 to-teal-600',
    author: {
      name: 'Berk-Can Atesoglu',
      role: 'Founder & Lead Developer',
    },
    publishDate: '22. November 2024',
    readTime: '10 min',
    slug: 'wartungsvertraege-webseiten',
  },
  {
    id: '3',
    title: 'Webseiten-Sicherheit 2024: Best Practices für Unternehmen',
    excerpt:
      'Schützen Sie Ihre Website vor Hackern! Die wichtigsten Sicherheitsmaßnahmen: SSL, Firewalls, Updates, Backups und mehr. Praktischer Leitfaden mit Checkliste.',
    category: 'Security & Compliance',
    categoryColor: 'from-red-500 to-orange-600',
    author: {
      name: 'Berk-Can Atesoglu',
      role: 'Security & Architecture',
    },
    publishDate: '22. November 2024',
    readTime: '15 min',
    slug: 'webseiten-sicherheit-best-practices',
  },
  {
    id: '4',
    title: 'Next.js 15 & React 19: Performance-Boost für moderne Web-Apps',
    excerpt:
      'Entdecken Sie die neuesten Features von Next.js 15 und React 19. Server Components, Streaming und App Router für blitzschnelle Performance.',
    category: 'Web Development',
    categoryColor: 'from-aquamarine to-tropical-indigo',
    author: {
      name: 'Berk-Can Atesoglu',
      role: 'Full-Stack Developer',
    },
    publishDate: '15. März 2024',
    readTime: '8 min',
    slug: 'nextjs-15-react-19-performance',
  },
  {
    id: '5',
    title: 'KI-Integration in Business-Prozesse: Praxisleitfaden 2024',
    excerpt:
      'Von ChatGPT über Azure OpenAI bis zu Custom AI-Lösungen: Wie Sie KI gewinnbringend in Ihre Geschäftsprozesse integrieren.',
    category: 'KI & Automatisierung',
    categoryColor: 'from-tropical-indigo to-aquamarine',
    author: {
      name: 'Medin Turkes',
      role: 'AI Solutions Architect',
    },
    publishDate: '10. März 2024',
    readTime: '12 min',
    slug: 'ki-integration-business-prozesse',
  },
  {
    id: '6',
    title: 'TypeScript Best Practices: Type-Safety für Enterprise-Apps',
    excerpt:
      'Fortgeschrittene TypeScript-Patterns für sichere und wartbare Enterprise-Anwendungen. Generics, Utility Types und mehr.',
    category: 'Web Development',
    categoryColor: 'from-tropical-indigo to-aquamarine',
    author: {
      name: 'Team Gentle Group',
      role: 'Development Team',
    },
    publishDate: '1. März 2024',
    readTime: '15 min',
    slug: 'typescript-best-practices-enterprise',
  },
]

const Blog = () => {
  // Show only first 3 posts
  const displayedPosts = BLOG_POSTS.slice(0, 3)

  return (
    <section id="blog" className="relative overflow-hidden bg-white py-32 lg:py-40">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-aquamarine/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Centered Section Header like FAQ */}
        <motion.div
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
            className="inline-block px-6 py-3 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine font-semibold text-sm mb-8 backdrop-blur-sm"
          >
            Insights & Wissen
          </motion.span>
          
          <div style={{ fontWeight: 800, letterSpacing: '-0.02em' }} className="leading-[0.9] mb-8">
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
              className="block text-gray-900 text-[clamp(3rem,8vw,6rem)]"
            >
              Blog &
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
              className="block text-aquamarine text-[clamp(3rem,8vw,6rem)]"
            >
              Tutorials
            </motion.span>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto mb-12"
          >
            Praktisches Wissen zu Web-Development, KI-Integration und digitalen Trends
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link href="/blog">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(1, 255, 169, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="px-12 py-6 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-xl shadow-lg hover:shadow-aquamarine/50 transition-all duration-300 flex items-center gap-3 mx-auto"
                style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                Alle Artikel
                <HiArrowRight className="w-6 h-6" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedPosts.map((post, index) => (
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
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      className="group"
    >
      <Link href={`/blog/${post.slug}`}>
        <motion.div 
          className="h-full bg-gradient-to-br from-white to-gray-50 rounded-3xl overflow-hidden border border-gray-200 hover:border-aquamarine/50 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-aquamarine/10 backdrop-blur-sm group-hover:scale-[1.02]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

          {/* Image Placeholder with Gradient */}
          <div className="relative h-64 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${post.categoryColor} opacity-80`} />
            <div className="absolute inset-0 bg-grid-pattern bg-[length:30px_30px] opacity-10" />

            {/* Category Badge */}
            <div className="absolute top-6 left-6 z-10">
              <span className={`px-4 py-2 bg-white/95 backdrop-blur-sm text-oxford-blue font-bold rounded-full text-sm shadow-lg`}>
                {post.category}
              </span>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-oxford-blue/0 group-hover:bg-oxford-blue/20 transition-all duration-500" />
          </div>

          {/* Content */}
          <div className="p-8 relative z-10">
            {/* Title */}
            <h3 
              className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-aquamarine transition-colors duration-300 line-clamp-2 leading-tight"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {post.title}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 text-lg mb-6 line-clamp-3 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Footer */}
            <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
              {/* Author */}
              <div className="flex-1 min-w-0">
                <p className="text-base font-semibold text-gray-900 truncate" style={{ fontWeight: 700 }}>
                  {post.author.name}
                </p>
                <p className="text-sm text-gray-500 truncate">
                  {post.publishDate}
                </p>
              </div>

              {/* Read Time */}
              <div className="flex items-center gap-2 text-gray-500 ml-4 flex-shrink-0">
                <HiClock className="w-5 h-5" />
                <span className="text-base">{post.readTime}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  )
}

export default Blog