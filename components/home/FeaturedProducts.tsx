import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Star, ShoppingBag } from 'lucide-react'

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Elegant Gold-Plated Necklace Set',
      category: 'Gold-Plated',
      price: '₹2,999',
      originalPrice: '₹4,999',
      rating: 4.6,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08XXXXX',
      badge: 'Bestseller'
    },
    {
      id: 2,
      name: 'Sterling Silver Earrings',
      category: 'Silver',
      price: '₹1,899',
      originalPrice: '₹2,999',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08YYYY',
      badge: 'Top Rated'
    },
    {
      id: 3,
      name: 'Artificial Diamond Bracelet',
      category: 'Artificial',
      price: '₹899',
      originalPrice: '₹1,499',
      rating: 4.4,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08ZZZZ',
      badge: 'New Arrival'
    },
    {
      id: 4,
      name: 'Traditional Gold-Plated Bangles',
      category: 'Gold-Plated',
      price: '₹3,499',
      originalPrice: '₹5,999',
      rating: 4.7,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08AAAA',
      badge: 'Limited Edition'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Featured <span className="text-gold-600">Collection</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            Discover our most loved pieces, handpicked from our extensive collection. 
            Each piece reflects our commitment to quality and craftsmanship.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="card-elegant overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {product.badge}
                  </span>
                </div>

                {/* Quick View Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a
                    href={product.amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-elegant-800 px-6 py-3 rounded-lg font-semibold hover:bg-gold-500 hover:text-white transition-colors duration-300 flex items-center space-x-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    <span>View on Amazon</span>
                  </a>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-gold-600 text-sm font-medium uppercase tracking-wide">
                    {product.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-semibold text-elegant-800 mb-3 line-clamp-2">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-gold-500 fill-current" />
                    <span className="text-sm font-medium text-elegant-700 ml-1">
                      {product.rating}
                    </span>
                  </div>
                  <span className="text-sm text-elegant-500">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold text-elegant-800">
                    {product.price}
                  </span>
                  <span className="text-sm text-elegant-500 line-through">
                    {product.originalPrice}
                  </span>
                </div>

                {/* CTA Button */}
                <a
                  href={product.amazonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full btn-primary flex items-center justify-center space-x-2 text-sm"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Buy on Amazon</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center">
          <Link
            href="/collection"
            className="btn-secondary text-lg px-8 py-4 inline-flex items-center space-x-2"
          >
            <span>View Complete Collection</span>
            <ExternalLink className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
