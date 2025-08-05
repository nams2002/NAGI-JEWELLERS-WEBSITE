import Link from 'next/link'
import { ShoppingBag, Star, Award, Users, MessageCircle } from 'lucide-react'

const CollectionCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-elegant-800 to-elegant-900 text-white">
      <div className="container-custom">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Find Your <span className="text-gold-400">Perfect Piece</span>?
          </h2>
          <p className="text-xl text-elegant-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who trust NAGI JEWELLERS for their special moments. 
            Shop our complete collection on Amazon with fast delivery and easy returns.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-lg"
            >
              <ShoppingBag className="h-6 w-6" />
              <span>Shop Full Collection on Amazon</span>
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-elegant-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Get Personal Assistance</span>
            </Link>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gold-400 mb-2">4.5★</h3>
            <p className="text-elegant-300">Amazon Rating</p>
          </div>
          <div className="text-center">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gold-400 mb-2">10K+</h3>
            <p className="text-elegant-300">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gold-400 mb-2">26+</h3>
            <p className="text-elegant-300">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <ShoppingBag className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gold-400 mb-2">150+</h3>
            <p className="text-elegant-300">Unique Designs</p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <h3 className="text-3xl font-serif font-bold text-center mb-8 text-gold-400">
            Why Choose NAGI JEWELLERS?
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-white">Authentic Quality</h4>
              <p className="text-elegant-300">
                Every piece is genuine and comes with our guarantee of authenticity. 
                BIS certified for your peace of mind.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-white">Trusted Legacy</h4>
              <p className="text-elegant-300">
                26+ years of building trust through consistent quality and 
                exceptional customer service.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-white">Easy Shopping</h4>
              <p className="text-elegant-300">
                Shop conveniently on Amazon with fast delivery, easy returns, 
                and secure payment options.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-white">Affordable Luxury</h4>
              <p className="text-elegant-300">
                Premium quality jewellery at accessible prices. 
                Special offers and discounts available regularly.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-white">Personal Service</h4>
              <p className="text-elegant-300">
                Get personalized recommendations and assistance 
                from our experienced team.
              </p>
            </div>
            <div className="text-center">
              <h4 className="text-xl font-semibold mb-3 text-white">Customer First</h4>
              <p className="text-elegant-300">
                Your satisfaction is our priority. We go above and beyond 
                to ensure you're happy with your purchase.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-elegant-300 mb-6">
            Still have questions? We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Us</span>
            </a>
            <Link
              href="/testimonials"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-elegant-800 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Read Customer Reviews
            </Link>
          </div>
        </div>

        {/* Photo Replacement Note */}
        <div className="mt-12 p-6 bg-blue-500/20 border border-blue-400/30 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-200 mb-2">📸 Product Photos Needed</h3>
          <p className="text-blue-100">
            <strong>Replace all product images above with:</strong> High-quality photos of actual NAGI JEWELLERS products. 
            Each product should have multiple angles, close-up details, and lifestyle shots showing the jewellery being worn. 
            Ensure consistent lighting and background for a professional look.
          </p>
        </div>
      </div>
    </section>
  )
}

export default CollectionCTA
