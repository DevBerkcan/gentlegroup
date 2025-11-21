'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { HiMail, HiPhone, HiLocationMarker, HiCheckCircle, HiExclamationCircle } from 'react-icons/hi'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name ist erforderlich'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'E-Mail ist erforderlich'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Nachricht ist erforderlich'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Nachricht muss mindestens 10 Zeichen lang sein'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulate form submission - Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1500))

      // TODO: Replace with actual form submission logic
      const subject = encodeURIComponent(`Kontaktanfrage von ${formData.name}`)
      const body = encodeURIComponent(
        `Name: ${formData.name}\n` +
        `E-Mail: ${formData.email}\n` +
        `Telefon: ${formData.phone || 'Nicht angegeben'}\n` +
        `Unternehmen: ${formData.company || 'Nicht angegeben'}\n\n` +
        `Nachricht:\n${formData.message}`
      )

      window.location.href = `mailto:info@gentle-Group.com?subject=${subject}&body=${body}`

      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  return (
    <>
      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-oxford-blue via-oxford-blue to-oxford-blue/95">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-aquamarine/10 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-tropical-indigo/10 rounded-full blur-[100px] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 pt-32 pb-24">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-black mb-6"
            >
              <span className="bg-gradient-to-r from-aquamarine via-tropical-indigo to-aquamarine bg-clip-text text-transparent">
                Kontakt
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl lg:text-2xl text-ghost-white/80 max-w-3xl mx-auto"
            >
              Lassen Sie uns über Ihr Projekt sprechen. Wir freuen uns auf Ihre Nachricht!
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 lg:p-12 border border-ghost-white/10 shadow-2xl"
            >
              <h2 className="text-3xl font-bold text-ghost-white mb-8">Nachricht senden</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ghost-white/80 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${
                      errors.name ? 'border-red-500' : 'border-ghost-white/20'
                    } rounded-xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300`}
                    placeholder="Ihr Name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <HiExclamationCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ghost-white/80 mb-2">
                    E-Mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-white/10 border ${
                      errors.email ? 'border-red-500' : 'border-ghost-white/20'
                    } rounded-xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300`}
                    placeholder="ihre.email@beispiel.de"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <HiExclamationCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-ghost-white/80 mb-2">
                    Telefon
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-ghost-white/20 rounded-xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300"
                    placeholder="+49 123 456789"
                  />
                </div>

                {/* Company */}
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-ghost-white/80 mb-2">
                    Unternehmen
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-ghost-white/20 rounded-xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300"
                    placeholder="Ihr Unternehmen"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ghost-white/80 mb-2">
                    Nachricht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-3 bg-white/10 border ${
                      errors.message ? 'border-red-500' : 'border-ghost-white/20'
                    } rounded-xl text-ghost-white placeholder-ghost-white/40 focus:outline-none focus:border-aquamarine transition-all duration-300 resize-none`}
                    placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage..."
                  />
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-400 flex items-center gap-1">
                      <HiExclamationCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-xl shadow-lg hover:shadow-aquamarine/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
                </motion.button>

                {/* Success/Error Messages */}
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400"
                  >
                    <HiCheckCircle className="w-5 h-5" />
                    <span>Vielen Dank! Ihre Nachricht wurde gesendet.</span>
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2 p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400"
                  >
                    <HiExclamationCircle className="w-5 h-5" />
                    <span>Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="space-y-8"
            >
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-ghost-white/10 shadow-2xl">
                <h2 className="text-3xl font-bold text-ghost-white mb-6">Kontaktinformationen</h2>

                <div className="space-y-6">
                  {/* Email */}
                  <motion.a
                    href="mailto:info@gentle-Group.com"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 text-ghost-white/80 hover:text-aquamarine transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiMail className="w-6 h-6 text-oxford-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-ghost-white mb-1">E-Mail</p>
                      <p>info@gentle-Group.com</p>
                    </div>
                  </motion.a>

                  {/* Phone */}
                  <motion.a
                    href="tel:+49XXXXXXXXX"
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 text-ghost-white/80 hover:text-aquamarine transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiPhone className="w-6 h-6 text-oxford-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-ghost-white mb-1">Telefon</p>
                      <p>+49 XXX XXXXXXX</p>
                    </div>
                  </motion.a>

                  {/* Address */}
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-4 text-ghost-white/80"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-xl flex items-center justify-center flex-shrink-0">
                      <HiLocationMarker className="w-6 h-6 text-oxford-blue" />
                    </div>
                    <div>
                      <p className="font-semibold text-ghost-white mb-1">Adresse</p>
                      <p>Oberbilker Allee 319</p>
                      <p>40227 Düsseldorf</p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-ghost-white/10 shadow-2xl">
                <h3 className="text-2xl font-bold text-ghost-white mb-4">Öffnungszeiten</h3>
                <div className="space-y-3 text-ghost-white/80">
                  <div className="flex justify-between">
                    <span>Montag - Freitag</span>
                    <span className="font-semibold text-aquamarine">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samstag - Sonntag</span>
                    <span className="font-semibold text-ghost-white/50">Geschlossen</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-gradient-to-br from-aquamarine/10 to-tropical-indigo/10 backdrop-blur-xl rounded-3xl p-8 border border-aquamarine/20 shadow-2xl">
                <h3 className="text-2xl font-bold text-ghost-white mb-4">Lieber persönlich?</h3>
                <p className="text-ghost-white/80 mb-6">
                  Vereinbaren Sie direkt einen Termin für ein unverbindliches Erstgespräch.
                </p>
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault()
                    // This would open the booking modal from Navigation component
                    // For now, just scroll to contact
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-xl shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  Termin buchen
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
