import * as React from 'react';
import Image from 'next/image';

import RichTextRenderer from '../../Common/RichTextRenderer';

import { TextWithGraphicContainer, Inner } from './styles';

const TextWithGraphic = (props) => {
    // console.log('TextWithGraphic', props);
    const image = props.fields.graphic.fields || false;
    return(
        <TextWithGraphicContainer>
            <Inner>
                <figure>
                {image &&
                    <Image
                        src={`https:${image.file.url}`}
                        width={640}
                        height={1280}
                        alt={image.description || ''}
                    />
                }
                </figure>
                <article>
                    <RichTextRenderer richText={props.fields.textContent} />
                </article>
            </Inner>
        </TextWithGraphicContainer>
    )
}

export default TextWithGraphic;