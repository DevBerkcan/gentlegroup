// components/Team.tsx
'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { HiMail, HiPhone } from 'react-icons/hi'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import OptimizedImage from '@/components/OptimizedImage'
import { useTheme } from '@/contexts/ThemeContext'
import React, { useRef } from 'react'

const content = {
  team: {
    members: [
      {
        name: 'Berk-Can',
        role: 'Founder & Lead Developer',
        description: 'Full-Stack Entwickler mit Expertise in React, .NET und Azure Cloud Solutions.',
        expertise: ['React', '.NET Core', 'Azure Cloud', 'AI Integration'],
        image: '/berkcan.webp',
      },
      {
        name: 'Medin',
        role: 'Backend Specialist',
        description: 'Experte für skalierbare Backend-Architekturen und Datenbank-Design.',
        expertise: ['C# .NET', 'SQL', 'API Design', 'DevOps', 'NoSQL'],
        image: '/medin.webp',
      },
      {
        name: 'Moritz',
        role: 'Marketing & Sales',
        description: 'Spezialist für digitales Marketing, Kundenakquise und strategische Geschäftsentwicklung.',
        expertise: ['Digital Marketing', 'Sales Strategy', 'Customer Relations', 'Brand Development'],
        image: '',
      },
      {
        name: 'Alanur',
        role: 'Backoffice & Administration',
        description: 'Organisationstalent für Verwaltung, Angebotserstellung und interne Prozesse.',
        expertise: ['Angebotserstellung', 'Onboarding', 'Rechnungswesen', 'Projektkoordination'],
        image: '/alanur.webp',
      },
    ],
  },
}

const Team = () => {
  const { actualTheme } = useTheme()
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start end', 'end start'] })

  const isDark = actualTheme === 'dark'
  const bgColor = isDark ? 'bg-oxford-blue' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600'
  const cardBg = isDark ? 'from-gray-900 to-gray-800' : 'from-white to-gray-50'
  const borderColor = isDark ? 'border-gray-700/60' : 'border-gray-200'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-gray-900/5'
  const tagBg = isDark ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-100 border-gray-300 text-gray-700'

  return (
    <section ref={containerRef} id="team" className={`py-24 sm:py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-4 sm:left-8 lg:left-16 ${backgroundTextColor} font-black text-[80px] sm:text-[120px] lg:text-[180px] xl:text-[220px] leading-none select-none`}>
          UNSER TEAM
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-aquamarine/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColor}`}>UNSER TEAM</h2>
          <p className={`mt-3 text-base sm:text-lg ${textMuted} max-w-xl`}>Die Menschen hinter Gentle Group.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {content.team.members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group"
            >
              <div className={`relative bg-gradient-to-br ${cardBg} border ${borderColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:border-aquamarine/50 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl h-full flex flex-col`}>
                <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/20 to-tropical-indigo/20 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col h-full">
                  <motion.div
                    whileHover={{ scale: 1.04, y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="w-full aspect-square max-w-[200px] sm:max-w-[220px] mx-auto mb-5 rounded-2xl overflow-hidden shadow-xl group-hover:shadow-aquamarine/30 transition-all duration-500 relative"
                  >
                    <OptimizedImage
                      src={member.image}
                      alt={member.name}
                      fill
                      priority={index < 2}
                      className="object-cover"
                      sizes="(max-width: 640px) 200px, 220px"
                      onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.classList.remove('hidden');
                      }}
                    />
                    <div className={`hidden absolute inset-0 rounded-2xl flex items-center justify-center text-white font-bold text-6xl ${index % 2 === 0 ? 'bg-gradient-to-br from-aquamarine to-tropical-indigo' : 'bg-gradient-to-br from-tropical-indigo to-aquamarine'}`}>
                      {member.name.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-aquamarine/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </motion.div>

                  <div className="text-center mb-3">
                    <h3 className={`text-xl sm:text-2xl font-bold mb-1 ${textColor} group-hover:text-aquamarine transition-colors duration-300`}>
                      {member.name}
                    </h3>
                    <p className="text-tropical-indigo text-sm sm:text-base font-semibold">{member.role}</p>
                  </div>

                  <p className={`${textMuted} text-xs sm:text-sm text-center mb-4 leading-relaxed flex-1`}>{member.description}</p>

                  <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 mb-5">
                    {member.expertise.map((skill) => (
                      <span key={skill} className={`px-2.5 py-1 ${tagBg} border rounded-full text-xs font-medium hover:border-aquamarine hover:text-aquamarine transition-all duration-300`}>
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-2.5">
                    {[
                      { href: '/kontakt', icon: HiMail, label: 'E-Mail' },
                      { href: '/kontakt', icon: FaLinkedin, label: 'LinkedIn' },
                      { href: '/kontakt', icon: FaGithub, label: 'GitHub' },
                    ].map(({ href, icon: Icon, label }) => (
                      <motion.a
                        key={label}
                        href={href}
                        whileHover={{ scale: 1.12, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className={`p-2 sm:p-2.5 ${isDark ? 'bg-gray-800 text-gray-400' : 'bg-gray-100 text-gray-600'} rounded-full hover:text-white hover:bg-gradient-to-r hover:from-aquamarine hover:to-tropical-indigo transition-all duration-300 shadow-md hover:shadow-lg`}
                        aria-label={label}
                      >
                        <Icon className="text-base sm:text-lg" />
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default React.memo(Team)
