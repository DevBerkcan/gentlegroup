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
        image: '/berkcan.jpg'
      },
      {
        name: 'Medin Turkes',
        role: 'Backend Specialist',
        description: 'Experte für skalierbare Backend-Architekturen und Datenbank-Design.',
        expertise: ['C# .NET', 'SQL', 'API Design', 'DevOps', "NoSQL"],
        initialX: 600,
        image: '/medin.png'
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
                className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-8 lg:p-10 hover:border-aquamarine/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl backdrop-blur-sm"
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
                  {/* Profile Image with Enhanced Animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      y: -5 
                    }}
                    className="w-32 h-32 mx-auto mb-6 rounded-full flex items-center justify-center overflow-hidden shadow-lg group-hover:shadow-aquamarine/50 transition-all duration-300 relative"
                  >
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        // Fallback to initial if image fails to load
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    {/* Fallback initial display */}
                    <div className={`hidden absolute inset-0 rounded-full items-center justify-center text-oxford-blue font-bold text-5xl ${
                      index === 0
                        ? 'bg-gradient-to-br from-aquamarine to-tropical-indigo'
                        : 'bg-gradient-to-br from-tropical-indigo to-aquamarine'
                    }`}>
                      {member.name.charAt(0)}
                    </div>
                    
                    {/* Pulsing effect */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-aquamarine/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Name & Role with Enhanced Typography */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-2xl lg:text-3xl font-bold mb-3 text-center text-gray-900 group-hover:text-aquamarine transition-colors duration-300"
                  >
                    {member.name}
                  </motion.h3>
                  
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="text-tropical-indigo text-lg font-semibold mb-6 text-center"
                  >
                    {member.role}
                  </motion.p>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.5 }}
                    className="text-gray-600 text-lg mb-8 leading-relaxed"
                  >
                    {member.description}
                  </motion.p>

                  {/* Expertise Tags with Staggered Animation */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {member.expertise.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          duration: 0.4, 
                          delay: index * 0.1 + i * 0.1,
                          type: "spring",
                          stiffness: 200
                        }}
                        className="px-4 py-2 bg-gray-100 border border-gray-300 rounded-full text-gray-700 text-sm font-medium hover:border-aquamarine/30 transition-colors duration-300"
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
                    className="flex justify-center gap-6"
                  >
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-aquamarine transition-colors duration-300"
                    >
                      <HiMail className="text-2xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-aquamarine transition-colors duration-300"
                    >
                      <FaLinkedin className="text-2xl" />
                    </motion.a>
                    <motion.a
                      href="#"
                      whileHover={{ scale: 1.2, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-600 hover:text-aquamarine transition-colors duration-300"
                    >
                      <FaGithub className="text-2xl" />
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