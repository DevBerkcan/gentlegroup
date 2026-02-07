import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GentleBook - Online-Terminbuchung',
  description: 'GentleBook: 24/7 Online-Terminbuchung für Beauty, Friseure und lokale Dienstleister. Automatische Bestätigungen, Kalender-Sync und WhatsApp-Integration.',
  openGraph: {
    title: 'GentleBook | Gentle Group',
    description: 'Online-Terminbuchung für Beauty & lokale Dienstleister. 24/7 Buchungen.',
  },
  alternates: {
    canonical: '/products/gentlebook',
  },
}

export default function GentleBookLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
