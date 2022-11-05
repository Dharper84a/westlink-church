import * as React from 'react';
import Image from 'next/image';

import { HeroFullWidthContainer, BackgroundImage } from './styles';

const HeroFullWidth = (props) => {
    const overlayText = props.fields.overlayText || false;
    const image = props.fields.image.fields;
    console.log(props)
    
    const includeOverlayGradient = typeof props.fields?.includeOverlayGradient === 'boolean' ? props.fields.includeOverlayGradient : true;
    console.log(includeOverlayGradient)
    return(
        <HeroFullWidthContainer>
            <BackgroundImage includeOverlayGradient={includeOverlayGradient}>
                <Image
                    src={`https:${image.file.url}`}
                    width={image.file.details.image.width}
                    height={image.file.details.image.height}
                    alt={image.description || ''}
                    objectFit="cover"
                    priority
                />
                {overlayText &&
                <h1>{overlayText}</h1>
                }
            </BackgroundImage>
        </HeroFullWidthContainer>
    )
}

export default HeroFullWidth;