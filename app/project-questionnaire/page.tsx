'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { HiArrowRight, HiUser, HiCheckCircle, HiShieldCheck } from 'react-icons/hi'
import ModelViewer from '@/components/ModelViewer'

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

interface ChatMessage {
  id: string
  type: 'fella' | 'user' | 'system'
  content: string
  timestamp: Date
}

type QuestionText = { question: string; key: keyof FormData; type: 'text' | 'email'; placeholder: string }
type QuestionTextarea = { question: string; key: keyof FormData; type: 'textarea'; placeholder: string }
type QuestionSelect = { question: string; key: keyof FormData; type: 'select'; options: string[] }
type Question = QuestionText | QuestionTextarea | QuestionSelect

const isSelectQuestion = (q: Question): q is QuestionSelect => q.type === 'select'
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n))

const AIQuestionnairePage = () => {
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
  const [isTyping, setIsTyping] = useState(false)
  const [currentInput, setCurrentInput] = useState('')
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [isCompleted, setIsCompleted] = useState(false)
  const [errorText, setErrorText] = useState<string | null>(null)
  const [hasUserInteracted, setHasUserInteracted] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>(null)
  const typingTimeoutRef = useRef<number | null>(null)
  const stepTimeoutRef = useRef<number | null>(null)
  const askTimeoutRef = useRef<number | null>(null)

  const questions: Question[] = useMemo(
    () => [
      {
        question: 'Hallo! Ich bin Fella, der AI-Assistent von Gentle Group.\n\nBevor wir starten: Wie kann ich Sie persönlich ansprechen?',
        key: 'name',
        type: 'text',
        placeholder: 'Ihr vollständiger Name...',
      },
      {
        question: 'Danke.\n\nUnter welcher E-Mail-Adresse können wir Sie für unser Angebot und Updates erreichen?',
        key: 'email',
        type: 'email',
        placeholder: 'ihre@geschaeftsemail.com',
      },
      {
        question: 'Für welches Unternehmen oder Projekt planen Sie diese Lösung?',
        key: 'company',
        type: 'text',
        placeholder: 'Name Ihres Unternehmens oder Organisation...',
      },
      {
        question: 'Welche Art von digitaler Lösung benötigen Sie?',
        key: 'projectType',
        type: 'select',
        options: [
          'Neue Website/Relaunch',
          'Web-Anwendung (Web-App)',
          'Mobile App (iOS/Android)',
          'E-Commerce Shop',
          'KI-Integration/Automatisierung',
          'Cloud-Migration/Optimierung',
          'UI/UX Redesign',
          'Performance-Optimierung',
          'API-Entwicklung',
          'Andere Lösung',
        ],
      },
      {
        question: 'Was ist das Hauptziel, das Sie mit diesem Projekt erreichen möchten?',
        key: 'projectGoal',
        type: 'textarea',
        placeholder: 'Kurz beschreiben. Ein paar Sätze reichen.',
      },
      {
        question: 'Bis wann soll das Projekt realisiert sein?',
        key: 'timeline',
        type: 'select',
        options: [
          'Sehr dringend (innerhalb 2-4 Wochen)',
          'In 1-2 Monaten',
          'In 3-6 Monaten',
          'Flexibel, Qualität steht im Vordergrund',
          'Mehrere Phasen über längeren Zeitraum',
          'Noch unklar, benötige Beratung',
        ],
      },
      {
        question: 'Welches Budget ist für das Projekt vorgesehen?',
        key: 'budget',
        type: 'select',
        options: [
          '200 - 1000 € (Kleinprojekt)',
          '1.000 - 5.000 € (Standardprojekt)',
          '5.000 - 10.000 € (Umfangreiches Projekt)',
          'Abbonement mit monatlicher Abrechnung (ab 20 €/Monat)',
          'Benötige Kostenvoranschlag',
          'Budget noch in Planung',
        ],
      },
      {
        question: 'Wie sind Sie auf Gentle Group aufmerksam geworden?',
        key: 'reference',
        type: 'select',
        options: [
          'Google Suche',
          'Empfehlung/Kontakt',
          'Social Media (LinkedIn, etc.)',
          'Portfolio/Referenzen',
          'Konferenz/Event',
          'Wiederholungskunde',
          'Andere Quelle',
        ],
      },
    ],
    []
  )

  const currentQuestion = questions[clamp(step, 0, questions.length - 1)]
  const progressPercentage = ((clamp(step, 0, questions.length - 1) + 1) / questions.length) * 100

  useEffect(() => {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    return () => {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
    }
  }, [])

  useEffect(() => {
    if (chatMessages.length === 0) {
      setIsTyping(true)
      typingTimeoutRef.current = window.setTimeout(() => {
        addMessage('fella', questions[0].question)
        setIsTyping(false)
      }, 650)
      return () => {
        if (typingTimeoutRef.current) window.clearTimeout(typingTimeoutRef.current)
      }
    }
  }, [chatMessages.length, questions])

  useEffect(() => {
    const t = window.setTimeout(() => {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
    }, 100)
    return () => window.clearTimeout(t)
  }, [chatMessages, isTyping])

  useEffect(() => {
    if (!hasUserInteracted) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 60)
    return () => window.clearTimeout(t)
  }, [step, hasUserInteracted])

  const addMessage = (type: 'fella' | 'user' | 'system', content: string) => {
    setChatMessages((prev) => [
      ...prev,
      { id: `${Date.now()}-${Math.random()}`, type, content, timestamp: new Date() },
    ])
  }

  const isValidEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim())

  const validateCurrent = () => {
    const v = currentInput.trim()
    if (!v) return { ok: false, message: 'Bitte geben Sie eine Antwort ein.' }
    if (currentQuestion.key === 'email' && !isValidEmail(v)) {
      return { ok: false, message: 'Bitte geben Sie eine gültige E-Mail ein.' }
    }
    return { ok: true, message: '' }
  }

  const askNextQuestion = (nextStep: number) => {
    setIsTyping(true)
    askTimeoutRef.current = window.setTimeout(() => {
      addMessage('fella', questions[nextStep].question)
      setIsTyping(false)
    }, 650)
  }

  const handleNext = () => {
    if (isTyping || isCompleted) return
    setHasUserInteracted(true)
    setErrorText(null)

    const validation = validateCurrent()
    if (!validation.ok) {
      setErrorText(validation.message)
      return
    }

    const answer = currentInput.trim()
    addMessage('user', answer)
    setFormData((prev) => ({ ...prev, [currentQuestion.key]: answer }))

    if (step < questions.length - 1) {
      const nextStep = step + 1
      setCurrentInput('')
      stepTimeoutRef.current = window.setTimeout(() => {
        setStep(nextStep)
        askNextQuestion(nextStep)
      }, 260)
      return
    }

    setCurrentInput('')
    setIsTyping(true)
    typingTimeoutRef.current = window.setTimeout(() => {
      addMessage('fella', 'Vielen Dank.\n\nIch öffne jetzt Ihren E-Mail-Entwurf.')
      setIsTyping(false)
      setIsCompleted(true)
      window.setTimeout(() => submitForm(), 900)
    }, 450)
  }

  const handlePrev = () => {
    if (isTyping || isCompleted || step <= 0) return
    setHasUserInteracted(true)
    setErrorText(null)
    setChatMessages((prev) => (prev.length < 2 ? prev : prev.slice(0, -2)))
    const prevStep = step - 1
    setStep(prevStep)
    setCurrentInput(formData[questions[prevStep].key] || '')
  }

  const submitForm = async () => {
    const subject = encodeURIComponent(`Projektanfrage von ${formData.name} - ${formData.company}`)
    const body = encodeURIComponent(
      `Projektanfrage erhalten (via Fella Chat):\n\nKontakt:\n- Name: ${formData.name}\n- E-Mail: ${formData.email}\n- Unternehmen: ${formData.company}\n\nProjekt:\n- Projekttyp: ${formData.projectType}\n- Hauptziel: ${formData.projectGoal}\n\nRahmen:\n- Zeitplan: ${formData.timeline}\n- Budget: ${formData.budget}\n- Quelle: ${formData.reference}\n\nDiese Anfrage wurde über den Fella Chat erstellt.`
    )
    try {
      window.open(`mailto:info@gentle-group.com?subject=${subject}&body=${body}`, '_blank')
    } catch {
      addMessage('system', 'Ich konnte Ihr E-Mail-Programm nicht öffnen.\n\nBitte kopieren Sie Ihre Antworten manuell.')
    }
  }

  const formatTime = (date: Date) => {
    try {
      return date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
    } catch {
      return ''
    }
  }

  return (
    <div
      className="bg-black text-ghost-white"
      style={{ height: '100dvh', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-[400px] h-[400px] md:w-[700px] md:h-[700px] bg-aquamarine/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-10 w-[420px] h-[420px] md:w-[800px] md:h-[800px] bg-tropical-indigo/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] md:w-[560px] md:h-[560px] bg-purple-400/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.03]" />
      </div>

      <div
        className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12"
        style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', paddingTop: '1.5rem', paddingBottom: '1.5rem' }}
      >
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="shrink-0 mb-4 pb-4 border-b border-ghost-white/10"
        >
          <div className="flex items-center gap-3 sm:gap-5">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="shrink-0 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-2xl overflow-hidden"
              style={{ width: 'clamp(52px, 8vw, 80px)', height: 'clamp(52px, 8vw, 80px)' }}
            >
              <ModelViewer
                src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                alt="Fella AI Assistant 3D Avatar"
                className="w-full h-full"
              />
            </motion.div>

            <div className="flex-1 min-w-0">
              <h1 className="font-bold text-ghost-white truncate leading-tight" style={{ fontSize: 'clamp(1.2rem, 3.5vw, 2.25rem)' }}>
                Fella AI Assistant
              </h1>
              <p className="text-ghost-white/60 truncate" style={{ fontSize: 'clamp(0.8rem, 2vw, 1.125rem)' }}>
                Gentle Group • Projekt-Fragebogen
              </p>
            </div>

            <div className="shrink-0 text-right hidden sm:block">
              <p className="text-xs text-ghost-white/50 mb-1">
                Frage {Math.min(step + 1, questions.length)} / {questions.length}
              </p>
              <p className="text-xs text-ghost-white/40">{Math.round(progressPercentage)}%</p>
            </div>
          </div>

          <div className="mt-3 space-y-1.5">
            <div className="flex justify-between items-center sm:hidden">
              <span className="text-xs text-ghost-white/70">
                Frage {Math.min(step + 1, questions.length)} von {questions.length}
              </span>
              <span className="text-xs text-ghost-white/50">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full h-1.5 bg-ghost-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, Math.max(0, progressPercentage))}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-aquamarine to-tropical-indigo"
              />
            </div>
          </div>
        </motion.div>

        <div
          className="flex-1 min-h-0 overflow-y-auto pr-1 sm:pr-2 scrollbar-thin scrollbar-thumb-ghost-white/20 scrollbar-track-transparent"
          style={{ overscrollBehavior: 'contain' }}
        >
          <div className="space-y-5 sm:space-y-7 py-2">
            <AnimatePresence mode="popLayout">
              {chatMessages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 16, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.97 }}
                  transition={{ duration: 0.28 }}
                  className={`flex gap-3 sm:gap-5 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    className={`shrink-0 rounded-xl flex items-center justify-center overflow-hidden ${
                      message.type === 'fella' ? '' : message.type === 'system' ? 'bg-ghost-white/10' : 'bg-ghost-white/20'
                    }`}
                    style={{ width: 'clamp(40px, 6vw, 56px)', height: 'clamp(40px, 6vw, 56px)' }}
                  >
                    {message.type === 'fella' ? (
                      <ModelViewer
                        src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                        alt="Fella AI Assistant 3D Avatar"
                        className="w-full h-full"
                      />
                    ) : message.type === 'system' ? (
                      <HiShieldCheck className="text-ghost-white/80 text-lg sm:text-2xl" />
                    ) : (
                      <HiUser className="text-ghost-white text-lg sm:text-2xl" />
                    )}
                  </motion.div>

                  <div
                    className={`${message.type === 'user' ? 'text-right items-end' : 'text-left items-start'} flex flex-col`}
                    style={{ maxWidth: 'min(76%, 520px)' }}
                  >
                    <div
                      className={`inline-block px-4 sm:px-6 py-3 sm:py-4 rounded-3xl ${
                        message.type === 'fella'
                          ? 'bg-gradient-to-br from-ghost-white/10 to-ghost-white/5 border-2 border-ghost-white/20 rounded-bl-none shadow-xl'
                          : message.type === 'system'
                            ? 'bg-ghost-white/8 border border-ghost-white/15 rounded-3xl shadow-lg'
                            : 'bg-gradient-to-br from-aquamarine/20 to-tropical-indigo/20 border-2 border-aquamarine/30 rounded-br-none shadow-xl shadow-aquamarine/10'
                      } backdrop-blur-md`}
                    >
                      <p className="leading-relaxed whitespace-pre-line" style={{ fontSize: 'clamp(0.85rem, 2.2vw, 1.125rem)' }}>
                        {message.content}
                      </p>
                    </div>
                    <div className="text-ghost-white/40 mt-1.5 px-1" style={{ fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)' }}>
                      {formatTime(message.timestamp)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {isTyping && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex gap-3 sm:gap-5"
              >
                <div
                  className="shrink-0 rounded-xl flex items-center justify-center overflow-hidden"
                  style={{ width: 'clamp(40px, 6vw, 56px)', height: 'clamp(40px, 6vw, 56px)' }}
                >
                  <ModelViewer
                    src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                    alt="Fella AI Assistant 3D Avatar"
                    className="w-full h-full"
                  />
                </div>
                <div className="bg-gradient-to-br from-ghost-white/10 to-ghost-white/5 border-2 border-ghost-white/20 rounded-3xl rounded-bl-none px-5 py-4 backdrop-blur-md shadow-xl">
                  <div className="flex gap-2 items-center">
                    {[0, 0.2, 0.4].map((delay) => (
                      <motion.div
                        key={delay}
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay }}
                        className="w-2.5 h-2.5 bg-ghost-white rounded-full"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {isCompleted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center py-6 sm:py-10 gap-4"
              >
                <motion.div
                  animate={{ scale: [1, 1.12, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  className="rounded-full overflow-hidden"
                  style={{ width: 'clamp(72px, 12vw, 96px)', height: 'clamp(72px, 12vw, 96px)' }}
                >
                  <ModelViewer
                    src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                    alt="Fella AI Assistant 3D Avatar"
                    className="w-full h-full"
                  />
                </motion.div>
                <h2 className="font-bold text-ghost-white text-center" style={{ fontSize: 'clamp(1.3rem, 3vw, 2rem)' }}>
                  Vielen Dank!
                </h2>
                <p className="text-ghost-white/70 text-center" style={{ fontSize: 'clamp(0.85rem, 2vw, 1.125rem)' }}>
                  Ihr E-Mail-Entwurf wurde geöffnet.
                </p>
              </motion.div>
            )}

            <div ref={bottomRef} className="h-1" />
          </div>
        </div>

        {!isCompleted && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="shrink-0 pt-3 sm:pt-5 border-t border-ghost-white/10 mt-2"
          >
            <div className="space-y-3">
              {errorText && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="px-4 py-2.5 rounded-2xl border border-red-400/30 bg-red-400/10 text-ghost-white/90"
                  style={{ fontSize: 'clamp(0.75rem, 1.8vw, 0.9rem)' }}
                >
                  {errorText}
                </motion.div>
              )}

              <div>
                {currentQuestion.type === 'text' || currentQuestion.type === 'email' ? (
                  <motion.input
                    ref={(el) => { inputRef.current = el }}
                    key={`input-${step}`}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    type={currentQuestion.type}
                    placeholder={currentQuestion.placeholder}
                    value={currentInput}
                    onChange={(e) => { setHasUserInteracted(true); setCurrentInput(e.target.value) }}
                    onKeyDown={(e) => { if (e.key === 'Enter') handleNext() }}
                    className="w-full bg-black/50 border-2 border-aquamarine/30 rounded-2xl sm:rounded-3xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300"
                    style={{ padding: 'clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(0.85rem, 2.2vw, 1.125rem)' }}
                    autoFocus
                    aria-label="Antwort"
                    inputMode={currentQuestion.type === 'email' ? 'email' : 'text'}
                  />
                ) : currentQuestion.type === 'textarea' ? (
                  <motion.textarea
                    ref={(el) => { inputRef.current = el }}
                    key={`textarea-${step}`}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    placeholder={currentQuestion.placeholder}
                    value={currentInput}
                    onChange={(e) => { setHasUserInteracted(true); setCurrentInput(e.target.value) }}
                    className="w-full bg-black/50 border-2 border-aquamarine/30 rounded-2xl sm:rounded-3xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300 resize-none"
                    style={{ padding: 'clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(0.85rem, 2.2vw, 1.125rem)', height: 'clamp(90px, 15vh, 128px)' }}
                    autoFocus
                    aria-label="Antwort"
                  />
                ) : (
                  <motion.select
                    ref={(el) => { inputRef.current = el }}
                    key={`select-${step}`}
                    initial={{ opacity: 0, scale: 0.99 }}
                    animate={{ opacity: 1, scale: 1 }}
                    value={currentInput}
                    onChange={(e) => { setHasUserInteracted(true); setCurrentInput(e.target.value) }}
                    className="w-full bg-black/50 border-2 border-aquamarine/30 rounded-2xl sm:rounded-3xl text-ghost-white focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300 cursor-pointer"
                    style={{ padding: 'clamp(0.75rem, 2vw, 1.25rem) clamp(1rem, 3vw, 1.5rem)', fontSize: 'clamp(0.85rem, 2.2vw, 1.125rem)' }}
                    autoFocus
                    aria-label="Antwort"
                  >
                    <option value="" className="bg-black">Bitte auswählen...</option>
                    {(isSelectQuestion(currentQuestion) ? currentQuestion.options : []).map((option: string) => (
                      <option key={option} value={option} className="bg-black">{option}</option>
                    ))}
                  </motion.select>
                )}
              </div>

              <div className="flex gap-3 justify-between">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handlePrev}
                  disabled={step === 0 || isTyping}
                  className="border-2 border-ghost-white/30 text-ghost-white font-semibold rounded-full hover:border-ghost-white/60 hover:bg-ghost-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300"
                  style={{ padding: 'clamp(0.6rem, 1.5vw, 1rem) clamp(1rem, 3vw, 2rem)', fontSize: 'clamp(0.8rem, 2vw, 1.125rem)' }}
                  type="button"
                >
                  Zurück
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0, 255, 255, 0.3)' }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  disabled={!currentInput.trim() || isTyping}
                  className="bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full hover:shadow-2xl hover:shadow-aquamarine/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-2"
                  style={{ padding: 'clamp(0.6rem, 1.5vw, 1rem) clamp(1.2rem, 4vw, 2.5rem)', fontSize: 'clamp(0.8rem, 2vw, 1.125rem)' }}
                  type="button"
                >
                  {step === questions.length - 1 ? (
                    <>Abschließen <HiCheckCircle className="text-lg sm:text-xl" /></>
                  ) : (
                    <>Weiter <HiArrowRight className="text-lg sm:text-xl" /></>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AIQuestionnairePage