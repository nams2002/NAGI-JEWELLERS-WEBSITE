/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'm.media-amazon.com', 'via.placeholder.com'],
    unoptimized: false,
  },
  // Standard deployment for Vercel
  trailingSlash: true,
}

module.exports = nextConfig
