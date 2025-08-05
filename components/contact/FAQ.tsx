'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle, ShoppingBag, Truck, Shield, CreditCard, RefreshCw } from 'lucide-react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)

  const faqCategories = [
    {
      title: 'General Questions',
      icon: HelpCircle,
      faqs: [
        {
          question: 'How long has NAGI JEWELLERS been in business?',
          answer: 'NAGI JEWELLERS LTD has been serving customers for over 26 years since 1999. We started as a small offline store and have grown to serve customers nationwide through Amazon while maintaining our commitment to quality and authenticity.'
        },
        {
          question: 'Are your products authentic and genuine?',
          answer: 'Yes, absolutely! Every piece of jewellery we sell is 100% authentic and genuine. We are BIS certified and provide authenticity guarantees with all our products. Our 26+ years of reputation is built on trust and quality.'
        },
        {
          question: 'What types of jewellery do you offer?',
          answer: 'We offer a wide range of jewellery including artificial jewellery, sterling silver pieces, and gold-plated items. Our collection includes necklaces, earrings, bracelets, bangles, rings, and complete jewelry sets for all occasions.'
        }
      ]
    },
    {
      title: 'Shopping & Orders',
      icon: ShoppingBag,
      faqs: [
        {
          question: 'How can I place an order?',
          answer: 'You can place orders through our Amazon store. Simply visit our Amazon shop, browse our collection, and place your order. You can also contact us via WhatsApp for personalized assistance and product recommendations.'
        },
        {
          question: 'Do you offer custom designs?',
          answer: 'Yes, we offer custom design services! Contact us through WhatsApp or our contact form with your requirements, and our experienced team will work with you to create a unique piece that matches your vision.'
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'Through Amazon, you can use all standard payment methods including credit/debit cards, UPI, net banking, EMI options, and Amazon Pay. All transactions are secure and protected.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      icon: Truck,
      faqs: [
        {
          question: 'What are your shipping options?',
          answer: 'We ship nationwide through Amazon\'s reliable delivery network. You can choose from standard delivery, express delivery, and same-day delivery (in select cities). All orders are carefully packaged to ensure safe delivery.'
        },
        {
          question: 'How long does delivery take?',
          answer: 'Delivery times vary by location: Metro cities: 1-2 days, Other cities: 2-4 days, Remote areas: 4-7 days. Express and same-day delivery options are available in select locations for urgent orders.'
        },
        {
          question: 'Do you provide tracking information?',
          answer: 'Yes, you\'ll receive tracking information via SMS and email once your order is shipped. You can track your order through Amazon\'s tracking system or contact us for updates.'
        }
      ]
    },
    {
      title: 'Returns & Warranty',
      icon: RefreshCw,
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We offer a 7-day return policy through Amazon. Items must be in original condition with tags and packaging. Custom-made items are not eligible for return unless there\'s a manufacturing defect.'
        },
        {
          question: 'Do you provide warranty on your products?',
          answer: 'Yes, we provide warranty on our products. Silver items come with 6-month warranty, gold-plated items with 3-month warranty, and artificial jewellery with 1-month warranty against manufacturing defects.'
        },
        {
          question: 'How do I initiate a return or exchange?',
          answer: 'You can initiate returns through your Amazon account or contact our customer service. We\'ll guide you through the process and arrange pickup if needed. Refunds are processed within 3-5 business days.'
        }
      ]
    },
    {
      title: 'Care & Maintenance',
      icon: Shield,
      faqs: [
        {
          question: 'How should I care for my jewellery?',
          answer: 'Store in a dry place, avoid contact with perfumes/chemicals, clean gently with a soft cloth, and remove before swimming or exercising. We provide detailed care instructions with each purchase.'
        },
        {
          question: 'Can you repair or maintain my jewellery?',
          answer: 'Yes, we offer repair and maintenance services for jewellery purchased from us. Contact us with photos and details, and we\'ll provide guidance on repair options and costs.'
        },
        {
          question: 'How long will the gold plating last?',
          answer: 'With proper care, our gold plating typically lasts 6-12 months with regular wear. The longevity depends on usage, care, and skin type. We offer re-plating services for items purchased from us.'
        }
      ]
    }
  ]

  const toggleFAQ = (categoryIndex: number, faqIndex: number) => {
    const globalIndex = categoryIndex * 100 + faqIndex
    setOpenFAQ(openFAQ === globalIndex ? null : globalIndex)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-elegant-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Frequently Asked <span className="text-gold-600">Questions</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            Find quick answers to common questions about our products, services, and policies. 
            Can't find what you're looking for? Contact us directly!
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-6">
                <div className="flex items-center space-x-3">
                  <category.icon className="h-8 w-8 text-white" />
                  <h3 className="text-2xl font-serif font-bold text-white">{category.title}</h3>
                </div>
              </div>

              {/* FAQs */}
              <div className="divide-y divide-elegant-200">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex
                  const isOpen = openFAQ === globalIndex

                  return (
                    <div key={faqIndex}>
                      <button
                        onClick={() => toggleFAQ(categoryIndex, faqIndex)}
                        className="w-full text-left p-6 hover:bg-elegant-50 transition-colors duration-300 focus:outline-none focus:bg-elegant-50"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-lg font-semibold text-elegant-800 pr-4">
                            {faq.question}
                          </h4>
                          {isOpen ? (
                            <ChevronUp className="h-5 w-5 text-gold-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="h-5 w-5 text-gold-600 flex-shrink-0" />
                          )}
                        </div>
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-6">
                          <div className="bg-gold-50 rounded-lg p-4 border-l-4 border-gold-500">
                            <p className="text-elegant-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-elegant-800 to-elegant-900 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl font-serif font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-elegant-300 mb-8 max-w-2xl mx-auto">
              Our friendly customer service team is here to help! Get in touch with us 
              for personalized assistance and expert advice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                <span>WhatsApp Support</span>
              </a>
              <a
                href="tel:+919876543210"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <CreditCard className="h-5 w-5" />
                <span>Call Us Now</span>
              </a>
              <a
                href="mailto:info@nagijewellers.com"
                className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <HelpCircle className="h-5 w-5" />
                <span>Email Support</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
