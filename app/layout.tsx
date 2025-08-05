import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://nagi-jewellers-website.vercel.app'),
  title: 'NAGI JEWELLERS LTD - Crafted with Trust Since 1999',
  description: 'Discover authentic jewellery from NAGI JEWELLERS LTD. 26+ years of trust, tradition, and quality craftsmanship. Shop our collection of artificial, silver, and gold-plated jewellery on Amazon.',
  keywords: 'jewellery, nagi jewellers, gold plated, silver jewellery, artificial jewellery, amazon seller, trust, legacy, authentic jewellery',
  authors: [{ name: 'NAGI JEWELLERS LTD' }],
  creator: 'NAGI JEWELLERS LTD',
  publisher: 'NAGI JEWELLERS LTD',
  openGraph: {
    title: 'NAGI JEWELLERS LTD - Crafted with Trust Since 1999',
    description: 'Discover authentic jewellery from NAGI JEWELLERS LTD. 26+ years of trust, tradition, and quality craftsmanship.',
    url: 'https://nagijewellers.com',
    siteName: 'NAGI JEWELLERS LTD',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'NAGI JEWELLERS LTD - Premium Jewellery Collection',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAGI JEWELLERS LTD - Crafted with Trust Since 1999',
    description: 'Discover authentic jewellery from NAGI JEWELLERS LTD. 26+ years of trust, tradition, and quality craftsmanship.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="min-h-screen bg-white text-elegant-800">
        <StructuredData type="organization" />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
