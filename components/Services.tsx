"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiCode,
  HiCloud,
  HiDeviceMobile,
  HiTerminal,
  HiChevronDown,
  HiArrowRight,
} from "react-icons/hi";
import { FaAndroid, FaRobot } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

const content = {
  services: {
    items: [
      {
        icon: HiCode,
        title: "Design & Entwicklung",
        description:
          "Moderne, responsive Websites mit außergewöhnlichem Design und perfekter User Experience. Wir bauen digitale Erlebnisse, die Ihre Marke widerspiegeln und Nutzer begeistern.",
        features: [
          "React & Next.js",
          "Responsive Design",
          "SEO-optimiert",
          "Performance-First",
        ],
        accent: "from-aquamarine to-tropical-indigo",
        stat: "50+ Projekte",
      },
      {
        icon: FaRobot,
        title: "KI-Lösungen",
        description:
          "Intelligente Automatisierung und KI-Integration für Ihr Business der Zukunft. Wir machen komplexe KI-Technologie für Ihr Unternehmen nutzbar.",
        features: [
          "Chatbots",
          "Machine Learning",
          "Datenanalyse",
          "Automation",
        ],
        accent: "from-tropical-indigo to-purple-500",
        stat: "KI-First",
      },
      {
        icon: HiDeviceMobile,
        title: "Web-Apps",
        description:
          "Leistungsstarke Progressive Web Apps mit nativer Performance und Offline-Funktionalität. Plattformübergreifend und blitzschnell.",
        features: ["PWA", "Cross-Platform", "Real-time", "Offline-ready"],
        accent: "from-aquamarine to-oxford-blue",
        stat: "99% Uptime",
      },
      {
        icon: HiCloud,
        title: "Azure Cloud",
        description:
          "Skalierbare Cloud-Lösungen mit Microsoft Azure für höchste Verfügbarkeit und Sicherheit. Ihre Infrastruktur, professionell verwaltet.",
        features: ["Cloud Migration", "DevOps", "Skalierung", "Monitoring"],
        accent: "from-blue-500 to-tropical-indigo",
        stat: "Enterprise",
      },
      {
        icon: HiTerminal,
        title: "Full-Stack Development",
        description:
          "Komplette Software-Entwicklung von Frontend über Backend bis zur Datenbank. Eine Agentur, alles aus einer Hand.",
        features: [".NET Core", "React", "SQL & NoSQL", "REST APIs"],
        accent: "from-tropical-indigo to-aquamarine",
        stat: "End-to-End",
      },
      {
        icon: FaAndroid,
        title: "Android & iOS Apps",
        description:
          "Moderne mobile Apps mit hoher Performance, intuitivem Design und nahtloser Integration. Native Erfahrung auf jedem Gerät.",
        features: [
          "Kotlin & Java",
          "Intuitive UI/UX",
          "API-Integration",
          "Offline-fähig",
        ],
        accent: "from-green-500 to-aquamarine",
        stat: "Multi-Platform",
      },
    ],
  },
};

const Services = () => {
  const { actualTheme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isDark = actualTheme === "dark";
  const bgColor = isDark ? "bg-oxford-blue" : "bg-white";
  const textColor = isDark ? "text-ghost-white" : "text-gray-900";
  const textMuted = isDark ? "text-gray-400" : "text-gray-500";
  const borderColor = isDark ? "border-white/10" : "border-gray-200";
  const backgroundTextColor = isDark ? "text-white/5" : "text-gray-900/5";
  const cardBg = isDark ? "bg-white/5" : "bg-gray-50";
  const cardBgActive = isDark ? "bg-white/8" : "bg-gray-100/80";

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className={`py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-20 left-8 lg:left-16 ${backgroundTextColor} font-black text-[120px] lg:text-[180px] xl:text-[220px] leading-none select-none`}
        >
          SERVICES
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[400px] h-[400px] bg-aquamarine/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className={`text-5xl lg:text-6xl font-bold ${textColor}`}>
            SERVICES
          </h2>
          <p className={`mt-4 text-lg ${textMuted} max-w-xl`}>
            Alles was Sie brauchen, um digital erfolgreich zu sein.
          </p>
        </motion.div>

        <div className="space-y-3">
          {content.services.items.map((service, index) => {
            const isOpen = openIndex === index;
            const isHovered = hoveredIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className={`relative border rounded-2xl overflow-hidden transition-all duration-300 ${borderColor} ${
                  isOpen
                    ? isDark
                      ? "border-aquamarine/30 shadow-lg shadow-aquamarine/5"
                      : "border-aquamarine/40 shadow-lg shadow-aquamarine/10"
                    : isHovered
                      ? isDark
                        ? "border-white/20"
                        : "border-gray-300"
                      : ""
                }`}
              >
                {isOpen && (
                  <motion.div
                    layoutId="activeAccent"
                    className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.accent}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                )}

                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full px-6 lg:px-8 py-5 lg:py-6 flex items-center justify-between transition-colors duration-200 ${
                    isOpen ? cardBgActive : isHovered ? cardBg : ""
                  }`}
                >
                  <div className="flex items-center gap-4 lg:gap-6 min-w-0">
                    <div className={`flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br ${service.accent} rounded-xl flex items-center justify-center shadow-lg transition-transform duration-300 ${isOpen ? "scale-110" : isHovered ? "scale-105" : ""}`}>
                      <Icon className="text-2xl lg:text-3xl text-black" />
                    </div>

                    <div className="flex items-center gap-4 min-w-0">
                      <h3 className={`text-lg lg:text-2xl font-bold text-left ${textColor} truncate`}>
                        {service.title}
                      </h3>
                      <span className={`hidden sm:inline-flex shrink-0 items-center px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 ${
                        isOpen
                          ? "bg-aquamarine/15 border-aquamarine/40 text-aquamarine"
                          : isDark
                            ? "bg-white/5 border-white/10 text-white/50"
                            : "bg-gray-100 border-gray-200 text-gray-500"
                      }`}>
                        {service.stat}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HiChevronDown className={`text-xl transition-colors duration-200 ${isOpen ? "text-aquamarine" : textMuted}`} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`px-6 lg:px-8 pb-7 pt-1 lg:pl-28 ${cardBgActive}`}>
                        <div className={`w-full h-px ${isDark ? "bg-white/10" : "bg-gray-200"} mb-6`} />

                        <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                          <div className="flex-1">
                            <p className={`${textMuted} text-base lg:text-lg leading-relaxed`}>
                              {service.description}
                            </p>
                          </div>

                          <div className="flex-shrink-0 lg:w-56">
                            <p className={`text-xs font-semibold uppercase tracking-widest ${textMuted} mb-3`}>
                              Leistungen
                            </p>
                            <div className="space-y-2.5">
                              {service.features.map((feature, i) => (
                                <motion.div
                                  key={feature}
                                  initial={{ opacity: 0, x: -12 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.25, delay: i * 0.06 }}
                                  className="flex items-center gap-3"
                                >
                                  <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${service.accent} flex-shrink-0`} />
                                  <span className={`${textColor} text-sm font-medium`}>
                                    {feature}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        <motion.a
                          href="#contact"
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: 0.15 }}
                          className="mt-6 inline-flex items-center gap-2 text-aquamarine font-semibold text-sm hover:gap-3 transition-all duration-300"
                        >
                          Mehr erfahren
                          <HiArrowRight className="text-base" />
                        </motion.a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 p-6 lg:p-8 rounded-2xl border border-dashed border-aquamarine/30 bg-aquamarine/5"
        >
          <div>
            <p className={`font-bold text-lg lg:text-xl ${textColor}`}>
              Nicht sicher, was Sie brauchen?
            </p>
            <p className={`text-sm mt-1 ${textMuted}`}>
              Wir beraten Sie kostenlos und unverbindlich.
            </p>
          </div>
          <motion.a
            href="/project-questionnaire"
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,169,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 px-8 py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-base transition-all duration-300 shadow-lg"
          >
            Projekt starten
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Services);
