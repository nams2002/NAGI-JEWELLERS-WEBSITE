import Image from 'next/image'
import { Star, Users, Award, Heart } from 'lucide-react'

const TestimonialsHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Happy customers with NAGI JEWELLERS"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-white text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold-500/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Heart className="h-5 w-5 text-gold-400" />
            <span className="text-gold-200 font-medium">Customer Love</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-slide-up">
            Trusted by
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              10,000+ Families
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            Don't just take our word for it. Here's what our valued customers 
            have to say about their experience with NAGI JEWELLERS.
          </p>

          {/* Trust Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 animate-slide-up animation-delay-400">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Star className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gold-400 mb-1">4.5★</h3>
              <p className="text-gray-300">Amazon Rating</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Users className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gold-400 mb-1">10K+</h3>
              <p className="text-gray-300">Happy Customers</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gold-400 mb-1">26+</h3>
              <p className="text-gray-300">Years of Trust</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Heart className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h3 className="text-3xl font-bold text-gold-400 mb-1">95%</h3>
              <p className="text-gray-300">Repeat Customers</p>
            </div>
          </div>

          {/* Customer Quote */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 animate-slide-up animation-delay-600">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-gold-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-xl italic text-gold-100 mb-4">
              "NAGI JEWELLERS has been our family's trusted jeweller for over 15 years. 
              The quality is exceptional and the service is always personal and caring."
            </blockquote>
            <cite className="text-gold-300 font-medium">- Meera Patel, Mumbai</cite>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default TestimonialsHero
