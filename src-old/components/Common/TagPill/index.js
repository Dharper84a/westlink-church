import * as React from 'react';

import {CommonTagPill, CommonTagPillList} from './styles'

export const TagPillList = (props) => {
    const items = Array.isArray(props?.items) ? props?.items : false;


    return (
        <>
        {items &&
         <CommonTagPillList>
            {props.items.map((items, key) => {
                return <li key={key}><TagPill label={items} style={props?.style} /></li>
            })}
        </CommonTagPillList>
        }
        </>
       
    )
}
const TagPill = (props) => {
    const variant = props?.style || 'blue';

    return (
        <CommonTagPill variant={variant}>
            {props.label}
        </CommonTagPill>
    )
}

export default TagPill