import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'GentleAccess - Barrierefreiheit leicht gemacht',
  description: 'GentleAccess: Automatische Barrierefreiheit für Ihre Website. WCAG 2.1 Compliance, Screen-Reader-Kompatibilität und Kontrast-Anpassungen.',
  openGraph: {
    title: 'GentleAccess | Gentle Group',
    description: 'Barrierefreiheit leicht gemacht. WCAG 2.1 Compliance für Ihre Website.',
  },
  alternates: {
    canonical: '/products/gentleaccess',
  },
}

export default function GentleAccessLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
