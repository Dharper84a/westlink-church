import * as React from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

import RichTextRenderer from '../../Common/RichTextRenderer';

import { ComponentBox, _TextWithImage } from './styles';
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
        <_TextWithImage imageOnLeft={imageOnLeft}>
            <figure>
                {image &&
                <Image
                    src={`https:${image.file.url}`}
                    width={640}
                    height={360}
                    alt={image.description || ''}
                    sizes="(max-width: 768px) 100vw,
                    (max-width: 1366px) 40vw,
                    50vw"
                />
                }
            </figure>
            <aside>
                <h2>{props.fields.heading}</h2>
                {richText && <RichTextRenderer richText={richText} />}
            </aside>
        </_TextWithImage>
        // <ComponentBox imageOnLeft={imageOnLeft} bgColor={imageOnLeft ? 'magicBlue' : 'offWhite'} textColor={imageOnLeft ? 'offWhite' : 'matteBlack'}>
        //     <figure ref={ref}>
        //         {image &&
        //         <Image
        //             src={`https:${image.file.url}`}
        //             fill={true}
        //             alt={image.description || ''}
        //             priority
        //             quality={75}
        //             sizes="(max-width: 768px) 80vw,
        //             (max-width: 1366px) 50vw,
        //             33vw"
        //         />
        //         }
        //     </figure>
        //     <aside>
        //         <h2>{props.fields.heading}</h2>
        //         {richText &&
        //         <RichTextRenderer richText={richText} />
        //         }
        //     </aside>
        // </ComponentBox>
    )
}

export default TextWithImage;