import { Calendar, Store, Users, Globe, Award, Star } from 'lucide-react'

const Timeline = () => {
  const timelineEvents = [
    {
      year: '1999',
      title: 'The Beginning',
      description: 'NAGI JEWELLERS LTD was founded with a simple vision: to provide authentic, quality jewellery to families. Started as a small offline store with dedication to craftsmanship.',
      icon: Store,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2005',
      title: 'Community Trust',
      description: 'Established strong relationships with local communities. Word-of-mouth recommendations became our strongest marketing tool as families trusted us for their special occasions.',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2010',
      title: 'Quality Recognition',
      description: 'Achieved BIS certification and quality recognition. Expanded our collection to include artificial, silver, and gold-plated jewellery while maintaining authenticity.',
      icon: Award,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2015',
      title: 'Growing Reputation',
      description: 'Reached 5,000+ satisfied customers. Our reputation for quality and trust spread beyond local boundaries, attracting customers from neighboring regions.',
      icon: Star,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Embraced digital platforms and launched on Amazon to serve customers nationwide. Maintained our quality standards while reaching a broader audience.',
      icon: Globe,
      image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      year: '2025',
      title: 'Legacy Continues',
      description: 'Today, with 10,000+ happy customers and 26+ years of experience, we continue to honor our commitment to quality, authenticity, and customer satisfaction.',
      icon: Calendar,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Our <span className="text-gold-600">Journey</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            Every milestone in our journey reflects our unwavering commitment to quality, 
            trust, and customer satisfaction. Here's how we built our legacy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-gold-500 to-gold-600 hidden lg:block"></div>

          {/* Timeline Events */}
          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1 lg:max-w-md">
                  <div className={`card-elegant p-8 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className={`flex items-center space-x-3 mb-4 ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} justify-center`}>
                      <div className="bg-gold-500 rounded-full p-2">
                        <event.icon className="h-6 w-6 text-white" />
                      </div>
                      <span className="text-3xl font-bold text-gold-600">{event.year}</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-elegant-800 mb-4">
                      {event.title}
                    </h3>
                    <p className="text-elegant-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Node */}
                <div className="relative z-10 hidden lg:block">
                  <div className="w-6 h-6 bg-gold-500 rounded-full border-4 border-white shadow-lg"></div>
                </div>

                {/* Image */}
                <div className="flex-1 lg:max-w-md">
                  <div className="relative overflow-hidden rounded-xl shadow-lg group">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-elegant-50 to-gold-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-elegant-800 mb-4">
              The Journey Continues
            </h3>
            <p className="text-xl text-elegant-600 mb-8 max-w-2xl mx-auto">
              As we look towards the future, our commitment remains unchanged: 
              to provide authentic, quality jewellery that celebrates life's precious moments.
            </p>
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              Be Part of Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Timeline
