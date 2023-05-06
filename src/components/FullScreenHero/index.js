import * as React from 'react';
import Image from 'next/image';

import BlueNightCityScape from '../../../public/images/blue-cityscape.jpg';

import { FullScreenHeroBox } from './styles';

const HEADING_TOP_BASE = 25;
const FIGURE_TOP_BASE = 0;
const FullScreenHero = (props) => {
    const [headingTop, setHeadingTop] = React.useState(HEADING_TOP_BASE);
    const [figureTop, setFigureTop] = React.useState(FIGURE_TOP_BASE);

    const headingRef = React.useRef();
    const figureRef = React.useRef();

    const scrollParallax = () => {
        var h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        
        const percentScrolled = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;

        console.log('Percent Scrolled: ', percentScrolled.toFixed(0))
        const updatedHeadingTop = ((percentScrolled + 1) / 150 * HEADING_TOP_BASE) + HEADING_TOP_BASE;
        const updatedFigureTop = ((percentScrolled + 1) / 10 * (FIGURE_TOP_BASE + 1)) + FIGURE_TOP_BASE;
        console.log('updatedHeadingTop', updatedHeadingTop);
        console.log('updatedFigureTop', updatedFigureTop)
        setHeadingTop(updatedHeadingTop < 75 ? updatedHeadingTop : 75);
        // setFigureTop(updatedFigureTop > 1 ? updatedFigureTop : 0)
    }
    React.useEffect(() => {
        if(
            typeof window === 'undefined' ||
            !headingRef.current ||
            !figureRef.current
        ) {
             return;
        }

        scrollParallax();
        window.addEventListener('scroll', scrollParallax);

        return () => {
            window.removeEventListener('scroll', scrollParallax);
        }

    }, [])
    return (
        <FullScreenHeroBox headingTop={headingTop} figureTop={figureTop} >
            <figure ref={figureRef}>
                <Image src={BlueNightCityScape} layout="fill" objectFit="cover" priority alt="" />
            </figure>
            <h1 ref={headingRef}>{props.heading}</h1>
            
        </FullScreenHeroBox>
    )
}

export default FullScreenHero;