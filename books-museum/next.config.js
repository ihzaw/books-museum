/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'covers.openlibrary.org',
      'placehold.co'
    ]
  },
  experimental: {
    serverActions: true,
  },
}

module.exports = nextConfig
