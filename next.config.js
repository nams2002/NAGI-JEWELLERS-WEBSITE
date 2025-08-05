/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com', 'm.media-amazon.com', 'via.placeholder.com'],
    unoptimized: false,
  },
  // Standard deployment for Vercel
  trailingSlash: true,
}

module.exports = nextConfig
