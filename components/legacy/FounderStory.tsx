import Image from 'next/image'
import { Quote, Heart, Star, Award } from 'lucide-react'

const FounderStory = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-elegant-50 to-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Founder of NAGI JEWELLERS - Replace with actual founder photo"
                width={600}
                height={700}
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>

            {/* Floating Quote Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <Quote className="h-8 w-8 text-gold-500 mb-3" />
              <p className="text-elegant-700 italic text-sm leading-relaxed">
                "Every piece of jewellery we create carries our family's promise of authenticity and quality."
              </p>
              <p className="text-gold-600 font-semibold mt-3 text-sm">- Founder, NAGI JEWELLERS</p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-500/20 rounded-full blur-xl"></div>
          </div>

          {/* Content Section */}
          <div>
            <div className="mb-6">
              <span className="inline-block bg-gold-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Founder's Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
                Built on <span className="text-gold-600">Family Values</span>
              </h2>
            </div>

            <div className="space-y-6 text-lg text-elegant-600 leading-relaxed">
              <p>
                <strong className="text-elegant-800">NAGI JEWELLERS LTD</strong> was born from a simple yet powerful vision: 
                to create beautiful, authentic jewellery that celebrates life's most precious moments. 
                What started as a small family business in 1999 has grown into a trusted name across India.
              </p>

              <p>
                Our founder believed that jewellery is more than just an accessory—it's a symbol of love, 
                tradition, and memories that last a lifetime. This philosophy has guided every decision 
                we've made over the past 26 years.
              </p>

              <p>
                From sourcing the finest materials to ensuring each piece meets our exacting standards, 
                we've never compromised on quality. Our transition to digital platforms like Amazon 
                has allowed us to share our legacy with families nationwide while maintaining the 
                personal touch that defines us.
              </p>
            </div>

            {/* Values Highlights */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="flex items-start space-x-3">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <Heart className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-800 mb-1">Family First</h4>
                  <p className="text-sm text-elegant-600">Every customer is treated like family</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <Star className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-800 mb-1">Quality Promise</h4>
                  <p className="text-sm text-elegant-600">Never compromise on authenticity</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <Award className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-800 mb-1">Trust & Integrity</h4>
                  <p className="text-sm text-elegant-600">Built on honest relationships</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="bg-gold-500 rounded-full p-2 mt-1">
                  <Quote className="h-4 w-4 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-elegant-800 mb-1">Legacy Focus</h4>
                  <p className="text-sm text-elegant-600">Creating memories for generations</p>
                </div>
              </div>
            </div>

            {/* Personal Note */}
            <div className="bg-gold-50 rounded-lg p-6 mt-8 border-l-4 border-gold-500">
              <p className="text-elegant-700 italic">
                "When customers choose NAGI JEWELLERS, they're not just buying jewellery—they're 
                becoming part of our extended family. This responsibility drives us to excel every single day."
              </p>
            </div>
          </div>
        </div>

        {/* Photo Replacement Note */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📸 Photo Replacement Needed</h3>
          <p className="text-blue-700">
            <strong>Replace the founder photo above with:</strong> An actual photo of the NAGI JEWELLERS founder/family. 
            The current image is a placeholder. Ideal photo should show the founder in the store or with jewellery pieces, 
            conveying trust and authenticity.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FounderStory
