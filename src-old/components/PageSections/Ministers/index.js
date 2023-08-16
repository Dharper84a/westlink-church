import * as React from 'react';
import Image from 'next/image';
import deliveryClient from '../../../../lib/datasource/contentful/delivery';

import RichTextRenderer from '../../Common/RichTextRenderer';
import { Component, LeadMinister, AssistantMinisters } from './styles';
import TagPill, { TagPillList } from '../../Common/TagPill';
import Persons from './Persons';

const Ministers = (props) => {
    const [groupOnePeople, setGroupOnePeople] = React.useState();
    const [groupTwoPeople, setGroupTwoPeople] = React.useState();

    React.useEffect(() => {
        let ignore = false;
        const awaitData = async (field, state) => {
            if(!field) return;
            if(Array.isArray(field)) {
                const p_data = field.map(async(item) => {
                    const res = await deliveryClient.entryById(item.sys.id);
                    return res.fields;
                })

                const data = await Promise.all(p_data);
                if(!ignore) {
                    state(data);
                }
            } else {
                const data = await deliveryClient.entryById(field.sys.id);
                if(!ignore) {
                    // console.log(data.fields)
                    state(data.fields);
                }
            }
            
            
        }

        awaitData(props.groupOnePeople, setGroupOnePeople);
        awaitData(props.groupTwoPeople, setGroupTwoPeople);
        return () => {
            ignore = true;
        }
    }, [props.groupOnePeople, props.groupTwoPeople])

    return(
        <Component>
            {props.heading && <h2 className="main-heading">{props.heading}</h2>}

            {groupOnePeople && props.groupOneHeading && <h2>{props.groupOneHeading}</h2> }
            {groupOnePeople && <Persons people={groupOnePeople} /> }


            {groupTwoPeople && props.groupTwoHeading && <h2>{props.groupTwoHeading}</h2> }
            {groupTwoPeople && <Persons people={groupTwoPeople} /> }

        </Component>
    )
}

export default Ministers;