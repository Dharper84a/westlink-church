import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { ThemeProvider } from 'styled-components';

/** SEO */
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config.js';

import {theme} from '../styles/theme';
import {GlobalStyle} from '../styles/globalStyles';

import '../styles/animations.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <DefaultSeo {...SEO} />
        <Component {...pageProps} />
        <GlobalStyle />
    </ThemeProvider>
  );
}

export default MyApp
