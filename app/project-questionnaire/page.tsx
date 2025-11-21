'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'
import { HiArrowRight, HiUser, HiCheckCircle } from 'react-icons/hi'
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
  type: 'fella' | 'user'
  content: string
  timestamp: Date
}

const AIQuestionnaire = () => {
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
  const chatContainerRef = useRef<HTMLDivElement>(null)

  const questions = [
    {
      question: "Hallo! Ich bin Fella, der AI-Assistent von Gentle Group. Bevor wir starten, wie kann ich Sie persönlich ansprechen?",
      key: 'name',
      type: 'text',
      placeholder: 'Ihr vollständiger Name...',
    },
    {
      question: `Schön, Sie kennenzulernen! Unter welcher E-Mail-Adresse können wir Sie für unser Angebot und Updates erreichen?`,
      key: 'email',
      type: 'email',
      placeholder: 'ihre@geschaeftsemail.com',
    },
    {
      question: "Perfekt! Für welches Unternehmen oder Projekt planen Sie diese Lösung?",
      key: 'company',
      type: 'text',
      placeholder: 'Name Ihres Unternehmens oder Organisation...',
    },
    {
      question: "Welche Art von digitaler Lösung benötigen Sie?",
      key: 'projectType',
      type: 'select',
      options: [
        'Neue Website/Relauunch',
        'Web-Anwendung (Web-App)',
        'Mobile App (iOS/Android)',
        'E-Commerce Shop',
        'KI-Integration/Automatisierung',
        'Cloud-Migration/Optimierung',
        'UI/UX Redesign',
        'Performance-Optimierung',
        'API-Entwicklung',
        'Andere Lösung'
      ],
    },
    {
      question: "Was ist das Hauptziel, das Sie mit diesem Projekt erreichen möchten?",
      key: 'projectGoal',
      type: 'textarea',
      placeholder: 'Beschreiben Sie, welches Problem Sie lösen oder welches Ziel Sie erreichen möchten...',
    },
    {
      question: "Wer soll Ihre Lösung primär nutzen?",
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
    },
    {
      question: "Welche spezifischen Funktionen sind Ihnen besonders wichtig?",
      key: 'features',
      type: 'textarea',
      placeholder: 'Nennen Sie die wichtigsten Funktionen, die Ihre Lösung haben sollte...',
    },
    {
      question: "Bis wann soll das Projekt realisiert sein?",
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
    },
    {
      question: "Welches Budget ist für das Projekt vorgesehen?",
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
    },
    {
      question: "Wie sind Sie auf Gentle Group aufmerksam geworden?",
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
    }
  ]

  const currentQuestion = questions[step]

  useEffect(() => {
    if (chatMessages.length === 0) {
      setIsTyping(true)
      const timeout = setTimeout(() => {
        addMessage('fella', questions[0].question)
        setIsTyping(false)
      }, 800)

      return () => clearTimeout(timeout)
    }
  }, [])

  useEffect(() => {
    // Scroll to bottom when new messages are added
    if (chatContainerRef.current) {
      const scrollOptions: ScrollToOptions = {
        top: chatContainerRef.current.scrollHeight,
        behavior: 'smooth'
      }
      chatContainerRef.current.scrollTo(scrollOptions)
    }
  }, [chatMessages, isTyping])

  const addMessage = (type: 'fella' | 'user', content: string) => {
    const newMessage: ChatMessage = {
      id: `${Date.now()}-${Math.random()}`,
      type,
      content,
      timestamp: new Date()
    }
    setChatMessages(prev => [...prev, newMessage])
  }

  const handleNext = () => {
    if (currentInput.trim()) {
      // Add user's response to chat
      addMessage('user', currentInput)
      
      // Update form data
      setFormData(prev => ({
        ...prev,
        [currentQuestion.key]: currentInput
      }))

      if (step < questions.length - 1) {
        // Move to next question
        setCurrentInput('')
        setIsTyping(true)
        
        setTimeout(() => {
          setStep(step + 1)
          setTimeout(() => {
            addMessage('fella', questions[step + 1].question)
            setIsTyping(false)
          }, 1000)
        }, 600)
      } else {
        // Submit form
        setCurrentInput('')
        setIsTyping(true)
        
        setTimeout(() => {
          addMessage('fella', "Vielen Dank für alle Informationen! Ich erstelle jetzt eine Zusammenfassung für das Gentle Group Team. Sie erhalten innerhalb von 24 Stunden eine persönliche Rückmeldung.")
          setIsTyping(false)
          setIsCompleted(true)
          setTimeout(submitForm, 2000)
        }, 800)
      }
    }
  }

  const handlePrev = () => {
    if (step > 0) {
      // Remove last two messages (user response and fella's current question)
      setChatMessages(prev => prev.slice(0, -2))
      setStep(step - 1)
      setCurrentInput(formData[questions[step - 1].key as keyof FormData] || '')
    }
  }

  const submitForm = async () => {
    // Create email content
    const subject = encodeURIComponent(`Projektanfrage von ${formData.name} - ${formData.company}`)
    const body = encodeURIComponent(`
Projektanfrage erhalten (via Fella Chat):

👤 Kontaktinformationen:
- Name: ${formData.name}
- E-Mail: ${formData.email}
- Unternehmen: ${formData.company}

🎯 Projektdetails:
- Projekttyp: ${formData.projectType}
- Hauptziel: ${formData.projectGoal}
- Zielgruppe: ${formData.targetAudience}
- Gewünschte Features: ${formData.features}

📅 Rahmenbedingungen:
- Zeitplan: ${formData.timeline}
- Budget: ${formData.budget}
- Referenz: ${formData.reference}

💬 Diese Anfrage wurde über unseren Fella Chat erstellt.

Mit freundlichen Grüßen
Gentle Group Team
    `.trim())

    // Open email client
    window.open(`mailto:info@gentle-Group.com?subject=${subject}&body=${body}`, '_blank')
    
    // Reset after delay
    setTimeout(() => {
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
      setStep(0)
      setChatMessages([])
      setCurrentInput('')
      setIsCompleted(false)
      
      // Restart with first message
      setTimeout(() => {
        setIsTyping(true)
        setTimeout(() => {
          addMessage('fella', questions[0].question)
          setIsTyping(false)
        }, 800)
      }, 500)
    }, 5000)
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' })
  }

  const progressPercentage = ((step + 1) / questions.length) * 100

  return (
    <div className="min-h-screen bg-black text-ghost-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-10 w-[600px] h-[600px] bg-aquamarine/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 left-10 w-[700px] h-[700px] bg-tropical-indigo/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-purple-400/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:60px_60px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 py-8 min-h-screen flex flex-col">
        {/* Chat Header - Bigger and Better */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 pb-6 border-b border-ghost-white/10"
        >
          <div className="flex items-center gap-6">
            <motion.div 
              whileHover={{ scale: 1.05, rotate: 5 }}
              className="w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden"
            >
              {/* 3D Avatar for Header - No Background */}
              <ModelViewer
                src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                alt="Fella AI Assistant 3D Avatar"
                className="w-full h-full"
              />
            </motion.div>
            <div className="flex-1">
              <h1 className="text-3xl lg:text-4xl font-bold text-ghost-white mb-2">Fella AI Assistant</h1>
              <p className="text-ghost-white/60 text-lg">Gentle Group • Ihr digitaler Projekt-Berater</p>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="px-5 py-2 bg-ghost-white/10 rounded-full text-sm text-ghost-white/80 font-medium">
                Frage {step + 1} von {questions.length}
              </div>
              {/* Progress Bar */}
              <div className="w-40 h-2 bg-ghost-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-aquamarine to-tropical-indigo"
                />
              </div>
            </div>
          </div>
          
          {/* Mobile Progress */}
          <div className="md:hidden mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-sm text-ghost-white/80 font-medium">
                Frage {step + 1} von {questions.length}
              </span>
              <span className="text-sm text-ghost-white/60">
                {Math.round(progressPercentage)}%
              </span>
            </div>
            <div className="w-full h-2 bg-ghost-white/10 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progressPercentage}%` }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-aquamarine to-tropical-indigo"
              />
            </div>
          </div>
        </motion.div>

        {/* Chat Container - Bigger and Better */}
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto space-y-8 mb-8 pr-4 scrollbar-thin scrollbar-thumb-ghost-white/20 scrollbar-track-transparent"
          style={{ maxHeight: 'calc(100vh - 350px)' }}
        >
          <AnimatePresence mode="popLayout">
            {chatMessages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`flex gap-6 ${message.type === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                {/* Avatar - Bigger */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden ${
                    message.type === 'fella' 
                      ? '' 
                      : 'bg-ghost-white/20'
                  }`}
                >
                  {message.type === 'fella' ? (
                    // 3D Avatar for Fella's messages - No Background
                    <ModelViewer
                      src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                      alt="Fella AI Assistant 3D Avatar"
                      className="w-full h-full"
                    />
                  ) : (
                    <HiUser className="text-ghost-white text-2xl" />
                  )}
                </motion.div>

                {/* Message Bubble - Bigger and Better */}
                <div className={`max-w-[75%] ${
                  message.type === 'user' ? 'text-right' : 'text-left'
                }`}>
                  <motion.div 
                    whileHover={{ scale: 1.01 }}
                    className={`inline-block px-6 py-4 rounded-3xl ${
                      message.type === 'fella'
                        ? 'bg-gradient-to-br from-ghost-white/10 to-ghost-white/5 border-2 border-ghost-white/20 rounded-bl-none shadow-xl'
                        : 'bg-gradient-to-br from-aquamarine/20 to-tropical-indigo/20 border-2 border-aquamarine/30 rounded-br-none shadow-xl shadow-aquamarine/10'
                    } backdrop-blur-md`}
                  >
                    <p className="text-lg leading-relaxed">{message.content}</p>
                  </motion.div>
                  <div className={`text-sm text-ghost-white/50 mt-2 px-2 ${
                    message.type === 'user' ? 'text-right' : 'text-left'
                  }`}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing Indicator - Bigger */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center overflow-hidden">
                {/* 3D Avatar for Typing Indicator - No Background */}
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
        </div>

        {/* Input Area - Bigger and Better */}
        {!isTyping && !isCompleted && step < questions.length && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t-2 border-ghost-white/10 pt-6 backdrop-blur-sm"
          >
            <div className="space-y-5">
              {/* Input Field - Bigger */}
              <div>
                {currentQuestion.type === 'text' || currentQuestion.type === 'email' ? (
                  <motion.input
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    type={currentQuestion.type}
                    placeholder={currentQuestion.placeholder}
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                    className="w-full px-6 py-5 bg-black/50 border-2 border-aquamarine/30 rounded-3xl text-ghost-white text-lg placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300"
                    autoFocus
                  />
                ) : currentQuestion.type === 'textarea' ? (
                  <motion.textarea
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    placeholder={currentQuestion.placeholder}
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    className="w-full px-6 py-5 bg-black/50 border-2 border-aquamarine/30 rounded-3xl text-ghost-white text-lg placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300 h-32 resize-none"
                    autoFocus
                  />
                ) : (
                  <motion.select
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    value={currentInput}
                    onChange={(e) => setCurrentInput(e.target.value)}
                    className="w-full px-6 py-5 bg-black/50 border-2 border-aquamarine/30 rounded-3xl text-ghost-white text-lg focus:outline-none focus:border-aquamarine focus:shadow-lg focus:shadow-aquamarine/20 transition-all duration-300 cursor-pointer"
                    autoFocus
                  >
                    <option value="" className="bg-black text-lg py-3">Bitte auswählen...</option>
                    {(currentQuestion as any).options?.map((option: string) => (
                      <option key={option} value={option} className="bg-black text-lg py-3">
                        {option}
                      </option>
                    ))}
                  </motion.select>
                )}
              </div>

              {/* Navigation - Bigger Buttons */}
              <div className="flex gap-4 justify-between">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handlePrev}
                  disabled={step === 0}
                  className="px-8 py-4 border-2 border-ghost-white/30 text-ghost-white font-semibold text-lg rounded-full hover:border-ghost-white/60 hover:bg-ghost-white/5 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-300 shadow-lg"
                >
                  Zurück
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0, 255, 255, 0.3)" }}
                  whileTap={{ scale: 0.97 }}
                  onClick={handleNext}
                  disabled={!currentInput.trim()}
                  className="px-10 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold text-lg rounded-full hover:shadow-2xl hover:shadow-aquamarine/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center gap-3 shadow-xl"
                >
                  {step === questions.length - 1 ? (
                    <>
                      Abschließen
                      <HiCheckCircle className="text-2xl" />
                    </>
                  ) : (
                    <>
                      Weiter
                      <HiArrowRight className="text-2xl" />
                    </>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

        {/* Completion State */}
        {isCompleted && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 360]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 overflow-hidden"
            >
              {/* 3D Avatar for Completion State - No Background */}
              <ModelViewer
                src="https://modelviewer.dev/shared-assets/models/RobotExpressive.glb"
                alt="Fella AI Assistant 3D Avatar"
                className="w-full h-full"
              />
            </motion.div>
            <h2 className="text-3xl font-bold text-ghost-white mb-3">Vielen Dank!</h2>
            <p className="text-lg text-ghost-white/70">Ihre Anfrage wurde erfolgreich übermittelt.</p>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default AIQuestionnaire