// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import StructuredData from '@/components/StructuredData'
import AccessibilityTool from '@/components/AccessibilityTool'
import Navigation from '@/components/Navigation'
import GradientCursor from '@/components/effects/GradientCursor'
import CustomCursor from '@/components/effects/CustomCursor'

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>

      <body>
        <StructuredData />
        <CustomCursor />
        <GradientCursor />
        <Navigation />

        {/* Main content - wrapped for accessibility filters */}
        <div id="page-root">
          {children}
        </div>

        <AccessibilityTool />
        <Analytics />
      </body>
    </html>
  )
}