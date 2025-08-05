import { Trophy, Users, Star, Award, Globe, Heart } from 'lucide-react'

const Milestones = () => {
  const achievements = [
    {
      icon: Trophy,
      number: '26+',
      label: 'Years of Excellence',
      description: 'Consistently delivering quality since 1999'
    },
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
      description: 'Families who trust us for their special moments'
    },
    {
      icon: Star,
      number: '4.5★',
      label: 'Amazon Rating',
      description: 'High customer satisfaction on digital platforms'
    },
    {
      icon: Award,
      number: 'BIS',
      label: 'Certified Quality',
      description: 'Meeting highest industry standards'
    },
    {
      icon: Globe,
      number: '100+',
      label: 'Cities Served',
      description: 'Nationwide reach through Amazon'
    },
    {
      icon: Heart,
      number: '3',
      label: 'Generations',
      description: 'Serving multiple generations of families'
    }
  ]

  const recognitions = [
    {
      title: 'Customer Choice Award',
      year: '2023',
      description: 'Recognized for outstanding customer service and product quality',
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      title: 'Amazon Top Seller',
      year: '2022',
      description: 'Achieved top seller status in jewellery category',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    },
    {
      title: 'Quality Excellence',
      year: '2021',
      description: 'BIS certification for maintaining quality standards',
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-elegant-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Our <span className="text-gold-600">Achievements</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            These milestones represent our journey of growth, trust-building, and 
            commitment to excellence over the past 26 years.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Icon */}
                <div className="bg-gradient-to-r from-gold-500 to-gold-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="h-10 w-10 text-white" />
                </div>

                {/* Number */}
                <h3 className="text-4xl font-bold text-elegant-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                  {achievement.number}
                </h3>

                {/* Label */}
                <h4 className="text-xl font-semibold text-gold-600 mb-3">
                  {achievement.label}
                </h4>

                {/* Description */}
                <p className="text-elegant-600 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Recognition Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-elegant-800 mb-12">
            Recognition & <span className="text-gold-600">Awards</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="card-elegant overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={recognition.image}
                    alt={recognition.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {recognition.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h4 className="text-xl font-semibold text-elegant-800 mb-3">
                    {recognition.title}
                  </h4>
                  <p className="text-elegant-600 leading-relaxed">
                    {recognition.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Future Vision */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Looking Towards the Future
          </h3>
          <p className="text-xl mb-8 text-gold-100 max-w-3xl mx-auto leading-relaxed">
            As we continue our journey, we remain committed to innovation while preserving 
            the traditional values that have made us who we are. Our goal is to reach 
            even more families and create lasting memories for generations to come.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-2xl font-bold mb-2">50K+</h4>
              <p className="text-gold-100">Customers by 2030</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">500+</h4>
              <p className="text-gold-100">New Designs Annually</p>
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-2">100%</h4>
              <p className="text-gold-100">Sustainable Practices</p>
            </div>
          </div>

          <a
            href="https://amazon.in/shops/nagijewellers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-gold-600 hover:bg-gold-50 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
          >
            <span>Join Our Journey</span>
            <Heart className="h-5 w-5" />
          </a>
        </div>

        {/* Photo Replacement Notes */}
        <div className="mt-12 space-y-4">
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">📸 Recognition Photos Needed</h3>
            <p className="text-blue-700">
              <strong>Replace the recognition images above with:</strong> Actual photos of awards, certificates, 
              or recognition received by NAGI JEWELLERS. These could include BIS certificates, Amazon seller awards, 
              customer appreciation letters, or newspaper mentions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Milestones
