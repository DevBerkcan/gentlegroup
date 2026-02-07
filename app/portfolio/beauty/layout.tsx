import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Beauty & Wellness Portfolio',
  description: 'Webdesign und digitale Lösungen für die Beauty-Branche. Online-Buchungssysteme, Preisrechner und Marketing für Kosmetikstudios, Friseure und Ästhetik-Praxen.',
  openGraph: {
    title: 'Beauty & Wellness Portfolio | Gentle Group',
    description: 'Digitale Lösungen für Beauty & Wellness. Buchungssysteme, Preisrechner und Webdesign.',
  },
  alternates: {
    canonical: '/portfolio/beauty',
  },
}

export default function BeautyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
