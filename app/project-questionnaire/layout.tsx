import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projekt-Fragebogen',
  description: 'Beschreiben Sie Ihr Projekt in wenigen Schritten. Wir erstellen ein individuelles Angebot für Ihre Website, App oder Software-Lösung.',
  openGraph: {
    title: 'Projekt-Fragebogen | Gentle Group',
    description: 'Starten Sie Ihr Projekt. Füllen Sie unseren Fragebogen aus.',
  },
  alternates: {
    canonical: '/project-questionnaire',
  },
}

export default function QuestionnaireLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
