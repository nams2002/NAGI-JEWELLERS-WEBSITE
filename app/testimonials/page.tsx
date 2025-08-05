import type { Metadata } from 'next'
import TestimonialsHero from '@/components/testimonials/TestimonialsHero'
import CustomerReviews from '@/components/testimonials/CustomerReviews'
import TrustIndicators from '@/components/testimonials/TrustIndicators'
import SocialProof from '@/components/testimonials/SocialProof'
import ReviewsCTA from '@/components/testimonials/ReviewsCTA'

export const metadata: Metadata = {
  title: 'Customer Reviews & Testimonials - NAGI JEWELLERS LTD | Trusted by 10,000+ Customers',
  description: 'Read authentic customer reviews and testimonials for NAGI JEWELLERS LTD. See why 10,000+ customers trust us for quality jewellery with 4.5★ Amazon rating.',
  keywords: 'customer reviews, testimonials, nagi jewellers reviews, amazon reviews, customer feedback, trust, quality jewellery',
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen">
      <TestimonialsHero />
      <TrustIndicators />
      <CustomerReviews />
      <SocialProof />
      <ReviewsCTA />
    </div>
  )
}
