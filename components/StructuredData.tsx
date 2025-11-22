'use client'

import Script from 'next/script'

export default function StructuredData() {
  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Gentle Group',
    description: 'Dachmarke für innovative Software-Lösungen der GentleSuite',
    url: 'https://gentle-group.com',
    logo: 'https://gentle-group.com/logo.svg',
    image: 'https://gentle-group.com/og-image.svg',
    sameAs: [
      'https://www.linkedin.com/company/gentle-group',
      'https://github.com/gentle-group',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@gentle-group.com',
      availableLanguage: ['de', 'en']
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Düsseldorf',
      addressRegion: 'NRW',
      addressCountry: 'DE'
    },
    brand: {
      '@type': 'Brand',
      name: 'GentleSuite',
      description: 'Software-Suite für digitale Lösungen'
    }
  }

  // LocalBusiness Schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Gentle Group',
    description: 'Professionelle Webentwicklung, KI-Lösungen und Cloud Services aus Düsseldorf',
    url: 'https://gentle-group.com',
    logo: 'https://gentle-group.com/logo.svg',
    image: 'https://gentle-group.com/og-image.svg',
    telephone: '+49-XXX-XXXXXX', // Hier echte Telefonnummer eintragen
    email: 'info@gentle-group.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Düsseldorf',
      addressRegion: 'Nordrhein-Westfalen',
      addressCountry: 'DE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 51.2277,
      longitude: 6.7735
    },
    areaServed: {
      '@type': 'Country',
      name: 'Deutschland'
    },
    priceRange: '€€',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00'
    }
  }

  // Software Products Schema (GentleSuite)
  const softwareProductsSchema = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'GentleSuite Software Products',
    description: 'Innovative Software-Lösungen der GentleSuite',
    itemListElement: [
      {
        '@type': 'SoftwareApplication',
        name: 'Gentle Access',
        description: 'SaaS-Lösung für digitale Barrierefreiheit',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '49',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '49',
            priceCurrency: 'EUR',
            billingDuration: 'P1M',
            referenceQuantity: {
              '@type': 'QuantitativeValue',
              value: '1'
            }
          }
        },
        featureList: 'WCAG 2.1 Compliance-Check, Automatische Optimierungen, Screen-Reader Kompatibilität, Kontrast-Anpassungen'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'GentleCalc',
        description: 'Individueller Preisrechner für Beauty & Wellness',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '39',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '39',
            priceCurrency: 'EUR',
            billingDuration: 'P1M'
          }
        },
        featureList: 'Individuell konfigurierbar, Automatische Preisberechnung, Lead-Generierung, Direkte Buchungsanfragen'
      },
      {
        '@type': 'SoftwareApplication',
        name: 'GentleTrack',
        description: 'Projekt-Tracking in Echtzeit',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '29',
          priceCurrency: 'EUR',
          priceSpecification: {
            '@type': 'UnitPriceSpecification',
            price: '29',
            priceCurrency: 'EUR',
            billingDuration: 'P1M'
          }
        },
        featureList: 'Live-Status, Automatische Updates, Transparente Kommunikation, Meilenstein-Tracking'
      }
    ]
  }

  // Service Schema
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Software Development',
    provider: {
      '@type': 'Organization',
      name: 'Gentle Group'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Deutschland'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Webentwicklung & Design',
            description: 'Moderne, responsive Websites mit außergewöhnlichem Design'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'KI-Lösungen',
            description: 'Intelligente Automatisierung und KI-Integration'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Azure Cloud',
            description: 'Skalierbare Cloud-Lösungen mit Microsoft Azure'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Full-Stack Development',
            description: 'Komplette Software-Entwicklung von Frontend bis Backend'
          }
        }
      ]
    }
  }

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Gentle Group',
    description: 'Dachmarke für innovative Software-Lösungen der GentleSuite',
    url: 'https://gentle-group.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://gentle-group.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <>
      {/* Organization Schema */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />

      {/* LocalBusiness Schema */}
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />

      {/* Software Products Schema */}
      <Script
        id="software-products-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareProductsSchema)
        }}
      />

      {/* Service Schema */}
      <Script
        id="service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />

      {/* WebSite Schema */}
      <Script
        id="website-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
    </>
  )
}
