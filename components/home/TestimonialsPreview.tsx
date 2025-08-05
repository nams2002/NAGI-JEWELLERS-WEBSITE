import Image from 'next/image'
import Link from 'next/link'
import { Star, Quote, ArrowRight } from 'lucide-react'

const TestimonialsPreview = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      text: 'Absolutely beautiful jewellery! The quality is exceptional and exactly as described. NAGI JEWELLERS has been my go-to for all special occasions.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      product: 'Gold-Plated Necklace Set',
      verified: true
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      rating: 5,
      text: 'Bought earrings for my wife\'s birthday. The craftsmanship is outstanding and the delivery was prompt. Highly recommend NAGI JEWELLERS!',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      product: 'Sterling Silver Earrings',
      verified: true
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'The traditional designs are simply gorgeous! Quality is top-notch and the customer service is excellent. Will definitely order again.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      product: 'Traditional Bangles',
      verified: true
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            What Our <span className="text-gold-600">Customers Say</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued customers have to say 
            about their experience with NAGI JEWELLERS.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="card-elegant p-8 relative group hover:shadow-2xl transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-gold-200 group-hover:text-gold-300 transition-colors duration-300">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-elegant-600 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="w-15 h-15 rounded-full object-cover"
                  />
                  {testimonial.verified && (
                    <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                      <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-800">{testimonial.name}</h4>
                  <p className="text-sm text-elegant-500">{testimonial.location}</p>
                  <p className="text-xs text-gold-600 font-medium mt-1">
                    Purchased: {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-white text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Join 10,000+ Happy Customers
          </h3>
          <p className="text-xl mb-8 text-gold-100 max-w-2xl mx-auto">
            Experience the trust and quality that has made NAGI JEWELLERS a household name for over 26 years.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="text-3xl font-bold mb-1">4.5★</h4>
              <p className="text-gold-100">Amazon Rating</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-1">10K+</h4>
              <p className="text-gold-100">Happy Customers</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-1">26+</h4>
              <p className="text-gold-100">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold mb-1">100%</h4>
              <p className="text-gold-100">Authentic Products</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gold-600 hover:bg-gold-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Shop Now on Amazon
            </a>
            <Link
              href="/testimonials"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsPreview
