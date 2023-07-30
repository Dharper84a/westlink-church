import { useEffect } from 'react';
import { useRouter } from 'next/router.js';

/** SEO and Analytics */
import Analytics from '../lib/analytics/analytics.js';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config.js';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { ThemeProvider } from 'styled-components';



import {theme} from '../styles/theme';
import {GlobalStyle} from '../styles/globalStyles';

import '../styles/animations.css';


function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // console.log(pageProps)
    useEffect(() => {
        Analytics.pushDataLayer('pageView', {
            "path": router.asPath,
            "title": pageProps?.fields?.title || "Webpage",
            "timestamp": Date.now(),
        })
        
    }, [router.asPath, pageProps])
    return (
        <ThemeProvider theme={theme}>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
            <GlobalStyle />
        </ThemeProvider>
    );
}

export default MyApp
