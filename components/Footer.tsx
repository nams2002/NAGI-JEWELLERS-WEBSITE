import Link from 'next/link'
import { Crown, Instagram, MessageCircle, Mail, MapPin, Phone, Star, Award, Users, Calendar } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Our Legacy', href: '/legacy' },
    { name: 'Collection', href: '/collection' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  const trustBadges = [
    { icon: Calendar, text: '26+ Years', subtitle: 'of Excellence' },
    { icon: Users, text: '10,000+', subtitle: 'Happy Customers' },
    { icon: Award, text: 'BIS', subtitle: 'Certified' },
    { icon: Star, text: '4.5★', subtitle: 'Amazon Rating' },
  ]

  return (
    <footer className="bg-elegant-900 text-white">
      {/* Trust Badges Section */}
      <div className="border-b border-elegant-700">
        <div className="container-custom py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gold-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <badge.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gold-400 mb-1">{badge.text}</h3>
                <p className="text-elegant-300 text-sm">{badge.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-2 rounded-lg">
                <Crown className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-serif font-bold">NAGI JEWELLERS</h2>
                <p className="text-gold-400 text-sm font-medium tracking-wider">
                  CRAFTED WITH TRUST SINCE 1999
                </p>
              </div>
            </Link>
            <p className="text-elegant-300 mb-6 leading-relaxed">
              For over 26 years, NAGI JEWELLERS LTD has been crafting beautiful, authentic jewellery 
              with unwavering commitment to quality and trust. From our humble offline beginnings to 
              serving customers nationwide through Amazon, our legacy continues to shine.
            </p>
            <div className="flex space-x-4">
              <Link
                href="https://instagram.com/nagijewellers"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elegant-800 hover:bg-gold-500 p-3 rounded-lg transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-elegant-800 hover:bg-green-500 p-3 rounded-lg transition-colors duration-300"
              >
                <MessageCircle className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold-400">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-elegant-300 hover:text-gold-400 transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="https://amazon.in/shops/nagijewellers"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-elegant-300 hover:text-gold-400 transition-colors duration-300"
                >
                  Amazon Store
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold-400">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-elegant-300 text-sm">
                    123 Jewellery Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <p className="text-elegant-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-500 flex-shrink-0" />
                <p className="text-elegant-300 text-sm">info@nagijewellers.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-elegant-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-elegant-400 text-sm">
              © {currentYear} NAGI JEWELLERS LTD. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-elegant-400 hover:text-gold-400 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-elegant-400 hover:text-gold-400 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
