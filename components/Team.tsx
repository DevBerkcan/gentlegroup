'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { HiMail } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import OptimizedImage from '@/components/OptimizedImage'
import { useTheme } from '@/contexts/ThemeContext'
import { useRef } from 'react'

// Text content configuration for consistency
const content = {
  team: {
    members: [
      {
        name: 'Berk-Can',
        role: 'Founder & Lead Developer',
        description: 'Full-Stack Entwickler mit Expertise in React, .NET und Azure Cloud Solutions.',
        expertise: ['React', '.NET Core', 'Azure Cloud', 'AI Integration'],
        image: '/berkcan.png'
      },
      {
        name: 'Medin',
        role: 'Backend Specialist',
        description: 'Experte für skalierbare Backend-Architekturen und Datenbank-Design.',
        expertise: ['C# .NET', 'SQL', 'API Design', 'DevOps', "NoSQL"],
        image: '/medin.png'
      },
      {
        name: 'Moritz',
        role: 'Marketing & Sales',
        description: 'Spezialist für digitales Marketing, Kundenakquise und strategische Geschäftsentwicklung.',
        expertise: ['Digital Marketing', 'Sales Strategy', 'Customer Relations', 'Brand Development'],
        image: '/moritz.png'
      },
      {
        name: 'Alanur',
        role: 'Backoffice & Administration',
        description: 'Organisationstalent für Verwaltung, Angebotserstellung und interne Prozesse.',
        expertise: ['Angebotserstellung', 'Onboarding', 'Rechnungswesen', 'Projektkoordination'],
        image: '/alanur.png'
      },
    ]
  }
}

const Team = () => {
  const { actualTheme } = useTheme()
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Adaptive colors based on theme
  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const cardBg = actualTheme === 'dark' ? 'from-gray-900 to-gray-800' : 'from-white to-gray-50'
  const borderColor = actualTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'
  const backgroundTextColor = actualTheme === 'dark' ? 'text-white/5' : 'text-gray-900/5'

  // Parallax scroll effect for horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -100])

  return (
    <section
      ref={containerRef}
      id="team"
      className={`py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}
    >
      {/* Background "UNSER TEAM" Text */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-8 lg:left-16 ${backgroundTextColor} font-black text-[100px] lg:text-[160px] xl:text-[200px] leading-none select-none`}>
          UNSER TEAM
        </div>
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
            UNSER TEAM
          </h2>
        </motion.div>

        {/* Horizontal Scrolling Team Cards */}
        <div className="overflow-x-auto overflow-y-visible pb-8 -mx-8 px-8 scrollbar-hide">
          <motion.div
            className="flex gap-6 lg:gap-8"
            style={{ x }}
          >
            {content.team.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group flex-shrink-0 w-[320px] lg:w-[350px]"
              >
                <div
                  className={`relative bg-gradient-to-br ${cardBg} border ${borderColor} rounded-2xl p-8 lg:p-10 hover:border-aquamarine/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl h-full`}
                >
                  {/* Background shine effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/20 to-tropical-indigo/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105" />

                  {/* Enhanced Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/8 to-tropical-indigo/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    {/* Profile Image */}
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 150
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -5,
                        transition: { duration: 0.3 }
                      }}
                      className="w-full aspect-square max-w-[240px] mx-auto mb-6 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-aquamarine/40 transition-all duration-500 relative"
                    >
                      <OptimizedImage
                        src={member.image}
                        alt={member.name}
                        fill
                        priority={index < 2}
                        className="object-cover"
                        sizes="(max-width: 768px) 240px, 240px"
                        onError={(e: any) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const fallback = target.nextElementSibling as HTMLElement;
                          if (fallback) fallback.classList.remove('hidden');
                        }}
                      />
                      {/* Fallback Gradient with Initial */}
                      <div className={`hidden absolute inset-0 rounded-2xl flex items-center justify-center text-white font-bold text-7xl ${
                        index % 2 === 0
                          ? 'bg-gradient-to-br from-aquamarine to-tropical-indigo'
                          : 'bg-gradient-to-br from-tropical-indigo to-aquamarine'
                      }`}>
                        {member.name.charAt(0)}
                      </div>

                      {/* Gradient Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-aquamarine/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </motion.div>

                    {/* Name & Role */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                      className="text-center mb-4"
                    >
                      <h3 className={`text-2xl lg:text-3xl font-bold mb-2 ${textColor} group-hover:text-aquamarine transition-colors duration-300`}>
                        {member.name}
                      </h3>
                      <p className="text-tropical-indigo text-base lg:text-lg font-semibold">
                        {member.role}
                      </p>
                    </motion.div>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                      className={`${textMuted} text-sm lg:text-base text-center mb-6 leading-relaxed`}
                    >
                      {member.description}
                    </motion.p>

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.expertise.map((skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.1 + i * 0.05,
                            type: "spring",
                            stiffness: 200
                          }}
                          className={`px-3 py-1.5 ${actualTheme === 'dark' ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-700'} border rounded-full text-xs font-medium hover:border-aquamarine hover:text-aquamarine transition-all duration-300`}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>

                    {/* Social Links */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 + 0.4 }}
                      className="flex justify-center gap-3"
                    >
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2.5 ${actualTheme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} rounded-full hover:text-white hover:bg-gradient-to-r hover:from-aquamarine hover:to-tropical-indigo transition-all duration-300 shadow-md hover:shadow-lg`}
                      >
                        <HiMail className="text-lg" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2.5 ${actualTheme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} rounded-full hover:text-white hover:bg-gradient-to-r hover:from-aquamarine hover:to-tropical-indigo transition-all duration-300 shadow-md hover:shadow-lg`}
                      >
                        <FaLinkedin className="text-lg" />
                      </motion.a>
                      <motion.a
                        href="#"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2.5 ${actualTheme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} rounded-full hover:text-white hover:bg-gradient-to-r hover:from-aquamarine hover:to-tropical-indigo transition-all duration-300 shadow-md hover:shadow-lg`}
                      >
                        <FaGithub className="text-lg" />
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Hint */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className={`${textMuted} text-sm`}>
            ← Scrollen Sie horizontal für mehr Team-Mitglieder →
          </p>
        </motion.div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  )
}

export default Team
