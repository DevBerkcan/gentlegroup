'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

// Text content configuration
const content = {
  reviews: {
    items: [
      {
        name: 'Michael Schmidt',
        company: 'TechStart GmbH',
        role: 'CEO',
        rating: 5,
        text: 'Gentle Group hat unsere Vision perfekt umgesetzt. Die Kommunikation war exzellent und das Ergebnis übertrifft unsere Erwartungen bei weitem.',
        project: 'E-Commerce Platform',
        color: 'from-aquamarine/10 to-tropical-indigo/10',
      },
      {
        name: 'Sarah Weber',
        company: 'Digital Solutions AG',
        role: 'Product Manager',
        rating: 5,
        text: 'Professionelle Arbeit auf höchstem Niveau. Das Team hat unser CRM-System modernisiert und die Integration mit Azure Cloud war nahtlos.',
        project: 'CRM Modernization',
        color: 'from-tropical-indigo/10 to-aquamarine/10',
      },
      {
        name: 'Thomas Müller',
        company: 'Innovation Labs',
        role: 'CTO',
        rating: 5,
        text: 'Die KI-Integration in unsere Plattform hat unseren Kundenservice revolutioniert. Hervorragende technische Expertise und kreative Lösungsansätze.',
        project: 'AI Chatbot System',
        color: 'from-aquamarine/10 to-oxford-blue/10',
      },
      {
        name: 'Laura Fischer',
        company: 'CreativeHub',
        role: 'Marketing Director',
        rating: 5,
        text: 'Ein außergewöhnliches Team! Die neue Website ist wunderschön und extrem performant. Unsere Conversion Rate hat sich verdoppelt.',
        project: 'Corporate Website',
        color: 'from-tropical-indigo/10 to-oxford-blue/10',
      },
    ]
  }
}

const Reviews = () => {
  const { actualTheme } = useTheme()
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Adaptive colors based on theme
  const bgColor = actualTheme === 'dark' ? 'bg-black' : 'bg-white'
  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-gray-900'
  const backgroundTextColor = actualTheme === 'dark' ? 'text-white/5' : 'text-gray-900/5'

  return (
    <section id="reviews" ref={containerRef} className={`relative py-32 lg:py-40 ${bgColor} overflow-hidden transition-colors duration-300`}>
      {/* Background "KUNDENSTIMMEN" Text */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-8 lg:left-16 ${backgroundTextColor} font-black text-[70px] lg:text-[120px] xl:text-[160px] leading-none select-none`}>
          KUNDENSTIMMEN
        </div>
      </div>

      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.03]) }}
          className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px]"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Section Title - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-5xl lg:text-6xl font-bold ${textColor}`}>
            KUNDENSTIMMEN
          </h2>
        </motion.div>

        {/* Sequential vertical scroll reviews */}
        <div className="relative flex flex-col gap-48">
          {content.reviews.items.map((review, index) => {
            // Enter slightly later per item
            const start = index * 0.22
            const end = start + 0.25

            const y = useTransform(scrollYProgress, [start, end], [200, 0])
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1])

            // Sticker rotation (slight)
            const rotate = (index % 2 === 0) ? -2.5 : 2.5

            return (
              <motion.div
                key={review.name}
                style={{ y, opacity, rotate }}
                className={`relative bg-gradient-to-br ${review.color}
                border-2 ${actualTheme === 'dark' ? 'border-aquamarine/30' : 'border-aquamarine/20'} rounded-3xl p-12 shadow-2xl backdrop-blur-sm
                max-w-5xl mx-auto`}
              >
                {/* ⭐⭐⭐⭐⭐ Stars */}
                <div className="flex gap-2 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <HiStar key={i} className="text-aquamarine text-2xl" />
                  ))}
                </div>

                {/* Review text */}
                <p className={`${actualTheme === 'dark' ? 'text-ghost-white/90' : 'text-gray-900'} text-xl leading-relaxed mb-6`}>
                  "{review.text}"
                </p>

                {/* Project label */}
                <span className="inline-block px-4 py-2 mb-6 bg-tropical-indigo/20 border border-tropical-indigo/30
                rounded-full text-tropical-indigo text-sm font-medium">
                  {review.project}
                </span>

                {/* Author */}
                <div className={`flex items-center gap-4 border-t ${actualTheme === 'dark' ? 'border-ghost-white/10' : 'border-gray-200'} pt-6`}>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-aquamarine to-tropical-indigo
                  flex items-center justify-center text-black font-bold text-3xl shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-bold ${textColor} text-xl`}>{review.name}</h4>
                    <p className={`text-sm ${actualTheme === 'dark' ? 'text-ghost-white/60' : 'text-gray-600'}`}>
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>

                {/* TAPE — restored exactly like original */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className={`w-40 h-10 ${actualTheme === 'dark' ? 'bg-gradient-to-br from-ghost-white/30 to-ghost-white/10' : 'bg-gradient-to-br from-gray-300/40 to-gray-200/20'}
                  backdrop-blur-md rounded-full rotate-2 shadow-lg ${actualTheme === 'dark' ? 'border border-ghost-white/20' : 'border border-gray-300/30'} relative`}>
                    {/* Shine */}
                    <div className={`absolute top-0 left-1/4 w-10 h-4 ${actualTheme === 'dark' ? 'bg-ghost-white/40' : 'bg-white/60'} rounded-full blur-[3px]`} />
                    <div className={`absolute top-0 right-1/4 w-8 h-4 ${actualTheme === 'dark' ? 'bg-ghost-white/30' : 'bg-white/50'} rounded-full blur-[2px]`} />

                    {/* Edges */}
                    <div className={`absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-7 ${actualTheme === 'dark' ? 'bg-ghost-white/20' : 'bg-gray-300/30'} rounded-l-full`} />
                    <div className={`absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-7 ${actualTheme === 'dark' ? 'bg-ghost-white/20' : 'bg-gray-300/30'} rounded-r-full`} />

                    {/* Creases */}
                    <div className={`absolute top-1 left-1/3 w-1 h-8 ${actualTheme === 'dark' ? 'bg-ghost-white/20' : 'bg-gray-300/30'} rounded-full`} />
                    <div className={`absolute top-1 right-1/3 w-1 h-8 ${actualTheme === 'dark' ? 'bg-ghost-white/20' : 'bg-gray-300/30'} rounded-full`} />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Reviews)
