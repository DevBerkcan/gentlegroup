import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GentleTrack - Projekt-Tracking in Echtzeit',
  description: 'GentleTrack: SaaS-Lösung für transparentes Projektmanagement. Echtzeit-Updates, automatische Benachrichtigungen und Meilenstein-Tracking.',
  openGraph: {
    title: 'GentleTrack | Gentle Group',
    description: 'Projekt-Tracking in Echtzeit. Transparentes Projektmanagement für Ihre Kunden.',
  },
  alternates: {
    canonical: '/products/gentletrack',
  },
}

export default function GentleTrackLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
