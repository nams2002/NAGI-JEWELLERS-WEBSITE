import Link from 'next/link'
import Image from 'next/image'
import { ShoppingBag, Star, Award, Users } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="Elegant jewellery background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold-500/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Award className="h-5 w-5 text-gold-400" />
            <span className="text-gold-200 font-medium">Trusted Since 1999</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-slide-up">
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Crafted with Trust
            </span>
            <br />
            <span className="text-white">Since 1999</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            Discover authentic jewellery from NAGI JEWELLERS LTD. 
            <br className="hidden md:block" />
            26+ years of tradition, quality, and unwavering trust.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 animate-slide-up animation-delay-400">
            <div className="flex items-center space-x-2">
              <Users className="h-6 w-6 text-gold-400" />
              <span className="text-lg font-semibold">10,000+ Happy Customers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-gold-400" />
              <span className="text-lg font-semibold">4.5★ Amazon Rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-gold-400" />
              <span className="text-lg font-semibold">BIS Certified</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up animation-delay-600">
            <Link
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-3 text-lg px-8 py-4"
            >
              <ShoppingBag className="h-6 w-6" />
              <span>Shop on Amazon</span>
            </Link>
            <Link
              href="/collection"
              className="btn-secondary text-lg px-8 py-4 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white hover:text-elegant-800"
            >
              View Collection
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in animation-delay-600">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-gold-400 mb-2">26+</h3>
                <p className="text-gray-200">Years of Excellence</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-gold-400 mb-2">100%</h3>
                <p className="text-gray-200">Authentic Products</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
                <h3 className="text-2xl font-bold text-gold-400 mb-2">24/7</h3>
                <p className="text-gray-200">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
