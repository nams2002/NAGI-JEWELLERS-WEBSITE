import Image from 'next/image'
import { Star, Quote, CheckCircle, Calendar, ShoppingBag } from 'lucide-react'

const CustomerReviews = () => {
  const amazonReviews = [
    {
      id: 1,
      name: 'Priya Sharma',
      location: 'Mumbai, Maharashtra',
      rating: 5,
      date: 'December 2024',
      product: 'Gold-Plated Necklace Set',
      review: 'Absolutely beautiful jewellery! The quality is exceptional and exactly as described. The gold plating is perfect and hasn\'t tarnished even after months of use. NAGI JEWELLERS has been my go-to for all special occasions. Highly recommend!',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      verified: true,
      helpful: 45
    },
    {
      id: 2,
      name: 'Rajesh Kumar',
      location: 'Delhi, India',
      rating: 5,
      date: 'November 2024',
      product: 'Sterling Silver Earrings',
      review: 'Bought these earrings for my wife\'s birthday and she absolutely loves them! The craftsmanship is outstanding and the delivery was prompt. The packaging was also very elegant. Will definitely order again from NAGI JEWELLERS.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      verified: true,
      helpful: 32
    },
    {
      id: 3,
      name: 'Anita Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      date: 'October 2024',
      product: 'Traditional Bangles Set',
      review: 'The traditional designs are simply gorgeous! Quality is top-notch and the customer service is excellent. I\'ve been buying from NAGI JEWELLERS for years and they never disappoint. Perfect for festivals and weddings.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      verified: true,
      helpful: 28
    },
    {
      id: 4,
      name: 'Kavita Singh',
      location: 'Bangalore, Karnataka',
      rating: 5,
      date: 'September 2024',
      product: 'Artificial Diamond Bracelet',
      review: 'Amazing quality for the price! The artificial diamonds look so real and the bracelet is very comfortable to wear. Great for daily use and special occasions. Fast delivery and excellent packaging.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      verified: true,
      helpful: 19
    },
    {
      id: 5,
      name: 'Deepak Agarwal',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      date: 'August 2024',
      product: 'Gold-Plated Chain with Pendant',
      review: 'Excellent quality and beautiful design. Bought this as a gift for my daughter and she was thrilled! The chain is sturdy and the pendant is elegant. NAGI JEWELLERS maintains consistent quality.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      verified: true,
      helpful: 24
    },
    {
      id: 6,
      name: 'Sunita Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      date: 'July 2024',
      product: 'Silver Temple Jewelry Set',
      review: 'Beautiful temple jewelry with intricate designs. The silver quality is excellent and the finishing is perfect. Received many compliments when I wore it to a wedding. Highly satisfied with the purchase.',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      verified: true,
      helpful: 37
    }
  ]

  const whatsappReviews = [
    {
      id: 1,
      name: 'Meera Joshi',
      message: 'Thank you so much for the beautiful necklace! It\'s exactly what I wanted for my daughter\'s wedding. The quality is amazing and the price was very reasonable. Will definitely recommend to friends! 🙏✨',
      date: 'Dec 15, 2024',
      product: 'Bridal Necklace Set'
    },
    {
      id: 2,
      name: 'Ravi Gupta',
      message: 'Received the earrings today. My wife is very happy with them! Great quality and fast delivery. Thank you NAGI JEWELLERS for the excellent service. 👍',
      date: 'Dec 10, 2024',
      product: 'Gold-Plated Earrings'
    },
    {
      id: 3,
      name: 'Pooja Mehta',
      message: 'Amazing collection! I\'ve ordered multiple times and every piece has been perfect. The customer service is also very helpful. Keep up the good work! 💎',
      date: 'Dec 5, 2024',
      product: 'Multiple Orders'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Real Customer <span className="text-gold-600">Reviews</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            Authentic feedback from our valued customers who have experienced 
            the NAGI JEWELLERS difference firsthand.
          </p>
        </div>

        {/* Amazon Reviews */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-orange-500 text-white px-6 py-3 rounded-lg flex items-center space-x-3">
              <ShoppingBag className="h-6 w-6" />
              <span className="font-semibold text-lg">Amazon Verified Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amazonReviews.map((review) => (
              <div
                key={review.id}
                className="card-elegant p-6 relative group hover:shadow-2xl transition-all duration-500"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-gold-200 group-hover:text-gold-300 transition-colors duration-300">
                  <Quote className="h-6 w-6" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                  {review.verified && (
                    <CheckCircle className="h-5 w-5 text-green-500 ml-2" />
                  )}
                </div>

                {/* Review Text */}
                <p className="text-elegant-600 mb-6 leading-relaxed">
                  "{review.review}"
                </p>

                {/* Product Info */}
                <div className="bg-elegant-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-elegant-700">
                    <span className="font-medium">Product:</span> {review.product}
                  </p>
                </div>

                {/* Customer Info */}
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Image
                      src={review.image}
                      alt={review.name}
                      width={50}
                      height={50}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    {review.verified && (
                      <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1">
                        <CheckCircle className="h-3 w-3 text-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-elegant-800">{review.name}</h4>
                    <p className="text-sm text-elegant-500">{review.location}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Calendar className="h-3 w-3 text-elegant-400" />
                      <span className="text-xs text-elegant-500">{review.date}</span>
                    </div>
                  </div>
                </div>

                {/* Helpful Count */}
                <div className="mt-4 pt-4 border-t border-elegant-200">
                  <p className="text-xs text-elegant-500">
                    {review.helpful} people found this helpful
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Reviews */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-green-500 text-white px-6 py-3 rounded-lg flex items-center space-x-3">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
              </svg>
              <span className="font-semibold text-lg">WhatsApp Customer Messages</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whatsappReviews.map((review) => (
              <div
                key={review.id}
                className="bg-green-50 border border-green-200 rounded-2xl p-6 relative"
              >
                <div className="absolute top-4 right-4">
                  <svg className="h-6 w-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </div>

                <p className="text-elegant-700 mb-4 leading-relaxed">
                  {review.message}
                </p>

                <div className="border-t border-green-200 pt-4">
                  <h4 className="font-semibold text-elegant-800 mb-1">{review.name}</h4>
                  <p className="text-sm text-elegant-600 mb-1">{review.product}</p>
                  <p className="text-xs text-elegant-500">{review.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Review Summary */}
        <div className="bg-gradient-to-r from-elegant-50 to-gold-50 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-serif font-bold text-elegant-800 mb-6">
            What Our Numbers Say
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-4xl font-bold text-gold-600 mb-2">4.5★</h4>
              <p className="text-elegant-600">Average Rating</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gold-600 mb-2">99%</h4>
              <p className="text-elegant-600">Positive Reviews</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gold-600 mb-2">95%</h4>
              <p className="text-elegant-600">Repeat Customers</p>
            </div>
            <div>
              <h4 className="text-4xl font-bold text-gold-600 mb-2">24hrs</h4>
              <p className="text-elegant-600">Response Time</p>
            </div>
          </div>

          <p className="text-lg text-elegant-600 mb-6">
            These numbers reflect our unwavering commitment to customer satisfaction and quality excellence.
          </p>

          <a
            href="https://amazon.in/shops/nagijewellers"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-lg px-8 py-4"
          >
            Join Our Happy Customers
          </a>
        </div>
      </div>
    </section>
  )
}

export default CustomerReviews
