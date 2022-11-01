import * as React from 'react';

import RichTextRenderer from '../../Common/RichTextRenderer';
import CardsResolver from '../../Common/Cards/resolver';

import { CardGridContainer, Inner, Grid } from './styles';
const CardGrid = (props) => {
    const layout = props.layout === 'Two Per Row' ? 'layout--50' : 'layout--33';
    const text = JSON.parse(props.textStringified);
    return(
        <CardGridContainer>
            <Inner>
                <header>
                    <h2>{props.heading}</h2>
                    <RichTextRenderer richText={text} />
                </header>
                <Grid className={layout}>
                    <CardsResolver cards={props.cards} />
                </Grid>
            </Inner>
        </CardGridContainer>
    )
}

export default CardGrid;