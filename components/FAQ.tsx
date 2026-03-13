'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiArrowRight, HiPlus } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

const content = {
  faq: {
    items: [
      {
        question: 'Welche Technologien nutzt ihr für Webentwicklung?',
        answer: 'Wir setzen auf moderne Technologien wie React, Next.js, TypeScript für Frontend-Entwicklung. Im Backend arbeiten wir mit .NET Core, Node.js und nutzen Azure Cloud für Hosting und Services. Für Datenbanken verwenden wir SQL Server, PostgreSQL oder MongoDB je nach Projektanforderung.',
        number: '01',
      },
      {
        question: 'Wie lange dauert die Entwicklung einer Website?',
        answer: 'Die Entwicklungszeit hängt vom Projektumfang ab. Eine einfache Corporate Website kann in 2-4 Wochen fertig sein, während komplexe Web-Apps oder E-Commerce-Plattformen 2-4 Monate benötigen können. Wir erstellen für jedes Projekt einen detaillierten Zeitplan.',
        number: '02',
      },
      {
        question: 'Bietet ihr auch Wartung und Support an?',
        answer: 'Ja, wir bieten umfassende Wartungs- und Support-Pakete an. Diese beinhalten regelmäßige Updates, Security-Patches, Performance-Optimierung, Backup-Management und technischen Support. Sie können zwischen verschiedenen Service-Leveln wählen.',
        number: '03',
      },
      {
        question: 'Was kostet eine professionelle Website?',
        answer: 'Die Kosten variieren je nach Anforderungen. Eine einfache Landing Page startet ab 500€, während umfangreiche Web-Anwendungen mit Custom Features zwischen 1.000€ - 5.000€+ liegen können. Wir erstellen gerne ein individuelles Angebot nach einem kostenlosen Erstgespräch.',
        number: '04',
      },
      {
        question: 'Können bestehende Systeme integriert werden?',
        answer: 'Absolut! Wir haben umfangreiche Erfahrung mit der Integration von CRM-Systemen, ERP-Software, Payment-Gateways, Microsoft 365, SharePoint und vielen anderen Drittanbieter-Services. API-Integration und Datenmigrationen gehören zu unseren Kernkompetenzen.',
        number: '05',
      },
      {
        question: 'Wie läuft die Zusammenarbeit ab?',
        answer: 'Nach einem Erstgespräch erstellen wir ein Konzept und Angebot. Bei Projektstart arbeiten wir in agilen Sprints mit regelmäßigen Updates und Feedback-Schleifen. Sie haben jederzeit Einblick in den Entwicklungsstand über unser Projektmanagement-Tool und einen dedizierten Ansprechpartner.',
        number: '06',
      },
      {
        question: 'Sind eure Websites mobilfreundlich?',
        answer: 'Ja, alle unsere Websites sind vollständig responsive und für alle Geräte optimiert. Wir verfolgen einen Mobile-First-Ansatz, da heute über 60% der Nutzer mobil auf Websites zugreifen. Performance und Usability auf Smartphones sind uns extrem wichtig.',
        number: '07',
      },
      {
        question: 'Was ist mit SEO und Performance?',
        answer: 'SEO und Performance sind von Anfang an in unseren Entwicklungsprozess integriert. Wir optimieren Ladezeiten, nutzen moderne Techniken wie Code Splitting, implementieren strukturierte Daten, sorgen für saubere URLs und optimale Meta-Tags. Auf Wunsch bieten wir auch fortlaufende SEO-Betreuung an.',
        number: '08',
      },
    ],
  },
}

type FAQItemType = typeof content.faq.items[0]

interface FAQItemProps {
  faq: FAQItemType
  index: number
  globalIndex: number
  isOpen: boolean
  isDark: boolean
  textColor: string
  textMuted: string
  dividerColor: string
  onToggle: (globalIndex: number) => void
}

