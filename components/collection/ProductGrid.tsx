import Image from 'next/image'
import { ExternalLink, Star, ShoppingBag, Heart } from 'lucide-react'

const ProductGrid = () => {
  const products = [
    // Artificial Jewellery
    {
      id: 1,
      name: 'Elegant Kundan Necklace Set',
      category: 'Artificial',
      price: '₹899',
      originalPrice: '₹1,499',
      rating: 4.4,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08XXXXX1',
      badge: 'Bestseller',
      type: 'artificial'
    },
    {
      id: 2,
      name: 'Traditional Jhumka Earrings',
      category: 'Artificial',
      price: '₹599',
      originalPrice: '₹999',
      rating: 4.6,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08XXXXX2',
      badge: 'New',
      type: 'artificial'
    },
    {
      id: 3,
      name: 'Designer Bracelet Set',
      category: 'Artificial',
      price: '₹749',
      originalPrice: '₹1,299',
      rating: 4.3,
      reviews: 67,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08XXXXX3',
      badge: 'Trending',
      type: 'artificial'
    },
    {
      id: 4,
      name: 'Pearl Drop Earrings',
      category: 'Artificial',
      price: '₹449',
      originalPrice: '₹799',
      rating: 4.5,
      reviews: 123,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08XXXXX4',
      badge: 'Popular',
      type: 'artificial'
    },

    // Silver Collection
    {
      id: 5,
      name: 'Sterling Silver Chain Necklace',
      category: 'Silver',
      price: '₹1,899',
      originalPrice: '₹2,999',
      rating: 4.8,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08YYYY1',
      badge: 'Premium',
      type: 'silver'
    },
    {
      id: 6,
      name: 'Silver Oxidized Bangles',
      category: 'Silver',
      price: '₹1,299',
      originalPrice: '₹1,999',
      rating: 4.7,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08YYYY2',
      badge: 'Handcrafted',
      type: 'silver'
    },
    {
      id: 7,
      name: 'Silver Temple Jewelry Set',
      category: 'Silver',
      price: '₹2,499',
      originalPrice: '₹3,999',
      rating: 4.9,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08YYYY3',
      badge: 'Traditional',
      type: 'silver'
    },
    {
      id: 8,
      name: 'Silver Stud Earrings',
      category: 'Silver',
      price: '₹899',
      originalPrice: '₹1,399',
      rating: 4.6,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08YYYY4',
      badge: 'Elegant',
      type: 'silver'
    },

    // Gold-Plated Collection
    {
      id: 9,
      name: 'Gold-Plated Bridal Set',
      category: 'Gold-Plated',
      price: '₹3,499',
      originalPrice: '₹5,999',
      rating: 4.7,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08ZZZZ1',
      badge: 'Bridal',
      type: 'gold-plated'
    },
    {
      id: 10,
      name: 'Gold-Plated Chain with Pendant',
      category: 'Gold-Plated',
      price: '₹1,999',
      originalPrice: '₹3,299',
      rating: 4.5,
      reviews: 198,
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08ZZZZ2',
      badge: 'Classic',
      type: 'gold-plated'
    },
    {
      id: 11,
      name: 'Gold-Plated Bangles Set',
      category: 'Gold-Plated',
      price: '₹2,299',
      originalPrice: '₹3,799',
      rating: 4.6,
      reviews: 167,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08ZZZZ3',
      badge: 'Festive',
      type: 'gold-plated'
    },
    {
      id: 12,
      name: 'Gold-Plated Ring Collection',
      category: 'Gold-Plated',
      price: '₹1,299',
      originalPrice: '₹2,199',
      rating: 4.4,
      reviews: 134,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
      amazonUrl: 'https://amazon.in/dp/B08ZZZZ4',
      badge: 'Trendy',
      type: 'gold-plated'
    }
  ]

  const getBadgeColor = (badge: string) => {
    const colors: { [key: string]: string } = {
      'Bestseller': 'bg-red-500',
      'New': 'bg-green-500',
      'Trending': 'bg-purple-500',
      'Popular': 'bg-blue-500',
      'Premium': 'bg-gold-500',
      'Handcrafted': 'bg-orange-500',
      'Traditional': 'bg-indigo-500',
      'Elegant': 'bg-pink-500',
      'Bridal': 'bg-rose-500',
      'Classic': 'bg-amber-500',
      'Festive': 'bg-emerald-500',
      'Trendy': 'bg-cyan-500'
    }
    return colors[badge] || 'bg-gray-500'
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-elegant-800 mb-4">
            Our <span className="text-gold-600">Complete Collection</span>
          </h2>
          <p className="text-lg text-elegant-600 max-w-2xl mx-auto">
            Browse through our carefully curated selection of authentic jewellery pieces, 
            each crafted with precision and backed by 26+ years of trust.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
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
                  <span className={`${getBadgeColor(product.badge)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {product.badge}
                  </span>
                </div>

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 bg-white/80 hover:bg-white p-2 rounded-full transition-colors duration-300 opacity-0 group-hover:opacity-100">
                  <Heart className="h-4 w-4 text-elegant-600 hover:text-red-500" />
                </button>

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
                
                <h3 className="text-lg font-semibold text-elegant-800 mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors duration-300">
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
                  <span className="text-sm text-green-600 font-medium">
                    Save {Math.round((1 - parseInt(product.price.replace('₹', '').replace(',', '')) / parseInt(product.originalPrice.replace('₹', '').replace(',', ''))) * 100)}%
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

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary text-lg px-8 py-4">
            Load More Products
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProductGrid
