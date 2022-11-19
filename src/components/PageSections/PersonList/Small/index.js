import * as React from 'react';
import Image from 'next/image';

import { IDCard } from './styles';
const SmallCard = (props) => {
    const image = props?.profilePicture?.fields || false;

    return (
        <IDCard>
           {image ? (
            <figure>
                <Image
                    src={`https:${image.file.url}`}
                    alt={image.displayName || ''}
                    layout="fill"
                    objectFit="cover"
                />
            </figure>
           ):(
            <figure></figure>
           )}
            <div>
                <span>{props.displayName}</span>
                <span>{props.mainPosition}</span>
            </div>
        </IDCard>
    )
}

export default SmallCard;