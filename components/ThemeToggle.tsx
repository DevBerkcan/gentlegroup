'use client'

import { motion } from 'framer-motion'
import { HiSun, HiMoon, HiDesktopComputer } from 'react-icons/hi'
import { useTheme } from '@/contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const themes = [
    { value: 'light' as const, icon: HiSun, label: 'Hell' },
    { value: 'dark' as const, icon: HiMoon, label: 'Dunkel' },
    { value: 'auto' as const, icon: HiDesktopComputer, label: 'Auto' }
  ]

  return (
    <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md rounded-full p-1 border border-white/20">
      {themes.map(({ value, icon: Icon, label }) => (
        <motion.button
          key={value}
          onClick={() => setTheme(value)}
          className={`relative px-3 py-2 rounded-full transition-colors ${
            theme === value
              ? 'text-oxford-blue'
              : 'text-ghost-white/60 hover:text-ghost-white'
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
