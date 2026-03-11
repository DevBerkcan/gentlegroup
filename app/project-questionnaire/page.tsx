'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'
import { HiArrowRight, HiUser, HiCheckCircle, HiRefresh, HiLockClosed, HiShieldCheck } from 'react-icons/hi'
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
  const [isAtBottom, setIsAtBottom] = useState(true)

  const chatContainerRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement | null>(null)
  const typingTimeoutRef = useRef<number | null>(null)
  const stepTimeoutRef = useRef<number | null>(null)
  const askTimeoutRef = useRef<number | null>(null)

  const questions: Question[] = useMemo(
    () => [
      {
        question:
          'Hallo! Ich bin Fella, der AI-Assistent von Gentle Group.\n\nBevor wir starten: Wie kann ich Sie persönlich ansprechen?',
        key: 'name',
        type: 'text',
        placeholder: 'Ihr vollständiger Name...',
      },
      {
        question:
          'Danke.\n\nUnter welcher E-Mail-Adresse können wir Sie für unser Angebot und Updates erreichen?',
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
          'Neue Website',
          'Web-Anwendung (Web-App)',
          'Mobile App (iOS/Android)',
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
          '200 - 1000 € (Kleines Projekt)',
          '1.000 - 5.000 € (Standardprojekt)',
          '5.000 - 10.000 € (Umfangreiches Projekt)',
          'Abonnement mit monatlichen Kosten (ab 20 €/Monat)',
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
    const html = document.documentElement
    const body = document.body
    const prevHtmlOverflow = html.style.overflow
    const prevBodyOverflow = body.style.overflow
    const prevBodyOverscroll = body.style.overscrollBehavior
    const prevBodyHeight = body.style.height

    html.style.overflow = 'hidden'
    body.style.overflow = 'hidden'
    body.style.overscrollBehavior = 'none'
    body.style.height = '100dvh'

    return () => {
      html.style.overflow = prevHtmlOverflow
      body.style.overflow = prevBodyOverflow
      body.style.overscrollBehavior = prevBodyOverscroll
      body.style.height = prevBodyHeight
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
    const el = chatContainerRef.current
    if (!el) return

    const onScroll = () => {
      const distance = el.scrollHeight - el.scrollTop - el.clientHeight
      setIsAtBottom(distance < 24)
    }

    onScroll()
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!chatContainerRef.current) return
    if (!isAtBottom) return
    chatContainerRef.current.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' })
  }, [chatMessages, isTyping, isAtBottom])

  useEffect(() => {
    if (!hasUserInteracted) return
    const t = window.setTimeout(() => {
      inputRef.current?.focus()
    }, 50)
    return () => window.clearTimeout(t)
  }, [step, hasUserInteracted])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setErrorText(null)
      }
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const addMessage = (type: 'fella' | 'user' | 'system', content: string) => {
    const newMessage: ChatMessage = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      content,
      timestamp: new Date(),
    }
    setChatMessages((prev) => [...prev, newMessage])
  }

  const isValidEmail = (value: string) => {
    const v = value.trim()
    if (!v) return false
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)
  }

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
      addMessage('system', validation.message)
      return
    }

    const answer = currentInput.trim()
    addMessage('user', answer)

    setFormData((prev) => ({
      ...prev,
      [currentQuestion.key]: answer,
    }))

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
      addMessage(
        'fella',
        'Vielen Dank.\n\nIch erstelle jetzt eine kurze Zusammenfassung.\n\nSie erhalten innerhalb von 24 Stunden eine Rückmeldung.'
      )
      setIsTyping(false)
      setIsCompleted(true)
      window.setTimeout(() => submitForm(), 1100)
    }, 550)
  }

  const handlePrev = () => {
    if (isTyping || isCompleted) return
    setHasUserInteracted(true)
    setErrorText(null)
    if (step <= 0) return

    setChatMessages((prev) => {
      if (prev.length < 2) return prev
      return prev.slice(0, -2)
    })

    const prevStep = step - 1
    setStep(prevStep)
    const key = questions[prevStep].key
    setCurrentInput(formData[key] || '')
  }

  const resetConversation = () => {
    if (typingTimeoutRef.current) window.clearTimeout(typingTimeoutRef.current)
    if (stepTimeoutRef.current) window.clearTimeout(stepTimeoutRef.current)
    if (askTimeoutRef.current) window.clearTimeout(askTimeoutRef.current)

    setErrorText(null)
    setIsTyping(false)
    setIsCompleted(false)
    setStep(0)
    setCurrentInput('')
    setChatMessages([])
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

    window.setTimeout(() => {
      setIsTyping(true)
      window.setTimeout(() => {
        addMessage('fella', questions[0].question)
        setIsTyping(false)
      }, 650)
    }, 250)
  }

  const submitForm = async () => {
    const subject = encodeURIComponent(`Projektanfrage von ${formData.name} - ${formData.company}`)
    const body = encodeURIComponent(
      `
Projektanfrage erhalten (via Fella Chat):

Kontakt:
- Name: ${formData.name}
- E-Mail: ${formData.email}
- Unternehmen: ${formData.company}

Projekt:
- Projekttyp: ${formData.projectType}
- Hauptziel: ${formData.projectGoal}
- Zielgruppe: ${formData.targetAudience}
- Features: ${formData.features}

Rahmen:
- Zeitplan: ${formData.timeline}
- Budget: ${formData.budget}
- Quelle: ${formData.reference}

Diese Anfrage wurde über den Fella Chat erstellt.
      `.trim()
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

  const inputHint = useMemo(() => {
    if (currentQuestion.type === 'select') return 'Auswahl'
    if (currentQuestion.type === 'email') return 'E-Mail'
    if (currentQuestion.type === 'textarea') return 'Text'
    return 'Text'
  }, [currentQuestion.type])

  return (
    <div className="h-[100dvh] w-full bg-black text-ghost-white overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 right-10 w-[520px] h-[520px] md:w-[700px] md:h-[700px] bg-aquamarine/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-10 w-[560px] h-[560px] md:w-[800px] md:h-[800px] bg-tropical-indigo/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[420px] h-[420px] md:w-[560px] md:h-[560px] bg-purple-400/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 h-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-12 py-4 sm:py-8 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="shrink-0 mb-4 sm:mb-6 pb-4 sm:pb-6 border-b border-ghost-white/10"
        >
          <div className="flex items-center gap-4 sm:gap-6">
            <motion.div whileHover={{ scale: 1.05, rotate: 5 }} className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden">
              <ModelViewer
                src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                alt="Fella AI Assistant 3D Avatar"
                className="w-full h-full"
              />
            </motion.div>

            <div className="flex-1 min-w-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ghost-white mb-1 truncate">Fella AI Assistant</h1>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                <p className="text-ghost-white/60 text-base sm:text-lg truncate">Gentle Group • Projekt-Fragebogen</p>
                <div className="hidden sm:flex items-center gap-2 text-xs text-ghost-white/50">
                  <span className="inline-flex items-center gap-1">
                    <HiLockClosed className="text-base" />
                    Keine Speicherung
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <HiShieldCheck className="text-base" />
                    Nur E-Mail-Entwurf
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={resetConversation}
                className="px-3 sm:px-4 py-2 border-2 border-ghost-white/20 text-ghost-white/90 rounded-full hover:border-ghost-white/40 hover:bg-ghost-white/5 transition-all duration-300 flex items-center gap-2"
                type="button"
              >
                <HiRefresh className="text-lg" />
                <span className="hidden sm:inline">Neu starten</span>
              </motion.button>
            </div>
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-ghost-white/80 font-medium">
                Frage {Math.min(step + 1, questions.length)} von {questions.length}
              </span>
              <span className="text-sm text-ghost-white/60">{Math.round(progressPercentage)}%</span>
            </div>
            <div className="w-full h-2 bg-ghost-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${Math.min(100, Math.max(0, progressPercentage))}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-aquamarine to-tropical-indigo"
              />
            </div>
          </div>
        </motion.div>

        <div className="flex-1 min-h-0 flex flex-col">
          <div className="relative flex-1 min-h-0">
            <div
              ref={chatContainerRef}
              className="h-full overflow-y-auto space-y-6 sm:space-y-8 pr-2 scrollbar-thin scrollbar-thumb-ghost-white/20 scrollbar-track-transparent"
            >
              <AnimatePresence mode="popLayout">
                {chatMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -18, scale: 0.98 }}
                    transition={{ duration: 0.25, delay: index * 0.03 }}
                    className={`flex gap-4 sm:gap-6 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: 5 }}
                      className={`flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center overflow-hidden ${
                        message.type === 'fella' ? '' : message.type === 'system' ? 'bg-ghost-white/10' : 'bg-ghost-white/20'
                      }`}
                    >
                      {message.type === 'fella' ? (
                        <ModelViewer
                          src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                          alt="Fella AI Assistant 3D Avatar"
                          className="w-full h-full"
                        />
                      ) : message.type === 'system' ? (
                        <HiShieldCheck className="text-ghost-white/80 text-xl sm:text-2xl" />
                      ) : (
                        <HiUser className="text-ghost-white text-xl sm:text-2xl" />
                      )}
                    </motion.div>

                    <div className={`max-w-[78%] sm:max-w-[75%] ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        className={`inline-block px-5 sm:px-6 py-4 rounded-3xl ${
                          message.type === 'fella'
                            ? 'bg-gradient-to-br from-ghost-white/10 to-ghost-white/5 border-2 border-ghost-white/20 rounded-bl-none shadow-xl'
                            : message.type === 'system'
                              ? 'bg-gradient-to-br from-ghost-white/8 to-ghost-white/5 border-2 border-ghost-white/15 rounded-3xl shadow-xl'
                              : 'bg-gradient-to-br from-aquamarine/20 to-tropical-indigo/20 border-2 border-aquamarine/30 rounded-br-none shadow-xl shadow-aquamarine/10'
                        } backdrop-blur-md`}
                      >
                        <p className="text-base sm:text-lg leading-relaxed whitespace-pre-line">{message.content}</p>
                      </motion.div>
                      <div className={`text-xs sm:text-sm text-ghost-white/50 mt-2 px-2 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                        {formatTime(message.timestamp)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {isTyping && (
                <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -18 }} className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center overflow-hidden">
                    <ModelViewer
                      src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                      alt="Fella AI Assistant 3D Avatar"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="bg-gradient-to-br from-ghost-white/10 to-ghost-white/5 border-2 border-ghost-white/20 rounded-3xl rounded-bl-none px-6 py-4 backdrop-blur-md shadow-xl">
                    <div className="flex gap-2">
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0 }}
                        className="w-3 h-3 bg-ghost-white rounded-full"
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.2 }}
                        className="w-3 h-3 bg-ghost-white rounded-full"
                      />
                      <motion.div
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 1.2, repeat: Infinity, delay: 0.4 }}
                        className="w-3 h-3 bg-ghost-white rounded-full"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div className="h-4" />
            </div>

            {!isAtBottom && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    chatContainerRef.current?.scrollTo({ top: chatContainerRef.current.scrollHeight, behavior: 'smooth' })
                  }}
                  className="pointer-events-auto px-4 py-2 rounded-full bg-ghost-white/10 border border-ghost-white/20 backdrop-blur-md text-ghost-white/90 text-sm hover:bg-ghost-white/15 transition"
                  type="button"
                >
                  Zum neuesten Beitrag
                </motion.button>
              </div>
            )}
          </div>

          {!isCompleted && (
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="shrink-0 pt-4 sm:pt-6">
              <div className="space-y-3 sm:space-y-4">
                {errorText && (
                  <div className="px-4 py-3 rounded-2xl border border-red-400/30 bg-red-400/10 text-ghost-white/90 text-sm">
                    {errorText}
                  </div>
                )}

                <div>
                  {currentQuestion.type === 'text' || currentQuestion.type === 'email' ? (
                    <motion.input
                      ref={(el) => {
                        inputRef.current = el
                      }}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      type={currentQuestion.type}
                      placeholder={currentQuestion.placeholder}
                      value={currentInput}
                      onChange={(e) => {
                        setHasUserInteracted(true)
                        setCurrentInput(e.target.value)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') handleNext()
                      }}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 bg-black/50 border-2 border-aquamarine/30 rounded-3xl text-ghost-white text-base sm:text-lg placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300"
                      autoFocus
                      aria-label="Antwort"
                      inputMode={currentQuestion.type === 'email' ? 'email' : 'text'}
                    />
                  ) : currentQuestion.type === 'textarea' ? (
                    <motion.textarea
                      ref={(el) => {
                        inputRef.current = el
                      }}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      placeholder={currentQuestion.placeholder}
                      value={currentInput}
                      onChange={(e) => {
                        setHasUserInteracted(true)
                        setCurrentInput(e.target.value)
                      }}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 bg-black/50 border-2 border-aquamarine/30 rounded-3xl text-ghost-white text-base sm:text-lg placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300 h-28 sm:h-32 resize-none"
                      autoFocus
                      aria-label="Antwort"
                    />
                  ) : (
                    <motion.select
                      ref={(el) => {
                        inputRef.current = el
                      }}
                      initial={{ opacity: 0, scale: 0.99 }}
                      animate={{ opacity: 1, scale: 1 }}
                      value={currentInput}
                      onChange={(e) => {
                        setHasUserInteracted(true)
                        setCurrentInput(e.target.value)
                      }}
                      className="w-full px-5 sm:px-6 py-4 sm:py-5 bg-black/50 border-2 border-aquamarine/30 rounded-3xl text-ghost-white text-base sm:text-lg focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300 cursor-pointer"
                      autoFocus
                      aria-label="Antwort"
                    >
                      <option value="" className="bg-black">
                        Bitte auswählen...
                      </option>
                      {(isSelectQuestion(currentQuestion) ? currentQuestion.options : []).map((option: string) => (
                        <option key={option} value={option} className="bg-black">
                          {option}
                        </option>
                      ))}
                    </motion.select>
                  )}
                </div>



                <div className="flex gap-3 sm:gap-4 justify-between">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handlePrev}
                    disabled={step === 0 || isTyping}
                    className="px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-ghost-white/30 text-ghost-white font-semibold text-base sm:text-lg rounded-full hover:border-ghost-white/60 hover:bg-ghost-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                    type="button"
                  >
                    Zurück
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(0, 255, 255, 0.3)' }}
                    whileTap={{ scale: 0.97 }}
                    onClick={handleNext}
                    disabled={!currentInput.trim() || isTyping}
                    className="px-7 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold text-base sm:text-lg rounded-full hover:shadow-2xl hover:shadow-aquamarine/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-3 shadow-xl"
                    type="button"
                  >
                    {step === questions.length - 1 ? (
                      <>
                        Abschließen
                        <HiCheckCircle className="text-xl sm:text-2xl" />
                      </>
                    ) : (
                      <>
                        Weiter
                        <HiArrowRight className="text-xl sm:text-2xl" />
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}

          {isCompleted && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="shrink-0 text-center py-6 sm:py-8">
              <motion.div
                animate={{ scale: [1, 1.15, 1], rotate: [0, 360] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 overflow-hidden"
              >
                <ModelViewer
                  src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                  alt="Fella AI Assistant 3D Avatar"
                  className="w-full h-full"
                />
              </motion.div>
              <h2 className="text-2xl sm:text-3xl font-bold text-ghost-white mb-2 sm:mb-3">Vielen Dank!</h2>
              <p className="text-base sm:text-lg text-ghost-white/70">Ihr E-Mail-Entwurf wurde geöffnet.</p>
              <div className="mt-4 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={resetConversation}
                  className="px-6 py-3 rounded-full border-2 border-ghost-white/25 text-ghost-white/90 hover:border-ghost-white/45 hover:bg-ghost-white/5 transition-all duration-300"
                  type="button"
                >
                  Neue Anfrage starten
                </motion.button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default AIQuestionnairePage