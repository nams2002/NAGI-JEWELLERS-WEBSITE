import Image from 'next/image'
import { Instagram, Users, Heart, Camera, MessageCircle } from 'lucide-react'

const SocialProof = () => {
  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: 'Beautiful necklace from @nagijewellers! Perfect for my sister\'s wedding 💎✨ #NagiJewellers #WeddingJewellery',
      username: '@priya_sharma_',
      likes: 234,
      comments: 18
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: 'Loving these earrings! Quality is amazing and they look so elegant 😍 Thank you @nagijewellers',
      username: '@kavita_style',
      likes: 189,
      comments: 12
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: 'Traditional bangles for Diwali celebration! @nagijewellers never disappoints 🪔✨ #Diwali #TraditionalJewellery',
      username: '@meera_traditions',
      likes: 156,
      comments: 24
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: 'Perfect gift for my mom\'s birthday! She absolutely loves it 💕 @nagijewellers #MomLove #GiftIdeas',
      username: '@ravi_gifts',
      likes: 201,
      comments: 15
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: 'Silver collection is just stunning! Great quality and affordable prices 🌟 @nagijewellers',
      username: '@anita_silver',
      likes: 178,
      comments: 9
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
      caption: 'Bridal jewelry shopping done! Thank you @nagijewellers for the beautiful collection 👰✨ #BridalJewellery',
      username: '@wedding_bells_2024',
      likes: 312,
      comments: 28
    }
  ]

  const customerPhotos = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      name: 'Priya wearing our Gold-Plated Necklace',
      occasion: 'Wedding Ceremony'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      name: 'Anita with Traditional Bangles',
      occasion: 'Festival Celebration'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      name: 'Kavita in Silver Earrings',
      occasion: 'Office Party'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
      name: 'Sunita wearing Temple Jewelry',
      occasion: 'Religious Function'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-elegant-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Social <span className="text-gold-600">Proof</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            See how our customers style and celebrate with NAGI JEWELLERS pieces. 
            Real people, real moments, real satisfaction.
          </p>
        </div>

        {/* Instagram Feed */}
        <div className="mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg flex items-center space-x-3">
              <Instagram className="h-6 w-6" />
              <span className="font-semibold text-lg">Customer Posts on Instagram</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Instagram post by ${post.username}`}
                    width={400}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-elegant-700 mb-4 leading-relaxed text-sm">
                    {post.caption}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-elegant-800">{post.username}</span>
                    <div className="flex items-center space-x-4 text-sm text-elegant-500">
                      <div className="flex items-center space-x-1">
                        <Heart className="h-4 w-4 text-red-500" />
                        <span>{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a
              href="https://instagram.com/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow Us on Instagram</span>
            </a>
          </div>
        </div>

        {/* Customer Photos */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-bold text-center text-elegant-800 mb-8">
            Our Customers <span className="text-gold-600">Shine Bright</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerPhotos.map((photo) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <Image
                  src={photo.image}
                  alt={photo.name}
                  width={300}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-semibold mb-1">{photo.name}</h4>
                    <p className="text-sm text-gold-200">{photo.occasion}</p>
                  </div>
                </div>

                {/* Camera Icon */}
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="h-4 w-4 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Stats */}
        <div className="bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 text-white text-center">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-8">
            Join Our Growing Community
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <Users className="h-12 w-12 mx-auto mb-4 text-gold-200" />
              <h4 className="text-3xl font-bold mb-2">10K+</h4>
              <p className="text-gold-100">Happy Customers</p>
            </div>
            <div>
              <Instagram className="h-12 w-12 mx-auto mb-4 text-gold-200" />
              <h4 className="text-3xl font-bold mb-2">5K+</h4>
              <p className="text-gold-100">Instagram Followers</p>
            </div>
            <div>
              <Heart className="h-12 w-12 mx-auto mb-4 text-gold-200" />
              <h4 className="text-3xl font-bold mb-2">50K+</h4>
              <p className="text-gold-100">Social Media Likes</p>
            </div>
            <div>
              <Camera className="h-12 w-12 mx-auto mb-4 text-gold-200" />
              <h4 className="text-3xl font-bold mb-2">1K+</h4>
              <p className="text-gold-100">Customer Photos</p>
            </div>
          </div>

          <p className="text-xl text-gold-100 mb-8 max-w-2xl mx-auto">
            Share your NAGI JEWELLERS moments with us! Tag @nagijewellers in your photos 
            and become part of our beautiful community.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://instagram.com/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-gold-600 hover:bg-gold-50 font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Instagram className="h-5 w-5" />
              <span>Follow on Instagram</span>
            </a>
            <a
              href="https://amazon.in/shops/nagijewellers"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-gold-600 font-semibold py-3 px-6 rounded-lg transition-all duration-300"
            >
              Shop Our Collection
            </a>
          </div>
        </div>

        {/* Photo Replacement Note */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📸 Customer Photos Needed</h3>
          <p className="text-blue-700">
            <strong>Replace all customer photos above with:</strong> Real photos of NAGI JEWELLERS customers 
            wearing your products. Get permission from customers to use their photos. Include diverse customers 
            of different ages and occasions. Also replace Instagram post images with actual screenshots of 
            customer posts mentioning @nagijewellers.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialProof
