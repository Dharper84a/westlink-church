import { useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

import { _HeroSlider, _Slide } from './styles';
const HeroSlider = () => {
    const sliderRef = useRef();
    const previousSlideHandler = () => {
        sliderRef.current.prepend(
            sliderRef.current.children[sliderRef.current.children.length - 1]
        );
    };

    const nextSlideHandler = () => {
        sliderRef.current.append(sliderRef.current.children[0]);
    };
    return (
        <_HeroSlider>
            <ul ref={sliderRef}>
                <_Slide
                    style={{
                        backgroundImage:
                            'url("https://diqstapf6hjxd.cloudfront.net/winter-landscape.jpg")'
                    }}>
                    <div>
                        <h2>Join In-Person or Online</h2>
                        <p>
                            Livestream begins around 10:05am every Sunday. Click below to go
                            directly to the stream and see previous services. We would love for you
                            to find your place to belong with our family. Our Advent theme is "Come
                            Let Us Adore Him (But Lord, Come Quickly)." The season leading to
                            Christmas centers around worship and waiting. We both celebrate Jesus’s
                            arrival 2000 years ago and anticipate his return. How do we acknowledge
                            Christ’s gifts of hope, peace, joy, and love while acknowledging that
                            they aren’t always as present as we’d like? Join us throughout December,
                            including for our pajamas Christmas Eve service! Watch Live
                        </p>
                        <Link href="#">Read More</Link>
                    </div>
                </_Slide>
                <_Slide style={{ backgroundImage: 'url("https://i.redd.it/tc0aqpv92pn21.jpg")' }}>
                    <div>
                        <h2>Estrange Bond</h2>
                        <p>copy</p>
                        <Link href="#">Read More</Link>
                    </div>
                </_Slide>
                <_Slide
                    style={{
                        backgroundImage:
                            'url("https://wharferj.files.wordpress.com/2015/11/bio_north.jpg")'
                    }}>
                    <div>
                        <h2>The Gatekeeper</h2>
                        <p>copy</p>
                        <Link href="#">Read More</Link>
                    </div>
                </_Slide>
                <_Slide
                    style={{
                        backgroundImage: 'url("https://images7.alphacoders.com/878/878663.jpg")'
                    }}>
                    <div>
                        <h2>Last trace of us</h2>
                        <p>copy</p>
                        <Link href="#">Read More</Link>
                    </div>
                </_Slide>
            </ul>
            <nav>
                <button onClick={previousSlideHandler}>
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button onClick={nextSlideHandler}>
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </nav>
        </_HeroSlider>
    );
};

export default HeroSlider;
