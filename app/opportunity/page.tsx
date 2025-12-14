'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import {
  HiArrowRight,
  HiCheckCircle,
  HiSparkles,
  HiLightningBolt,
  HiShieldCheck,
  HiTrendingUp,
  HiUsers,
  HiClock,
  HiStar
} from 'react-icons/hi'

type FormStep = 1 | 2 | 3 | 4

interface FormData {
  // Step 1
  projectType: string
  // Step 2
  name: string
  email: string
  phone: string
  // Step 3
  company: string
  industry: string
  // Step 4
  budget: string
  timeline: string
  message: string
}

const PROJECT_TYPES = [
  { value: 'website', label: 'Neue Website', icon: '🌐', popular: true },
  { value: 'redesign', label: 'Website-Redesign', icon: '🎨' },
  { value: 'ecommerce', label: 'Online-Shop', icon: '🛒', popular: true },
  { value: 'webapp', label: 'Web-App / SaaS', icon: '⚡' },
  { value: 'marketing', label: 'Marketing & SEO', icon: '📱' },
  { value: 'other', label: 'Sonstiges', icon: '💡' }
]

const INDUSTRIES = [
  'Beauty & Wellness',
  'E-Commerce',
  'Immobilien',
  'Gesundheitswesen',
  'Gastronomie',
  'Dienstleistung',
  'Handwerk',
  'Tech & Software',
  'Sonstiges'
]

const BUDGETS = [
  '< €5.000',
  '€5.000 - €10.000',
  '€10.000 - €25.000',
  '€25.000 - €50.000',
  '> €50.000',
  'Noch unklar'
]

const TIMELINES = [
  'So schnell wie möglich',
  'Innerhalb 1 Monat',
  'Innerhalb 3 Monate',
  'Innerhalb 6 Monate',
  'Flexibel'
]

