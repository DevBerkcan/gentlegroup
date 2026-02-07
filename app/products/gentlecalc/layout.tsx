import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GentleCalc - Intelligenter Preisrechner',
  description: 'GentleCalc: Der intelligente Preisrechner für Beauty & Wellness. Automatische Preisberechnung, Lead-Generierung und Upsell-Automatik für Ihr Business.',
  openGraph: {
    title: 'GentleCalc | Gentle Group',
    description: 'Intelligenter Preisrechner für Beauty & Wellness. Mehr Umsatz durch transparente Preise.',
  },
  alternates: {
    canonical: '/products/gentlecalc',
  },
}

export default function GentleCalcLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
