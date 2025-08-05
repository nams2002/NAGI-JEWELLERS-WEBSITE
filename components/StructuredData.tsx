import Script from 'next/script'

interface StructuredDataProps {
  type: 'organization' | 'product' | 'review' | 'breadcrumb'
  data?: any
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case 'organization':
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "NAGI JEWELLERS LTD",
          "alternateName": "Nagi Jewellers",
          "url": "https://nagijewellers.com",
          "logo": "https://nagijewellers.com/logo.png",
          "description": "NAGI JEWELLERS LTD - 26+ years of trust and tradition in authentic jewellery. Specializing in artificial, silver, and gold-plated jewellery.",
          "foundingDate": "1999",
          "founder": {
            "@type": "Person",
            "name": "Nagi Family"
          },
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Jewellery Street",
            "addressLocality": "Mumbai",
            "addressRegion": "Maharashtra",
            "postalCode": "400001",
            "addressCountry": "IN"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+91-98765-43210",
            "contactType": "customer service",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://amazon.in/shops/nagijewellers",
            "https://instagram.com/nagijewellers"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "1000",
            "bestRating": "5",
            "worstRating": "1"
          }
        }

      case 'product':
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data?.name || "NAGI JEWELLERS Collection",
          "description": data?.description || "Authentic jewellery from NAGI JEWELLERS LTD",
          "brand": {
            "@type": "Brand",
            "name": "NAGI JEWELLERS LTD"
          },
          "manufacturer": {
            "@type": "Organization",
            "name": "NAGI JEWELLERS LTD"
          },
          "category": "Jewellery",
          "offers": {
            "@type": "Offer",
            "price": data?.price || "999",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
              "@type": "Organization",
              "name": "NAGI JEWELLERS LTD"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.5",
            "reviewCount": "100"
          }
        }

      case 'review':
        return {
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "Organization",
            "name": "NAGI JEWELLERS LTD"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": data?.rating || "5",
            "bestRating": "5"
          },
          "author": {
            "@type": "Person",
            "name": data?.author || "Customer"
          },
          "reviewBody": data?.review || "Excellent quality and service from NAGI JEWELLERS"
        }

      case 'breadcrumb':
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": data?.breadcrumbs?.map((item: any, index: number) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
          })) || []
        }

      default:
        return {}
    }
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData())
      }}
    />
  )
}

export default StructuredData
