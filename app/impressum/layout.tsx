import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum der Gentle Group. Angaben gemäß § 5 TMG. Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV.',
  alternates: {
    canonical: '/impressum',
  },
  robots: {
    index: false,
    follow: true,
  },
}

export default function ImpressumLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
