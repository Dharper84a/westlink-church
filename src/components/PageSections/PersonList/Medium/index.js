import * as React from 'react';
import Image from 'next/image';

import TagPill from '../../../Common/TagPill';
import { IDCard } from './styles';
const MediumCard = (props) => {
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
                <span className="person-name">{props.displayName}</span>
                <span>{props.mainPosition}</span>
                <span className="group-heading">Groups</span>
                <ul>
                    {props.groups.map((group, key) => {
                        return <li key={key}><TagPill label={group} style="blue" /></li>
                    })}
                </ul>
            </div>
        </IDCard>
    )
}

export default MediumCard;