import Image from 'next/image'
import { MessageCircle, Phone, Mail, Clock } from 'lucide-react'

const ContactHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
          alt="Contact NAGI JEWELLERS customer support"
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
            <MessageCircle className="h-5 w-5 text-gold-400" />
            <span className="text-gold-200 font-medium">We're Here to Help</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 animate-slide-up">
            Get in
            <br />
            <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed animate-slide-up animation-delay-200">
            Have questions about our jewellery? Need personalized assistance? 
            <br className="hidden md:block" />
            Our friendly team is here to help you find the perfect piece.
          </p>

          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 animate-slide-up animation-delay-400">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white p-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-4"
            >
              <MessageCircle className="h-8 w-8" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">WhatsApp</h3>
                <p className="text-green-100">Instant Support</p>
              </div>
            </a>
            
            <a
              href="tel:+919876543210"
              className="bg-blue-500 hover:bg-blue-600 text-white p-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-4"
            >
              <Phone className="h-8 w-8" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Call Us</h3>
                <p className="text-blue-100">+91 98765 43210</p>
              </div>
            </a>
            
            <a
              href="mailto:info@nagijewellers.com"
              className="bg-purple-500 hover:bg-purple-600 text-white p-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center space-x-4"
            >
              <Mail className="h-8 w-8" />
              <div className="text-left">
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-purple-100">Quick Response</p>
              </div>
            </a>
          </div>

          {/* Business Hours */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 animate-slide-up animation-delay-600">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-gold-400" />
              <h3 className="text-xl font-semibold text-gold-400">Business Hours</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-white font-medium">Monday - Saturday</p>
                <p className="text-gold-200">10:00 AM - 8:00 PM</p>
              </div>
              <div>
                <p className="text-white font-medium">Sunday</p>
                <p className="text-gold-200">11:00 AM - 6:00 PM</p>
              </div>
            </div>
            <p className="text-gold-100 text-sm mt-4">
              WhatsApp support available 24/7 for urgent queries
            </p>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}

export default ContactHero
