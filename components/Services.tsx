"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiCode,
  HiCloud,
  HiDeviceMobile,
  HiTerminal,
  HiArrowRight,
  HiExternalLink,
  HiChevronDown,
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
        features: ["React & Next.js", "Responsive Design", "SEO-optimiert", "Performance-First"],
        accent: "from-aquamarine to-tropical-indigo",
        stat: "50+ Projekte",
        number: "01",
      },
      {
        icon: FaRobot,
        title: "KI-Lösungen",
        description:
          "Intelligente Automatisierung und KI-Integration für Ihr Business der Zukunft. Wir machen komplexe KI-Technologie für Ihr Unternehmen nutzbar.",
        features: ["Chatbots", "Machine Learning", "Datenanalyse", "Automation"],
        accent: "from-tropical-indigo to-purple-500",
        stat: "KI-First",
        number: "02",
      },
      {
        icon: HiDeviceMobile,
        title: "Web-Apps",
        description:
          "Leistungsstarke Progressive Web Apps mit nativer Performance und Offline-Funktionalität. Plattformübergreifend und blitzschnell.",
        features: ["PWA", "Cross-Platform", "Real-time", "Offline-ready"],
        accent: "from-aquamarine to-oxford-blue",
        stat: "99% Uptime",
        number: "03",
      },
      {
        icon: HiCloud,
        title: "Azure Cloud",
        description:
          "Skalierbare Cloud-Lösungen mit Microsoft Azure für höchste Verfügbarkeit und Sicherheit. Ihre Infrastruktur, professionell verwaltet.",
        features: ["Cloud Migration", "DevOps", "Skalierung", "Monitoring"],
        accent: "from-blue-500 to-tropical-indigo",
        stat: "Enterprise",
        number: "04",
      },
      {
        icon: HiTerminal,
        title: "Full-Stack Development",
        description:
          "Komplette Software-Entwicklung von Frontend über Backend bis zur Datenbank. Eine Agentur, alles aus einer Hand.",
        features: [".NET Core", "React", "SQL & NoSQL", "REST APIs"],
        accent: "from-tropical-indigo to-aquamarine",
        stat: "End-to-End",
        number: "05",
      },
      {
        icon: FaAndroid,
        title: "Android & iOS Apps",
        description:
          "Moderne mobile Apps mit hoher Performance, intuitivem Design und nahtloser Integration. Native Erfahrung auf jedem Gerät.",
        features: ["Kotlin & Java", "Intuitive UI/UX", "API-Integration", "Offline-fähig"],
        accent: "from-green-500 to-aquamarine",
        stat: "Multi-Platform",
        number: "06",
      },
    ],
  },
};

const Services = () => {
  const { actualTheme } = useTheme();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isDark = actualTheme === "dark";
  const bgColor = isDark ? "bg-oxford-blue" : "bg-white";
  const textColor = isDark ? "text-ghost-white" : "text-gray-900";
  const textMuted = isDark ? "text-gray-400" : "text-gray-500";
  const borderColor = isDark ? "border-white/10" : "border-gray-200";
  const backgroundTextColor = isDark ? "text-white/5" : "text-gray-900/5";
  const panelBg = isDark ? "bg-white/5" : "bg-gray-50";
  const panelBgHover = isDark ? "hover:bg-white/8" : "hover:bg-gray-100/80";

  return (
    <section
      id="services"
      className={`py-24 sm:py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}
    >
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className={`absolute top-20 left-4 sm:left-8 lg:left-16 ${backgroundTextColor} font-black text-[100px] sm:text-[140px] lg:text-[200px] xl:text-[240px] leading-none select-none`}>
          SERVICES
        </div>
      </div>

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-aquamarine/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/3 left-0 w-[300px] h-[300px] lg:w-[450px] lg:h-[450px] bg-tropical-indigo/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 sm:mb-16"
        >
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold ${textColor}`}>SERVICES</h2>
          <p className={`mt-3 text-base sm:text-lg ${textMuted} max-w-xl`}>
            Alles was Sie brauchen, um digital erfolgreich zu sein.
          </p>
        </motion.div>

        {/* ── Desktop layout (lg+) ── */}
        <div className="hidden lg:flex gap-10 xl:gap-16">
          <div className="lg:w-[420px] xl:w-[480px] shrink-0">
            <div className="space-y-2">
              {content.services.items.map((service, index) => {
                const isActive = activeIndex === index;
                const Icon = service.icon;
                return (
                  <motion.button
                    key={service.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.07 }}
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className={`relative w-full text-left rounded-2xl transition-all duration-300 overflow-hidden group ${
                      isActive
                        ? isDark
                          ? "bg-white/10 border border-aquamarine/30 shadow-lg shadow-aquamarine/5"
                          : "bg-gray-100 border border-aquamarine/40 shadow-lg shadow-aquamarine/10"
                        : `${panelBg} ${panelBgHover} border ${borderColor}`
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="serviceAccentDesktop"
                        className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.accent}`}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                    <div className="flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3.5 sm:py-4">
                      <div className={`shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${service.accent} rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 ${isActive ? "scale-110" : "group-hover:scale-105"}`}>
                        <Icon className="text-lg sm:text-xl text-black" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-bold text-sm sm:text-base truncate ${isActive ? "text-aquamarine" : textColor}`}>
                            {service.title}
                          </span>
                          <span className={`shrink-0 text-xs font-mono ${isActive ? "text-aquamarine/70" : textMuted}`}>
                            {service.number}
                          </span>
                        </div>
                        <span className={`text-xs ${isActive ? "text-aquamarine/60" : textMuted}`}>
                          {service.stat}
                        </span>
                      </div>
                      <motion.div
                        animate={{ x: isActive ? 0 : -4, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <HiArrowRight className="text-aquamarine text-base shrink-0" />
                      </motion.div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              {activeIndex !== null && (() => {
                const active = content.services.items[activeIndex];
                return (
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className={`h-full rounded-2xl sm:rounded-3xl border ${borderColor} overflow-hidden ${isDark ? "bg-white/5" : "bg-gray-50"}`}
                  >
                    <div className={`h-1.5 w-full bg-gradient-to-r ${active.accent}`} />
                    <div className="p-6 sm:p-8 lg:p-10">
                      <div className="flex items-start justify-between gap-4 mb-6 sm:mb-8">
                        <div className="flex items-center gap-4 sm:gap-5">
                          <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${active.accent} rounded-2xl flex items-center justify-center shadow-xl shrink-0`}>
                            {React.createElement(active.icon, { className: "text-2xl sm:text-3xl lg:text-4xl text-black" })}
                          </div>
                          <div>
                            <p className={`text-xs sm:text-sm font-mono ${textMuted} mb-1`}>{active.number}</p>
                            <h3
                              className={`text-xl sm:text-2xl lg:text-3xl font-bold ${textColor}`}
                              style={{ letterSpacing: "-0.02em" }}
                            >
                              {active.title}
                            </h3>
                          </div>
                        </div>
                        <span className="shrink-0 px-3 py-1.5 rounded-full text-xs font-bold border bg-aquamarine/10 border-aquamarine/30 text-aquamarine">
                          {active.stat}
                        </span>
                      </div>
                      <p className={`${textMuted} text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8`}>
                        {active.description}
                      </p>
                      <div className={`w-full h-px ${isDark ? "bg-white/10" : "bg-gray-200"} mb-6 sm:mb-8`} />
                      <div className="mb-6 sm:mb-8">
                        <p className={`text-xs font-semibold uppercase tracking-widest ${textMuted} mb-4`}>
                          Leistungen im Überblick
                        </p>
                        <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                          {active.features.map((feature, i) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.25, delay: i * 0.07 }}
                              className={`flex items-center gap-2.5 px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${active.accent} shrink-0`} />
                              <span className={`${textColor} text-xs sm:text-sm font-medium`}>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                      <motion.a
                        href="/project-questionnaire"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03, boxShadow: "0 0 24px rgba(1,255,169,0.25)" }}
                        whileTap={{ scale: 0.97 }}
                        className={`inline-flex items-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 bg-gradient-to-r ${active.accent} text-black font-bold rounded-full text-sm sm:text-base shadow-lg transition-all duration-300`}
                      >
                        Jetzt anfragen
                        <HiExternalLink className="text-base sm:text-lg" />
                      </motion.a>
                    </div>
                  </motion.div>
                );
              })()}
              {activeIndex === null && (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className={`h-full min-h-[300px] rounded-2xl sm:rounded-3xl border border-dashed ${borderColor} flex items-center justify-center ${isDark ? "bg-white/2" : "bg-gray-50/50"}`}
                >
                  <p className={`${textMuted} text-sm`}>Wählen Sie einen Service aus.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── Mobile layout (< lg) – accordion ── */}
        <div className="flex flex-col gap-3 lg:hidden">
          {content.services.items.map((service, index) => {
            const isOpen = activeIndex === index;
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
                  isOpen
                    ? isDark
                      ? "bg-white/10 border-aquamarine/30 shadow-lg shadow-aquamarine/5"
                      : "bg-gray-100 border-aquamarine/40 shadow-lg shadow-aquamarine/10"
                    : `${panelBg} ${borderColor}`
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isOpen ? null : index)}
                  className="w-full text-left"
                >
                  <div className="flex items-center gap-3 px-4 py-4">
                    {isOpen && (
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${service.accent} rounded-l-2xl`} />
                    )}
                    <div className={`shrink-0 w-10 h-10 bg-gradient-to-br ${service.accent} rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 ${isOpen ? "scale-110" : ""}`}>
                      <Icon className="text-lg text-black" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`font-bold text-sm truncate ${isOpen ? "text-aquamarine" : textColor}`}>
                          {service.title}
                        </span>
                        <span className={`shrink-0 text-xs font-mono ${isOpen ? "text-aquamarine/70" : textMuted}`}>
                          {service.number}
                        </span>
                      </div>
                      <span className={`text-xs ${isOpen ? "text-aquamarine/60" : textMuted}`}>
                        {service.stat}
                      </span>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      className="shrink-0"
                    >
                      <HiChevronDown className={`text-xl ${isOpen ? "text-aquamarine" : textMuted}`} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className={`h-0.5 w-full bg-gradient-to-r ${service.accent}`} />
                      <div className="p-4 pt-5">
                        <p className={`${textMuted} text-sm leading-relaxed mb-5`}>
                          {service.description}
                        </p>
                        <p className={`text-xs font-semibold uppercase tracking-widest ${textMuted} mb-3`}>
                          Leistungen im Überblick
                        </p>
                        <div className="grid grid-cols-2 gap-2 mb-5">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, scale: 0.95 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.2, delay: i * 0.06 }}
                              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border ${isDark ? "bg-white/5 border-white/10" : "bg-white border-gray-200"}`}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${service.accent} shrink-0`} />
                              <span className={`${textColor} text-xs font-medium`}>{feature}</span>
                            </motion.div>
                          ))}
                        </div>
                        <motion.a
                          href="/project-questionnaire"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          className={`inline-flex items-center gap-2 px-5 py-3 bg-gradient-to-r ${service.accent} text-black font-bold rounded-full text-sm shadow-lg transition-all duration-300`}
                        >
                          Jetzt anfragen
                          <HiExternalLink className="text-base" />
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
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-between gap-5 p-5 sm:p-6 lg:p-8 rounded-2xl border border-dashed border-aquamarine/30 bg-aquamarine/5"
        >
          <div>
            <p className={`font-bold text-base sm:text-lg lg:text-xl ${textColor}`}>
              Nicht sicher, was Sie brauchen?
            </p>
            <p className={`text-xs sm:text-sm mt-1 ${textMuted}`}>
              Wir beraten Sie kostenlos und unverbindlich.
            </p>
          </div>
          <motion.a
            href="/project-questionnaire"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(1,255,169,0.25)" }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-aquamarine to-tropical-indigo text-black font-bold rounded-full text-sm sm:text-base transition-all duration-300 shadow-lg"
          >
            Projekt starten
            <HiArrowRight className="text-base" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(Services);