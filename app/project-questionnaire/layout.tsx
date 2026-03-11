// app/project-questionnaire/layout.tsx
export const dynamic = 'force-static'

export default function QuestionnaireLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-black text-ghost-white">
      {children}
    </div>
  )
}
