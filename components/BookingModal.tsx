'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiUser, HiCalendar, HiArrowLeft } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'
import OptimizedImage from '@/components/OptimizedImage'

interface Employee {
  name: string
  role: string
  image: string
  calendarUrl: string
}

interface BookingModalProps {
  isOpen: boolean
  onClose: () => void
}

const employees: Employee[] = [
  {
    name: 'Berk-Can',
    role: 'Founder & Lead Developer',
    image: '/berkcan.webp',
    calendarUrl: 'https://calendar.app.google/zwXoTnXiZbopiSva7'
  },
  {
    name: 'Medin',
    role: 'Backend Specialist',
    image: '/medin.webp',
    calendarUrl: 'https://calendar.app.google/zwXoTnXiZbopiSva7'
  }
]

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const { actualTheme } = useTheme()
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
      setSelectedEmployee(null)
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  const handleSelectEmployee = (employee: Employee) => {
    setSelectedEmployee(employee)
  }

  const handleOpenCalendar = () => {
    if (selectedEmployee) {
      window.open(selectedEmployee.calendarUrl, '_blank', 'noopener,noreferrer')
      onClose() // Close modal after opening calendar
    }
  }

  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const cardBg = actualTheme === 'dark' ? 'from-gray-900 to-gray-800' : 'from-white to-gray-50'
  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-gray-900'
  const textMuted = actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const borderColor = actualTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={`relative w-full max-w-4xl ${selectedEmployee ? 'h-auto max-h-[90vh]' : 'h-[90vh]'} ${bgColor} backdrop-blur-xl rounded-2xl shadow-2xl border ${borderColor} overflow-hidden flex flex-col`}>
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700/30 flex-shrink-0">
                <div className="flex items-center gap-3">
                  {selectedEmployee && (
                    <motion.button
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setSelectedEmployee(null)}
                      className={`p-2 rounded-lg ${actualTheme === 'dark' ? 'bg-gray-800 text-gray-400 hover:text-aquamarine' : 'bg-gray-100 text-gray-600 hover:text-tropical-indigo'} transition-colors duration-200`}
                      aria-label="Zurück"
                    >
                      <HiArrowLeft className="w-5 h-5" />
                    </motion.button>
                  )}
                  <div>
                    <h2 className={`text-2xl font-bold ${textColor}`}>
                      {selectedEmployee ? `Termin mit ${selectedEmployee.name}` : 'Teammitglied auswählen'}
                    </h2>
                    <p className={`text-sm ${textMuted}`}>
                      {selectedEmployee ? 'Klicken Sie auf "Termin buchen" um zum Kalender zu gelangen' : 'Wählen Sie ein Teammitglied für Ihr Erstgespräch'}
                    </p>
                  </div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={onClose}
                  className={`${textMuted} hover:text-aquamarine transition-colors`}
                  aria-label="Schließen"
                >
                  <HiX className="w-8 h-8" />
                </motion.button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto">
                <AnimatePresence mode="wait">
                  {!selectedEmployee ? (
                    // Employee Selection View
                    <motion.div
                      key="employee-selection"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {employees.map((employee, index) => (
                          <motion.button
                            key={employee.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                            whileHover={{ 
                              scale: 1.02, 
                              y: -5,
                              boxShadow: actualTheme === 'dark' 
                                ? '0 20px 40px rgba(127, 255, 212, 0.15)'
                                : '0 20px 40px rgba(99, 102, 241, 0.15)'
                            }}
                            whileTap={{ scale: 0.98 }}
                            className={`relative bg-gradient-to-br ${cardBg} border ${borderColor} rounded-2xl p-6 text-left transition-all duration-300 overflow-hidden w-full group`}
                            onClick={() => handleSelectEmployee(employee)}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/10 to-tropical-indigo/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            
                            <div className="relative z-10 flex items-center gap-4">
                              {/* Profile Image or Initial */}
                              <div className="flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden relative">
                                {employee.image ? (
                                  <OptimizedImage
                                    src={employee.image}
                                    alt={employee.name}
                                    fill
                                    className="object-cover"
                                    sizes="80px"
                                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                                      const target = e.currentTarget;
                                      target.style.display = 'none';
                                      const fallback = target.nextElementSibling as HTMLElement;
                                      if (fallback) fallback.classList.remove('hidden');
                                    }}
                                  />
                                ) : null}
                                <div className={`absolute inset-0 rounded-xl flex items-center justify-center text-white font-bold text-3xl ${
                                  index % 2 === 0
                                    ? 'bg-gradient-to-br from-aquamarine to-tropical-indigo'
                                    : 'bg-gradient-to-br from-tropical-indigo to-aquamarine'
                                } ${employee.image ? 'hidden' : ''}`}>
                                  {employee.name.charAt(0)}
                                </div>
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <h3 className={`text-xl font-bold ${textColor} group-hover:text-aquamarine transition-colors duration-300 truncate`}>
                                  {employee.name}
                                </h3>
                                <p className={`text-sm ${textMuted} truncate`}>
                                  {employee.role}
                                </p>
                                <div className="flex items-center gap-2 mt-3">
                                  <HiCalendar className="text-aquamarine text-sm flex-shrink-0" />
                                  <span className={`text-xs ${textMuted} truncate`}>
                                    Verfügbare Termine anzeigen
                                  </span>
                                </div>
                              </div>

                              {/* Selection Indicator */}
                              <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 ${borderColor} flex items-center justify-center group-hover:border-aquamarine transition-colors duration-300`}>
                                <div className="w-4 h-4 rounded-full bg-aquamarine opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              </div>
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  ) : (
                    // Confirmation View
                    <motion.div
                      key="confirmation"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                      className="p-8"
                    >
                      <div className="max-w-md mx-auto">
                        <div className="text-center mb-8">
                          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-aquamarine to-tropical-indigo flex items-center justify-center">
                            <HiUser className="text-5xl text-black" />
                          </div>
                          
                          <h3 className={`text-3xl font-bold ${textColor} mb-4`}>
                            {selectedEmployee.name}
                          </h3>
                          
                          <p className={`text-lg ${textMuted} mb-2`}>
                            {selectedEmployee.role}
                          </p>
                          
                          <p className={`${textMuted} mb-8`}>
                            Buchen Sie jetzt ein Erstgespräch
                          </p>
                        </div>

                        <div className="space-y-4">
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={handleOpenCalendar}
                            className="w-full py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-semibold rounded-xl flex items-center justify-center gap-3 text-lg"
                          >
                            <HiCalendar className="text-2xl" />
                            Termin mit {selectedEmployee.name} buchen
                          </motion.button>
                          
                          <motion.button
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.97 }}
                            onClick={() => setSelectedEmployee(null)}
                            className={`w-full py-4 border ${borderColor} ${textColor} font-semibold rounded-xl hover:border-aquamarine transition-colors duration-200`}
                          >
                            Anderes Teammitglied wählen
                          </motion.button>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-700/30">
                          <p className={`text-sm ${textMuted} text-center`}>
                            Nach Klick auf "Termin buchen" werden Sie zum Google Kalender weitergeleitet.
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className={`px-6 py-4 border-t ${borderColor} ${textMuted} text-sm bg-black/5 text-center`}>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-aquamarine animate-pulse" />
                  <span>Erstgespräche dauern in der Regel 30 Minuten</span>
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