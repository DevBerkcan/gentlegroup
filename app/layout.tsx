// app/layout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from '@/components/Analytics'
import AccessibilityTool from '@/components/AccessibilityTool'
import Navigation from '@/components/Navigation'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Gentle Group - Professionelle Webentwicklung & KI-Lösungen aus Düsseldorf',
  description: 'Gentle Group bietet innovative Softwarelösungen, modernes Design, KI-Integration und Cloud-Services.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>

      <body>
        {/* ✅ NAVIGATION - ALWAYS OUTSIDE FILTER ZONE */}
        <Navigation />

        {/* ✅ FILTER CONTAINER - ONLY MAIN CONTENT */}
        <div id="page-root">
          {children}
        </div>

        {/* ✅ ACCESSIBILITY TOOLS - ALWAYS OUTSIDE FILTER ZONE */}
        <AccessibilityTool />
        <Analytics />
      </body>
    </html>
  )
}