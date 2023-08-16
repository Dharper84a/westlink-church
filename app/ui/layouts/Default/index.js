'use client'
import { ThemeProvider } from 'styled-components';
import {theme} from '../../styles/theme';

import GlobalStyle from '../../styles/GlobalStyles';

import Header from "./Header";
import Footer from "./Footer";

import FullWidthHero from '../../components/FullWidthHero';

import { _DefaultLayout } from './styles';

const DefaultLayout = (props) => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <_DefaultLayout>
                <Header />
                <main>
                    <FullWidthHero />
                    {props.children}
                </main>
                <Footer />
            </_DefaultLayout>
        </ThemeProvider>
    )
}

export default DefaultLayout;