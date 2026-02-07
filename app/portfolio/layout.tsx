import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio & Referenzen',
  description: 'Unsere erfolgreichen Projekte: Beauty-Websites, E-Commerce, SaaS-Lösungen und mehr. Über 50 Projekte für Kunden aus verschiedenen Branchen.',
  openGraph: {
    title: 'Portfolio & Referenzen | Gentle Group',
    description: 'Über 50 erfolgreiche Projekte. Beauty, Tech, Immobilien und mehr.',
  },
  alternates: {
    canonical: '/portfolio',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
