import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Karriere & Stellenangebote',
  description: 'Werde Teil von Gentle Group. Offene Stellen in Webentwicklung, Design und Marketing. Arbeiten mit modernen Technologien in Düsseldorf.',
  openGraph: {
    title: 'Karriere | Gentle Group',
    description: 'Offene Stellen bei Gentle Group. Werde Teil unseres Teams.',
  },
  alternates: {
    canonical: '/opportunity',
  },
}

export default function OpportunityLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
