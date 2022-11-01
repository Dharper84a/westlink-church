import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faChevronLeft,
    faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

// Helpers
import useSlider from "../../../hooks/useSlider";

// Slides
import FullScreenSlideCard from "../../Common/Cards/FullScreenSlide";
import CardSlide from "../../Common/Cards/CardSlide";

// Styles
import { ComponentBox } from "./styles";

const classFormatter = (cardType) => {
    return cardType.replace(" ", "-").toLowerCase();
};
const Slider = (props) => {
    const slider = useSlider();
    // console.log("FSS", props);
    React.useEffect(() => {
        if (slider.isReady === false) {
            if (props.fields?.slides) {
                const slides = [];
                props.fields?.slides.forEach((slide, key) => {
                    switch (props.fields.slideType) {
                        case "Full Screen":
                            slides.push(
                                <FullScreenSlideCard {...slide} key={key} />
                            );
                            break;
                        case "Card":
                            slides.push(<CardSlide {...slide} key={key} />);
                            break;
                        default:
                            <div key={key}>Slide card not setup</div>;
                            break;
                    }
                });
                slider.setSlides(slides);
            }
        } else {
            // console.log(slider.allowPrev, slider.allowNext);
        }
        return () => {};
    }, [props, slider]);

    return (
        <ComponentBox>
                <header>
                    {props.fields?.heading && <h2>{props.fields?.heading}</h2>}
                    <p>Join us at one or more (or all) of our events. Come as you are we welcome everyone.</p>
                    {/* {props.fields?.description && <p>{props.fields?.description}</p>} */}
                    {slider.isReady && 
                    <nav
                        className={classFormatter(props.fields.slideType)}
                        aria-label="Slider controls"
                    >
                        <button
                            onClick={slider.onPrevSlide}
                            disabled={!slider.allowPrev}
                            aria-label="Previous slide"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </button>
                        <button
                            onClick={slider.onNextSlide}
                            disabled={!slider.allowNext}
                            aria-label="Next slide"
                        >
                            <FontAwesomeIcon icon={faChevronRight} />
                        </button>
                    </nav>
                    }
                </header>
                {!slider.isReady && (
                    <div className="loading">Loading slides...</div>
                )}
                {slider.isReady && slider.slider()}
        </ComponentBox>
    );
};

export default Slider;
