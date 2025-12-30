'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

// Text content configuration for consistency
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
    ]
  }
}

const FAQ = () => {
  const { actualTheme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  // Adaptive colors based on theme
  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const borderColor = actualTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'
  const hoverBg = actualTheme === 'dark' ? 'hover:bg-gray-800/50' : 'hover:bg-gray-50'
  const activeBg = actualTheme === 'dark' ? 'bg-gray-800/30' : 'bg-gray-50'
  const backgroundTextColor = actualTheme === 'dark' ? 'text-white/5' : 'text-gray-900/5'

  return (
    <section id="faq" className={`py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}>
      {/* Background "FAQ" Text */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-8 lg:left-16 ${backgroundTextColor} font-black text-[150px] lg:text-[220px] xl:text-[280px] leading-none select-none`}>
          FAQ
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Section Title - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-5xl lg:text-6xl font-bold ${textColor}`}>
            FAQ
          </h2>
        </motion.div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {content.faq.items.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${borderColor} border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? activeBg : ''
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full px-6 lg:px-8 py-6 flex items-center justify-between ${hoverBg} transition-colors duration-200`}
                >
                  <div className="flex items-center gap-4 lg:gap-6 flex-1">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-black font-bold text-xl lg:text-2xl">
                        {index + 1}
                      </span>
                    </div>

                    {/* Question */}
                    <h3 className={`text-lg lg:text-xl font-bold text-left ${textColor}`}>
                      {faq.question}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <HiChevronDown className={`text-2xl ${textMuted}`} />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 pt-2 lg:pl-24">
                        <p className={`${textMuted} text-base lg:text-lg leading-relaxed`}>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
