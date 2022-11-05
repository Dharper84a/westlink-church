/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.ctfassets.net','source.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/simple_house',
        destination: '/simple-house',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
