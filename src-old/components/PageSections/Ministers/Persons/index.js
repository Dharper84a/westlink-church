import * as React from 'react';
import Image from 'next/image';

import { TagPillList } from '../../../Common/TagPill';
import RichTextRenderer from '../../../Common/RichTextRenderer';
import { PersonBox } from './styles';


const Persons = ({people}) => {

    return (
        <>
        {people.map((person, key) => {
            return <PersonCard person={person} key={key} />
        })}
        </>
    )
}
export const PersonCard = ({person}) => {

    return (
        <PersonBox>
            <figure>
                <Image
                    src={`https:${person.profilePicture.fields.file.url}`}
                    width={480}
                    height={360}
                    alt={person.profilePicture.description}
                />
            </figure>
            <aside>
                <h3>{person.displayName}</h3>
                <TagPillList items={person.groups} style="light" />
                
                
                <RichTextRenderer richText={person.shortBio} />
            </aside>
        </PersonBox>
    )
}

export default Persons;