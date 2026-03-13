'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { HiCalendar, HiCheckCircle, HiArrowRight, HiZoomIn, HiX, HiChevronLeft, HiChevronRight, HiHome } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'
import OptimizedImage from '@/components/OptimizedImage'

export default function GentleBookPage() {
  const { actualTheme } = useTheme()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)

  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-oxford-blue'
  const mutedColor = actualTheme === 'dark' ? 'text-ghost-white/70' : 'text-oxford-blue/70'
  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const cardBg = actualTheme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
  const borderColor = actualTheme === 'dark' ? 'border-ghost-white/10' : 'border-gray-200'

  const features = [
    {
      title: '24/7 Online-Terminbuchung',
      description: 'Ihre Kunden können rund um die Uhr Termine buchen - ohne Anrufe'
    },
    {
      title: 'Service & Preis-Verwaltung',
      description: 'Einfaches Admin-Panel zur Verwaltung Ihrer Services und Preise'
    },
    {
      title: 'Automatische Kalender-Synchronisation',
      description: 'Nahtlose Integration mit Google Calendar, Outlook und mehr'
    },
    {
      title: 'WhatsApp & Instagram Integration',
      description: 'Direkte Buchungen über Ihre Social Media Kanäle'
    }
  ]

  const techStack = ['Next.js', 'TypeScript', 'Calendly API', 'WhatsApp Business', 'Instagram API']

  const benefits = [
    'Keine verpassten Buchungen mehr durch WhatsApp/Instagram Chaos',
    'Professionelles Online-Booking wie große Ketten',
    'Automatische Erinnerungen per E-Mail',
    'Linktree-Alternative mit Buchungsfunktion',
    'Perfekt für Friseure, Beauty-Studios, Nagelstudios'
  ]

  const screenshots = [
    {
      id: 1,
      title: 'Buchungsübersicht',
      description: 'Übersichtliche Darstellung aller Buchungen und Termine',
      image: '/booking1.png',
      alt: 'GentleBook Buchungsübersicht'
    },
    {
      id: 2,
      title: 'Service-Auswahl',
      description: 'Intuitive Auswahl der gewünschten Services für Kunden',
      image: '/booking2.png',
      alt: 'GentleBook Service-Auswahl'
    },
    {
      id: 3,
      title: 'Admin-Panel',
      description: 'Vollständige Verwaltung aller Buchungen und Einstellungen',
      image: '/booking3.png',
      alt: 'GentleBook Admin-Panel'
    }
  ]

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setCurrentImageIndex(index)
    document.body.style.overflow = 'hidden'
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    setCurrentImageIndex(null)
    document.body.style.overflow = 'unset'
  }

  const goToPrevImage = () => {
    if (currentImageIndex !== null) {
      const prevIndex = currentImageIndex > 0 ? currentImageIndex - 1 : screenshots.length - 1
      setSelectedImage(screenshots[prevIndex].image)
      setCurrentImageIndex(prevIndex)
    }
  }

  const goToNextImage = () => {
    if (currentImageIndex !== null) {
      const nextIndex = currentImageIndex < screenshots.length - 1 ? currentImageIndex + 1 : 0
      setSelectedImage(screenshots[nextIndex].image)
      setCurrentImageIndex(nextIndex)
    }
  }

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) closeLightbox()
    }
    if (selectedImage) window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [selectedImage])

  useEffect(() => {
    const handleKeyNavigation = (e: KeyboardEvent) => {
      if (!selectedImage) return
      if (e.key === 'ArrowLeft') goToPrevImage()
      else if (e.key === 'ArrowRight') goToNextImage()
    }
    window.addEventListener('keydown', handleKeyNavigation)
    return () => window.removeEventListener('keydown', handleKeyNavigation)
  }, [selectedImage, currentImageIndex])

  return (
    <>
      <main className={`min-h-screen ${bgColor} pt-32 pb-20`}>
        <section className="max-w-[1400px] mx-auto px-8 lg:px-16">

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-10"
          >
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05, x: -4 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-4 py-2 ${cardBg} border ${borderColor} rounded-full text-sm font-medium ${mutedColor} hover:${textColor} transition-all duration-200`}
              >
                <HiHome className="w-4 h-4" />
                Zurück zur Startseite
              </motion.div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-tropical-indigo to-aquamarine rounded-2xl mb-6 shadow-lg shadow-tropical-indigo/20">
              <HiCalendar className="w-12 h-12 text-oxford-blue" />
            </div>

            <h1 className={`text-5xl lg:text-7xl font-black mb-6 ${textColor}`}>
              GentleBook
            </h1>

            <p className="text-2xl lg:text-3xl font-bold text-tropical-indigo mb-6">
              Online-Buchung für Beauty & Local Business
            </p>

            <p className={`text-xl lg:text-2xl ${mutedColor} max-w-3xl mx-auto leading-relaxed`}>
              Ihr digitaler Empfang: Linktree mit Online-Buchung, Service-Verwaltung und Admin-Panel. Perfekt für Friseure, Beauty-Studios und lokale Dienstleister.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className={`rounded-3xl p-10 border ${borderColor} mb-16 bg-gradient-to-br ${actualTheme === 'dark' ? 'from-tropical-indigo/10 to-aquamarine/5' : 'from-tropical-indigo/5 to-aquamarine/5'}`}
          >
            <h2 className={`text-2xl font-bold mb-8 ${textColor} text-center`}>
              Schluss mit dem Chaos
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((benefit, index) => (
                <div key={index} className={`flex items-start gap-3 p-4 rounded-xl ${cardBg} border ${borderColor}`}>
                  <HiCheckCircle className="w-5 h-5 text-aquamarine flex-shrink-0 mt-0.5" />
                  <p className={`${mutedColor} text-sm leading-relaxed`}>{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid md:grid-cols-2 gap-6 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`${cardBg} backdrop-blur-xl rounded-2xl p-8 border ${borderColor} hover:border-tropical-indigo/40 transition-all duration-300 group`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-tropical-indigo/20 to-aquamarine/20 rounded-xl flex items-center justify-center group-hover:from-tropical-indigo/30 group-hover:to-aquamarine/30 transition-all duration-300">
                    <HiCheckCircle className="w-5 h-5 text-tropical-indigo" />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${textColor}`}>
                      {feature.title}
                    </h3>
                    <p className={`${mutedColor} text-sm leading-relaxed`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className={`text-3xl font-bold mb-3 ${textColor}`}>
                GentleBook in Aktion
              </h2>
              <p className={`${mutedColor} text-sm`}>Klicken Sie auf ein Bild um es zu vergrößern</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={screenshot.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`${cardBg} backdrop-blur-xl rounded-2xl overflow-hidden border ${borderColor} group hover:border-tropical-indigo/50 hover:shadow-lg hover:shadow-tropical-indigo/10 transition-all duration-300`}
                >
                  <div
                    className="relative h-52 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden cursor-pointer"
                    onClick={() => openLightbox(screenshot.image, index)}
                  >
                    <OptimizedImage
                      src={screenshot.image}
                      alt={screenshot.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority={index === 0}
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-black/60 backdrop-blur-sm rounded-full border border-white/20">
                        <HiZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className={`text-base font-bold mb-1 ${textColor}`}>
                      {screenshot.title}
                    </h3>
                    <p className={`text-xs ${mutedColor} leading-relaxed`}>
                      {screenshot.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
              Technologie-Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-5 py-2.5 ${cardBg} backdrop-blur-xl rounded-full border ${borderColor} ${textColor} text-sm font-medium hover:border-tropical-indigo hover:shadow-sm transition-all duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className={`rounded-3xl p-12 border ${borderColor} text-center bg-gradient-to-br ${actualTheme === 'dark' ? 'from-white/5 to-white/[0.02]' : 'from-gray-50 to-white'}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-tropical-indigo/10 border border-tropical-indigo/20 rounded-full text-tropical-indigo text-sm font-medium mb-6">
              Monatlich kündbar
            </div>
            <h2 className={`text-5xl font-black mb-3 ${textColor}`}>
              Ab 19€<span className={`text-2xl font-normal ${mutedColor}`}>/Monat</span>
            </h2>
            <p className={`text-base ${mutedColor} mb-10`}>
              Keine Setup-Gebühren • Sofort einsatzbereit
            </p>

            <Link href="/kontakt">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-gradient-to-r from-tropical-indigo to-aquamarine text-oxford-blue font-bold rounded-full shadow-lg shadow-tropical-indigo/30 hover:shadow-tropical-indigo/50 transition-all duration-300 inline-flex items-center gap-2"
              >
                Jetzt anfragen
                <HiArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </section>
      </main>

      <AnimatePresence>
        {selectedImage && currentImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-4 md:p-8"
          >
            <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-20">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {screenshots[currentImageIndex]?.title}
                </h3>
                <p className="text-sm text-white/70">
                  {screenshots[currentImageIndex]?.description}
                </p>
              </div>

              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={closeLightbox}
                className="p-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full text-white/80 hover:text-white transition-colors"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Schließen"
              >
                <HiX className="w-6 h-6" />
              </motion.button>
            </div>

            <div
              className="relative flex-1 w-full flex items-center justify-center overflow-hidden mt-16 mb-20"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => { e.stopPropagation(); goToPrevImage() }}
                className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white z-10"
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Vorheriges Bild"
              >
                <HiChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: 'spring', damping: 20, stiffness: 200 }}
                key={selectedImage}
                className="relative w-full h-full max-w-[90vw] max-h-[70vh] md:max-h-[75vh]"
              >
                <OptimizedImage
                  src={selectedImage}
                  alt={screenshots[currentImageIndex]?.alt || 'Vergrößerte Ansicht'}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onClick={(e) => { e.stopPropagation(); goToNextImage() }}
                className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white z-10"
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Nächstes Bild"
              >
                <HiChevronRight className="w-6 h-6" />
              </motion.button>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center px-6 py-4 bg-gradient-to-t from-black/80 to-transparent z-20">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-white/70 text-sm">
                  {currentImageIndex + 1} / {screenshots.length}
                </span>

                <div className="flex items-center gap-2">
                  {screenshots.map((screenshot, index) => (
                    <button
                      key={screenshot.id}
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedImage(screenshot.image)
                        setCurrentImageIndex(index)
                      }}
                      className={`relative w-10 h-10 rounded overflow-hidden border-2 transition-all duration-200 ${
                        currentImageIndex === index
                          ? 'border-tropical-indigo scale-110'
                          : 'border-white/30 hover:border-white/50'
                      }`}
                    >
                      <OptimizedImage
                        src={screenshot.image}
                        alt={screenshot.alt}
                        fill
                        className="object-cover"
                        sizes="40px"
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-white/50 text-xs flex items-center gap-4">
                <span>← → Pfeiltasten navigieren</span>
                <span>•</span>
                <span>ESC schließt</span>
                <span>•</span>
                <span>Klick auf Hintergrund schließt</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
