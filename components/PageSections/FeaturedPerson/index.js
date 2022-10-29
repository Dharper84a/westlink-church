import * as React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faImage} from '@fortawesome/free-solid-svg-icons'

import RichTextRenderer from '../../Common/RichTextRenderer';

import { FeaturedPersonContainer, Inner } from './styles';

const getImage = (imageField) => {

    return {
        url: imageField.fields.file.url,
        alt: imageField.fields.description || ''
    }
}
const FeaturedPerson = (props) => {
    // console.log('Featured Person', props);
    const image = props?.fields?.image ? getImage(props.fields.image) : false;
    return(
        <FeaturedPersonContainer>
            <Inner>
                {image &&
                    <figure>
                        <Image
                            src={`https:${image.url}`}
                            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM8+PDgfwAIMgNkB0otSQAAAABJRU5ErkJggg=='
                            placeholder='blur'
                            width={400}
                            height={300}
                            alt={image.alt}
                        />
                    </figure>
                }
                
                {!image &&
                    <figure className="placeholder">
                        <FontAwesomeIcon icon={faImage} />
                    </figure>
                }

                <div>
                    <h4>{props.fields.position}</h4>
                    <h3>{props.fields.name}</h3>
                    <h4>Bio</h4>
                    <RichTextRenderer richText={props.fields.featuredContent} />
                </div>
            </Inner>
        </FeaturedPersonContainer>
    )
}

export default FeaturedPerson