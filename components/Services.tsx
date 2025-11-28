"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  HiCode,
  HiLightningBolt,
  HiCloud,
  HiCube,
  HiSparkles,
} from "react-icons/hi";
import { FaAndroid } from "react-icons/fa";

// Text content configuration for consistency
const content = {
  services: {
    badge: "Unsere Services",
    title: {
      part1: "Was wir für Sie",
      part2: "entwickeln können",
    },
    items: [
      {
        icon: HiCode,
        title: "Design & Entwicklung",
        description:
          "Moderne, responsive Websites mit außergewöhnlichem Design und perfekter User Experience.",
        features: [
          "React & Next.js",
          "Responsive Design",
          "SEO-optimiert",
          "Performance-First",
        ],
      },
      {
        icon: HiSparkles,
        title: "KI-Lösungen",
        description:
          "Intelligente Automatisierung und KI-Integration für Ihr Business der Zukunft.",
        features: [
          "Chatbots",
          "Machine Learning",
          "Datenanalyse",
          "Automation",
        ],
      },
      {
        icon: HiCube,
        title: "Web-Apps",
        description:
          "Leistungsstarke Progressive Web Apps mit nativer Performance und Offline-Funktionalität.",
        features: ["PWA", "Cross-Platform", "Real-time", "Offline-ready"],
      },
      {
        icon: HiCloud,
        title: "Azure Cloud",
        description:
          "Skalierbare Cloud-Lösungen mit Microsoft Azure für höchste Verfügbarkeit und Sicherheit.",
        features: ["Cloud Migration", "DevOps", "Skalierung", "Monitoring"],
      },
      {
        icon: HiLightningBolt,
        title: "Full-Stack Development",
        description:
          "Komplette Software-Entwicklung von Frontend über Backend bis zur Datenbank.",
        features: [".NET Core", "React", "SQL & NoSQL", "REST APIs"],
      },
      {
        icon: FaAndroid,
        title: "Android Apps",
        description:
          "Moderne Android-Apps mit hoher Performance, intuitivem Design und nahtloser Integration.",
        features: [
          "Kotlin & Java",
          "Intuitive UI/UX",
          "API-Integration",
          "Offline-fähig",
        ],
      },
    ],
  },
};

const Services = () => {
  const ref = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Multiple scroll transformations for parallax effects
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const yFast = useTransform(scrollYProgress, [0, 1], [150, -150]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  // Staggered entrance for service cards
  const cardY = useTransform(scrollYProgress, [0, 0.3, 0.6], [100, 0, 0]);
  const cardOpacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 1]
  );

  return (
    <section
      id="services"
      ref={ref}
      className="py-32 lg:py-40 relative overflow-hidden bg-white"
    >
      {/* Enhanced Background Elements with Parallax */}
      <div className="absolute inset-0 z-0">
        {/* Floating particles/glows with different speeds */}
        <motion.div
          style={{ y: yFast, rotate, scale }}
          className="absolute top-1/4 right-10 w-[500px] h-[500px] bg-tropical-indigo/10 rounded-full blur-[120px]"
        />
        <motion.div
          style={{
            y: ySlow,
            rotate: useTransform(scrollYProgress, [0, 1], [-3, 3]),
          }}
          className="absolute bottom-1/4 left-10 w-[600px] h-[600px] bg-aquamarine/8 rounded-full blur-[100px]"
        />
        <motion.div
          style={{ y }}
          className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-purple-400/5 rounded-full blur-[80px]"
        />

        {/* Animated grid pattern */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.3], [0, 0.03]),
            scale: useTransform(scrollYProgress, [0, 0.4], [0.5, 1]),
          }}
          className="absolute inset-0 bg-grid-pattern bg-[length:50px_50px]"
        />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 max-w-[1600px] mx-auto px-8 lg:px-16"
      >
        {/* Enhanced Section Header with Scale Effect */}
        <motion.div
          style={{ opacity, scale }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="text-center mb-24"
        >
          <motion.span
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 200,
            }}
            className="inline-block px-6 py-3 bg-aquamarine/10 border border-aquamarine/30 rounded-full text-aquamarine font-semibold text-sm mb-8 backdrop-blur-sm"
          >
            {content.services.badge}
          </motion.span>
          <div
            style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
            className="leading-[0.9]"
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                type: "spring",
                stiffness: 80,
              }}
              className="block text-gray-900 text-[clamp(3rem,8vw,6rem)]"
            >
              {content.services.title.part1}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                type: "spring",
                stiffness: 80,
              }}
              className="block text-aquamarine text-[clamp(3rem,8vw,6rem)]"
            >
              {content.services.title.part2}
            </motion.span>
          </div>
        </motion.div>

        {/* Enhanced Services Grid with Staggered Scroll Effects */}
        <motion.div
          style={{ y: cardY, opacity: cardOpacity }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {content.services.items.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{
                y: -20,
                scale: 1.02,
                transition: { duration: 0.4, type: "spring", stiffness: 400 },
              }}
              className="group relative"
            >
              {/* Background shine effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-aquamarine/20 to-tropical-indigo/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:scale-105" />

              <div className="relative p-8 lg:p-10 bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl overflow-hidden hover:border-aquamarine/50 transition-all duration-500 h-full shadow-lg hover:shadow-2xl backdrop-blur-sm">
                {/* Enhanced Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-aquamarine/8 to-tropical-indigo/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Animated Border on Hover */}
                <motion.div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(1, 255, 169, 0.4), rgba(100, 100, 255, 0.4), transparent)",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "200% 0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <div className="relative z-10">
                  {/* Enhanced Icon with floating animation */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.2,
                      type: "spring",
                      stiffness: 200,
                    }}
                    whileHover={{
                      scale: 1.15,
                      rotate: 5,
                      y: -5,
                    }}
                    className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-2xl mb-6 group-hover:shadow-2xl group-hover:shadow-aquamarine/50 transition-all duration-300 relative"
                  >
                    <service.icon className="text-4xl text-black" />
                    {/* Pulsing effect */}
                    <motion.div
                      className="absolute inset-0 rounded-2xl border-2 border-aquamarine/30"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0, 0.5],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </motion.div>

                  {/* Title with character stagger */}
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    className="text-2xl lg:text-3xl font-bold mb-4 text-gray-900 group-hover:text-aquamarine transition-colors duration-300"
                  >
                    {service.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                    className="text-gray-600 text-lg mb-6 leading-relaxed"
                  >
                    {service.description}
                  </motion.p>

                  {/* Features with staggered animation */}
                  <ul className="space-y-3">
                    {service.features.map((feature, i) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1 + i * 0.1,
                          type: "spring",
                          stiffness: 200,
                        }}
                        className="flex items-center gap-3 text-gray-700 text-base group/feature"
                      >
                        <motion.div
                          className="w-2 h-2 bg-aquamarine rounded-full group-hover/feature:scale-150 transition-transform duration-300"
                          whileHover={{ scale: 1.5 }}
                        />
                        <motion.span
                          whileHover={{ x: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {feature}
                        </motion.span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA with scroll progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20"
        >
          <motion.div
            style={{ scaleX: scrollYProgress }}
            className="h-1 bg-gradient-to-r from-aquamarine to-tropical-indigo rounded-full max-w-md mx-auto mb-8 origin-left"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
