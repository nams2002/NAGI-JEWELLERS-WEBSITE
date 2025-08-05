import { Shield, Award, Users, Star, Clock, Heart } from 'lucide-react'

const TrustSection = () => {
  const trustPoints = [
    {
      icon: Clock,
      title: '26+ Years',
      subtitle: 'of Excellence',
      description: 'Over two decades of consistent quality and customer satisfaction'
    },
    {
      icon: Users,
      title: '10,000+',
      subtitle: 'Happy Customers',
      description: 'Trusted by thousands of families across India'
    },
    {
      icon: Award,
      title: 'BIS Certified',
      subtitle: 'Quality Assured',
      description: 'All our products meet the highest quality standards'
    },
    {
      icon: Star,
      title: '4.5★ Rating',
      subtitle: 'on Amazon',
      description: 'Consistently high ratings from verified customers'
    },
    {
      icon: Shield,
      title: '100% Authentic',
      subtitle: 'Guaranteed',
      description: 'Every piece is genuine and comes with authenticity guarantee'
    },
    {
      icon: Heart,
      title: 'Family Legacy',
      subtitle: 'Since 1999',
      description: 'A family business built on trust, tradition, and values'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-elegant-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Why Choose <span className="text-gold-600">NAGI JEWELLERS</span>?
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            Built on a foundation of trust, quality, and tradition. Our commitment to excellence 
            has made us a household name in authentic jewellery.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="card-elegant p-8 text-center group hover:shadow-2xl transition-all duration-500"
            >
              {/* Icon */}
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <point.icon className="h-10 w-10 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-elegant-800 mb-2">
                {point.title}
              </h3>
              <p className="text-gold-600 font-semibold mb-4 text-lg">
                {point.subtitle}
              </p>
              <p className="text-elegant-600 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Experience the NAGI Difference
            </h3>
            <p className="text-xl mb-8 text-gold-100 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust NAGI JEWELLERS for their special moments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://amazon.in/shops/nagijewellers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-gold-600 hover:bg-gold-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Shop Our Collection
              </a>
              <a
                href="/legacy"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold-600 font-semibold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Learn Our Story
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TrustSection
