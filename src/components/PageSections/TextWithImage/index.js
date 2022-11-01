import * as React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import RichTextRenderer from '../../Common/RichTextRenderer';

import { ComponentBox } from './styles';
const TextWithImage = (props) => {
    const {ref, inView, entry} = useInView({
        threshold: 0.60,
        triggerOnce: true,
    });
    const image = props.fields?.image?.fields || false
    const richText = props.fields?.text;
    const imageOnLeft = props.fields?.imageOnLeft;
    const animationClass = imageOnLeft ? 'slide-in-left' : 'slide-in-right';
    // console.log(imageOnLeft);
    return(
        <ComponentBox imageOnLeft={imageOnLeft} bgColor={imageOnLeft ? 'dark' : 'deepGreen'}>
            <figure ref={ref}>
                {image &&
                <Image
                    src={`https:${image.file.url}`}
                    layout="fill"
                    alt={image.description || ''}
                    priority
                    quality={75}
                    objectFit="cover"
                    sizes="(max-width: 768px) 80vw,
                    (max-width: 1200px) 50vw,
                    33vw"
                />
                }
            </figure>
            <aside>
                <h2>{props.fields.heading}</h2>
                {richText &&
                <RichTextRenderer richText={richText} />
                }
            </aside>
        </ComponentBox>
    )
}

export default TextWithImage;