import Image from 'next/image'
import { Calendar, Heart, Award } from 'lucide-react'

const LegacyHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Traditional jewellery craftsmanship"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-white">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold-500/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Heart className="h-5 w-5 text-gold-400" />
            <span className="text-gold-200 font-medium">Our Story</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-slide-up">
            A Legacy of
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Trust & Tradition
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up animation-delay-200 max-w-3xl">
            From a small offline store in 1999 to a trusted name across India, 
            discover how NAGI JEWELLERS LTD built a legacy that spans over two decades.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up animation-delay-400">
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <Calendar className="h-6 w-6 text-gold-400" />
                <span className="text-3xl font-bold text-gold-400">1999</span>
              </div>
              <p className="text-gray-300">Year Founded</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <Award className="h-6 w-6 text-gold-400" />
                <span className="text-3xl font-bold text-gold-400">26+</span>
              </div>
              <p className="text-gray-300">Years of Excellence</p>
            </div>
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start space-x-3 mb-2">
                <Heart className="h-6 w-6 text-gold-400" />
                <span className="text-3xl font-bold text-gold-400">10K+</span>
              </div>
              <p className="text-gray-300">Happy Families</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default LegacyHero
