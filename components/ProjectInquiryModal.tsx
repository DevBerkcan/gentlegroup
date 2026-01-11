'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { HiX } from 'react-icons/hi'

interface FormData {
  name: string
  email: string
  company: string
  projectType: string
  projectGoal: string
  targetAudience: string
  features: string
  timeline: string
  budget: string
  reference: string
}

interface Question {
  label: string
  key: string
  type: 'text' | 'email' | 'textarea' | 'select'
  placeholder?: string
  description?: string
  options?: string[]
}

interface ProjectInquiryModalProps {
  onClose: () => void
}

const ProjectInquiryModal = ({ onClose }: ProjectInquiryModalProps) => {
  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    projectType: '',
    projectGoal: '',
    targetAudience: '',
    features: '',
    timeline: '',
    budget: '',
    reference: '',
  })
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const closeModal = () => {
    setIsVisible(false)
    setTimeout(() => {
      onClose()
      setStep(0)
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        projectGoal: '',
        targetAudience: '',
        features: '',
        timeline: '',
        budget: '',
        reference: '',
      })
    }, 300)
  }

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1)
    } else {
      submitForm()
    }
  }

  const handlePrev = () => {
    if (step > 0) setStep(step - 1)
  }

  const submitForm = async () => {
    // Handle form submission
    // Create email content
    const subject = encodeURIComponent(`Neue Projektanfrage von ${formData.name} - ${formData.company}`)
    const body = encodeURIComponent(`
Neue Projektanfrage erhalten:

Kontaktinformationen:
- Name: ${formData.name}
- E-Mail: ${formData.email}
- Unternehmen: ${formData.company}

Projektdetails:
- Projekttyp: ${formData.projectType}
- Hauptziel: ${formData.projectGoal}
- Zielgruppe: ${formData.targetAudience}
- Gewünschte Features: ${formData.features}

Rahmenbedingungen:
- Zeitplan: ${formData.timeline}
- Budget: ${formData.budget}
- Wie haben Sie von uns erfahren: ${formData.reference}

Wir werden uns innerhalb von 24 Stunden bei Ihnen melden.

Mit freundlichen Grüßen
Gentle Group Team
    `.trim())

    // Open email client
    window.open(`mailto:info@gentle-group.com?subject=${subject}&body=${body}`, '_blank')
    
    closeModal()
  }

  const questions = [
    {
      label: 'Wie können wir Sie persönlich erreichen?',
      key: 'name',
      type: 'text',
      placeholder: 'Ihr vollständiger Name...',
      description: 'Ihr Name hilft uns, Sie persönlich ansprechen zu können'
    },
    {
      label: 'Unter welcher E-Mail-Adresse sind Sie erreichbar?',
      key: 'email',
      type: 'email',
      placeholder: 'ihre@geschaeftsemail.com',
      description: 'Wir senden Ihnen hier unsere Angebote und Updates zu'
    },
    {
      label: 'Für welches Unternehmen planen Sie das Projekt?',
      key: 'company',
      type: 'text',
      placeholder: 'Name Ihres Unternehmens oder Organisation...',
      description: 'So verstehen wir besser den Kontext Ihres Vorhabens'
    },
    {
      label: 'Welche Art von Lösung suchen Sie?',
      key: 'projectType',
      type: 'select',
      options: [
        'Neue Website/Relauunch',
        'Web-Anwendung (Web-App)',
        'Mobile App (iOS/Android)',
        'E-Commerce Shop',
        'KI-Integration/ Automatisierung',
        'Cloud-Migration/ Optimierung',
        'UI/UX Redesign',
        'Performance-Optimierung',
        'API-Entwicklung',
        'Andere Lösung'
      ],
      description: 'Wählen Sie die passende Kategorie für Ihr Vorhaben'
    },
    {
      label: 'Was ist das Hauptziel Ihres Projekts?',
      key: 'projectGoal',
      type: 'textarea',
      placeholder: 'Beschreiben Sie, welches Problem Sie lösen oder welches Ziel Sie erreichen möchten...',
      description: 'Beispiele: Umsatz steigern, Prozesse automatisieren, Kunden besser erreichen, etc.'
    },
    {
      label: 'Wer ist Ihre Zielgruppe?',
      key: 'targetAudience',
      type: 'select',
      options: [
        'Endkunden (B2C)',
        'Unternehmen (B2B)',
        'Interne Mitarbeiter',
        'Spezifische Branche',
        'Internationales Publikum',
        'Lokale Kunden',
        'Gemischte Zielgruppen'
      ],
      description: 'Diese Information hilft uns bei der Konzeption'
    },
    {
      label: 'Welche spezifischen Funktionen sind Ihnen wichtig?',
      key: 'features',
      type: 'textarea',
      placeholder: 'Nennen Sie die wichtigsten Funktionen, die Ihre Lösung haben sollte...',
      description: 'Beispiele: Benutzerkonten, Zahlungsabwicklung, Dashboard, Buchungssystem, etc.'
    },
    {
      label: 'Bis wann soll das Projekt realisiert sein?',
      key: 'timeline',
      type: 'select',
      options: [
        'Sehr dringend (innerhalb 2-4 Wochen)',
        'In 1-2 Monaten',
        'In 3-6 Monaten',
        'Flexibel, Qualität steht im Vordergrund',
        'Mehrere Phasen über längeren Zeitraum',
        'Noch unklar, benötige Beratung'
      ],
      description: 'Hilft uns bei der Planung und Ressourcenallokation'
    },
    {
      label: 'Welches Budget ist für das Projekt vorgesehen?',
      key: 'budget',
      type: 'select',
      options: [
        'Bis 5.000 € (Kleinprojekt)',
        '5.000 - 15.000 € (Standardprojekt)',
        '15.000 - 50.000 € (Umfangreiches Projekt)',
        '50.000 - 100.000 € (Enterprise Lösung)',
        '100.000 €+ (Komplexe Implementierung)',
        'Benötige Kostenvoranschlag',
        'Budget noch in Planung'
      ],
      description: 'Eine grobe Orientierung hilft uns, passende Lösungen vorzuschlagen'
    },
    {
      label: 'Wie haben Sie von uns erfahren?',
      key: 'reference',
      type: 'select',
      options: [
        'Google Suche',
        'Empfehlung/Kontakt',
        'Social Media (LinkedIn, etc.)',
        'Portfolio/Referenzen',
        'Konferenz/Event',
        'Wiederholungskunde',
        'Andere Quelle'
      ],
      description: 'Optional - hilft uns unsere Reichweite zu verstehen'
    }
  ]

  const currentQuestion = questions[step]

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={closeModal}
    >
      <AnimatePresence mode="wait">
        {isVisible && (
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="bg-black border border-aquamarine/30 rounded-3xl p-8 md:p-10 max-w-4xl w-full relative overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={closeModal}
              aria-label="Schließen"
              title="Schließen"
              className="absolute top-8 right-8 text-ghost-white/60 hover:text-aquamarine transition-colors z-10"
            >
              <HiX className="text-2xl" aria-hidden="true" />
            </motion.button>

            {/* Progress Bar */}
            <div className="mb-8 flex gap-2">
              {questions.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
                    index <= step ? 'bg-aquamarine' : 'bg-ghost-white/10'
                  }`}
                />
              ))}
            </div>

            {/* Question */}
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-ghost-white mb-4 leading-tight">
                {currentQuestion.label}
              </h2>
              {currentQuestion.description && (
                <p className="text-ghost-white/60 text-base md:text-lg mb-6 leading-relaxed">
                  {currentQuestion.description}
                </p>
              )}
            </div>

            {/* Input Field */}
            <div className="mb-8">
              {currentQuestion.type === 'text' || currentQuestion.type === 'email' ? (
                <motion.input
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  type={currentQuestion.type}
                  placeholder={currentQuestion.placeholder}
                  value={formData[currentQuestion.key as keyof FormData]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [currentQuestion.key]: e.target.value,
                    })
                  }
                  className="w-full px-6 py-4 bg-black/50 border border-aquamarine/30 rounded-2xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300 text-lg"
                />
              ) : currentQuestion.type === 'textarea' ? (
                <motion.textarea
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  placeholder={currentQuestion.placeholder}
                  value={formData[currentQuestion.key as keyof FormData]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [currentQuestion.key]: e.target.value,
                    })
                  }
                  className="w-full px-6 py-4 bg-black/50 border border-aquamarine/30 rounded-2xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300 text-lg h-32 resize-none"
                />
              ) : (
                <motion.select
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  value={formData[currentQuestion.key as keyof FormData]}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      [currentQuestion.key]: e.target.value,
                    })
                  }
                  className="w-full px-6 py-4 bg-black/50 border border-aquamarine/30 rounded-2xl text-ghost-white focus:outline-none focus:border-aquamarine transition-all duration-300 text-lg"
                >
                  <option value="">Bitte auswählen...</option>
                  {currentQuestion.type === 'select' && currentQuestion.options?.map((option: string) => (
                    <option key={option} value={option} className="bg-black text-lg py-2">
                      {option}
                    </option>
                  ))}
                </motion.select>
              )}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4 justify-between pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePrev}
                disabled={step === 0}
                className="px-8 py-3 border border-ghost-white/30 text-ghost-white font-bold rounded-full hover:border-ghost-white/60 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-base"
              >
                Zurück
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={!formData[currentQuestion.key as keyof FormData]}
                className="px-8 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full hover:shadow-lg hover:shadow-aquamarine/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 text-base"
              >
                {step === questions.length - 1 ? 'Anfrage senden' : 'Weiter'}
              </motion.button>
            </div>

            {/* Step Counter */}
            <div className="text-center mt-6 text-ghost-white/50 text-sm">
              Schritt {step + 1} von {questions.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default ProjectInquiryModal