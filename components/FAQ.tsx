'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { HiChevronDown } from 'react-icons/hi'

// Text content configuration for consistency
const content = {
  faq: {
    badge: "FAQ",
    title: {
      part1: "Häufig gestellte",
      part2: "Fragen"
    },
    cta: {
      title: "Noch Fragen?",
      description: "Unser Team steht Ihnen gerne für ein persönliches Gespräch zur Verfügung.",
      button: "Kontakt aufnehmen"
    },
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
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-32 lg:py-40 relative overflow-hidden bg-white">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-aquamarine/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16">
        {/* Enhanced Section Header with Scale Effect */}
        <motion.div
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
            {content.faq.badge}
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
              {content.faq.title.part1}
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
              {content.faq.title.part2}
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

        {/* Enhanced FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {content.faq.items.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                className="group"
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full text-left bg-gradient-to-br from-white to-gray-50 border border-gray-200 hover:border-aquamarine/50 rounded-3xl p-8 lg:p-10 transition-all duration-500 shadow-lg hover:shadow-2xl backdrop-blur-sm group-hover:scale-[1.02]"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-6">
                      <motion.h3 
                        className="text-2xl lg:text-3xl font-bold text-gray-900 pr-8 group-hover:text-aquamarine transition-colors duration-300"
                        style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
                      >
                        {faq.question}
                      </motion.h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3, type: "spring" }}
                        className="flex-shrink-0"
                      >
                        <div className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center shadow-lg group-hover:shadow-aquamarine/50 transition-all duration-300">
                          <HiChevronDown className="text-2xl text-black" />
                        </div>
                      </motion.div>
                    </div>

                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <motion.div 
                            initial={{ y: -10 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 }}
                            className="pt-8 text-gray-600 text-lg lg:text-xl leading-relaxed border-t border-gray-200 mt-8"
                          >
                            {faq.answer}
                          </motion.div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-24 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-block p-10 lg:p-12 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl shadow-xl hover:shadow-2xl backdrop-blur-sm"
          >
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {content.faq.cta.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-gray-600 text-xl mb-8 max-w-xl mx-auto"
            >
              {content.faq.cta.description}
            </motion.p>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 40px rgba(1, 255, 169, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-6 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-xl shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {content.faq.cta.button}
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