const FAQItem = React.memo(({
  faq,
  index,
  globalIndex,
  isOpen,
  isDark,
  textColor,
  textMuted,
  dividerColor,
  onToggle,
}: FAQItemProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      className={`border-b ${dividerColor} last:border-b-0`}
    >
      <button
        onClick={() => onToggle(globalIndex)}
        className="w-full py-5 sm:py-6 flex items-start gap-4 sm:gap-5 text-left group"
      >
        <span className={`shrink-0 font-mono text-xs sm:text-sm font-bold mt-0.5 transition-colors duration-300 ${isOpen ? 'text-aquamarine' : textMuted}`}>
          {faq.number}
        </span>

        <span className={`flex-1 text-sm sm:text-base lg:text-lg font-semibold leading-snug transition-colors duration-300 ${isOpen ? 'text-aquamarine' : textColor} group-hover:text-aquamarine`}>
          {faq.question}
        </span>

        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className={`shrink-0 mt-0.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${
            isOpen
              ? 'bg-aquamarine border-aquamarine text-black'
              : isDark
                ? 'border-white/20 text-white/60 group-hover:border-aquamarine/50 group-hover:text-aquamarine'
                : 'border-gray-300 text-gray-500 group-hover:border-aquamarine/50 group-hover:text-aquamarine'
          }`}
        >
          <HiPlus className="text-sm sm:text-base" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="pl-9 sm:pl-11 pb-5 sm:pb-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="w-px bg-gradient-to-b from-aquamarine to-tropical-indigo shrink-0 rounded-full" />
                <p className={`${textMuted} text-sm sm:text-base leading-relaxed`}>
                  {faq.answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
})

FAQItem.displayName = 'FAQItem'

const FAQ = () => {
  const { actualTheme } = useTheme()
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const isDark = actualTheme === 'dark'
  const bgColor = isDark ? 'bg-oxford-blue' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-500'
  const backgroundTextColor = isDark ? 'text-white/5' : 'text-gray-900/5'
  const dividerColor = isDark ? 'border-white/10' : 'border-gray-200'

  const handleToggle = (globalIndex: number) => {
    setOpenIndex((prev) => (prev === globalIndex ? null : globalIndex))
  }

  const leftItems = content.faq.items.filter((_, i) => i % 2 === 0)
  const rightItems = content.faq.items.filter((_, i) => i % 2 !== 0)

  const sharedProps = { isDark, textColor, textMuted, dividerColor, onToggle: handleToggle }

  return (
    <section id="faq" className={`py-24 sm:py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-4 sm:left-8 lg:left-16 ${backgroundTextColor} font-black text-[100px] sm:text-[150px] lg:text-[220px] xl:text-[280px] leading-none select-none`}>
          FAQ
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-aquamarine/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-tropical-indigo/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColor}`}>FAQ</h2>
            <p className={`mt-3 text-base sm:text-lg ${textMuted} max-w-xl`}>
              Antworten auf die häufigsten Fragen.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 xl:gap-20">
          <div className={`border-t ${dividerColor}`}>
            {leftItems.map((faq, i) => (
              <FAQItem
                key={faq.number}
                faq={faq}
                index={i}
                globalIndex={i * 2}
                isOpen={openIndex === i * 2}
                {...sharedProps}
              />
            ))}
          </div>

          <div className={`border-t ${dividerColor}`}>
            {rightItems.map((faq, i) => (
              <FAQItem
                key={faq.number}
                faq={faq}
                index={i}
                globalIndex={i * 2 + 1}
                isOpen={openIndex === i * 2 + 1}
                {...sharedProps}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-14 sm:mt-20 relative overflow-hidden rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border ${isDark ? 'border-white/10 bg-white/5' : 'border-gray-200 bg-gray-50'}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 pointer-events-none" />
          <div className="absolute top-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-aquamarine/10 rounded-full blur-[80px] pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 sm:gap-8">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-2xl flex items-center justify-center shadow-lg shrink-0">
                <span className="text-black text-xl sm:text-2xl font-black">?</span>
              </div>
              <div>
                <p className={`font-bold text-base sm:text-lg lg:text-xl ${textColor}`}>
                  Noch Fragen offen?
                </p>
                <p className={`text-xs sm:text-sm mt-0.5 ${textMuted}`}>
                  Wir antworten innerhalb von 24 Stunden.
                </p>
              </div>
            </div>

            <motion.a
              href="/project-questionnaire"
              target="_blank"
              whileHover={{ scale: 1.04, boxShadow: '0 0 30px rgba(1,255,169,0.25)' }}
              whileTap={{ scale: 0.97 }}
              className="shrink-0 flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg"
            >
              Jetzt anfragen
              <HiArrowRight className="text-base" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default React.memo(FAQ)
