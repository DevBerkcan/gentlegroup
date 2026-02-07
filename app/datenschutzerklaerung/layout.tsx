import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung der Gentle Group. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.',
  alternates: {
    canonical: '/datenschutzerklaerung',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function DatenschutzLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
