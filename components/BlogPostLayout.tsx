'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiClock, HiArrowLeft, HiUser, HiCalendar } from 'react-icons/hi'
import Navigation from './Navigation'
import Footer from './Footer'

interface BlogPostLayoutProps {
  title: string
  category: string
  categoryColor: string
  author: {
    name: string
    role: string
  }
  publishDate: string
  readTime: string
  coverImage: string
  content: {
    intro: string
    sections: {
      heading: string
      content: string
      image?: string
    }[]
    conclusion: string
  }
}

const BlogPostLayout = ({
  title,
  category,
  categoryColor,
  author,
  publishDate,
  readTime,
  coverImage,
  content
}: BlogPostLayoutProps) => {
  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-white">
        {/* Hero Section with Cover Image */}
        <section className="relative h-[60vh] bg-oxford-blue overflow-hidden">
          {/* Cover Image */}
          <div className="absolute inset-0">
            <Image
              src={coverImage}
              alt={title}
              fill
              className="object-cover opacity-40"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-oxford-blue/60 via-oxford-blue/80 to-oxford-blue" />
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-end">
            <div className="max-w-4xl mx-auto px-6 lg:px-8 pb-16 w-full">
              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <Link href="/#blog">
                  <motion.button
                    whileHover={{ x: -5 }}
                    className="flex items-center gap-2 text-ghost-white/80 hover:text-aquamarine transition-colors duration-300"
                  >
                    <HiArrowLeft className="w-5 h-5" />
                    <span>Zurück zum Blog</span>
                  </motion.button>
                </Link>
              </motion.div>

              {/* Category Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-4"
              >
                <span className={`inline-block px-4 py-2 bg-gradient-to-r ${categoryColor} text-ghost-white font-bold rounded-full text-sm`}>
                  {category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl lg:text-6xl font-black text-ghost-white mb-6 leading-tight"
              >
                {title}
              </motion.h1>

              {/* Meta Information */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-6 text-ghost-white/80"
              >
                <div className="flex items-center gap-2">
                  <HiUser className="w-5 h-5" />
                  <span className="font-medium">{author.name}</span>
                  <span className="text-ghost-white/60">•</span>
                  <span className="text-sm">{author.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiCalendar className="w-5 h-5" />
                  <span>{publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiClock className="w-5 h-5" />
                  <span>{readTime} Lesezeit</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
          {/* Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium">
              {content.intro}
            </p>
          </motion.div>

          {/* Content Sections */}
          {content.sections.map((section, index) => (
            <motion.section
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                {section.heading}
              </h2>

              {section.image && (
                <div className="relative w-full h-[400px] mb-6 rounded-2xl overflow-hidden">
                  <Image
                    src={section.image}
                    alt={section.heading}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 896px"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}

          {/* Conclusion */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 rounded-3xl border border-aquamarine/20"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Fazit</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {content.conclusion}
            </p>
          </motion.div>

          {/* Author Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-white border border-gray-200 rounded-3xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-white text-2xl font-bold">
                {author.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{author.name}</h3>
                <p className="text-gray-600">{author.role}</p>
              </div>
            </div>
            <p className="text-gray-700">
              Experte für moderne Web-Technologien und digitale Transformation bei Gentle Group.
            </p>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 text-center p-12 bg-gradient-to-br from-oxford-blue to-oxford-blue/90 rounded-3xl"
          >
            <h3 className="text-3xl font-bold text-ghost-white mb-4">
              Interessiert an unseren Leistungen?
            </h3>
            <p className="text-xl text-ghost-white/80 mb-8 max-w-2xl mx-auto">
              Lassen Sie uns gemeinsam Ihr nächstes Projekt verwirklichen.
            </p>
            <Link href="/kontakt">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
              >
                Jetzt Kontakt aufnehmen
              </motion.button>
            </Link>
          </motion.div>
        </article>
      </main>

      <Footer />
    </>
  )
}

export default BlogPostLayout
