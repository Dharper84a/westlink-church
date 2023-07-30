import * as React from 'react';
import Image from 'next/image';
import {Partial} from './styles';

const FullScreenSlideCard = (props) => {
    return(
        <Partial>
            <Image
                src={`https:${props.fields.file.url}`}
                blurDataURL='data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=='
                placeholder='blur'
                fill={true}
                sizes="(min-width: 1400px) 50vw, 100vw"
                alt={props.fields.description || ''}
            />
        </Partial>
    );
}

export default FullScreenSlideCard;