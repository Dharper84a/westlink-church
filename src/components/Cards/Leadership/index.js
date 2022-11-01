import * as React from 'react';
import Image from 'next/image';

import {Card} from './styles';

const getImage = (imageField) => {

    return {
        url: imageField.fields.file.url,
        alt: imageField.fields.description || ''
    }
}
const LeadershipCard = (props) => {
    const image = props?.portrait ? getImage(props.portrait) : false;
    return (
        <Card>
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
                <div>
                    <h4>{props.position}</h4>
                    <h3>{props.name}</h3>
                </div>
            </figure>
            }
            {!image &&
                <div>
                    <h4>{props.position}</h4>
                    <h3>{props.name}</h3>
                </div>
            }
            
        </Card>
    )
}

export default LeadershipCard