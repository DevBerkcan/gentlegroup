'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX } from 'react-icons/hi'

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Load TidyCal script when modal opens
      const script = document.createElement('script')
      script.src = 'https://asset-tidycal.b-cdn.net/js/embed.js'
      script.async = true
      document.body.appendChild(script)

      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'

      return () => {
        // Clean up script if it exists
        if (document.body.contains(script)) {
          document.body.removeChild(script)
        }
        document.body.style.overflow = 'unset'
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-w-6xl h-[90vh] bg-oxford-blue/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-ghost-white/20 overflow-hidden flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-ghost-white/10 flex-shrink-0">
                <h2 className="text-2xl font-bold text-ghost-white">
                  Erstgespräch buchen
                </h2>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className="text-ghost-white/60 hover:text-aquamarine transition-colors"
                  aria-label="Schließen"
                >
                  <HiX className="w-8 h-8" />
                </motion.button>
              </div>

              {/* TidyCal Embed - Now with proper scrolling */}
              <div className="flex-1 overflow-hidden">
                <div className="h-full overflow-y-auto p-6">
                  <div
                    className="tidycal-embed min-h-[700px] w-full"
                    data-path="webdesigngentle"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default BookingModal