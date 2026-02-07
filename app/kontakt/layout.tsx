import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Kontaktieren Sie Gentle Group für Webentwicklung, KI-Lösungen und digitale Projekte. Kostenloses Erstgespräch in Düsseldorf oder remote.',
  openGraph: {
    title: 'Kontakt | Gentle Group',
    description: 'Kontaktieren Sie uns für Ihr digitales Projekt. Kostenloses Erstgespräch.',
  },
  alternates: {
    canonical: '/kontakt',
  },
}

export default function KontaktLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
