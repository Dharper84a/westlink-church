/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['images.ctfassets.net','source.unsplash.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',
  },
  async redirects() {
    return [
      {
        source: '/simple_house',
        destination: '/simple-house',
        permanent: true,
      },
      {
        source: '/resources',
        destination: '/schedule',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig
