import * as React from 'react';
import deliveryClient from '../../../../lib/datasource/contentful/delivery';

import RichTextRenderer from '../../Common/RichTextRenderer';
import SmallCard from './Small';
import LargeCard from './Large';

import {ComponentBox, List} from './styles';
import MediumCard from './Medium';

const PersonList = (props) => {
    console.log('PersonList', props);
    const [people, setPeople] = React.useState(false);
    const cardStyle = props.cardStyle.toLowerCase().replace(/ /g,'_');

    const getIdCard = (data, key) => {
        switch(cardStyle) {
            case 'small_id':
                return <SmallCard {...data.fields} key={key} />
            case 'medium_id':
                return <MediumCard {...data.fields} key={key} />
            case 'large_id':
                return <LargeCard {...data.fields} key={key} />
            default: <></>
        }
    }
    React.useEffect(() => {
        let ignore = false;
    
        const getEntries = async(items) => {
            const entries = await deliveryClient.entriesById(items);
            if(!ignore) setPeople(entries);
        }
        
        getEntries(props.people);
        
        return () => {
            ignore = true
        }
    }, [props.people]);
    return (
        <ComponentBox>
            <header>
                <h2>{props.heading}</h2>
                {props?.text && <RichTextRenderer richText={props.text} /> }
            </header>
            <List cardStyle={cardStyle} isLoading={people === false ? true : false}>
            {Array.isArray(people) &&
                people.map((person, key) => {
                    return getIdCard(person, key);
                })
            }
            </List>
        </ComponentBox>
    )
}

export default PersonList;