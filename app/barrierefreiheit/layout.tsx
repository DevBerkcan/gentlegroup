import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Barrierefreiheit',
  description: 'Erklärung zur Barrierefreiheit der Gentle Group Website. WCAG 2.1 Konformität und Accessibility-Features.',
  alternates: {
    canonical: '/barrierefreiheit',
  },
}

export default function BarrierefreiheitLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
