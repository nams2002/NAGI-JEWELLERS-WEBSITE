import { Shield, Heart, Star, Users, Award, Clock } from 'lucide-react'

const Values = () => {
  const coreValues = [
    {
      icon: Heart,
      title: 'Authenticity',
      description: 'Every piece is genuine and crafted with care. We guarantee the authenticity of all our products.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Trust',
      description: 'Built over 26 years of honest relationships and transparent business practices.',
      color: 'from-blue-500 to-indigo-500'
    },
    {
      icon: Star,
      title: 'Quality',
      description: 'BIS certified products that meet the highest standards of craftsmanship and durability.',
      color: 'from-gold-500 to-yellow-500'
    },
    {
      icon: Users,
      title: 'Family',
      description: 'We treat every customer as family, providing personalized service and care.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Continuous pursuit of perfection in design, quality, and customer satisfaction.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Clock,
      title: 'Legacy',
      description: 'Creating timeless pieces that become cherished heirlooms for future generations.',
      color: 'from-orange-500 to-red-500'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Our Core <span className="text-gold-600">Values</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            These fundamental principles have guided NAGI JEWELLERS LTD for over 26 years 
            and continue to shape every aspect of our business.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {coreValues.map((value, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${value.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-serif font-bold text-elegant-800 mb-4 group-hover:text-gold-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-elegant-600 leading-relaxed">
                  {value.description}
                </p>

                {/* Decorative Element */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-gold-500/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Values in Action */}
        <div className="bg-gradient-to-r from-elegant-800 to-elegant-900 rounded-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Values in <span className="text-gold-400">Action</span>
            </h3>
            <p className="text-xl text-elegant-300 max-w-2xl mx-auto">
              See how our core values translate into real benefits for our customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">26+</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gold-400">Years of Trust</h4>
              <p className="text-elegant-300 text-sm">Consistent quality and service</p>
            </div>

            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">100%</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gold-400">Authentic Products</h4>
              <p className="text-elegant-300 text-sm">Guaranteed genuine jewellery</p>
            </div>

            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">10K+</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gold-400">Happy Families</h4>
              <p className="text-elegant-300 text-sm">Satisfied customers nationwide</p>
            </div>

            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4.5★</span>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-gold-400">Amazon Rating</h4>
              <p className="text-elegant-300 text-sm">Consistently high reviews</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>Experience Our Values</span>
              <Star className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Values
