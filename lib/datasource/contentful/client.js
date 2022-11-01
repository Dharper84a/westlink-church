const contenful = require('contentful')

export const contentClient = contenful.createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_TOKEN,
})

export default contentClient;