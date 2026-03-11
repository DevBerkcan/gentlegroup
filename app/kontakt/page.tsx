// app/(site)/kontakt/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { HiArrowLeft, HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import BookingModal from '@/components/BookingModal'
import { useTheme } from '@/contexts/ThemeContext'

export default function KontaktPage() {
  const { actualTheme } = useTheme()
  const isDark = actualTheme === 'dark'

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', message: '' })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const pageBg = isDark ? 'bg-black' : 'bg-gradient-to-br from-oxford-blue via-oxford-blue to-oxford-blue/95'
  const textColor = 'text-ghost-white'
  const textMuted = 'text-ghost-white/70'
  const inputBg = 'bg-white/10 border-ghost-white/20 text-ghost-white placeholder-ghost-white/40 focus:border-aquamarine'
  const cardBg = 'bg-white/5 border-ghost-white/10'

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    if (!formData.name.trim()) newErrors.name = 'Name ist erforderlich'
    if (!formData.email.trim()) newErrors.email = 'E-Mail ist erforderlich'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    if (!formData.message.trim()) newErrors.message = 'Nachricht ist erforderlich'
    else if (formData.message.trim().length < 10) newErrors.message = 'Nachricht muss mindestens 10 Zeichen lang sein'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return
    setIsSubmitting(true)
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`)
      const body = encodeURIComponent(`Name: ${formData.name}\nE-Mail: ${formData.email}\nTelefon: ${formData.phone || 'Nicht angegeben'}\nUnternehmen: ${formData.company || 'Nicht angegeben'}\n\nNachricht:\n${formData.message}`)
      window.location.href = `mailto:info@gentle-group.com?subject=${subject}&body=${body}`
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  return (
    <>
      <main className={`min-h-screen ${pageBg} transition-colors duration-300`}>
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-aquamarine/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tropical-indigo/10 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-24 pb-36">
          <motion.div initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className="mb-10">
            <Link href="/">
              <motion.span whileHover={{ x: -4 }} className={`inline-flex items-center gap-2 ${textMuted} hover:text-aquamarine transition-colors duration-300 text-sm sm:text-base cursor-pointer`}>
                <HiArrowLeft className="w-4 h-4" />
                Zurück zur Startseite
              </motion.span>
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
            <h1 className="text-5xl lg:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-aquamarine via-tropical-indigo to-aquamarine bg-clip-text text-transparent">Kontakt</span>
            </h1>
            <p className={`text-xl lg:text-2xl ${textMuted} max-w-3xl mx-auto`}>Lassen Sie uns über Ihr Projekt sprechen. Wir freuen uns auf Ihre Nachricht!</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className={`backdrop-blur-xl rounded-3xl p-8 lg:p-12 border shadow-2xl ${cardBg}`}>
              <h2 className={`text-3xl font-bold ${textColor} mb-8`}>Nachricht senden</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { id: 'name', label: 'Name *', type: 'text', placeholder: 'Ihr Name' },
                  { id: 'email', label: 'E-Mail *', type: 'email', placeholder: 'ihre.email@beispiel.de' },
                  { id: 'phone', label: 'Telefon', type: 'tel', placeholder: '+49 123 456789' },
                  { id: 'company', label: 'Unternehmen', type: 'text', placeholder: 'Ihr Unternehmen' },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label htmlFor={id} className={`block text-sm font-medium ${textMuted} mb-2`}>{label}</label>
                    <input
                      type={type} id={id} name={id}
                      value={formData[id as keyof typeof formData]}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all duration-300 ${inputBg} ${errors[id] ? 'border-red-500' : ''}`}
                      placeholder={placeholder}
                    />
                    {errors[id] && <p className="mt-2 text-sm text-red-400 flex items-center gap-1"><HiExclamationCircle className="w-4 h-4" />{errors[id]}</p>}
                  </div>
                ))}

                <div>
                  <label htmlFor="message" className={`block text-sm font-medium ${textMuted} mb-2`}>Nachricht *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={6} className={`w-full px-4 py-3 border rounded-xl focus:outline-none transition-all duration-300 resize-none ${inputBg} ${errors.message ? 'border-red-500' : ''}`} placeholder="Beschreiben Sie Ihr Projekt..." />
                  {errors.message && <p className="mt-2 text-sm text-red-400 flex items-center gap-1"><HiExclamationCircle className="w-4 h-4" />{errors.message}</p>}
                </div>

                <motion.button type="submit" disabled={isSubmitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-xl shadow-lg hover:shadow-aquamarine/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed">
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400">
                    <HiCheckCircle className="w-5 h-5" /><span>Vielen Dank! Ihre Nachricht wurde gesendet.</span>
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400">
                    <HiExclamationCircle className="w-5 h-5" /><span>Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="space-y-8">
              <div className={`backdrop-blur-xl rounded-3xl p-8 border shadow-2xl ${cardBg}`}>
                <h2 className={`text-3xl font-bold ${textColor} mb-6`}>Kontaktinformationen</h2>
                <div className="space-y-6">
                  {[
                    { href: 'mailto:info@gentle-group.com', icon: HiMail, label: 'E-Mail', value: 'info@gentle-group.com' },
                    { href: 'tel:+49XXXXXXXXX', icon: HiPhone, label: 'Telefon', value: '+49 XXX XXXXXXX' },
                  ].map(({ href, icon: Icon, label, value }) => (
                    <motion.a key={label} href={href} whileHover={{ x: 5 }} className={`flex items-start gap-4 ${textMuted} hover:text-aquamarine transition-colors duration-300`}>
                      <div className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-xl flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-oxford-blue" />
                      </div>
                      <div><p className={`font-semibold ${textColor} mb-1`}>{label}</p><p>{value}</p></div>
                    </motion.a>
                  ))}
                  <div className={`flex items-start gap-4 ${textMuted}`}>
                    <div className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="w-6 h-6 text-oxford-blue" />
                    </div>
                    <div><p className={`font-semibold ${textColor} mb-1`}>Adresse</p><p>Oberbilker Allee 319</p><p>40227 Düsseldorf</p></div>
                  </div>
                </div>
              </div>

              <div className={`backdrop-blur-xl rounded-3xl p-8 border shadow-2xl ${cardBg}`}>
                <h3 className={`text-2xl font-bold ${textColor} mb-4`}>Öffnungszeiten</h3>
                <div className={`space-y-3 ${textMuted}`}>
                  <div className="flex justify-between"><span>Montag – Freitag</span><span className="font-semibold text-aquamarine">09:00 – 18:00</span></div>
                  <div className="flex justify-between"><span>Samstag – Sonntag</span><span className="font-semibold text-ghost-white/40">Geschlossen</span></div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-aquamarine/10 to-tropical-indigo/10 backdrop-blur-xl rounded-3xl p-8 border border-aquamarine/20 shadow-2xl">
                <h3 className={`text-2xl font-bold ${textColor} mb-4`}>Lieber persönlich?</h3>
                <p className={`${textMuted} mb-6`}>Vereinbaren Sie direkt einen Termin für ein unverbindliches Erstgespräch.</p>
                <motion.button onClick={() => setIsBookingModalOpen(true)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-xl shadow-lg hover:shadow-aquamarine/50 transition-all duration-300">
                  Termin buchen
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  )
}
