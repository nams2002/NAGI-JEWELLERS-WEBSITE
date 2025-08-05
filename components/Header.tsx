'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Crown, ShoppingBag } from 'lucide-react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Legacy', href: '/legacy' },
    { name: 'Collection', href: '/collection' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-r from-gold-500 to-gold-600 p-2 rounded-lg group-hover:scale-105 transition-transform duration-300">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-serif font-bold text-elegant-800">
                NAGI JEWELLERS
              </h1>
              <p className="text-xs text-gold-600 font-medium tracking-wider">
                CRAFTED WITH TRUST SINCE 1999
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-elegant-700 hover:text-gold-600 font-medium transition-colors duration-300 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Amazon Store CTA */}
            <Link
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center space-x-2"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Visit Amazon Store</span>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-elegant-100 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-elegant-700" />
            ) : (
              <Menu className="h-6 w-6 text-elegant-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-elegant-200 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-elegant-700 hover:text-gold-600 font-medium transition-colors duration-300 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://amazon.in/shops/nagijewellers"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center space-x-2 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <ShoppingBag className="h-4 w-4" />
                <span>Visit Amazon Store</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
