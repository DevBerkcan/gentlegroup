export default function Loading() {
  return (
    <main className="min-h-screen bg-oxford-blue flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        {/* Animated spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-ghost-white/10" />
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-aquamarine animate-spin" />
        </div>
        <p className="text-ghost-white/60 text-sm font-medium">Wird geladen...</p>
      </div>
    </main>
  )
}
