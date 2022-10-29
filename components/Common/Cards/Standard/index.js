import React from 'react';
import Image from 'next/image';
import RichTextRenderer from '../../RichTextRenderer';
import deliveryClient from '../../../../lib/datasource/contentful/delivery';

import useImage from '../../../../hooks/useImage';
import { CardComponent } from './styles';

const CardStandard = (props) => {
    const image = props?.image ? props.image : false;
    return (
        <CardComponent componentState={'ready'}>
            <div>
                <figure>
                    {image ? (
                        <>
                        <Image
                            src={`https://${image.file.url}`}
                            alt={image.description || ''}
                            layout="fill"
                            objectFit="cover"
                        />
                        </>
                    ) : (
                        <div></div>
                    )}
                </figure>
                <h3>{props.heading}</h3>
                <RichTextRenderer richText={props?.text} />
            </div>
        </CardComponent>
    );
};

export default CardStandard;
