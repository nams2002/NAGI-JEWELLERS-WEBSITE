import type { Metadata } from 'next'
import CollectionHero from '@/components/collection/CollectionHero'
import CategoryFilter from '@/components/collection/CategoryFilter'
import ProductGrid from '@/components/collection/ProductGrid'
import CollectionCTA from '@/components/collection/CollectionCTA'

export const metadata: Metadata = {
  title: 'Jewellery Collection - NAGI JEWELLERS LTD | Artificial, Silver & Gold-Plated',
  description: 'Explore our exquisite collection of artificial, silver, and gold-plated jewellery. Shop authentic designs on Amazon with 26+ years of trust and quality.',
  keywords: 'jewellery collection, artificial jewellery, silver jewellery, gold plated jewellery, nagi jewellers, amazon jewellery, authentic designs',
}

export default function CollectionPage() {
  return (
    <div className="min-h-screen">
      <CollectionHero />
      <CategoryFilter />
      <ProductGrid />
      <CollectionCTA />
    </div>
  )
}
