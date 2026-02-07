import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AGB',
  description: 'Allgemeine Geschäftsbedingungen der Gentle Group für Webentwicklung, Software-Lösungen und digitale Dienstleistungen.',
  alternates: {
    canonical: '/agb',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function AGBLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
