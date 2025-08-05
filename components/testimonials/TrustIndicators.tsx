import { Shield, Award, Clock, Users, Star, Heart, CheckCircle, Globe } from 'lucide-react'

const TrustIndicators = () => {
  const trustMetrics = [
    {
      icon: Clock,
      title: '26+ Years',
      subtitle: 'of Excellence',
      description: 'Consistently delivering quality since 1999',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Users,
      title: '10,000+',
      subtitle: 'Happy Customers',
      description: 'Families who trust us for their special moments',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Star,
      title: '4.5★ Rating',
      subtitle: 'on Amazon',
      description: 'Consistently high ratings from verified customers',
      color: 'from-gold-500 to-gold-600'
    },
    {
      icon: Award,
      title: 'BIS Certified',
      subtitle: 'Quality Assured',
      description: 'Meeting highest industry standards',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Shield,
      title: '100% Authentic',
      subtitle: 'Guaranteed',
      description: 'Every piece comes with authenticity guarantee',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Heart,
      title: '95% Repeat',
      subtitle: 'Customers',
      description: 'High customer loyalty and satisfaction',
      color: 'from-pink-500 to-pink-600'
    },
    {
      icon: CheckCircle,
      title: '99% Positive',
      subtitle: 'Reviews',
      description: 'Overwhelmingly positive customer feedback',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: Globe,
      title: 'Pan-India',
      subtitle: 'Delivery',
      description: 'Serving customers across all states',
      color: 'from-indigo-500 to-indigo-600'
    }
  ]

  const certifications = [
    {
      name: 'BIS Hallmark',
      description: 'Bureau of Indian Standards certification for quality',
      image: 'https://via.placeholder.com/100x60/FFD700/000000?text=BIS'
    },
    {
      name: 'Amazon Verified',
      description: 'Verified seller on Amazon marketplace',
      image: 'https://via.placeholder.com/100x60/FF9900/FFFFFF?text=AMAZON'
    },
    {
      name: 'Quality Assured',
      description: 'Internal quality control standards',
      image: 'https://via.placeholder.com/100x60/4CAF50/FFFFFF?text=QUALITY'
    },
    {
      name: 'Customer First',
      description: 'Customer satisfaction guarantee',
      image: 'https://via.placeholder.com/100x60/2196F3/FFFFFF?text=TRUST'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-elegant-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Why Customers <span className="text-gold-600">Trust Us</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            Our commitment to quality, authenticity, and customer satisfaction has earned us 
            the trust of thousands of families across India.
          </p>
        </div>

        {/* Trust Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="group text-center"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${metric.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <metric.icon className="h-10 w-10 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-elegant-800 mb-1 group-hover:text-gold-600 transition-colors duration-300">
                  {metric.title}
                </h3>
                <p className="text-gold-600 font-semibold mb-3 text-lg">
                  {metric.subtitle}
                </p>
                <p className="text-elegant-600 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <h3 className="text-3xl font-serif font-bold text-center text-elegant-800 mb-8">
            Certifications & <span className="text-gold-600">Recognitions</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center group">
                <div className="bg-elegant-50 rounded-lg p-6 mb-4 group-hover:bg-gold-50 transition-colors duration-300">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="mx-auto mb-4 rounded"
                  />
                  <h4 className="font-semibold text-elegant-800 mb-2">{cert.name}</h4>
                  <p className="text-sm text-elegant-600">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-elegant-600 mb-6">
              These certifications and recognitions reflect our unwavering commitment to quality, 
              authenticity, and customer satisfaction.
            </p>
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <Shield className="h-5 w-5" />
              <span>Shop with Confidence</span>
            </a>
          </div>
        </div>

        {/* Customer Promise */}
        <div className="mt-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Our Promise to You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-gold-200" />
              <h4 className="text-xl font-semibold mb-2">Quality Guarantee</h4>
              <p className="text-gold-100">Every piece meets our strict quality standards</p>
            </div>
            <div>
              <Heart className="h-12 w-12 mx-auto mb-4 text-gold-200" />
              <h4 className="text-xl font-semibold mb-2">Customer Care</h4>
              <p className="text-gold-100">Personalized service and support</p>
            </div>
            <div>
              <Shield className="h-12 w-12 mx-auto mb-4 text-gold-200" />
              <h4 className="text-xl font-semibold mb-2">Trust & Transparency</h4>
              <p className="text-gold-100">Honest pricing and authentic products</p>
            </div>
          </div>
          <p className="text-xl text-gold-100">
            When you choose NAGI JEWELLERS, you're not just buying jewellery—you're joining a family 
            that has been built on trust, quality, and genuine care for over 26 years.
          </p>
        </div>

        {/* Photo Replacement Note */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📸 Certification Images Needed</h3>
          <p className="text-blue-700">
            <strong>Replace the certification placeholder images above with:</strong> Actual photos of BIS certificates, 
            Amazon seller verification badges, quality assurance certificates, and any other official recognitions 
            received by NAGI JEWELLERS. High-resolution scans or photos work best.
          </p>
        </div>
      </div>
    </section>
  )
}

export default TrustIndicators
