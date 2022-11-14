import { useEffect, useReducer } from 'react';

import { PageHeroComponent, HeroExcerpt } from './styles';
import ColorVariant from './Variants/colorVariant';

const initialState = {
    heading: '',
    shortExcerpt: '',
    image: null,
    backgroundStyle: null,
    includeOverlayGradient: true,
    variant: null,
    isLoaded: false
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD': {
            let setBackgroundStyle = action.data.backgroundStyle.toLowerCase().replace(/ /g, '_');
            let setVariant = action.data?.image ? 'image' : 'color';
            return {
                ...state,
                heading: action.data?.heading || '',
                shortExcerpt: action.data?.shortExcerpt || '',
                image: null,
                backgroundStyle: setBackgroundStyle,
                includeOverlayGradient: action.data.includeOverlayGradient,
                variant: setVariant,
                isLoaded: true
            };
        }
    }
};
const PageHero = (props) => {
    // console.log('PageHero', props);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // console.log('Setup State')
        dispatch({ type: 'LOAD', data: { ...props.fields } });
    }, [props]);

    useEffect(() => {
        // console.log('state', state);
    }, [state])
    return (
        <PageHeroComponent>
            {state.isLoaded ? (
                state.variant === 'color' ? (
                    <ColorVariant
                        heading={state.heading}
                        shortExcerpt={state.shortExcerpt}
                        backgroundStyle={state.backgroundStyle}
                    />
                ):(
                    <div>Image variant</div>
                )
            ):(
                <div>Loading</div>
            )}
            {state.isLoaded && state.shortExcerpt &&
            <HeroExcerpt>
                <p>{state.shortExcerpt}</p>
            </HeroExcerpt>
            }
        </PageHeroComponent>
    );
};

export default PageHero;
