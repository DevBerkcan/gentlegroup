"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiCode,
  HiCloud,
  HiDeviceMobile,
  HiTerminal,
  HiChevronDown,
} from "react-icons/hi";
import { FaAndroid, FaRobot } from "react-icons/fa";
import { useTheme } from "@/contexts/ThemeContext";

// Text content configuration for consistency
const content = {
  services: {
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
        icon: FaRobot,
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
        icon: HiDeviceMobile,
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
        icon: HiTerminal,
        title: "Full-Stack Development",
        description:
          "Komplette Software-Entwicklung von Frontend über Backend bis zur Datenbank.",
        features: [".NET Core", "React", "SQL & NoSQL", "REST APIs"],
      },
      {
        icon: FaAndroid,
        title: "Android/iOs Apps",
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
  const { actualTheme } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Adaptive colors based on theme
  const bgColor = actualTheme === "dark" ? "bg-oxford-blue" : "bg-white";
  const textColor =
    actualTheme === "dark" ? "text-ghost-white" : "text-gray-900";
  const textMuted = actualTheme === "dark" ? "text-gray-400" : "text-gray-600";
  const borderColor =
    actualTheme === "dark" ? "border-gray-700" : "border-gray-200";
  const hoverBg =
    actualTheme === "dark" ? "hover:bg-gray-800/50" : "hover:bg-gray-50";
  const activeBg = actualTheme === "dark" ? "bg-gray-800/30" : "bg-gray-50";
  const backgroundTextColor =
    actualTheme === "dark" ? "text-white/5" : "text-gray-900/5";

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="services"
      className={`py-32 lg:py-40 relative overflow-hidden ${bgColor} transition-colors duration-300`}
    >
      {/* Background "SERVICES" Text */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div
          className={`absolute top-20 left-8 lg:left-16 ${backgroundTextColor} font-black text-[120px] lg:text-[180px] xl:text-[220px] leading-none select-none`}
        >
          SERVICES
        </div>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 lg:px-16">
        {/* Section Title - Top Left */}
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
        </motion.div>

        {/* Accordion List */}
        <div className="space-y-4">
          {content.services.items.map((service, index) => {
            const isOpen = openIndex === index;
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`${borderColor} border rounded-2xl overflow-hidden transition-all duration-300 ${
                  isOpen ? activeBg : ""
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className={`w-full px-6 lg:px-8 py-6 flex items-center justify-between ${hoverBg} transition-colors duration-200`}
                >
                  <div className="flex items-center gap-4 lg:gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-aquamarine to-tropical-indigo rounded-xl flex items-center justify-center">
                      <Icon className="text-2xl lg:text-3xl text-black" />
                    </div>

                    {/* Title */}
                    <h3
                      className={`text-xl lg:text-2xl font-bold text-left ${textColor}`}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <HiChevronDown className={`text-2xl ${textMuted}`} />
                  </motion.div>
                </button>

                {/* Accordion Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 lg:px-8 pb-6 pt-2 lg:pl-24">
                        {/* Description */}
                        <p
                          className={`${textMuted} text-base lg:text-lg mb-6 leading-relaxed`}
                        >
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="space-y-3">
                          {service.features.map((feature, i) => (
                            <motion.div
                              key={feature}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.3, delay: i * 0.05 }}
                              className="flex items-center gap-3"
                            >
                              <div className="w-2 h-2 bg-aquamarine rounded-full flex-shrink-0" />
                              <span className={`${textColor} text-base`}>
                                {feature}
                              </span>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Services);