export default function OpportunityPage() {
  const [currentStep, setCurrentStep] = useState<FormStep>(1)
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    budget: '',
    timeline: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as FormStep)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as FormStep)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType !== ''
      case 2:
        return formData.name !== '' && formData.email !== '' && formData.phone !== ''
      case 3:
        return formData.company !== '' && formData.industry !== ''
      case 4:
        return formData.budget !== '' && formData.timeline !== ''
      default:
        return false
    }
  }

  if (isSubmitted) {
    return <SuccessPage />
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-aquamarine/5 via-tropical-indigo/5 to-aquamarine/5">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-12 lg:py-20">
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          {/* Limited Spots Banner */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue rounded-full font-bold text-sm shadow-lg animate-pulse">
              <HiLightningBolt className="w-5 h-5" />
              <span>Nur noch 3 Plätze verfügbar im Januar 2025</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h1
              className="text-[clamp(2rem,6vw,4rem)] font-bold mb-6 leading-[1.1]"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              <span className="block text-gray-900 mb-2">Bereit für mehr</span>
              <span className="block bg-gradient-to-r from-aquamarine to-tropical-indigo bg-clip-text text-transparent">
                Online-Erfolg?
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Sichere dir jetzt dein <strong>kostenloses Strategiegespräch</strong> im Wert von €500
              und erfahre, wie wir dein Business digitalisieren.
            </p>

            {/* Trust Signals */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { icon: HiCheckCircle, text: '50+ erfolgreiche Projekte' },
                { icon: HiStar, text: '4.9★ Kundenbewertung' },
                { icon: HiUsers, text: '30+ zufriedene Kunden' }
              ].map((item, index) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-2 text-gray-700"
                >
                  <item.icon className="w-6 h-6 text-aquamarine" />
                  <span className="font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl border-2 border-aquamarine/20 overflow-hidden"
          >
            {/* Progress Bar */}
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-b border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-gray-600">Schritt {currentStep} von 4</span>
                <span className="text-sm font-bold text-aquamarine">{Math.round((currentStep / 4) * 100)}% Abgeschlossen</span>
              </div>
              <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: `${(currentStep / 4) * 100}%` }}
                  transition={{ duration: 0.5 }}
                  className="h-full bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full"
                />
              </div>
            </div>

            {/* Form Steps */}
            <form onSubmit={handleSubmit} className="p-8 lg:p-12">
              <AnimatePresence mode="wait">
                {currentStep === 1 && (
                  <Step1
                    selectedType={formData.projectType}
                    onSelect={(value) => updateFormData('projectType', value)}
                  />
                )}
                {currentStep === 2 && (
                  <Step2
                    formData={formData}
                    updateFormData={updateFormData}
                  />
                )}
                {currentStep === 3 && (
                  <Step3
                    formData={formData}
                    updateFormData={updateFormData}
                  />
                )}
                {currentStep === 4 && (
                  <Step4
                    formData={formData}
                    updateFormData={updateFormData}
                  />
                )}
              </AnimatePresence>

              {/* Navigation Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12">
                {currentStep > 1 && (
                  <motion.button
                    type="button"
                    onClick={handleBack}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-4 bg-gray-100 text-gray-700 font-bold rounded-full text-lg hover:bg-gray-200 transition-all duration-300"
                  >
                    Zurück
                  </motion.button>
                )}

                {currentStep < 4 ? (
                  <motion.button
                    type="button"
                    onClick={handleNext}
                    disabled={!canProceed()}
                    whileHover={canProceed() ? { scale: 1.02, boxShadow: "0 0 30px rgba(1, 255, 169, 0.3)" } : {}}
                    whileTap={canProceed() ? { scale: 0.98 } : {}}
                    className={`flex-1 px-8 py-4 font-bold rounded-full text-lg shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-3 ${
                      canProceed()
                        ? 'bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    style={{ fontWeight: 800 }}
                  >
                    Weiter
                    <HiArrowRight className="w-6 h-6" />
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    disabled={!canProceed() || isSubmitting}
                    whileHover={canProceed() ? { scale: 1.02, boxShadow: "0 0 30px rgba(1, 255, 169, 0.3)" } : {}}
                    whileTap={canProceed() ? { scale: 0.98 } : {}}
                    className={`flex-1 px-8 py-4 font-bold rounded-full text-lg shadow-lg transition-all duration-300 inline-flex items-center justify-center gap-3 ${
                      canProceed() && !isSubmitting
                        ? 'bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue cursor-pointer'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    style={{ fontWeight: 800 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-6 h-6 border-4 border-oxford-blue/30 border-t-oxford-blue rounded-full animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        Kostenloses Gespräch sichern
                        <HiSparkles className="w-6 h-6" />
                      </>
                    )}
                  </motion.button>
                )}
              </div>

              {/* Trust Footer */}
              <div className="mt-8 pt-8 border-t border-gray-200 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <HiShieldCheck className="w-5 h-5 text-aquamarine" />
                  <span>100% kostenlos & unverbindlich</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiClock className="w-5 h-5 text-aquamarine" />
                  <span>Antwort innerhalb 24h</span>
                </div>
                <div className="flex items-center gap-2">
                  <HiLightningBolt className="w-5 h-5 text-aquamarine" />
                  <span>Schnelle Umsetzung</span>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Das sagen unsere <span className="text-aquamarine">Kunden</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                role: 'Inhaberin, Beauty Salon',
                text: '+300% mehr Kunden durch die neue Website. Absolut empfehlenswert!',
                rating: 5
              },
              {
                name: 'Michael K.',
                role: 'Geschäftsführer',
                text: 'Professionell, schnell und das Ergebnis übertrifft alle Erwartungen.',
                rating: 5
              },
              {
                name: 'Lisa T.',
                role: 'Online-Shop Betreiberin',
                text: 'Umsatz verdoppelt! Die beste Investition für mein Business.',
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <HiStar key={i} className="w-5 h-5 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Warum <span className="text-tropical-indigo">Gentle Group?</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: HiLightningBolt,
                title: 'Schnelle Umsetzung',
                description: '4-6 Wochen von Konzept bis Launch',
                color: 'from-aquamarine to-tropical-indigo'
              },
              {
                icon: HiTrendingUp,
                title: 'Messbare Ergebnisse',
                description: 'Durchschnittlich +180% mehr Anfragen',
                color: 'from-tropical-indigo to-aquamarine'
              },
              {
                icon: HiShieldCheck,
                title: '100% Zufriedenheitsgarantie',
                description: 'Wir arbeiten bis du glücklich bist',
                color: 'from-aquamarine to-tropical-indigo'
              },
              {
                icon: HiUsers,
                title: 'Persönlicher Ansprechpartner',
                description: 'Kein Callcenter, direkte Kommunikation',
                color: 'from-tropical-indigo to-aquamarine'
              },
              {
                icon: HiSparkles,
                title: 'Moderne Technologie',
                description: 'Next.js, React, .NET - Enterprise-Grade',
                color: 'from-aquamarine to-tropical-indigo'
              },
              {
                icon: HiCheckCircle,
                title: 'All-Inclusive Service',
                description: 'Design, Entwicklung, Marketing - alles aus einer Hand',
                color: 'from-tropical-indigo to-aquamarine'
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2" style={{ fontWeight: 700 }}>
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2
              className="text-3xl lg:text-4xl font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Häufige <span className="text-aquamarine">Fragen</span>
            </h2>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: 'Ist das Erstgespräch wirklich kostenlos?',
                a: 'Ja, absolut! Das 30-minütige Strategiegespräch ist 100% kostenlos und unverbindlich. Wir analysieren deine Situation und zeigen dir konkrete Möglichkeiten.'
              },
              {
                q: 'Wie schnell kann ich starten?',
                a: 'Nach dem Erstgespräch können wir innerhalb von 1-2 Wochen mit der Umsetzung beginnen. Bei dringenden Projekten auch schneller.'
              },
              {
                q: 'Was kostet ein Projekt?',
                a: 'Die Kosten variieren je nach Umfang. Einfache Websites starten bei €3.500, komplexere Lösungen bei €10.000+. Im Erstgespräch erhältst du ein individuelles Angebot.'
              },
              {
                q: 'Bietet ihr auch Wartung an?',
                a: 'Ja! Wir bieten Wartungsverträge ab €149/Monat mit Updates, Support, Backups und Performance-Optimierung.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3" style={{ fontWeight: 700 }}>
                  {faq.q}
                </h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-aquamarine/10 via-tropical-indigo/10 to-aquamarine/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue rounded-full font-bold text-sm shadow-lg mb-8 animate-pulse">
              <HiClock className="w-5 h-5" />
              <span>Nur noch 3 Plätze verfügbar!</span>
            </div>

            <h2
              className="text-3xl lg:text-5xl font-bold mb-6"
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              Verpasse nicht deine Chance!
            </h2>

            <p className="text-xl text-gray-600 mb-8">
              Sichere dir jetzt dein kostenloses Strategiegespräch im Wert von €500
            </p>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(1, 255, 169, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-xl shadow-xl transition-all duration-300 inline-flex items-center gap-3"
              style={{ fontWeight: 800 }}
            >
              Jetzt Platz sichern
              <HiArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

// Step Components
function Step1({ selectedType, onSelect }: { selectedType: string; onSelect: (value: string) => void }) {
  return (
    <motion.div
      key="step1"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontWeight: 800 }}>
        Was planst du?
      </h2>
      <p className="text-gray-600 text-lg mb-8">
        Wähle die Option, die am besten zu deinem Projekt passt.
      </p>

      <div className="grid md:grid-cols-2 gap-4">
        {PROJECT_TYPES.map((type) => (
          <motion.button
            key={type.value}
            type="button"
            onClick={() => onSelect(type.value)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
              selectedType === type.value
                ? 'border-aquamarine bg-aquamarine/5 shadow-lg'
                : 'border-gray-200 bg-white hover:border-aquamarine/50'
            }`}
          >
            {type.popular && (
              <span className="absolute -top-3 -right-3 px-3 py-1 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue text-xs font-bold rounded-full shadow-lg">
                Beliebt
              </span>
            )}
            <div className="flex items-center gap-4">
              <span className="text-4xl">{type.icon}</span>
              <span className="text-lg font-bold text-gray-900">{type.label}</span>
            </div>
            {selectedType === type.value && (
              <HiCheckCircle className="absolute top-6 right-6 w-6 h-6 text-aquamarine" />
            )}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

function Step2({ formData, updateFormData }: { formData: FormData; updateFormData: (field: keyof FormData, value: string) => void }) {
  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontWeight: 800 }}>
        Wie können wir dich erreichen?
      </h2>
      <p className="text-gray-600 text-lg mb-8">
        Damit wir dich für dein kostenloses Strategiegespräch kontaktieren können.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
            Vollständiger Name *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateFormData('name', e.target.value)}
            placeholder="Max Mustermann"
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-aquamarine focus:outline-none text-lg transition-all duration-300"
            required
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
            E-Mail Adresse *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateFormData('email', e.target.value)}
            placeholder="max@beispiel.de"
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-aquamarine focus:outline-none text-lg transition-all duration-300"
            required
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">
            Telefonnummer *
          </label>
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => updateFormData('phone', e.target.value)}
            placeholder="+49 123 456789"
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-aquamarine focus:outline-none text-lg transition-all duration-300"
            required
          />
        </div>
      </div>
    </motion.div>
  )
}

function Step3({ formData, updateFormData }: { formData: FormData; updateFormData: (field: keyof FormData, value: string) => void }) {
  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontWeight: 800 }}>
        Erzähle uns von deinem Business
      </h2>
      <p className="text-gray-600 text-lg mb-8">
        So können wir uns optimal auf unser Gespräch vorbereiten.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
            Firmenname *
          </label>
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => updateFormData('company', e.target.value)}
            placeholder="Meine Firma GmbH"
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-aquamarine focus:outline-none text-lg transition-all duration-300"
            required
          />
        </div>

        <div>
          <label htmlFor="industry" className="block text-sm font-bold text-gray-700 mb-2">
            Branche *
          </label>
          <select
            id="industry"
            value={formData.industry}
            onChange={(e) => updateFormData('industry', e.target.value)}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-aquamarine focus:outline-none text-lg transition-all duration-300 bg-white"
            required
          >
            <option value="">Bitte wählen...</option>
            {INDUSTRIES.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </div>
      </div>
    </motion.div>
  )
}

function Step4({ formData, updateFormData }: { formData: FormData; updateFormData: (field: keyof FormData, value: string) => void }) {
  return (
    <motion.div
      key="step4"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 mb-4" style={{ fontWeight: 800 }}>
        Fast geschafft!
      </h2>
      <p className="text-gray-600 text-lg mb-8">
        Letzte Details zu deinem Projekt.
      </p>

      <div className="space-y-6">
        <div>
          <label htmlFor="budget" className="block text-sm font-bold text-gray-700 mb-2">
            Budget *
          </label>
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => updateFormData('budget', e.target.value)}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-aquamarine focus:outline-none text-lg transition-all duration-300 bg-white"
            required
          >
            <option value="">Bitte wählen...</option>
            {BUDGETS.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-sm font-bold text-gray-700 mb-2">
            Zeitrahmen *
          </label>
          <select
            id="timeline"
            value={formData.timeline}
            onChange={(e) => updateFormData('timeline', e.target.value)}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-aquamarine focus:outline-none text-lg transition-all duration-300 bg-white"
            required
          >
            <option value="">Bitte wählen...</option>
            {TIMELINES.map((timeline) => (
              <option key={timeline} value={timeline}>
                {timeline}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
            Weitere Details (optional)
          </label>
          <textarea
            id="message"
            value={formData.message}
            onChange={(e) => updateFormData('message', e.target.value)}
            placeholder="Erzähle uns mehr über dein Projekt..."
            rows={4}
            className="w-full px-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-aquamarine focus:outline-none text-lg transition-all duration-300 resize-none"
          />
        </div>
      </div>
    </motion.div>
  )
}

// Success Page
function SuccessPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-aquamarine/10 via-tropical-indigo/10 to-aquamarine/10 flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl bg-white rounded-3xl shadow-2xl p-12 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-aquamarine to-tropical-indigo flex items-center justify-center shadow-2xl"
        >
          <HiCheckCircle className="w-16 h-16 text-white" />
        </motion.div>

        <h1
          className="text-4xl font-bold text-gray-900 mb-6"
          style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
        >
          Vielen Dank!
        </h1>

        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Deine Anfrage wurde erfolgreich übermittelt.<br />
          Wir melden uns innerhalb der <strong>nächsten 24 Stunden</strong> bei dir!
        </p>

        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200 mb-8">
          <p className="text-gray-700 text-lg mb-4">
            <strong>Was passiert als Nächstes?</strong>
          </p>
          <ul className="text-left space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <HiCheckCircle className="w-6 h-6 text-aquamarine flex-shrink-0 mt-0.5" />
              <span>Wir analysieren deine Anfrage und bereiten uns auf unser Gespräch vor</span>
            </li>
            <li className="flex items-start gap-3">
              <HiCheckCircle className="w-6 h-6 text-aquamarine flex-shrink-0 mt-0.5" />
              <span>Du erhältst eine Bestätigung per E-Mail</span>
            </li>
            <li className="flex items-start gap-3">
              <HiCheckCircle className="w-6 h-6 text-aquamarine flex-shrink-0 mt-0.5" />
              <span>Wir kontaktieren dich für einen Termin zum kostenlosen Strategiegespräch</span>
            </li>
          </ul>
        </div>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-lg shadow-lg"
            style={{ fontWeight: 700 }}
          >
            Zurück zur Startseite
          </motion.button>
        </Link>
      </motion.div>
    </main>
  )
}
