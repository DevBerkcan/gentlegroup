// components/Reviews.tsx
'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { HiStar } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

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
    ],
  },
}

const Reviews = () => {
  const { actualTheme } = useTheme()
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })

  const isDark = actualTheme === 'dark'
  const bgColor = isDark ? 'bg-black' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-gray-900/5'

  return (
    <section id="reviews" ref={containerRef} className={`relative py-24 sm:py-32 lg:py-40 ${bgColor} overflow-hidden transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-4 sm:left-8 lg:left-16 ${backgroundTextColor} font-black text-[60px] sm:text-[90px] lg:text-[130px] xl:text-[170px] leading-none select-none`}>
          KUNDENSTIMMEN
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <motion.div style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.03]) }} className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColor}`}>KUNDENSTIMMEN</h2>
          <p className={`mt-3 text-base sm:text-lg ${isDark ? 'text-gray-400' : 'text-gray-500'} max-w-xl`}>Was unsere Kunden über uns sagen.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 max-w-5xl mx-auto">
          {content.reviews.items.map((review, index) => {
            const start = index * 0.18
            const end = start + 0.22
            const y = useTransform(scrollYProgress, [start, end], [120, 0])
            const opacity = useTransform(scrollYProgress, [start, end], [0, 1])
            const rotate = index % 2 === 0 ? -1.5 : 1.5

            return (
              <motion.div
                key={review.name}
                style={{ y, opacity, rotate }}
                className={`relative bg-gradient-to-br ${review.color} border-2 ${isDark ? 'border-aquamarine/30' : 'border-aquamarine/20'} rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-sm`}
              >
                <div className="flex gap-1 sm:gap-2 mb-4 sm:mb-5">
                  {[...Array(review.rating)].map((_, i) => (
                    <HiStar key={i} className="text-aquamarine text-lg sm:text-xl" />
                  ))}
                </div>

                <p className={`${isDark ? 'text-ghost-white/90' : 'text-gray-900'} text-base sm:text-lg leading-relaxed mb-4 sm:mb-5`}>
                  "{review.text}"
                </p>

                <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 mb-4 sm:mb-5 bg-tropical-indigo/20 border border-tropical-indigo/30 rounded-full text-tropical-indigo text-xs sm:text-sm font-medium">
                  {review.project}
                </span>

                <div className={`flex items-center gap-3 sm:gap-4 border-t ${isDark ? 'border-ghost-white/10' : 'border-gray-200'} pt-4 sm:pt-5`}>
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-aquamarine to-tropical-indigo flex items-center justify-center text-black font-bold text-xl sm:text-2xl shadow-lg shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className={`font-bold ${textColor} text-base sm:text-lg`}>{review.name}</h4>
                    <p className={`text-xs sm:text-sm ${isDark ? 'text-ghost-white/60' : 'text-gray-600'}`}>
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>

                <div className="absolute -top-5 sm:-top-6 left-1/2 -translate-x-1/2">
                  <div className={`w-28 sm:w-36 h-8 sm:h-10 ${isDark ? 'bg-gradient-to-br from-ghost-white/30 to-ghost-white/10' : 'bg-gradient-to-br from-gray-300/40 to-gray-200/20'} backdrop-blur-md rounded-full rotate-2 shadow-lg ${isDark ? 'border border-ghost-white/20' : 'border border-gray-300/30'} relative`}>
                    <div className={`absolute top-0 left-1/4 w-8 h-3 sm:h-4 ${isDark ? 'bg-ghost-white/40' : 'bg-white/60'} rounded-full blur-[3px]`} />
                    <div className={`absolute top-0 right-1/4 w-6 sm:w-8 h-3 sm:h-4 ${isDark ? 'bg-ghost-white/30' : 'bg-white/50'} rounded-full blur-[2px]`} />
                    <div className={`absolute -left-2 sm:-left-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-5 sm:h-7 ${isDark ? 'bg-ghost-white/20' : 'bg-gray-300/30'} rounded-l-full`} />
                    <div className={`absolute -right-2 sm:-right-3 top-1/2 -translate-y-1/2 w-4 sm:w-5 h-5 sm:h-7 ${isDark ? 'bg-ghost-white/20' : 'bg-gray-300/30'} rounded-r-full`} />
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
