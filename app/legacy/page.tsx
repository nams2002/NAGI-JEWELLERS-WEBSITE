import type { Metadata } from 'next'
import LegacyHero from '@/components/legacy/LegacyHero'
import Timeline from '@/components/legacy/Timeline'
import FounderStory from '@/components/legacy/FounderStory'
import Values from '@/components/legacy/Values'
import Milestones from '@/components/legacy/Milestones'

export const metadata: Metadata = {
  title: 'Our Legacy - NAGI JEWELLERS LTD | 26+ Years of Trust & Tradition',
  description: 'Discover the inspiring journey of NAGI JEWELLERS LTD. From humble beginnings in 1999 to becoming a trusted name in authentic jewellery across India.',
  keywords: 'nagi jewellers history, legacy, founder story, jewellery tradition, family business, trust, authentic jewellery',
}

export default function LegacyPage() {
  return (
    <div className="min-h-screen">
      <LegacyHero />
      <Timeline />
      <FounderStory />
      <Values />
      <Milestones />
    </div>
  )
}
