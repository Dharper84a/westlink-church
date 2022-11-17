import * as React from 'react';
import Image from 'next/image';

import { HeroFullWidthContainer, BackgroundImage } from './styles';

const HeroFullWidth = (props) => {
    const resizeObserver = React.useRef(null);
    const heroRef = React.useRef(null);
    const [heroHeight, setHeroHeight] = React.useState('100%');

    const overlayText = props.fields.overlayText || false;
    const image = props.fields.image.fields;
    // console.log(props)
    
    const includeOverlayGradient = typeof props.fields?.includeOverlayGradient === 'boolean' ? props.fields.includeOverlayGradient : true;
    // console.log(includeOverlayGradient)

    React.useEffect(() => {
        if(typeof resizeObserver === 'undefined') return;

        if(!resizeObserver.current) {
            resizeObserver.current = new ResizeObserver((entries) => {
                for(const entry of entries) {
                    let entryWidth = entry.contentBoxSize[0].inlineSize;
                    if(!isNaN || entryWidth !== 0) {
                        let desiredHeight = parseInt((entryWidth / 4).toFixed(0));
                        // setHeroHeight(`${desiredHeight}px`);
                    }
                  
                }
            });

            resizeObserver.current.observe(heroRef.current);
        }
        
    }, [])
    return(
        <HeroFullWidthContainer ref={heroRef} heroHeight={heroHeight} includeOverlayGradient={includeOverlayGradient}>
            <figure>
                <Image
                    src={`https:${image.file.url}`}
                    layout="fill"
                    width={image.file.details.image.width}
                    height={image.file.details.image.height}
                    alt={image.description || ''}
                    objectFit="cover"
                    objectPosition="top"
                    sizes="100vw"
                    priority
                />
                {overlayText &&
                <h1>{overlayText}</h1>
                }
            </figure>
        </HeroFullWidthContainer>
    )
}

export default HeroFullWidth;