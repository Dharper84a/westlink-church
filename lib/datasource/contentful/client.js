const contenful = require('contentful')

const SPACE_ID = process.env.SPACE_ID || process.env.NEXT_PUBLIC_SPACE_ID;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || process.env.NEXT_PUBLIC_ACCESS_TOKEN;

const clientConfig = {
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN
};

export const contentClient = contenful.createClient(clientConfig)

export default contentClient;