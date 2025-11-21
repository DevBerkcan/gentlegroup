import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Work from '@/components/Work'
import Team from '@/components/Team'
import Reviews from '@/components/Reviews'
import FAQ from '@/components/FAQ'
import NeedProject from '@/components/NeedProject'
import Products from '@/components/Products'
import Blog from '@/components/Blog'
import CustomerCarousel from '@/components/CustomerCarousel'
import Footer from '@/components/Footer'
import Navigation from '@/components/Navigation'
import Analytics from '@/components/Analytics'
import CookieConsent from '@/components/CookieConsent'

export default function Home() {
  return (
    <>
      <Analytics />
      <CookieConsent />
      <Navigation />
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
        <Footer />
      </main>
    </>
  )
}