import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { ServerStyleSheet } from 'styled-components';

/** JSON-LD DATA */
import { churchJsonLd } from '../../lib/church-json-ld';
export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: [initialProps.styles, sheet.getStyleElement()]
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Lato:wght@100;200;300;400;500;700&display=swap"
                        rel="stylesheet"
                    />
                    <Script
                        strategy="beforeInteractive"
                        id="chuch_jsonld"
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchJsonLd) }}
                    />
                    <Script
                        strategy="beforeInteractive"
                        id="gtm_script"
                        src={`https://www.googletagmanager.com/gtm.js?id=${process.env.GTM_ID}`}
                        async={true}
                    /> 

                </Head>
                <body>
                    <noscript>
                        <iframe
                            src={`https://www.googletagmanager.com/gtm.js?id=${process.env.GTM_ID}`}
                            height="0"
                            width="0"
                            style={{
                                display: 'none',
                                visibility: 'hidden'
                            }}></iframe>
                    </noscript>

                    <div id="modal"></div>
                    <div id="drawer"></div>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
