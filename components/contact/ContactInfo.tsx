import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Globe, Award } from 'lucide-react'

const ContactInfo = () => {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Support',
      subtitle: 'Instant messaging support',
      details: '+91 98765 43210',
      action: 'Chat Now',
      link: 'https://wa.me/919876543210',
      color: 'from-green-500 to-green-600',
      description: 'Get instant responses to your queries, product recommendations, and order assistance.'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      subtitle: 'Direct voice support',
      details: '+91 98765 43210',
      action: 'Call Now',
      link: 'tel:+919876543210',
      color: 'from-blue-500 to-blue-600',
      description: 'Speak directly with our customer service team for detailed assistance.'
    },
    {
      icon: Mail,
      title: 'Email Support',
      subtitle: 'Detailed written support',
      details: 'info@nagijewellers.com',
      action: 'Send Email',
      link: 'mailto:info@nagijewellers.com',
      color: 'from-purple-500 to-purple-600',
      description: 'Send detailed queries and receive comprehensive responses within 24 hours.'
    },
    {
      icon: Instagram,
      title: 'Social Media',
      subtitle: 'Follow and message us',
      details: '@nagijewellers',
      action: 'Follow Us',
      link: 'https://instagram.com/nagijewellers',
      color: 'from-pink-500 to-purple-600',
      description: 'Stay updated with latest collections and connect with our community.'
    }
  ]

  const storeInfo = {
    address: {
      street: '123 Jewellery Street',
      area: 'Commercial Complex',
      city: 'Mumbai',
      state: 'Maharashtra',
      pincode: '400001',
      country: 'India'
    },
    hours: {
      weekdays: 'Monday - Saturday: 10:00 AM - 8:00 PM',
      weekend: 'Sunday: 11:00 AM - 6:00 PM',
      note: 'WhatsApp support available 24/7'
    }
  }

  return (
    <section className="section-padding bg-gradient-to-b from-elegant-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-elegant-800 mb-6">
            Multiple Ways to <span className="text-gold-600">Connect</span>
          </h2>
          <p className="text-xl text-elegant-600 max-w-3xl mx-auto leading-relaxed">
            Choose the most convenient way to reach us. Our dedicated team is ready to assist 
            you with any questions about our jewellery collection.
          </p>
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group"
            >
              {/* Icon and Header */}
              <div className="flex items-start space-x-4 mb-6">
                <div className={`bg-gradient-to-r ${method.color} w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold text-elegant-800 mb-2 group-hover:text-gold-600 transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gold-600 font-medium mb-2">{method.subtitle}</p>
                  <p className="text-lg font-semibold text-elegant-700">{method.details}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-elegant-600 mb-6 leading-relaxed">
                {method.description}
              </p>

              {/* Action Button */}
              <a
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`inline-flex items-center space-x-2 bg-gradient-to-r ${method.color} text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl`}
              >
                <method.icon className="h-5 w-5" />
                <span>{method.action}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Store Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Store Details */}
          <div>
            <h3 className="text-3xl font-serif font-bold text-elegant-800 mb-8">
              Visit Our <span className="text-gold-600">Store</span>
            </h3>

            {/* Address */}
            <div className="bg-white rounded-2xl p-8 shadow-lg mb-8">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-elegant-800 mb-3">Store Address</h4>
                  <div className="text-elegant-600 leading-relaxed">
                    <p>{storeInfo.address.street}</p>
                    <p>{storeInfo.address.area}</p>
                    <p>{storeInfo.address.city}, {storeInfo.address.state} {storeInfo.address.pincode}</p>
                    <p>{storeInfo.address.country}</p>
                  </div>
                </div>
              </div>
              
              <a
                href="https://maps.google.com/?q=NAGI+JEWELLERS+Mumbai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gold-600 hover:text-gold-700 font-medium transition-colors duration-300"
              >
                <Globe className="h-4 w-4" />
                <span>View on Google Maps</span>
              </a>
            </div>

            {/* Business Hours */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-start space-x-4 mb-6">
                <div className="bg-gold-500 w-12 h-12 rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-elegant-800 mb-3">Business Hours</h4>
                  <div className="text-elegant-600 space-y-2">
                    <p>{storeInfo.hours.weekdays}</p>
                    <p>{storeInfo.hours.weekend}</p>
                    <p className="text-green-600 font-medium text-sm mt-3">
                      {storeInfo.hours.note}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="relative">
            <div className="bg-elegant-100 rounded-2xl h-96 flex items-center justify-center shadow-lg">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-gold-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-elegant-800 mb-2">Store Location</h4>
                <p className="text-elegant-600 mb-4">Interactive map will be embedded here</p>
                <a
                  href="https://maps.google.com/?q=NAGI+JEWELLERS+Mumbai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center space-x-2"
                >
                  <Globe className="h-5 w-5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>

            {/* Store Features */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <Award className="h-8 w-8 text-gold-500" />
                <div>
                  <h5 className="font-bold text-elegant-800">Trusted Store</h5>
                  <p className="text-sm text-elegant-600">26+ Years in Business</p>
                </div>
              </div>
              <p className="text-sm text-elegant-600">
                Visit our physical store for personalized consultation and to see our complete collection.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Replacement Note */}
        <div className="mt-12 p-6 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">📞 Contact Information Update Needed</h3>
          <p className="text-blue-700">
            <strong>Replace the contact details above with:</strong> Actual NAGI JEWELLERS contact information including 
            real phone numbers, email addresses, physical store address, and social media handles. Also embed a real 
            Google Maps location for the store.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
