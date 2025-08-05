import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Calendar, MapPin, Users } from 'lucide-react'

const LegacyPreview = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-elegant-50 to-gold-50">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <span className="inline-block bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
                A Legacy of <span className="text-gold-600">Trust & Tradition</span>
              </h2>
            </div>

            <p className="text-lg text-elegant-600 mb-8 leading-relaxed">
              Since 1999, NAGI JEWELLERS LTD has been more than just a jewellery business—we've been 
              custodians of precious moments, creators of lasting memories, and builders of trust that 
              spans generations.
            </p>

            {/* Key Milestones */}
            <div className="space-y-6 mb-8">
              <div className="flex items-start space-x-4">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <Calendar className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-800 mb-1">1999 - The Beginning</h4>
                  <p className="text-elegant-600">Started as a small offline store with a vision to provide authentic, quality jewellery.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <Users className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-800 mb-1">2010s - Community Trust</h4>
                  <p className="text-elegant-600">Built a loyal customer base through consistent quality and personalized service.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-800 mb-1">2020s - Digital Expansion</h4>
                  <p className="text-elegant-600">Expanded to Amazon to serve customers nationwide while maintaining our quality standards.</p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gold-600 mb-1">26+</h3>
                <p className="text-sm text-elegant-600">Years</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gold-600 mb-1">10K+</h3>
                <p className="text-sm text-elegant-600">Customers</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-gold-600 mb-1">100%</h3>
                <p className="text-sm text-elegant-600">Authentic</p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/legacy"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Read Our Complete Story</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="NAGI JEWELLERS legacy - Traditional craftsmanship"
                  width={600}
                  height={700}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="bg-gold-500 rounded-full p-2">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-elegant-800">Since 1999</h4>
                    <p className="text-sm text-elegant-600">26+ Years of Excellence</p>
                  </div>
                </div>
                <p className="text-sm text-elegant-600">
                  "From our family to yours, crafting memories that last a lifetime."
                </p>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold-500/20 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-gold-400/30 rounded-full blur-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LegacyPreview
