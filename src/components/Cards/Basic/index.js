import * as React from 'react';

import {Card} from './styles';

const BasicCard = (props) => {

    return (
        <Card>
            <h3>{props.cardHeading}</h3>
            <p>{props.cardContent}</p>
        </Card>
    )
}

export default BasicCard