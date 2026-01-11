import dynamic from 'next/dynamic'
import Hero from '@/components/Hero'
import Services from '@/components/Services'

// Lazy-load components below the fold for better initial page load
const Products = dynamic(() => import('@/components/Products'), {
  loading: () => <div className="h-screen" />
})
const Work = dynamic(() => import('@/components/Work'), {
  loading: () => <div className="h-screen" />
})
const Team = dynamic(() => import('@/components/Team'), {
  loading: () => <div className="h-screen" />
})
const CustomerCarousel = dynamic(() => import('@/components/CustomerCarousel'), {
  loading: () => <div className="h-32" />
})
const Reviews = dynamic(() => import('@/components/Reviews'), {
  loading: () => <div className="h-screen" />
})
const FAQ = dynamic(() => import('@/components/FAQ'), {
  loading: () => <div className="h-screen" />
})
const NeedProject = dynamic(() => import('@/components/NeedProject'), {
  loading: () => <div className="h-screen" />
})
const Blog = dynamic(() => import('@/components/Blog'), {
  loading: () => <div className="h-screen" />
})

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <Services />
      <Products />
      <Work />
      <Team />
      <CustomerCarousel />
      <Reviews />
      <FAQ />
      <NeedProject />
      <Blog />
    </main>
  )
}