import React from 'react';
import Image from 'next/image';
import RichTextRenderer from '../../RichTextRenderer';
import deliveryClient from '../../../../../lib/datasource/contentful/delivery';

import useImage from '../../../../hooks/useImage';
import { CardComponent } from './styles';

const CardStaff = (props) => {
    const image = props?.portrait?.fields ? props.portrait.fields : false;
    const excerpt = props?.bio ? props.bio : false;
    const position = props?.position || null;

    return (
        <CardComponent componentState={'ready'}>
            <div>
                <figure>
                    {image ? (
                        <>
                        <Image
                            src={`https://${image.file.url}`}
                            alt={image.description || ''}
                            fill={true}
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

export default CardStaff;
