/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    env: {
        "GTM_ID": "GTM-PTWBQTM",
        "GA4_ID": "G-YVBLEY7PJX"
    },
    reactStrictMode: false,
    compiler: {
        styledComponents: true
    },
    images: {
        domains: ['images.ctfassets.net', 'source.unsplash.com', 'diqstapf6hjxd.cloudfront.net', 'i.redd.it', 'wharferj.files.wordpress.com', 'images7.alphacoders.com', 'placekitten.com']
    },
    i18n: {
        locales: ['en-US'],
        defaultLocale: 'en-US'
    },
    async redirects() {
        return [
            {
                source: '/podcasts',
                destination: '/daily-devotionals',
                permanent: true
            },
            {
                source: '/simple_house',
                destination: '/simple-house',
                permanent: true
            },
            {
                source: '/ministers_staff',
                destination: '/who-we-are',
                permanent: true
            },
            {
                source: '/assembly_times',
                destination: '/schedule',
                permanent: true
            },
            {
                source: '/giving',
                destination: '/donate',
                permanent: true
            },
            {
                source: '/who_we_are',
                destination: '/who-we-are',
                permanent: true
            },
            {
                source: '/resources',
                destination: '/schedule',
                permanent: false
            }
        ];
    }
};

module.exports = nextConfig;
