'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Particle {
  id: number
  x: number
  y: number
}

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if device is mobile
    setIsMobile(window.matchMedia('(max-width: 768px)').matches)

    // Hide default cursor on desktop
    if (!isMobile) {
      document.body.style.cursor = 'none'
    }

    let particleId = 0

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      // Create particle trail
      if (Math.random() > 0.7) {
        const newParticle = {
          id: particleId++,
          x: e.clientX,
          y: e.clientY
        }
        setParticles(prev => [...prev.slice(-8), newParticle])
      }
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isClickable = target.tagName === 'A' ||
                         target.tagName === 'BUTTON' ||
                         target.closest('a') ||
                         target.closest('button')
      setIsHovering(!!isClickable)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      if (!isMobile) {
        document.body.style.cursor = 'auto'
      }
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Main Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: position.x - 10,
          y: position.y - 10,
          scale: isHovering ? 1.5 : 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
      >
        <div className={`w-5 h-5 rounded-full border-2 transition-colors duration-200 ${
          isHovering ? 'border-aquamarine bg-aquamarine/20' : 'border-white'
        }`} />
      </motion.div>

      {/* Cursor Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        animate={{
          x: position.x - 2,
          y: position.y - 2,
        }}
        transition={{
          type: 'spring',
          stiffness: 800,
          damping: 35
        }}
      >
        <div className={`w-1 h-1 rounded-full transition-colors duration-200 ${
          isHovering ? 'bg-aquamarine' : 'bg-white'
        }`} />
      </motion.div>

      {/* Particle Trail */}
      <AnimatePresence>
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="fixed top-0 left-0 pointer-events-none z-[9998]"
            initial={{
              x: particle.x - 2,
              y: particle.y - 2,
              opacity: 1,
              scale: 1
            }}
            animate={{
              opacity: 0,
              scale: 0,
            }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}
            onAnimationComplete={() => {
              setParticles(prev => prev.filter(p => p.id !== particle.id))
            }}
          >
            <div className="w-1 h-1 rounded-full bg-gradient-to-r from-aquamarine to-tropical-indigo" />
          </motion.div>
        ))}
      </AnimatePresence>
    </>
  )
}

export default CustomCursor
