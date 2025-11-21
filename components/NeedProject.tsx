'use client'

import { motion } from 'framer-motion'
import { HiArrowRight } from 'react-icons/hi'

// Text content configuration for consistency
const content = {
  needProject: {
    title: {
      part1: "Sie haben ein Projekt?",
      part2: "Sprechen Sie mit uns"
    },
    subtitle: "Egal ob Website, Web-App, KI-Integration oder Cloud-Migration – unser Team unterstützt Sie von der Ideenfindung bis zur Umsetzung.",
    button: "Projekt starten"
  }
}

const NeedProject = () => {
  const handleClick = () => {
    const modal = document.getElementById('project-inquiry-modal')
    if (modal) modal.style.display = 'flex'
  }

  return (
    <section className="relative py-32 lg:py-40 px-8 lg:px-16 overflow-hidden bg-gradient-to-r from-black via-oxford-blue to-black">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-aquamarine/10 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/3 left-10 w-[600px] h-[600px] bg-tropical-indigo/10 rounded-full blur-[100px]"
        />
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center"
        >
          {/* Enhanced Title with Consistent Font Styling */}
          <div style={{ fontWeight: 800, letterSpacing: '-0.02em' }} className="leading-[0.9] mb-8">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.2,
                type: "spring",
                stiffness: 80
              }}
              className="block text-ghost-white text-[clamp(3rem,8vw,6rem)]"
            >
              {content.needProject.title.part1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: 0.3,
                type: "spring",
                stiffness: 80
              }}
              className="block text-aquamarine text-[clamp(3rem,8vw,6rem)]"
            >
              {content.needProject.title.part2}
            </motion.span>
          </div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-ghost-white/70 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            {content.needProject.subtitle}
          </motion.p>

          {/* Enhanced CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.8, 
              delay: 0.5,
              type: "spring",
              stiffness: 200
            }}
            whileHover={{ 
              scale: 1.05, 
              boxShadow: '0 0 60px rgba(1, 255, 169, 0.8)',
              transition: { type: "spring", stiffness: 400 }
            }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
            className="group relative px-16 py-7 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-xl shadow-2xl hover:shadow-aquamarine/50 transition-all duration-300 flex items-center gap-4 mx-auto backdrop-blur-sm"
            style={{ fontWeight: 800, letterSpacing: '-0.02em' }}
          >
            {/* Button Shine Effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
              backgroundSize: '200% 100%',
              backgroundPosition: '-100% 0%',
            }} />
            
            <span>{content.needProject.button}</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <HiArrowRight className="text-2xl" />
            </motion.div>

            {/* Button Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                background: 'linear-gradient(90deg, transparent, rgba(1, 255, 169, 0.4), transparent)',
                backgroundSize: '200% 100%',
              }}
              animate={{
                backgroundPosition: ['0% 0%', '200% 0%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </motion.button>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-ghost-white/50 text-lg mt-8"
          >
            Kostenloses Erstgespräch • Individuelles Angebot • Keine Verpflichtungen
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}

export default NeedProject