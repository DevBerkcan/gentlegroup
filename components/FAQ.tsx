// components/FAQ.tsx
'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChevronDown, HiArrowRight } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

const content = {
  faq: {
    items: [
      {
        question: 'Welche Technologien nutzt ihr für Webentwicklung?',
        answer: 'Wir setzen auf moderne Technologien wie React, Next.js, TypeScript für Frontend-Entwicklung. Im Backend arbeiten wir mit .NET Core, Node.js und nutzen Azure Cloud für Hosting und Services. Für Datenbanken verwenden wir SQL Server, PostgreSQL oder MongoDB je nach Projektanforderung.',
      },
      {
        question: 'Wie lange dauert die Entwicklung einer Website?',
        answer: 'Die Entwicklungszeit hängt vom Projektumfang ab. Eine einfache Corporate Website kann in 2-4 Wochen fertig sein, während komplexe Web-Apps oder E-Commerce-Plattformen 2-4 Monate benötigen können. Wir erstellen für jedes Projekt einen detaillierten Zeitplan.',
      },
      {
        question: 'Bietet ihr auch Wartung und Support an?',
        answer: 'Ja, wir bieten umfassende Wartungs- und Support-Pakete an. Diese beinhalten regelmäßige Updates, Security-Patches, Performance-Optimierung, Backup-Management und technischen Support. Sie können zwischen verschiedenen Service-Leveln wählen.',
      },
      {
        question: 'Was kostet eine professionelle Website?',
        answer: 'Die Kosten variieren je nach Anforderungen. Eine einfache Landing Page startet ab 2.000€, während umfangreiche Web-Anwendungen mit Custom Features zwischen 10.000€ - 50.000€+ liegen können. Wir erstellen gerne ein individuelles Angebot nach einem kostenlosen Erstgespräch.',
      },
      {
        question: 'Können bestehende Systeme integriert werden?',
        answer: 'Absolut! Wir haben umfangreiche Erfahrung mit der Integration von CRM-Systemen, ERP-Software, Payment-Gateways, Microsoft 365, SharePoint und vielen anderen Drittanbieter-Services. API-Integration und Datenmigrationen gehören zu unseren Kernkompetenzen.',
      },
      {
        question: 'Wie läuft die Zusammenarbeit ab?',
        answer: 'Nach einem Erstgespräch erstellen wir ein Konzept und Angebot. Bei Projektstart arbeiten wir in agilen Sprints mit regelmäßigen Updates und Feedback-Schleifen. Sie haben jederzeit Einblick in den Entwicklungsstand über unser Projektmanagement-Tool und einen dedizierten Ansprechpartner.',
      },
      {
        question: 'Sind eure Websites mobilfreundlich?',
        answer: 'Ja, alle unsere Websites sind vollständig responsive und für alle Geräte optimiert. Wir verfolgen einen Mobile-First-Ansatz, da heute über 60% der Nutzer mobil auf Websites zugreifen. Performance und Usability auf Smartphones sind uns extrem wichtig.',
      },
      {
        question: 'Was ist mit SEO und Performance?',
        answer: 'SEO und Performance sind von Anfang an in unseren Entwicklungsprozess integriert. Wir optimieren Ladezeiten, nutzen moderne Techniken wie Code Splitting, implementieren strukturierte Daten, sorgen für saubere URLs und optimale Meta-Tags. Auf Wunsch bieten wir auch fortlaufende SEO-Betreuung an.',
      },
    ],
  },
}

const FAQ = () => {
  const { actualTheme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const isDark = actualTheme === 'dark'
  const bgColor = isDark ? 'bg-oxford-blue' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500'
  const borderColor = isDark ? 'border-white/10' : 'border-gray-200'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-gray-900/5'
  const cardBgActive = isDark ? 'bg-white/8' : 'bg-gray-100/80'
  const cardBg = isDark ? 'bg-white/5' : 'bg-gray-50'

  return (
    <section id="faq" className={`py-24 sm:py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-4 sm:left-8 lg:left-16 ${backgroundTextColor} font-black text-[100px] sm:text-[150px] lg:text-[220px] xl:text-[280px] leading-none select-none`}>
          FAQ
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-aquamarine/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-10 sm:mb-16">
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColor}`}>FAQ</h2>
          <p className={`mt-3 text-base sm:text-lg ${textMuted} max-w-xl`}>Antworten auf die häufigsten Fragen.</p>
        </motion.div>

        <div className="space-y-3">
          {content.faq.items.map((faq, index) => {
            const isOpen = openIndex === index
            const isHovered = hoveredIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative border rounded-2xl overflow-hidden transition-all duration-300 ${borderColor} ${
                  isOpen
                    ? isDark
                      ? 'border-aquamarine/30 shadow-lg shadow-aquamarine/5'
                      : 'border-aquamarine/40 shadow-lg shadow-aquamarine/10'
                    : isHovered
                      ? isDark ? 'border-white/20' : 'border-gray-300'
                      : ''
                }`}
              >
                {isOpen && (
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-aquamarine to-tropical-indigo"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full px-5 sm:px-6 lg:px-8 py-4 sm:py-5 flex items-center justify-between transition-colors duration-200 ${
                    isOpen ? cardBgActive : isHovered ? cardBg : ''
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-5 flex-1 min-w-0">
                    <div className={`flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 ${isOpen ? 'scale-110' : isHovered ? 'scale-105' : ''}`}>
                      <span className="text-black font-bold text-sm sm:text-base">{index + 1}</span>
                    </div>
                    <h3 className={`text-sm sm:text-base lg:text-lg font-bold text-left ${textColor}`}>
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }} className="flex-shrink-0 ml-3">
                    <HiChevronDown className={`text-lg sm:text-xl transition-colors duration-200 ${isOpen ? 'text-aquamarine' : textMuted}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`px-5 sm:px-6 lg:px-8 pb-5 sm:pb-6 pt-1 sm:pl-20 lg:pl-24 ${cardBgActive}`}>
                        <div className={`w-full h-px ${isDark ? 'bg-white/10' : 'bg-gray-200'} mb-4`} />
                        <p className={`${textMuted} text-sm sm:text-base lg:text-lg leading-relaxed`}>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 sm:p-6 lg:p-8 rounded-2xl border border-dashed border-aquamarine/30 bg-aquamarine/5"
        >
          <div>
            <p className={`font-bold text-base sm:text-lg lg:text-xl ${textColor}`}>Noch Fragen offen?</p>
            <p className={`text-sm mt-1 ${textMuted}`}>Wir antworten innerhalb von 24 Stunden.</p>
          </div>
          <motion.a
            href="/project-questionnaire"
            whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(1,255,169,0.25)' }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg"
          >
            Jetzt anfragen
            <HiArrowRight className="text-base" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(FAQ)
