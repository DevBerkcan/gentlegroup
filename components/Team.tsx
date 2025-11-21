'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { useRef, useState } from 'react'
import Image from 'next/image'

// Text content configuration for consistency
const content = {
  team: {
    badge: "Unser Team",
    title: {
      part1: "Die Köpfe hinter",
      part2: "Gentle Group"
    },
    members: [
      {
        name: 'Berk-Can',
        role: 'Founder & Lead Developer',
        description: 'Full-Stack Entwickler mit Expertise in React, .NET und Azure Cloud Solutions.',
        expertise: ['React', '.NET Core', 'Azure Cloud', 'AI Integration'],
        initialX: -600,
        image: '/berkcan.png'
      },
      {
        name: 'Medin',
        role: 'Backend Specialist',
        description: 'Experte für skalierbare Backend-Architekturen und Datenbank-Design.',
        expertise: ['C# .NET', 'SQL', 'API Design', 'DevOps', "NoSQL"],
        initialX: 600,
        image: '/medin.png'
      },
      {
        name: 'Moritz',
        role: 'Marketing & Sales',
        description: 'Spezialist für digitales Marketing, Kundenakquise und strategische Geschäftsentwicklung.',
        expertise: ['Digital Marketing', 'Sales Strategy', 'Customer Relations', 'Brand Development'],
        initialX: -600,
        image: '/moritz.png'
      },
      {
        name: 'Alanur',
        role: 'Backoffice & Administration',
        description: 'Organisationstalent für Verwaltung, Angebotserstellung und interne Prozesse.',
        expertise: ['Angebotserstellung', 'Onboarding', 'Rechnungswesen', 'Projektkoordination'],
        initialX: 600,
        image: '/alanur.png'
      },
    ]
  }
}

const Team = () => {
  const ref = useRef(null)
  const [hasCollided, setHasCollided] = useState(false)
  const collisionTriggered = useRef(false)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  // Multiple scroll transformations for parallax effects (same as Services)
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const yFast = useTransform(scrollYProgress, [0, 1], [150, -150])
  const ySlow = useTransform(scrollYProgress, [0, 1], [50, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0])

  // Team member movement - FASTER: start separated and come together earlier
  const member1X = useTransform(scrollYProgress, [0, 0.2, 0.5], [-600, -600, 0])
  const member2X = useTransform(scrollYProgress, [0, 0.2, 0.5], [600, 600, 0])
  
  // Opacity and scale for collision effect - moved earlier to match faster animation
  const collisionScale = useTransform(scrollYProgress, [0.45, 0.5, 0.55], [1, 1.15, 1])
  const collisionOpacity = useTransform(scrollYProgress, [0.45, 0.5, 0.55], [1, 0.6, 1])

  // Section opacity - fade in earlier
  const sectionOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0])

  // Detect collision - moved earlier
  const unsubscribeRef = useRef<(() => void) | null>(null)
  
  if (typeof window !== 'undefined') {
    unsubscribeRef.current?.()
    unsubscribeRef.current = scrollYProgress.on('change', (latest) => {
      if (latest >= 0.48 && latest <= 0.52 && !collisionTriggered.current) {
        collisionTriggered.current = true
        setHasCollided(true)
        
        // Reset after animation
        setTimeout(() => {
          setHasCollided(false)
        }, 800) // Slightly shorter timeout
      }
    })
  }

  return (
    <section 
      ref={ref} 
      id="team" 
      className="py-32 lg:py-40 relative overflow-hidden bg-white min-h-screen flex items-center"
    >
      {/* Enhanced Background Elements with Parallax (same as Services) */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles/glows with different speeds */}
        <motion.div
          style={{ y: yFast, rotate, scale }}
          className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-tropical-indigo/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{ y: ySlow, rotate: useTransform(scrollYProgress, [0, 1], [-3, 3]) }}
          className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-aquamarine/8 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-[80px]"
        />
        
        {/* Animated grid pattern */}
        <motion.div
          style={{ 
            opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.03]),
            scale: useTransform(scrollYProgress, [0, 0.4], [0.5, 1])
          }}
          className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px]"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 w-full">
        {/* Enhanced Section Header with Scale Effect (same as Services) */}
        <motion.div
          style={{ opacity: sectionOpacity, scale }}
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
            {content.team.badge}
          </motion.span>
          <div style={{ fontWeight: 800, letterSpacing: '-0.02em' }} className="leading-[0.9]">
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
              {content.team.title.part1}
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
              {content.team.title.part2}
            </motion.span>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 max-w-4xl mx-auto mt-8"
          >
          </motion.p>
        </motion.div>

        {/* Team Grid with Enhanced Collision Animation */}
        <div className="grid md:grid-cols-2 gap-8 relative min-h-[600px]">
          {content.team.members.map((member, index) => (
            <motion.div
              key={member.name}
              style={{
                x: index === 0 ? member1X : member2X,
                scale: collisionScale,
                opacity: collisionOpacity
              }}
              className="group"
            >
              <motion.div
                animate={hasCollided ? {
                  scale: [1, 1.1, 1],
                  rotate: index === 0 ? [0, -3, 2, 0] : [0, 3, -2, 0],
                } : {}}
                transition={{ 
                  duration: 0.6, // Faster collision animation
                  times: [0, 0.4, 0.7, 1],
                  ease: "easeOut"
                }}
                className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-10 lg:p-12 hover:border-aquamarine/50 transition-all duration-500 overflow-hidden shadow-xl hover:shadow-2xl backdrop-blur-sm"
              >
                {/* Background shine effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/20 to-tropical-indigo/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105" />
                
                {/* Enhanced Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/8 to-tropical-indigo/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Animated Border on Hover */}
                <motion.div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(1, 255, 169, 0.4), rgba(100, 100, 255, 0.4), transparent)',
                    backgroundSize: '200% 100%',
                  }}
                  animate={{
                    backgroundPosition: ['0% 0%', '200% 0%'],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                />
                
                <div className="relative z-10">
                  {/* Large Profile Image with Modern Shape */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 150
                    }}
                    whileHover={{
                      scale: 1.05,
                      rotate: [0, -2, 2, 0],
                      y: -8,
                      transition: { duration: 0.5 }
                    }}
                    className="w-full aspect-square max-w-[280px] mx-auto mb-8 rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-aquamarine/40 transition-all duration-500 relative"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 280px, 280px"
                      onError={(e) => {
                        // Fallback to initial if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback Gradient with Initial */}
                    <div className={`hidden absolute inset-0 rounded-3xl flex items-center justify-center text-white font-bold text-8xl ${
                      index % 2 === 0
                        ? 'bg-gradient-to-br from-aquamarine to-tropical-indigo'
                        : 'bg-gradient-to-br from-tropical-indigo to-aquamarine'
                    }`}>
                      {member.name.charAt(0)}
                    </div>

                    {/* Animated Border Effect */}
                    <motion.div
                      className="absolute inset-0 rounded-3xl border-4 border-aquamarine/30"
                      animate={{
                        scale: [1, 1.02, 1],
                        opacity: [0.4, 0.7, 0.4],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.3
                      }}
                    />

                    {/* Gradient Overlay on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-aquamarine/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Glowing Ring Effect */}
                    <div className="absolute inset-0 rounded-3xl ring-2 ring-aquamarine/0 group-hover:ring-aquamarine/60 transition-all duration-500" />
                  </motion.div>

                  {/* Name & Role with Enhanced Typography */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-center mb-6"
                  >
                    <h3 className="text-3xl lg:text-4xl font-bold mb-3 text-gray-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-aquamarine group-hover:to-tropical-indigo transition-all duration-300">
                      {member.name}
                    </h3>
                    <p className="text-tropical-indigo text-lg lg:text-xl font-semibold">
                      {member.role}
                    </p>
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="text-gray-600 text-base lg:text-lg text-center mb-8 leading-relaxed"
                  >
                    {member.description}
                  </motion.p>

                  {/* Expertise Tags with Staggered Animation */}
                  <div className="flex flex-wrap justify-center gap-2.5 mb-8">
                    {member.expertise.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + i * 0.08,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.08, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-300 rounded-full text-gray-700 text-sm font-medium hover:border-aquamarine hover:text-aquamarine transition-all duration-300 cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Social Links with Enhanced Animation */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.6 }}
                    className="flex justify-center gap-4"
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-aquamarine hover:to-tropical-indigo transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <HiMail className="text-xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-aquamarine hover:to-tropical-indigo transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaLinkedin className="text-xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.15, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-100 rounded-full text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-aquamarine hover:to-tropical-indigo transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <FaGithub className="text-xl" />
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA with scroll progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-1 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full max-w-md mx-auto mb-8 origin-left"
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Team