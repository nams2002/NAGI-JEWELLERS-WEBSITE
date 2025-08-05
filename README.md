# NAGI JEWELLERS LTD - Official Website

A modern, trust-focused website for NAGI JEWELLERS LTD, a 26+ year-old offline jewellery brand now entering the online space.

## 🌟 Features

- **Modern Design**: Clean, elegant design with luxurious feel
- **Trust-Focused**: Showcases 26+ years of legacy and customer testimonials
- **Product Showcase**: Features artificial, silver, and gold-plated jewellery
- **Amazon Integration**: Direct links to Amazon store for purchases
- **Mobile Responsive**: Optimized for all devices
- **SEO Optimized**: Structured data and meta tags for better search visibility
- **Performance Optimized**: Fast loading with Next.js and optimized images

## 📄 Pages

1. **Home Page**: Hero section, featured products, trust badges, and brand showcase
2. **Our Legacy**: 26-year brand story, founder story, and company values
3. **Jewellery Collection**: Product grid with categories and Amazon links
4. **Testimonials & Trust**: Customer reviews, social proof, and trust indicators
5. **Contact Us**: Contact form, WhatsApp integration, and business information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS with custom design system
- **Icons**: Lucide React
- **Deployment**: Vercel (configured for static export)
- **SEO**: Structured data, sitemap, robots.txt

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd nagi-jewellers-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

This creates an optimized static export in the `out` directory.

## 📸 Image Replacement Guide

The website currently uses placeholder images. Replace them with actual NAGI JEWELLERS content:

### Required Images

1. **Logo & Branding**
   - Company logo (SVG preferred)
   - Favicon files (16x16, 32x32, 180x180)

2. **Hero & Background Images**
   - High-quality jewellery photography
   - Store interior/exterior photos
   - Artisan/craftsmanship images

3. **Product Images**
   - Individual product photos (multiple angles)
   - Category showcase images
   - Lifestyle shots of jewellery being worn

4. **People & Testimonials**
   - Founder/family photos
   - Customer photos (with permission)
   - Team/staff photos

5. **Certificates & Awards**
   - BIS certificates
   - Amazon seller verification
   - Any awards or recognitions

### Image Specifications

- **Format**: WebP preferred, JPEG/PNG acceptable
- **Quality**: High resolution (minimum 1200px width for hero images)
- **Optimization**: Compress images for web use
- **Naming**: Use descriptive filenames

## 📞 Contact Information Update

Update the following contact details throughout the website:

- Phone numbers
- Email addresses
- Physical store address
- Social media handles
- WhatsApp numbers
- Google Maps location

## 🔧 Customization

### Colors & Branding

The design system uses a gold and elegant color palette. Customize in `tailwind.config.js`:

```javascript
colors: {
  gold: {
    // Custom gold shades
  },
  elegant: {
    // Custom gray shades
  }
}
```

### Content Updates

- Update company information in components
- Modify product listings in `ProductGrid.tsx`
- Update testimonials in `CustomerReviews.tsx`
- Customize FAQ content in `FAQ.tsx`

## 🌐 Deployment

### Vercel Deployment (Recommended)

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `out`
4. Deploy

### Manual Deployment

1. Build the project: `npm run build`
2. Upload the `out` directory to your web server
3. Configure server for static file serving

## 📈 SEO & Analytics

### Included SEO Features

- Meta tags and Open Graph data
- Structured data (JSON-LD)
- Sitemap generation
- Robots.txt
- Performance optimizations

### Add Analytics

To add Google Analytics:

1. Get your GA4 tracking ID
2. Add to `app/layout.tsx`
3. Configure tracking events

## 🔒 Security

The website includes security headers:

- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- XSS Protection

## 📱 Progressive Web App

The site includes PWA configuration:

- Web app manifest
- Service worker ready
- Offline capabilities (can be enhanced)

## 🤝 Support

For technical support or customization requests:

- Create an issue in the repository
- Contact the development team
- Refer to Next.js documentation

## 📄 License

This project is proprietary to NAGI JEWELLERS LTD.

---

**Built with ❤️ for NAGI JEWELLERS LTD - Crafted with Trust Since 1999**
