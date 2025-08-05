import Link from 'next/link'
import { Star, MessageCircle, ShoppingBag, Heart, Award, Users } from 'lucide-react'

const ReviewsCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-elegant-800 to-elegant-900 text-white">
      <div className="container-custom">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Join Our <span className="text-gold-400">Happy Customers</span>?
          </h2>
          <p className="text-xl text-elegant-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience the quality, trust, and service that has made NAGI JEWELLERS 
            a household name for over 26 years. Your satisfaction is our guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-lg"
            >
              <ShoppingBag className="h-6 w-6" />
              <span>Shop with Confidence</span>
            </a>
            <Link
              href="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-elegant-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 text-lg"
            >
              <MessageCircle className="h-6 w-6" />
              <span>Ask Questions</span>
            </Link>
          </div>
        </div>

        {/* Customer Promise */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-serif font-bold text-center mb-8 text-gold-400">
            Our Customer Promise
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Quality Guarantee</h4>
              <p className="text-elegant-300">
                Every piece meets our strict quality standards. If you're not satisfied, 
                we'll make it right.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Personal Care</h4>
              <p className="text-elegant-300">
                We treat every customer like family, providing personalized service 
                and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-3 text-white">Lifetime Support</h4>
              <p className="text-elegant-300">
                Our relationship doesn't end with purchase. We're here for maintenance, 
                advice, and future needs.
              </p>
            </div>
          </div>
        </div>

        {/* Review Invitation */}
        <div className="text-center mb-16">
          <h3 className="text-3xl font-serif font-bold mb-6 text-gold-400">
            Share Your Experience
          </h3>
          <p className="text-lg text-elegant-300 mb-8 max-w-2xl mx-auto">
            Already a customer? We'd love to hear about your experience! 
            Your feedback helps us serve you better and helps other customers make informed decisions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Star className="h-5 w-5" />
              <span>Review on Amazon</span>
            </a>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>WhatsApp Feedback</span>
            </a>
            <a
              href="https://instagram.com/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Tag on Instagram</span>
            </a>
          </div>
        </div>

        {/* Final Stats */}
        <div className="text-center">
          <h3 className="text-2xl font-serif font-bold mb-8 text-gold-400">
            Join the NAGI JEWELLERS Family
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-3xl font-bold text-gold-400 mb-2">26+</h4>
              <p className="text-elegant-300">Years of Trust</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-gold-400 mb-2">10K+</h4>
              <p className="text-elegant-300">Happy Customers</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-gold-400 mb-2">4.5★</h4>
              <p className="text-elegant-300">Average Rating</p>
            </div>
            <div>
              <h4 className="text-3xl font-bold text-gold-400 mb-2">99%</h4>
              <p className="text-elegant-300">Satisfaction Rate</p>
            </div>
          </div>

          <p className="text-lg text-elegant-300 mb-8">
            These numbers represent real people, real satisfaction, and real trust. 
            Be part of our growing family of satisfied customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Start Shopping</span>
            </a>
            <Link
              href="/legacy"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-elegant-800 font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Heart className="h-5 w-5" />
              <span>Learn Our Story</span>
            </Link>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
            <Award className="h-6 w-6 text-gold-400" />
            <span className="text-white font-medium">Trusted by 10,000+ families since 1999</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ReviewsCTA
