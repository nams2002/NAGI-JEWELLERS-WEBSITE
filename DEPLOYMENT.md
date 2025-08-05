# Deployment Guide for NAGI JEWELLERS Website

This guide will help you deploy the NAGI JEWELLERS website to Vercel and other platforms.

## 🚀 Quick Deployment to Vercel

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with GitHub
   - Click "New Project"
   - Import your repository
   - Configure settings (see below)
   - Click "Deploy"

3. **Vercel Configuration**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `out`
   - Install Command: `npm install`

### Option 2: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel --prod
   ```

## 🔧 Pre-Deployment Checklist

### 1. Update Contact Information

Replace placeholder contact details in these files:
- `components/Header.tsx`
- `components/Footer.tsx`
- `components/contact/ContactInfo.tsx`
- `components/contact/ContactHero.tsx`
- `app/layout.tsx` (metadata)

### 2. Replace Images

Replace all placeholder images with actual NAGI JEWELLERS content:

**Required Images:**
- Logo files (`/public/logo.png`, `/public/favicon.ico`)
- Hero background images
- Product photos
- Founder/team photos
- Certificate images
- Customer photos (with permission)

**Image Locations:**
- `/public/` directory for static images
- Update image URLs in components
- Optimize images for web (WebP format recommended)

### 3. Update Product Information

**File: `components/collection/ProductGrid.tsx`**
- Replace mock products with actual inventory
- Update prices, descriptions, and Amazon URLs
- Add real product categories

**File: `components/home/FeaturedProducts.tsx`**
- Update featured product selection
- Ensure Amazon links are correct

### 4. Customize Content

**Business Information:**
- Update company history in legacy components
- Modify testimonials with real customer reviews
- Update FAQ with actual business policies

**SEO Content:**
- Review meta descriptions
- Update structured data
- Verify business information accuracy

### 5. Configure Environment Variables

Create `.env.local` file:
```bash
cp .env.example .env.local
```

Update with actual values:
- Contact information
- Social media URLs
- Analytics IDs (if using)

## 🌐 Domain Configuration

### Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to Project Settings
   - Click "Domains"
   - Add your domain (e.g., `nagijewellers.com`)

2. **DNS Configuration:**
   - Add CNAME record: `www` → `cname.vercel-dns.com`
   - Add A record: `@` → `76.76.19.61`
   - Or follow Vercel's specific instructions

3. **SSL Certificate:**
   - Vercel automatically provides SSL
   - Certificate will be issued within minutes

## 📊 Analytics Setup (Optional)

### Google Analytics 4

1. **Create GA4 Property:**
   - Go to [analytics.google.com](https://analytics.google.com)
   - Create new property for your website

2. **Add Tracking Code:**
   ```typescript
   // Add to app/layout.tsx
   import Script from 'next/script'
   
   // In the component:
   <Script
     src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
     strategy="afterInteractive"
   />
   ```

3. **Update Environment Variables:**
   ```bash
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

## 🔍 SEO Optimization

### Search Console Setup

1. **Add Property:**
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your domain
   - Verify ownership

2. **Submit Sitemap:**
   - URL: `https://yourdomain.com/sitemap.xml`
   - Monitor indexing status

### Local SEO

1. **Google My Business:**
   - Create/claim business listing
   - Add accurate business information
   - Upload photos

2. **Local Directories:**
   - List business in relevant directories
   - Ensure NAP (Name, Address, Phone) consistency

## 🛡️ Security Considerations

### Security Headers

The website includes security headers in `vercel.json`:
- Content Security Policy
- X-Frame-Options
- XSS Protection

### HTTPS

- Vercel provides automatic HTTPS
- Redirect HTTP to HTTPS is enabled
- HSTS headers are included

## 📱 Performance Optimization

### Image Optimization

1. **Use Next.js Image Component:**
   - Already implemented in components
   - Automatic optimization and lazy loading

2. **Image Formats:**
   - Use WebP for better compression
   - Provide fallbacks for older browsers

### Caching

- Static assets cached for 1 year
- HTML pages cached appropriately
- CDN distribution via Vercel

## 🔄 Continuous Deployment

### Automatic Deployments

- Push to `main` branch triggers deployment
- Preview deployments for pull requests
- Rollback capability in Vercel dashboard

### Branch Protection

Recommended GitHub settings:
- Require pull request reviews
- Require status checks
- Restrict pushes to main branch

## 📞 Post-Deployment Tasks

### 1. Test All Functionality

- [ ] All pages load correctly
- [ ] Contact forms work
- [ ] WhatsApp links function
- [ ] Amazon links are correct
- [ ] Mobile responsiveness
- [ ] Page load speeds

### 2. SEO Verification

- [ ] Submit sitemap to Google
- [ ] Verify structured data
- [ ] Check meta tags
- [ ] Test social media previews

### 3. Analytics Setup

- [ ] Configure Google Analytics
- [ ] Set up conversion tracking
- [ ] Monitor user behavior

### 4. Monitoring

- [ ] Set up uptime monitoring
- [ ] Configure error tracking
- [ ] Monitor performance metrics

## 🆘 Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version (18+)
- Verify all dependencies are installed
- Review build logs for errors

**Image Loading Issues:**
- Ensure images are in `/public/` directory
- Check file paths and extensions
- Verify image optimization settings

**Contact Form Not Working:**
- Configure form handling service
- Update environment variables
- Test form submission

### Support Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📈 Performance Monitoring

### Key Metrics to Monitor

- Page load times
- Core Web Vitals
- Conversion rates
- User engagement

### Tools

- Google PageSpeed Insights
- Vercel Analytics
- Google Analytics
- Search Console

---

**Need Help?** Contact the development team or refer to the documentation links above.
