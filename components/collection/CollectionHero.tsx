import Image from 'next/image'
import { Sparkles, Star, Award } from 'lucide-react'

const CollectionHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Beautiful jewellery collection"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-white text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-gold-500/20 backdrop-blur-sm border border-gold-400/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
            <Sparkles className="h-5 w-5 text-gold-400" />
            <span className="text-gold-200 font-medium">Curated Collection</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-slide-up">
            Exquisite
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Jewellery Collection
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            Discover our handpicked selection of artificial, silver, and gold-plated jewellery.
            <br className="hidden md:block" />
            Each piece crafted with 26+ years of expertise and tradition.
          </p>

          {/* Categories Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up animation-delay-400">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gold-400 mb-2">Artificial Jewellery</h3>
              <p className="text-gray-300 text-sm">Trendy designs at affordable prices</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gold-400 mb-2">Silver Collection</h3>
              <p className="text-gray-300 text-sm">Pure silver with elegant craftsmanship</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
              <h3 className="text-xl font-semibold text-gold-400 mb-2">Gold-Plated</h3>
              <p className="text-gray-300 text-sm">Luxurious look with lasting quality</p>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 animate-slide-up animation-delay-600">
            <div className="flex items-center space-x-2">
              <Star className="h-6 w-6 text-gold-400" />
              <span className="text-lg font-semibold">4.5★ Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="h-6 w-6 text-gold-400" />
              <span className="text-lg font-semibold">BIS Certified</span>
            </div>
            <div className="flex items-center space-x-2">
              <Sparkles className="h-6 w-6 text-gold-400" />
              <span className="text-lg font-semibold">100% Authentic</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default CollectionHero
