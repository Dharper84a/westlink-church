/* eslint-disable @next/next/inline-script-id */
import Script from 'next/script';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { ThemeProvider } from 'styled-components';

/** SEO */
import { DefaultSeo, NextSeo } from 'next-seo';
import SEO from '../../next-seo.config.js';
import setJsonLd, {WebpageJsonLd} from '../../lib/json-ld.js';
import { churchJsonLd } from '../../lib/church-json-ld.js';

import {theme} from '../styles/theme';
import {GlobalStyle} from '../styles/globalStyles';

import '../styles/animations.css';

function MyApp({ Component, pageProps }) {
    // console.log(pageProps)
    

    return (
        <ThemeProvider theme={theme}>
            <DefaultSeo {...SEO} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify({
                    ...WebpageJsonLd,
                    name: pageProps?.fields?.metaTitle
                })}}
            />
            
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default MyApp
