import Link from 'next/link'
import { MessageCircle, Phone, Mail, ShoppingBag, Star, Clock, Award, Users } from 'lucide-react'

const ContactCTA = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-elegant-800 to-elegant-900 text-white">
      <div className="container-custom">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Ready to Connect with <span className="text-gold-400">NAGI JEWELLERS</span>?
          </h2>
          <p className="text-xl text-elegant-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Whether you have questions about our products, need personalized recommendations, 
            or want to share feedback, we're here to help. Choose your preferred way to connect!
          </p>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 group"
          >
            <MessageCircle className="h-12 w-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
            <p className="text-green-100 text-sm mb-3">Instant messaging support</p>
            <div className="bg-white/20 rounded-lg py-2 px-4">
              <span className="text-sm font-medium">Available 24/7</span>
            </div>
          </a>

          <a
            href="tel:+919876543210"
            className="bg-blue-500 hover:bg-blue-600 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 group"
          >
            <Phone className="h-12 w-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2">Phone Call</h3>
            <p className="text-blue-100 text-sm mb-3">Direct voice support</p>
            <div className="bg-white/20 rounded-lg py-2 px-4">
              <span className="text-sm font-medium">+91 98765 43210</span>
            </div>
          </a>

          <a
            href="mailto:info@nagijewellers.com"
            className="bg-purple-500 hover:bg-purple-600 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 group"
          >
            <Mail className="h-12 w-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className="text-purple-100 text-sm mb-3">Detailed written support</p>
            <div className="bg-white/20 rounded-lg py-2 px-4">
              <span className="text-sm font-medium">24hr Response</span>
            </div>
          </a>

          <a
            href="https://amazon.in/shops/nagijewellers"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange-500 hover:bg-orange-600 rounded-2xl p-6 text-center transition-all duration-300 transform hover:scale-105 group"
          >
            <ShoppingBag className="h-12 w-12 mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-xl font-bold mb-2">Amazon Store</h3>
            <p className="text-orange-100 text-sm mb-3">Browse & shop online</p>
            <div className="bg-white/20 rounded-lg py-2 px-4">
              <span className="text-sm font-medium">Secure Shopping</span>
            </div>
          </a>
        </div>

        {/* Why Choose Our Support */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 mb-16">
          <h3 className="text-3xl font-serif font-bold text-center mb-8 text-gold-400">
            Why Our Customers Love Our Support
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Quick Response</h4>
              <p className="text-elegant-300">
                Average response time under 2 hours during business hours
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Expert Team</h4>
              <p className="text-elegant-300">
                Knowledgeable staff with 26+ years of jewellery expertise
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">Personal Care</h4>
              <p className="text-elegant-300">
                Personalized attention and customized recommendations
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-white">High Satisfaction</h4>
              <p className="text-elegant-300">
                95% customer satisfaction rate with our support services
              </p>
            </div>
          </div>
        </div>

        {/* Business Hours Reminder */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-serif font-bold mb-6 text-gold-400">
            Business Hours & Support Availability
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-8 w-8 text-gold-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold mb-2">Store Hours</h4>
              <p className="text-elegant-300 text-sm">
                Mon-Sat: 10:00 AM - 8:00 PM<br />
                Sunday: 11:00 AM - 6:00 PM
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <MessageCircle className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold mb-2">WhatsApp Support</h4>
              <p className="text-elegant-300 text-sm">
                Available 24/7<br />
                Instant responses during business hours
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Mail className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h4 className="text-lg font-semibold mb-2">Email Support</h4>
              <p className="text-elegant-300 text-sm">
                Response within 24 hours<br />
                Detailed assistance available
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-3xl font-serif font-bold mb-6 text-gold-400">
            Experience the NAGI JEWELLERS Difference
          </h3>
          <p className="text-lg text-elegant-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust NAGI JEWELLERS for quality, 
            authenticity, and exceptional service. Your satisfaction is our priority.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <ShoppingBag className="h-5 w-5" />
              <span>Start Shopping</span>
            </a>
            <Link
              href="/testimonials"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-elegant-800 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Star className="h-5 w-5" />
              <span>Read Reviews</span>
            </Link>
          </div>
        </div>

        {/* Trust Badge */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4">
            <Award className="h-6 w-6 text-gold-400" />
            <span className="text-white font-medium">26+ Years of Trusted Service | 10,000+ Happy Customers</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCTA
