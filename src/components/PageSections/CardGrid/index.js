import * as React from 'react';

import RichTextRenderer from '../../Common/RichTextRenderer';
import CardsResolver from '../../Common/Cards/resolver';

import { CardGridContainer, Inner, Grid } from './styles';
const CardGrid = (props) => {
    // console.log('CardGrid', props)
    const layout = props.layout === 'Two Per Row' ? 'layout--50' : 'layout--33';
    const text = props.textStringified ? JSON.parse(props.textStringified) : null;
    const innerLink = props?.innerPageId || false;

    return(
        <CardGridContainer>
            <Inner>
                <header>
                    <h2>{props.heading}</h2>
                    {text && <RichTextRenderer richText={text} /> }
                </header>
                <Grid className={layout}>
                    <CardsResolver cards={props.cards} />
                </Grid>
            </Inner>
        </CardGridContainer>
    )
}

export default CardGrid;