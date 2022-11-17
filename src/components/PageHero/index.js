import { useEffect, useReducer } from 'react';

import { PageHeroComponent, HeroExcerpt } from './styles';
import ColorVariant from './Variants/colorVariant';
import CarouselVariant from './Variants/carouselVariant';
import LargeImageVariant from './Variants/largeImageVariant';

const initialState = {
    // heading: '',
    // shortExcerpt: '',
    // image: null,
    // backgroundStyle: null,
    // includeOverlayGradient: true,
    // variant: null,
    type: null,
    component: <></>,
    isReady: false,
    isLoaded: false
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_COMPONENT': {
            let component = <></>;
            switch (state.type) {
                case 'heroCarousel':
                    component = (
                        <CarouselVariant slides={state.slides} slideSpeed={state.slideSpeed} />
                    );
                    break;
                case 'heroStandard':
                    component = (
                        <ColorVariant
                            heading={state.heading}
                            shortExcerpt={state.shortExcerpt}
                            backgroundStyle={state.backgroundStyle}
                        />
                    );
                    break;
                case 'heroLarge':
                    component = (
                        <LargeImageVariant
                            heading={state.heading}
                            shortExcerpt={state.shortExcerpt}
                            image={state.image}
                            buttonLink={state.buttonLink}
                            buttonStyle={state.buttonStyle}
                        />
                    )
                    break;
            }

            return {
                ...state,
                component: component,
                isReady: true,
            };
        }
        case 'LOAD': {
            let heroType = action.system.contentType.sys.id;

            switch (heroType) {
                case 'heroCarousel':
                    return {
                        ...state,
                        type: heroType,
                        includeUnderHeroExcerpt: false,
                        slides: action.fields?.slides || [],
                        slideSpeed: action.fields?.slideSpeed || 1,
                        isLoaded: true
                    };
                case 'heroStandard':
                    return {
                        ...state,
                        type: heroType,
                        heading: action.fields?.heading || '',
                        shortExcerpt: action.fields?.shortExcerpt || '',
                        includeUnderHeroExcerpt: false,
                        image: action.fields?.image || null,
                        backgroundStyle: action.fields.backgroundStyle
                            .toLowerCase()
                            .replace(/ /g, '_'),
                        includeOverlayGradient: action.fields.includeOverlayGradient,
                        variant: action.fields?.image ? 'image' : 'color',
                        isLoaded: true
                    };
                case 'heroLarge':
                    return {
                        ...state,
                        type: heroType,
                        heading: action.fields?.heading || '',
                        shortExcerpt: action.fields?.shortExcerpt || '',
                        includeUnderHeroExcerpt: false,
                        image: action.fields?.image || null,
                        buttonLink: action.fields?.buttonLink || null,
                        buttonStyle: action.fields?.buttonStyle || null,
                        isLoaded: true
                    };
                default:
                    return state;
            }
        }
    }
};
const PageHero = (props) => {
    // console.log('PageHero', props);
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        // console.log('Setup State')
        dispatch({ type: 'LOAD', fields: { ...props.fields }, system: { ...props.sys } });
    }, [props]);

    useEffect(() => {
        // console.log('state', state);
        if (state.isLoaded && !state.isReady) {
            // we have our hero properties and now we need to set the react component
            dispatch({type: 'SET_COMPONENT'});
        }
    }, [state]);
    return (
        <PageHeroComponent>
            {state.isReady ? (
                state.component
            ) : (
                <div>Loading</div>
            )}
            {state.isReady && state.shortExcerpt && state.includeUnderHeroExcerpt && (
                <HeroExcerpt>
                    <p>{state.shortExcerpt}</p>
                </HeroExcerpt>
            )}
        </PageHeroComponent>
    );
};

export default PageHero;

export const StaticHero = (props) => {
    // blue_crosses, green_crosses, dark_crosses, gray_crosses
    return (
        <PageHeroComponent>
            <ColorVariant heading={props?.heading} backgroundStyle={props?.color || 'blue_crosses'} />
        </PageHeroComponent>
    )
}
