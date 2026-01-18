'use client'

import { motion } from 'framer-motion'
import { useState, useRef, MouseEvent, ReactNode } from 'react'
import { playSound } from '@/utils/soundEffects'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  strength?: number
}

const MagneticButton = ({
  children,
  className = '',
  onClick,
  strength = 0.3
}: MagneticButtonProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const buttonRef = useRef<HTMLButtonElement>(null)

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    const x = (e.clientX - centerX) * strength
    const y = (e.clientY - centerY) * strength

    setPosition({ x, y })
  }

  const handleMouseEnter = () => {
    playSound('hover')
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    playSound('click')
    if (onClick) onClick()
  }

  return (
    <motion.button
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20
      }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

export default MagneticButton
