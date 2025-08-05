'use client'

import { useState } from 'react'
import { Crown, Gem, Star, Sparkles } from 'lucide-react'

const CategoryFilter = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    {
      id: 'all',
      name: 'All Collections',
      icon: Crown,
      count: '150+ Items',
      description: 'Complete range of our jewellery'
    },
    {
      id: 'artificial',
      name: 'Artificial Jewellery',
      icon: Sparkles,
      count: '80+ Items',
      description: 'Trendy and affordable designs'
    },
    {
      id: 'silver',
      name: 'Silver Collection',
      icon: Star,
      count: '45+ Items',
      description: 'Pure silver with elegant finish'
    },
    {
      id: 'gold-plated',
      name: 'Gold-Plated',
      icon: Gem,
      count: '35+ Items',
      description: 'Luxurious gold-plated pieces'
    }
  ]

  return (
    <section className="section-padding bg-elegant-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-elegant-800 mb-4">
            Browse by <span className="text-gold-600">Category</span>
          </h2>
          <p className="text-lg text-elegant-600 max-w-2xl mx-auto">
            Choose from our carefully curated categories to find the perfect piece for every occasion
          </p>
        </div>

        {/* Category Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`group relative overflow-hidden rounded-2xl p-6 text-left transition-all duration-300 transform hover:-translate-y-1 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-2xl scale-105'
                  : 'bg-white text-elegant-800 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-current to-transparent rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-current to-transparent rounded-full blur-lg"></div>
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full mb-4 transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gold-500 text-white group-hover:scale-110'
                }`}>
                  <category.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className={`text-lg font-semibold mb-2 transition-colors duration-300 ${
                  activeCategory === category.id ? 'text-white' : 'text-elegant-800 group-hover:text-gold-600'
                }`}>
                  {category.name}
                </h3>

                <p className={`text-sm mb-3 transition-colors duration-300 ${
                  activeCategory === category.id ? 'text-gold-100' : 'text-elegant-600'
                }`}>
                  {category.description}
                </p>

                <div className={`text-xs font-medium transition-colors duration-300 ${
                  activeCategory === category.id ? 'text-gold-200' : 'text-gold-600'
                }`}>
                  {category.count}
                </div>

                {/* Active Indicator */}
                {activeCategory === category.id && (
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Category Description */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            {activeCategory === 'all' && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-elegant-800 mb-4">Complete Collection</h3>
                <p className="text-elegant-600 leading-relaxed">
                  Explore our entire range of authentic jewellery pieces. From everyday wear to special occasions, 
                  find the perfect piece that reflects your style and personality. Each item is crafted with 
                  26+ years of expertise and comes with our guarantee of authenticity.
                </p>
              </div>
            )}
            {activeCategory === 'artificial' && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-elegant-800 mb-4">Artificial Jewellery</h3>
                <p className="text-elegant-600 leading-relaxed">
                  Discover trendy and affordable artificial jewellery that doesn't compromise on style. 
                  Perfect for daily wear, parties, and gifting. Our artificial collection features 
                  contemporary designs that keep you fashionable without breaking the bank.
                </p>
              </div>
            )}
            {activeCategory === 'silver' && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-elegant-800 mb-4">Silver Collection</h3>
                <p className="text-elegant-600 leading-relaxed">
                  Elegant silver jewellery crafted from pure silver with exquisite finishing. 
                  Our silver collection combines traditional craftsmanship with modern designs, 
                  perfect for both casual and formal occasions. Each piece is hallmarked for purity.
                </p>
              </div>
            )}
            {activeCategory === 'gold-plated' && (
              <div>
                <h3 className="text-2xl font-serif font-bold text-elegant-800 mb-4">Gold-Plated Collection</h3>
                <p className="text-elegant-600 leading-relaxed">
                  Experience the luxury of gold with our premium gold-plated collection. 
                  These pieces offer the rich appearance of gold jewelry at accessible prices. 
                  Perfect for weddings, festivals, and special celebrations with lasting quality and shine.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CategoryFilter
