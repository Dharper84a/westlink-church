import * as React from 'react';
import Image from 'next/image';

import {ComponentBox} from './styles';
const HeroBasic = (props) => {
    const [variation, setVariation] = React.useState(false);
    console.log(props);
    
    React.useEffect(() => {
        const string = props.fields.variation.toLowerCase().replace(/ /g,'_');
        console.log(string);
        setVariation(string);
    }, [props])
    
    return (
        <>
        {variation &&
        <ComponentBox variation={variation}>
            {props.fields.heading &&
            <h1>{props.fields.heading}</h1>
            }
        </ComponentBox>
        }
        </>
        
    )
}

export default HeroBasic;