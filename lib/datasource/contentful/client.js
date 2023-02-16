const contentful = require('contentful')

export const contentClient = contentful.createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
})

export const previewClient = contentful.createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    host: "preview.contentful.com"
})

export default contentClient;