'use client'

import { motion } from 'framer-motion'
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'
import { playSound } from '@/utils/soundEffects'

const ThemeToggle = () => {
  const { theme, setTheme, actualTheme } = useTheme()

  const themes = [
    { value: 'light' as const, icon: HiSun, label: 'Hell' },
    { value: 'dark' as const, icon: HiMoon, label: 'Dunkel' },
    { value: 'auto' as const, icon: HiDesktopComputer, label: 'Auto' }
  ]

  // Adaptive colors based on actual theme
  const containerBg = actualTheme === 'dark'
    ? 'bg-white/10 border-white/20'
    : 'bg-oxford-blue/15 border-oxford-blue/30'

  const inactiveColor = actualTheme === 'dark'
    ? 'text-ghost-white/60 hover:text-ghost-white'
    : 'text-oxford-blue/60 hover:text-oxford-blue'

  return (
    <div className={`flex items-center gap-1 backdrop-blur-md rounded-full p-1 border transition-colors ${containerBg}`}>
      {themes.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          onClick={() => {
            playSound('themeSwitch')
            setTheme(value)
          }}
          onMouseEnter={() => playSound('hover')}
          className={`relative px-3 py-2 rounded-full transition-colors ${
            theme === value
              ? 'text-oxford-blue'
              : inactiveColor
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={`${label} Modus`}
          title={`${label} Modus`}
        >
          {theme === value && (
            <motion.div
              layoutId="theme-indicator"
              className="absolute inset-0 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full"
              transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            />
          )}
          <Icon className="w-5 h-5 relative z-10" />
        </motion.button>
      ))}
    </div>
  )
}

export default ThemeToggle
