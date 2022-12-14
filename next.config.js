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
        source: '/ministers_staff',
        destination: '/who-we-are',
        permanent: true,
      },
      {
        source: '/assembly_times',
        destination: '/schedule',
        permanent: true,
      },
      {
        source: '/giving',
        destination: '/donate',
        permanent: true,
      },
      {
        source: '/who_we_are',
        destination: '/who-we-are',
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
