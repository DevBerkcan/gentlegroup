// app/(site)/projects/page.tsx
import AllProjects from '@/components/AllProjects'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alle Projekte',
  description: 'Entdecken Sie alle Projekte von Gentle Group – von Full-Stack-Entwicklung über E-Commerce bis hin zu KI-Integration.',
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  return <AllProjects />
}
