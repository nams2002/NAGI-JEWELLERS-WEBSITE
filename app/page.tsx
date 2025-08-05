import HeroSection from '@/components/home/HeroSection'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import TrustSection from '@/components/home/TrustSection'
import LegacyPreview from '@/components/home/LegacyPreview'
import TestimonialsPreview from '@/components/home/TestimonialsPreview'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <TrustSection />
      <FeaturedProducts />
      <LegacyPreview />
      <TestimonialsPreview />
    </div>
  )
}
