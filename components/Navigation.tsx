'use client'

import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import BookingModal from './BookingModal'
import MagneticButton from './ui/MagneticButton'
import ThemeToggle from './ThemeToggle'
import { playSound } from '@/utils/soundEffects'
import { useTheme } from '@/contexts/ThemeContext'

const Navigation = () => {
  const router = useRouter()
  const { actualTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false)

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 50)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Work', href: '#work' },
    { label: 'Team', href: '#team' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '/kontakt' },
  ]

  // Adaptive colors based on theme
  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-oxford-blue'
  const textColorMuted = actualTheme === 'dark' ? 'text-ghost-white/70' : 'text-oxford-blue/70'
  const hoverColor = actualTheme === 'dark' ? 'hover:text-aquamarine' : 'hover:text-tropical-indigo'
  const iconColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-oxford-blue'
  const dividerColor = actualTheme === 'dark' ? 'bg-ghost-white/20' : 'bg-oxford-blue/20'

  return (
    <>
      {/* Top Navigation - Mobile Hamburger Menu */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled ? 'glass-dark shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-8 py-4 flex justify-between items-center lg:hidden">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.svg"
              alt="Gentle Group Logo"
              width={56}
              height={56}
              className="w-14 h-14"
            />
          </Link>

          <div className="flex items-center gap-4">
            {/* Mobile Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Hamburger Button */}
            <motion.button
              onClick={() => {
                playSound('click')
                setIsMobileMenuOpen(!isMobileMenuOpen)
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`p-2 ${iconColor} ${hoverColor} transition-colors`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <HiX className="text-3xl" />
              ) : (
                <HiMenu className="text-3xl" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-dark"
            >
              <div className="px-6 py-8 space-y-6">
                {navItems.map((item, index) => {
                  // Handle Contact link differently (uses router) vs hash links (use anchor)
                  if (item.href === '/kontakt') {
                    return (
                      <motion.button
                        key={item.href}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => {
                          playSound('click')
                          setIsMobileMenuOpen(false)
                          router.push('/kontakt')
                        }}
                        onMouseEnter={() => playSound('navHover')}
                        className={`block text-2xl ${textColor} ${hoverColor} transition-colors duration-300 font-medium text-left w-full`}
                      >
                        {item.label}
                      </motion.button>
                    )
                  }

                  return (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => {
                        playSound('click')
                        setIsMobileMenuOpen(false)
                      }}
                      onMouseEnter={() => playSound('navHover')}
                      className={`block text-2xl ${textColor} ${hoverColor} transition-colors duration-300 font-medium`}
                    >
                      {item.label}
                    </motion.a>
                  )
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Bottom Center Navigation - Fixed at bottom */}
      <motion.nav
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="fixed bottom-0 inset-x-0 z-50 mb-8 flex justify-center items-center pointer-events-none px-4"
      >
        {/* Main Navigation */}
        <motion.div
          className="pointer-events-auto px-8 py-5 glass rounded-full shadow-2xl hover:border-aquamarine/50 transition-all duration-300"
          whileHover={{
            boxShadow: "0 0 30px rgba(1, 255, 169, 0.3), inset 0 0 0 1px rgba(1, 255, 169, 0.2)",
            scale: 1.02
          }}
        >
          <div className="flex items-center gap-8">
            {/* Desktop Logo */}
            <Link href="/" className="hidden lg:flex items-center mr-4">
              <Image
                src="/logo.svg"
                alt="Gentle Group Logo"
                width={48}
                height={48}
                className="w-12 h-12"
              />
            </Link>

            <div className={`hidden lg:block w-px h-6 ${dividerColor}`} />

            {navItems.map((item, index) => {
              // Handle Contact link differently (uses router) vs hash links (use anchor)
              if (item.href === '/kontakt') {
                return (
                  <motion.button
                    key={item.href}
                    onClick={() => {
                      playSound('click')
                      router.push('/kontakt')
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                    whileHover={{ scale: 1.1, color: actualTheme === 'dark' ? '#01FFA9' : '#7B68EE' }}
                    onMouseEnter={() => playSound('navHover')}
                    className={`${textColorMuted} ${hoverColor} transition-colors text-sm font-medium whitespace-nowrap hidden lg:inline cursor-pointer`}
                  >
                    {item.label}
                  </motion.button>
                )
              }

              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.1, color: actualTheme === 'dark' ? '#01FFA9' : '#7B68EE' }}
                  onMouseEnter={() => playSound('navHover')}
                  className={`${textColorMuted} ${hoverColor} transition-colors text-sm font-medium whitespace-nowrap hidden lg:inline`}
                >
                  {item.label}
                </motion.a>
              )
            })}

            {/* Kontakt CTA Button - Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <MagneticButton
                onClick={() => {
                  setIsBookingModalOpen(true)
                  setIsMobileMenuOpen(false)
                }}
                strength={0.4}
                className="ml-2 px-6 py-2 bg-gradient-to-r from-aquamarine to-tropical-indigo text-oxford-blue font-bold rounded-full text-sm shadow-lg hover:shadow-aquamarine/50 transition-all duration-300 hover:scale-105"
              >
                Termin
              </MagneticButton>
            </motion.div>

            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7 }}
              className="ml-2 hidden lg:block"
            >
              <ThemeToggle />
            </motion.div>
          </div>
        </motion.div>
      </motion.nav>

      {/* Booking Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </>
  )
}

export default React.memo(Navigation);