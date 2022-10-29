import React from "react";
import styles from "./useSlider.module.css";

const initialState = {
    activeSlide: null,
    nextSlide: () => {},
    prevSlide: () => {},
    allowNext: true,
    allowPrev: false,
    slides: [],
    slideNodes: [],
    xOffset: 0,
    windowX: 0,
    isReady: false,
};

const validatePosition = (nodes, requestedXOffset) => {
    if(requestedXOffset > 0) return false;

    const totalWidth = 0;
    // -2 is to account for last card, so we do not go past it.
    for(var i = 0; i <= nodes.length - 2; i++) {
        totalWidth += nodes[i].offsetWidth;
    }
    
    if(requestedXOffset < -totalWidth) return false;
    
    return true;
}

const reducer = (state, action) => {
    let updatedActiveSlide = null;
    let nodes = null;
    let updatedXOffset = null;
    let allowPrev = null;
    let allowNext = null;

    switch (action.type) {
        case "INIT":
            // console.log(action);
            return {
                ...state,
                activeSlide: 0,
                slides: action.slides,
                windowX: action.slides.length * (action.options.screenX || 0),
                isReady: true,
            };
        case "SET_SLIDES":
            
            return {
                ...state,
                activeSlide: 0,
                slides: action.slides,
                windowX: action.slides.length * (action.options.screenX || 0),
                isReady: true,
            };
        case "PREV":
            nodes = document.getElementsByClassName("slide");

            if (state.activeSlide === 0) {
                updatedActiveSlide = state.slides.length - 1;
            } else {
                updatedActiveSlide = state.activeSlide - 1;
            }

            if (nodes[state.activeSlide] && nodes[updatedActiveSlide]) {
                updatedXOffset =
                    state.xOffset + nodes[state.activeSlide].offsetWidth;
            } else {
                // console.log("UNABLE TO FIND SLIDE INDEX");
            }

            if(validatePosition(nodes, updatedXOffset)) {
                return {
                    ...state,
                    activeSlide: updatedActiveSlide,
                    xOffset: updatedXOffset,
                };
            } else {
                return state;
            }
            

        case "NEXT":
            nodes = document.getElementsByClassName("slide");
            if (state.activeSlide === state.slides.length - 1) {
                updatedActiveSlide = 0;
            } else {
                updatedActiveSlide = state.activeSlide + 1;
            }

            

            if (nodes[state.activeSlide] && nodes[updatedActiveSlide]) {
                updatedXOffset =
                    state.xOffset - nodes[state.activeSlide].offsetWidth;
            } else {
                // console.log("UNABLE TO FIND SLIDE INDEX");
            }
            
            if(validatePosition(nodes, updatedXOffset)) {
                return {
                    ...state,
                    activeSlide: updatedActiveSlide,
                    xOffset: updatedXOffset,
                };
            } else {
                return state;
            }
        case 'CHECK_ALLOWED_NAV':
            nodes = document.getElementsByClassName("slide");

            // Check previous
            if (state.activeSlide === 0) {
                updatedActiveSlide = state.slides.length - 1;
            } else {
                updatedActiveSlide = state.activeSlide - 1;
            }

            if (nodes[state.activeSlide] && nodes[updatedActiveSlide]) {
                updatedXOffset =
                    state.xOffset + nodes[state.activeSlide].offsetWidth;
            }

            if(validatePosition(nodes, updatedXOffset)) {
                allowPrev = true;
            } else {
                allowPrev = false;
            }

            updatedXOffset = null;
            updatedActiveSlide = null;
            // Check Next
            if (state.activeSlide === state.slides.length - 1) {
                updatedActiveSlide = 0;
            } else {
                updatedActiveSlide = state.activeSlide + 1;
            }

            

            if (nodes[state.activeSlide] && nodes[updatedActiveSlide]) {
                updatedXOffset =
                    state.xOffset - nodes[state.activeSlide].offsetWidth;
            }
            
            if(validatePosition(nodes, updatedXOffset)) {
                allowNext = true;
            } else {
                allowNext = false;
            }

            return {
                ...state,
                allowPrev: allowPrev,
                allowNext: allowNext,
            }
        
        
    }
};
const useSlider = (slides, options) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const slideRef = React.useRef(null);

    const onPrevSlide = () => {
        dispatch({ type: "PREV" });
        dispatch({ type: "CHECK_ALLOWED_NAV" });
    };

    const onNextSlide = () => {
        dispatch({ type: "NEXT" });
        dispatch({ type: "CHECK_ALLOWED_NAV" });
    };

    const getSlider = () => {
  
        return (
            <div className={styles.slider}>
                <ul
                    className={styles.sliderTrack}
                    style={{
                        width: `${state.windowX}px`,
                        transform: `translateX(${state.xOffset}px)`,
                    }}
                >
                    {state.slides.map((slide, key) => {
                        return (
                            <li className={`${styles.slide} slide`} key={key}>
                                {slide}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    };

    const setSlides = (slides) => {
       
        dispatch({
            type: "SET_SLIDES",
            slides: slides,
            options: { screenX: window.screenX},
        });
    };

    // React.useEffect(() => {
    //     if (typeof window === "undefined") return () => {};

    //     if(slides) {
    //         dispatch({
    //             type: "INIT",
    //             slides: slides,
    //             options: { ...options, screenX: window.screenX },
    //         });
    //     }
        

    //     return () => {};
    // }, []);

    React.useEffect(() => {
        
    }, [state]);

    return {
        onPrevSlide: onPrevSlide,
        onNextSlide: onNextSlide,
        setSlides: setSlides,
        slider: getSlider,
        isReady: state.isReady,
        allowPrev: state.allowPrev,
        allowNext: state.allowNext,
    };
};

export default useSlider;
