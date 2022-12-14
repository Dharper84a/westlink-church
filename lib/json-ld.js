export const WebpageJsonLd = {
    "@context": "https://schema.org",
    "@type": "Webpage",
    "name": "",
    "description": "",
    "mainContentOfPage": "main",
    "copyrightYear": 2022,
    "teaches": "religion"
}


const setJsonLd = (jsonLdObject) => {
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdObject)}}
    />
}

export default setJsonLd