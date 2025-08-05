import type { Metadata } from 'next'
import ContactHero from '@/components/contact/ContactHero'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'
import FAQ from '@/components/contact/FAQ'
import ContactCTA from '@/components/contact/ContactCTA'

export const metadata: Metadata = {
  title: 'Contact Us - NAGI JEWELLERS LTD | Get in Touch for Jewellery Queries',
  description: 'Contact NAGI JEWELLERS LTD for jewellery queries, customer support, and personalized assistance. WhatsApp, phone, email, and social media support available.',
  keywords: 'contact nagi jewellers, customer support, jewellery queries, whatsapp contact, phone number, email support',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactInfo />
      <ContactForm />
      <FAQ />
      <ContactCTA />
    </div>
  )
}
