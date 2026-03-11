// components/Footer.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'

const content = {
  footer: {
    description: 'Wir sind Ihr Partner für innovative Softwarelösungen, modernes Design und KI-Integration. Von der Idee bis zur Umsetzung – wir gestalten digitale Zukunft.',
    navigation: {
      title: 'Navigation',
      items: ['Services', 'Work', 'Team', 'Reviews', 'FAQ'],
    },
    services: {
      title: 'Services',
      items: ['Design', 'KI-Lösungen', 'Web-Apps', 'Azure Cloud', 'Full-Stack'],
    },
    legal: {
      links: [
        { text: 'Datenschutz', href: '/datenschutzerklaerung' },
        { text: 'Impressum', href: '/impressum' },
        { text: 'AGB', href: '/agb' },
        { text: 'Barrierefreiheit', href: '/barrierefreiheit' },
      ],
    },
  },
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { actualTheme } = useTheme()

  const isDark = actualTheme === 'dark'
  const bgColor = isDark ? 'bg-oxford-blue' : 'bg-white'
  const textColor = isDark ? 'text-ghost-white' : 'text-oxford-blue'
  const textMuted = isDark ? 'text-gray-400' : 'text-gray-600'
  const borderColor = isDark ? 'border-gray-700/60' : 'border-gray-200'
  const linkHover = 'hover:text-aquamarine transition-colors duration-300'

  return (
    <footer id="contact" className={`relative overflow-hidden ${bgColor} transition-colors duration-300`}>
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] lg:w-[500px] lg:h-[500px] bg-aquamarine/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-4 sm:px-8 lg:px-16 pt-20 sm:pt-28 lg:pt-36 pb-10 sm:pb-12">
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 sm:gap-12 mb-10 sm:mb-12 pb-10 sm:pb-12 border-b ${borderColor}`}>
          <div className="lg:col-span-2">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="mb-6">
                <Image src="/logo.svg" alt="Gentle Group" width={280} height={94} className="h-16 sm:h-20 w-auto" />
              </motion.div>
              <motion.p initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }} className={`${textMuted} text-sm sm:text-base lg:text-lg mb-6 max-w-md leading-relaxed`}>
                {content.footer.description}
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex gap-3">
                {[
                  { href: 'https://www.linkedin.com/company/gentle-webdesign/', icon: FaLinkedin, label: 'LinkedIn' },
                  { href: 'https://www.instagram.com/gentlewebdesign/', icon: FaInstagram, label: 'Instagram' },
                ].map(({ href, icon: Icon, label }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                    aria-label={label}
                  >
                    <Icon className="text-base sm:text-xl" />
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex items-center justify-center sm:col-span-2 lg:col-span-1"
          >
            <a href="https://cockpit.legal" target="_blank" rel="noopener noreferrer" className="group" title="Legal Cockpit">
              <motion.div whileHover={{ scale: 1.08, rotate: 4 }} transition={{ type: 'spring', stiffness: 400 }}>
                <Image
                  src="/legal-cockpit-seal.svg"
                  alt="Legal Cockpit Seal"
                  width={120}
                  height={120}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-5 ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              {content.footer.navigation.title}
            </h4>
            <ul className="space-y-3">
              {content.footer.navigation.items.map((item, index) => (
                <motion.li key={item} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 + index * 0.08 }}>
                  <a href={`#${item.toLowerCase()}`} className={`${textMuted} text-sm sm:text-base ${linkHover} block py-1`}>
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.25 }}>
            <h4 className={`text-lg sm:text-xl lg:text-2xl font-bold mb-5 ${textColor}`} style={{ fontWeight: 800, letterSpacing: '-0.02em' }}>
              {content.footer.services.title}
            </h4>
            <ul className="space-y-3">
              {content.footer.services.items.map((service, index) => (
                <motion.li key={service} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 + index * 0.08 }}>
                  <a href="#services" className={`${textMuted} text-sm sm:text-base ${linkHover} block py-1`}>
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className={`flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-6 ${textMuted} text-xs sm:text-sm`}
        >
          <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
            <p>© {currentYear} Gentle Group. Alle Rechte vorbehalten.</p>
            <p>
              Entwickelt von{' '}
              <a href="https://gentle-group.com" className="text-aquamarine hover:text-tropical-indigo transition-colors duration-300">
                Gentle Group
              </a>
            </p>
          </div>

          <div className="flex flex-wrap justify-center sm:justify-end gap-3 sm:gap-5">
            {content.footer.legal.links.map((link, index) => (
              <motion.a
                key={link.text}
                href={link.href}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.08 }}
                className={`${linkHover}`}
                whileHover={{ scale: 1.05 }}
              >
                {link.text}
              </motion.a>
            ))}
            <motion.a
              href="#"
              data-cc="c-settings"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.6 + content.footer.legal.links.length * 0.08 }}
              className={`${linkHover}`}
              whileHover={{ scale: 1.05 }}
            >
              Cookies
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
