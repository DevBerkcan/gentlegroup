import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tech-Blog der Gentle Group: Artikel über Webentwicklung, Next.js, React, KI-Integration, TypeScript und moderne Software-Architektur.',
  openGraph: {
    title: 'Blog | Gentle Group',
    description: 'Fachartikel über Webentwicklung, KI und moderne Technologien.',
  },
  alternates: {
    canonical: '/blog',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
