'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { HiCalculator, HiCheckCircle, HiArrowRight, HiExternalLink, HiX, HiZoomIn, HiChevronLeft, HiChevronRight, HiLockClosed, HiUser, HiKey } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'
import OptimizedImage from '@/components/OptimizedImage'

export default function GentleCalcPage() {
  const { actualTheme } = useTheme()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState<number | null>(null)
  const [showCredentials, setShowCredentials] = useState(false)

  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-oxford-blue'
  const mutedColor = actualTheme === 'dark' ? 'text-ghost-white/70' : 'text-oxford-blue/70'
  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const cardBg = actualTheme === 'dark' ? 'bg-white/5' : 'bg-gray-50'
  const borderColor = actualTheme === 'dark' ? 'border-ghost-white/10' : 'border-gray-200'

  const features = [
    {
      title: 'Individuell konfigurierbar',
      description: 'Passen Sie den Preisrechner an Ihre spezifischen Services an'
    },
    {
      title: 'Automatische Preisberechnung',
      description: 'Echtzeit-Berechnung basierend auf ausgewählten Services'
    },
    {
      title: 'Lead-Generierung',
      description: 'Erfassen Sie Kundenanfragen direkt über den Rechner'
    },
    {
      title: 'Direkte Buchungsanfragen',
      description: 'Kunden können direkt einen Termin anfragen'
    }
  ]

  const techStack = ['React', 'TypeScript', '.NET Core', 'Azure Functions', 'SQL']

  // Screenshots from image.png
  const screenshots = [
    {
      id: 1,
      title: 'Admin-Konfiguration',
      description: 'Admin-Panel zur Konfiguration der Preise und Services',
      image: '/calcadmin.png',
      alt: 'GentleCalc Admin-Konfiguration'
    },
    {
      id: 2,
      title: 'Home-Bereich',
      description: 'Startseite mit Serviceauswahl und Preisberechnung',
      image: '/calchome.png',
      alt: 'GentleCalc Home-Bereich'
    },
    {
      id: 3,
      title: 'Kunden-Ansicht',
      description: 'Preisrechner-Ansicht für Kunden mit Echtzeit-Berechnung',
      image: '/calcnumbers.png',
      alt: 'GentleCalc Kunden-Ansicht'
    }
  ]

  // Live Demo URL
  const liveDemoUrl = "https://preisrechner.gentlegroup.de/api/auth/signin"

  // Admin-Zugangsdaten
  const adminCredentials = {
    email: "skinbloom",
    password: "gentle25"
  }

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

  // ESC-Taste Listener
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedImage) {
        closeLightbox()
      }
    }

    if (selectedImage) {
      window.addEventListener('keydown', handleEscape)
    }

    return () => {
      window.removeEventListener('keydown', handleEscape)
    }
  }, [selectedImage])

  // Arrow keys for navigation
  useEffect(() => {
    const handleKeyNavigation = (e: KeyboardEvent) => {
      if (!selectedImage) return

      if (e.key === 'ArrowLeft') {
        goToPrevImage()
      } else if (e.key === 'ArrowRight') {
        goToNextImage()
      }
    }

    window.addEventListener('keydown', handleKeyNavigation)
    return () => window.removeEventListener('keydown', handleKeyNavigation)
  }, [selectedImage, currentImageIndex])

  // Copy credentials to clipboard
  const copyToClipboard = (text: string, type: 'email' | 'password') => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${type === 'email' ? 'E-Mail' : 'Passwort'} wurde kopiert!`)
    })
  }

  return (
    <>
      <main className={`min-h-screen ${bgColor} pt-32 pb-20`}>
        {/* Hero Section */}
        <section className="max-w-[1400px] mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <div className="inline-flex p-4 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-2xl mb-6">
              <HiCalculator className="w-12 h-12 text-oxford-blue" />
            </div>

            <h1 className={`text-5xl lg:text-7xl font-black mb-6 ${textColor}`}>
              GentleCalc
            </h1>

            <p className="text-2xl lg:text-3xl font-bold text-aquamarine mb-6">
              Preisrechner für Beauty & Wellness
            </p>

            <p className={`text-xl lg:text-2xl ${mutedColor} max-w-3xl mx-auto`}>
              Individueller Preisrechner speziell für Beauty-Bereiche. Ihre Kunden erhalten sofort transparente Preise.
            </p>
          </motion.div>

          {/* Live Demo Button und Admin Zugang */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center gap-6 mb-16"
          >
            {/* Live Demo Button */}
            <motion.a
              href={liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-tropical-indigo to-aquamarine text-oxford-blue font-bold rounded-full shadow-lg hover:shadow-tropical-indigo/50 transition-all duration-300 inline-flex items-center gap-3"
            >
              <HiExternalLink className="w-5 h-5" />
              Live Demo ansehen
            </motion.a>

            {/* Admin Credentials Toggle */}
            <motion.div
              className={`${cardBg} backdrop-blur-xl rounded-2xl p-6 border ${borderColor} w-full max-w-md`}
            >
              <button
                onClick={() => setShowCredentials(!showCredentials)}
                className="w-full flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <HiLockClosed className="w-5 h-5 text-aquamarine" />
                  <div className="text-left">
                    <h3 className={`font-bold ${textColor}`}>
                      Admin-Zugang
                    </h3>
                    <p className="text-sm text-aquamarine">
                      Testzugang für die Konfigurationsoberfläche
                    </p>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: showCredentials ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <HiChevronRight className={`w-5 h-5 ${mutedColor}`} />
                </motion.div>
              </button>

              {/* Credentials Content */}
              <AnimatePresence>
                {showCredentials && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-gray-700/30 space-y-4">
                      <p className={`text-sm ${mutedColor}`}>
                        Verwenden Sie diese Zugangsdaten, um die Admin-Funktionen zu testen:
                      </p>
                      
                      {/* Email */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <HiUser className="w-4 h-4 text-aquamarine" />
                          <span className={`text-sm font-medium ${textColor}`}>E-Mail:</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 px-3 py-2 bg-black/20 rounded-lg text-sm font-mono">
                            {adminCredentials.email}
                          </code>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => copyToClipboard(adminCredentials.email, 'email')}
                            className="px-3 py-2 bg-aquamarine/20 hover:bg-aquamarine/30 text-aquamarine rounded-lg text-sm transition-colors"
                          >
                            Kopieren
                          </motion.button>
                        </div>
                      </div>

                      {/* Password */}
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <HiKey className="w-4 h-4 text-aquamarine" />
                          <span className={`text-sm font-medium ${textColor}`}>Passwort:</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <code className="flex-1 px-3 py-2 bg-black/20 rounded-lg text-sm font-mono">
                            ••••••
                          </code>
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => copyToClipboard(adminCredentials.password, 'password')}
                            className="px-3 py-2 bg-aquamarine/20 hover:bg-aquamarine/30 text-aquamarine rounded-lg text-sm transition-colors"
                          >
                            Passwort anzeigen
                          </motion.button>
                        </div>
                      </div>

                      <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                        <p className="text-xs text-yellow-500">
                          ⚠️ Dieser Testzugang ist nur für Demonstrationszwecke. Bitte ändern Sie das Passwort für produktive Nutzung.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid md:grid-cols-2 gap-8 mb-20"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className={`${cardBg} backdrop-blur-xl rounded-2xl p-8 border ${borderColor}`}
              >
                <div className="flex items-start gap-4">
                  <HiCheckCircle className="w-6 h-6 text-aquamarine flex-shrink-0 mt-1" />
                  <div>
                    <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                      {feature.title}
                    </h3>
                    <p className={mutedColor}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Screenshots Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-12 text-center ${textColor}`}>
              GentleCalc in Aktion
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {screenshots.map((screenshot, index) => (
                <motion.div
                  key={screenshot.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                  className={`${cardBg} backdrop-blur-xl rounded-2xl overflow-hidden border ${borderColor} group hover:border-aquamarine/50 transition-all duration-300`}
                >
                  {/* Screenshot Container mit Click Handler */}
                  <div 
                    className="relative h-64 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden cursor-pointer"
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
                    
                    {/* Hover Overlay mit Lupen-Icon */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 bg-black/60 backdrop-blur-sm rounded-full">
                        <HiZoomIn className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Click Hinweis */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className={`${actualTheme === 'dark' ? 'bg-black/70' : 'bg-white/90'} backdrop-blur-sm rounded-lg p-2 text-center`}>
                        <p className="text-xs font-medium text-aquamarine">
                          Klicken zum Vergrößern
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Screenshot Info */}
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-2 ${textColor}`}>
                      {screenshot.title}
                    </h3>
                    <p className={`text-sm ${mutedColor}`}>
                      {screenshot.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Screenshot Info */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className={`mt-8 p-6 rounded-2xl ${actualTheme === 'dark' ? 'bg-white/5' : 'bg-gray-100'} border ${borderColor} text-center`}
            >
              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="w-3 h-3 rounded-full bg-aquamarine animate-pulse" />
                <p className={`text-sm font-medium ${textColor}`}>
                  Klicken Sie auf ein Bild um es zu vergrößern
                </p>
              </div>
              <p className={`text-sm ${mutedColor} max-w-2xl mx-auto mb-4`}>
                Die Screenshots zeigen verschiedene Ansichten von GentleCalc. Klicken Sie auf ein Bild, um es in voller Größe zu sehen.
              </p>
              <motion.a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`inline-flex items-center gap-2 px-4 py-2 ${actualTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-200 hover:bg-gray-300'} rounded-full text-sm font-medium transition-colors duration-300`}
              >
                <HiExternalLink className="w-4 h-4" />
                Live Demo öffnen
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mb-20"
          >
            <h2 className={`text-3xl font-bold mb-8 text-center ${textColor}`}>
              Technologie-Stack
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <span
                  key={index}
                  className={`px-6 py-3 ${cardBg} backdrop-blur-xl rounded-full border ${borderColor} ${textColor} font-medium hover:border-aquamarine transition-colors duration-300`}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Pricing & CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className={`${cardBg} backdrop-blur-xl rounded-3xl p-12 border ${borderColor} text-center`}
          >
            <h2 className={`text-4xl font-bold mb-4 ${textColor}`}>
              Ab 39€/Monat
            </h2>
            <p className={`text-lg ${mutedColor} mb-8`}>
              Monatlich kündbar, keine Setup-Gebühren
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/kontakt">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full shadow-lg hover:shadow-aquamarine/50 transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                >
                  Jetzt anfragen
                  <HiArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
              
              <motion.a
                href={liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-4 ${actualTheme === 'dark' ? 'bg-white/10 hover:bg-white/20' : 'bg-gray-100 hover:bg-gray-200'} ${textColor} font-bold rounded-full border ${borderColor} transition-all duration-300 inline-flex items-center gap-2 w-full sm:w-auto justify-center`}
              >
                <HiExternalLink className="w-5 h-5" />
                Live Demo testen
              </motion.a>
            </div>

            {/* Hinweis auf Admin-Zugang */}
            <div className="mt-8 pt-6 border-t border-gray-700/30">
              <p className={`text-sm ${mutedColor}`}>
                <HiLockClosed className="inline w-4 h-4 mr-1" />
                Mit Admin-Zugang alle Funktionen testen
              </p>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && currentImageIndex !== null && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="fixed inset-0 bg-black/95 backdrop-blur-lg z-50 flex flex-col items-center justify-center p-4 md:p-8"
            >
              {/* Top Bar mit Titel und Close Button */}
              <div className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent z-20">
                <div>
                  <h3 className={`text-lg font-bold text-white`}>
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

              {/* Main Image Container - FLEXIBLE GRÖßE */}
              <div 
                className="relative flex-1 w-full flex items-center justify-center overflow-hidden mt-16 mb-20"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Navigation Buttons */}
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    goToPrevImage()
                  }}
                  className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white z-10"
                  whileHover={{ scale: 1.1, x: -5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Vorheriges Bild"
                >
                  <HiChevronLeft className="w-6 h-6" />
                </motion.button>

                {/* Image mit responsive Größe */}
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
                    alt={screenshots[currentImageIndex]?.alt || "Vergrößerte Ansicht"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
                    priority
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    goToNextImage()
                  }}
                  className="absolute right-4 md:right-8 top-1/2 transform -translate-y-1/2 p-3 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full text-white z-10"
                  whileHover={{ scale: 1.1, x: 5 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Nächstes Bild"
                >
                  <HiChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Bottom Bar mit Navigation und Info */}
              <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center justify-center px-6 py-4 bg-gradient-to-t from-black/80 to-transparent z-20">
                {/* Image Counter */}
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-white/70 text-sm">
                    {currentImageIndex + 1} / {screenshots.length}
                  </span>
                  
                  {/* Thumbnail Navigation */}
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
                            ? 'border-aquamarine scale-110' 
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

                {/* Keyboard Shortcuts Hint */}
                <div className="text-white/50 text-xs flex items-center gap-4">
                  <span>← → Pfeiltasten navigieren</span>
                  <span>•</span>
                  <span>ESC schließt</span>
                  <span>•</span>
                  <span>Klick auf Hintergrund schließt</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}