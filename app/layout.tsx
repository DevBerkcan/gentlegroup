import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import StructuredData from '@/components/StructuredData'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Gentle Group - Professionelle Webentwicklung & KI-Lösungen aus Düsseldorf',
    template: '%s | Gentle Group'
  },
  description: 'Gentle Group - Dachmarke für innovative Software-Lösungen der GentleSuite. Professionelle Webentwicklung, KI-Integration, Cloud Services & SaaS-Produkte (Gentle Access, GentleCalc, GentleTrack) aus Düsseldorf.',
  keywords: [
    // Lokale Keywords
    'Webentwicklung Düsseldorf',
    'Software Entwicklung Düsseldorf',
    'KI-Integration Düsseldorf',
    // Service Keywords
    'Softwareentwicklung',
    'KI-Lösungen',
    'Azure Cloud',
    'Full-Stack Development',
    'Web-Apps',
    'SaaS',
    // Product Keywords
    'Gentle Access',
    'GentleCalc',
    'GentleTrack',
    'GentleSuite',
    'Barrierefreiheit Software',
    'Projekt Tracking',
    // General
    'Digital Solutions',
    'Cloud Services',
    'React Entwicklung',
    '.NET Entwicklung'
  ],
  authors: [{ name: 'Berk-Can Atesoglu', url: 'https://gentle-group.com' }],
  creator: 'Gentle Group',
  publisher: 'Gentle Group',
  metadataBase: new URL('https://gentle-group.com'),
  alternates: {
    canonical: '/',
    languages: {
      'de-DE': '/',
    }
  },
  category: 'technology',
  classification: 'Software Development, SaaS, Web Development',
  openGraph: {
    title: 'Gentle Group - Dachmarke für innovative Software-Lösungen der GentleSuite',
    description: 'Professionelle Webentwicklung, KI-Integration, Cloud Services & SaaS-Produkte (Gentle Access, GentleCalc, GentleTrack) aus Düsseldorf. Ihr Partner für digitale Transformation.',
    url: 'https://gentle-group.com',
    siteName: 'Gentle Group',
    locale: 'de_DE',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Gentle Group - Dachmarke für innovative Software-Lösungen der GentleSuite',
        type: 'image/svg+xml',
      },
    ],
    countryName: 'Deutschland',
    emails: ['info@gentle-group.com'],
    phoneNumbers: ['+49-XXX-XXXXXX'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gentle Group - Innovative Software-Lösungen der GentleSuite',
    description: 'Professionelle Webentwicklung, KI-Integration & SaaS aus Düsseldorf. Gentle Access, GentleCalc, GentleTrack.',
    images: ['/og-image.svg'],
    creator: '@gentlegroup',
    site: '@gentlegroup',
  },
  verification: {
    google: 'GOOGLE_SEARCH_CONSOLE_CODE_HIER_EINTRAGEN',
    // yandex: 'YANDEX_CODE',
    // other: 'OTHER_VERIFICATION_CODE',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        {/* Favicon - SVG (modern browsers) */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        {/* Favicon - ICO fallback (older browsers) */}
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        {/* Apple Touch Icon */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Web App Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#010A30" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="application-name" content="Gentle Group" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Gentle Group" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body>
        <StructuredData />
        {children}
        <Analytics />
      </body>
    </html>
  )
}