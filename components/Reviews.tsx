'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { HiStar } from 'react-icons/hi'

// Text content configuration
const content = {
  reviews: {
    badge: "Kundenstimmen",
    title: {
      part1: "Was unsere Kunden",
      part2: "über uns sagen"
    },
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
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  return (
    <section id="reviews" ref={containerRef} className="relative py-32 lg:py-40 bg-black overflow-hidden">

      {/* Grid background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.03]) }}
          className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px]"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <span className="inline-block px-6 py-3 bg-tropical-indigo/10 border border-tropical-indigo/30 rounded-full text-tropical-indigo font-semibold text-sm mb-8 backdrop-blur-sm">
            {content.reviews.badge}
          </span>

          <div style={{ fontWeight: 800, letterSpacing: '-0.02em' }} className="leading-[0.9]">
            <span className="block text-ghost-white text-[clamp(3rem,8vw,6rem)]">
              {content.reviews.title.part1}
            </span>
            <span className="block text-tropical-indigo text-[clamp(3rem,8vw,6rem)]">
              {content.reviews.title.part2}
            </span>
          </div>
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
                border-2 border-aquamarine/30 rounded-3xl p-12 shadow-2xl backdrop-blur-sm 
                max-w-5xl mx-auto`}
              >

                {/* ⭐⭐⭐⭐⭐ Stars */}
                <div className="flex gap-2 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <HiStar key={i} className="text-aquamarine text-2xl" />
                  ))}
                </div>

                {/* Review text */}
                <p className="text-ghost-white/90 text-xl leading-relaxed mb-6">
                  "{review.text}"
                </p>

                {/* Project label */}
                <span className="inline-block px-4 py-2 mb-6 bg-tropical-indigo/20 border border-tropical-indigo/30 
                rounded-full text-tropical-indigo text-sm font-medium">
                  {review.project}
                </span>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-ghost-white/10 pt-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-aquamarine to-tropical-indigo 
                  flex items-center justify-center text-black font-bold text-3xl shadow-lg">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-ghost-white text-xl">{review.name}</h4>
                    <p className="text-sm text-ghost-white/60">
                      {review.role}, {review.company}
                    </p>
                  </div>
                </div>

                {/* TAPE — restored exactly like original */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="w-40 h-10 bg-gradient-to-br from-ghost-white/30 to-ghost-white/10 
                  backdrop-blur-md rounded-full rotate-2 shadow-lg border border-ghost-white/20 relative">

                    {/* Shine */}
                    <div className="absolute top-0 left-1/4 w-10 h-4 bg-ghost-white/40 rounded-full blur-[3px]" />
                    <div className="absolute top-0 right-1/4 w-8 h-4 bg-ghost-white/30 rounded-full blur-[2px]" />

                    {/* Edges */}
                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-5 h-7 bg-ghost-white/20 rounded-l-full" />
                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-7 bg-ghost-white/20 rounded-r-full" />

                    {/* Creases */}
                    <div className="absolute top-1 left-1/3 w-1 h-8 bg-ghost-white/20 rounded-full" />
                    <div className="absolute top-1 right-1/3 w-1 h-8 bg-ghost-white/20 rounded-full" />
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

export default Reviews
