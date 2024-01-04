'use client'
import { ThemeProvider } from 'styled-components';
import {theme} from '../../styles/theme';

import GlobalStyle from '../../styles/GlobalStyles';

import Header from "./Header";
import Footer from "./Footer";

import ImageHero from '../../components/ImageHero';

import { _DefaultLayout } from './styles';

import useIntersectionObserver from '../../../lib/hooks/useIntersectionObserver';
import { SiteProvider } from '../../../lib/context';
import HeroSlider from '../../components/HeroSlider';


const DefaultLayout = (props) => {
    const mainObserverRef = useIntersectionObserver({ threshold: 0.5 }, (entries) => {
        entries.forEach((entry) => {
            // if(!entry?.isIntersecting) {
            //     console.log('Scrolled 50% of page')
            // }
        })
    })
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <SiteProvider>
                <_DefaultLayout>
                    <main ref={mainObserverRef}>
                        {props.children}
                    </main>
                    {/* <Footer /> */}
                </_DefaultLayout>
            </SiteProvider>
        </ThemeProvider>
    )
}

export default DefaultLayout;