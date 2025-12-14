'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi'
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'
import { useTheme } from '@/contexts/ThemeContext'

// Text content configuration for consistency
const content = {
  footer: {
    description: "Wir sind Ihr Partner für innovative Softwarelösungen, modernes Group und KI-Integration. Von der Idee bis zur Umsetzung – wir gestalten digitale Zukunft.",
    navigation: {
      title: "Navigation",
      items: ['Services', 'Work', 'Team', 'Reviews', 'FAQ']
    },
    services: {
      title: "Services",
      items: ['Group', 'KI-Lösungen', 'Web-Apps', 'Azure Cloud', 'Full-Stack']
    },
    legal: {
      copyright: "Alle Rechte vorbehalten.",
      links: [
        { text: 'Datenschutz', href: '/datenschutzerklaerung' },
        { text: 'Impressum', href: '/impressum' },
        { text: 'AGB', href: '/agb' },
        { text: 'Barrierefreiheit', href: '/barrierefreiheit' }
      ]
    }
  }
}

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const { actualTheme } = useTheme()

  // Adaptive colors based on theme
  const bgColor = actualTheme === 'dark' ? 'bg-oxford-blue' : 'bg-white'
  const textColor = actualTheme === 'dark' ? 'text-ghost-white' : 'text-oxford-blue'
  const textMuted = actualTheme === 'dark' ? 'text-gray-400' : 'text-gray-600'
  const borderColor = actualTheme === 'dark' ? 'border-gray-700' : 'border-gray-200'

  return (
    <footer id="contact" className={`relative overflow-hidden ${bgColor} transition-colors duration-300`}>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-aquamarine/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.02]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16 pt-32 lg:pt-40 pb-12">
        {/* Footer Main Content */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12 pb-12 border-b ${borderColor}`}>
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mb-8"
              >
                <Image
                  src="/logo.svg"
                  alt="Gentle Group"
                  width={280}
                  height={94}
                  className="h-20 w-auto"
                />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${textMuted} text-lg mb-6 max-w-md leading-relaxed`}
              >
                {content.footer.description}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="p-4 bg-gradient-to-br from-aquamarine/5 to-tropical-indigo/5 rounded-2xl border border-aquamarine/10 max-w-md"
              >
                <p className={`text-sm ${textMuted} leading-relaxed`}>
                  <strong className={textColor}>Gentle Group</strong> ist die Dachmarke für innovative Software-Lösungen der{' '}
                  <strong className="text-aquamarine">GentleSuite</strong> (Gentle Access, GentleCalc, GentleTrack).
                </p>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex gap-4"
              >
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  <FaGithub className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  <FaTwitter className="text-xl" />
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-full flex items-center justify-center text-oxford-blue hover:shadow-lg hover:shadow-aquamarine/50 transition-all duration-300"
                >
                  <FaInstagram className="text-xl" />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>

          {/* Legal Cockpit Seal - Centered */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15, type: "spring", stiffness: 100 }}
            className="flex items-center justify-center"
          >
            <a
              href="https://cockpit.legal"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-block"
              title="Legal Cockpit - Agentur-Partner Rechtssicherheit"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 400 }}
                className="relative"
              >
                <Image
                  src="/legal-cockpit-seal.svg"
                  alt="Legal Cockpit Seal"
                  width={140}
                  height={140}
                  className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/0 to-tropical-indigo/0 group-hover:from-aquamarine/10 group-hover:to-tropical-indigo/10 rounded-lg transition-all duration-300" />
              </motion.div>
            </a>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
          >
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`text-2xl lg:text-3xl font-bold mb-6 ${textColor}`}
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {content.footer.navigation.title}
            </motion.h4>
            <ul className="space-y-4">
              {content.footer.navigation.items.map((item, index) => (
                <motion.li 
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + (index * 0.1) }}
                >
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`${textMuted} text-lg hover:text-aquamarine transition-colors duration-300 block py-2`}
                  >
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className={`text-2xl lg:text-3xl font-bold mb-6 ${textColor}`}
              style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
            >
              {content.footer.services.title}
            </motion.h4>
            <ul className="space-y-4">
              {content.footer.services.items.map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + (index * 0.1) }}
                >
                  <a
                    href="#services"
                    className={`${textMuted} text-lg hover:text-aquamarine transition-colors duration-300 block py-2`}
                  >
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Legal Cockpit Seal & Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
          className="flex flex-col gap-8"
        >
          {/* Copyright and Legal Links */}
          <div className={`flex flex-col md:flex-row justify-between items-center gap-6 ${textMuted} text-base`}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col items-center md:items-start gap-2"
            >
              <p>© {currentYear} Gentle Group. {content.footer.legal.copyright}</p>
              <p className={`text-sm ${textMuted}`}>
                Entwickelt von{' '}
                <a
                  href="https://gentle-group.com"
                  className="text-aquamarine hover:text-tropical-indigo transition-colors duration-300"
                >
                  Gentle Group
                </a>
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap justify-center gap-6"
            >
              {content.footer.legal.links.map((link, index) => (
                <motion.a
                  key={link.text}
                  href={link.href}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
                  className="hover:text-aquamarine transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {link.text}
                </motion.a>
              ))}
              <motion.a
                href="#"
                data-cc="c-settings"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.9 + (content.footer.legal.links.length * 0.1) }}
                className="hover:text-aquamarine transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Cookie-Einstellungen
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer