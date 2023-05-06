import * as React from 'react';
import Image from 'next/image';

import BlueNightCityScape from '../../../public/images/blue-cityscape.jpg';

import { SliderBox, SliderContent, SliderItem, MainContent, SubContent, SubItem } from "./styles";

const Slider = (props) => {

    return(
        <SliderBox>
            <SliderContent>
                <SliderItem>
                    <figure>
                        <Image src={BlueNightCityScape} width={640} height={360} alt="" />
                    </figure>
                    <section>
                        <h3>Slider Item Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a tempus urna. Vestibulum felis libero, scelerisque et feugiat ut, congue et lacus. Curabitur ultricies ipsum sapien. Etiam imperdiet fringilla neque sit amet egestas. Vestibulum tempor ultricies fringilla. Phasellus cursus sapien vel cursus venenatis. Vestibulum ullamcorper arcu ex, sed sagittis nunc vehicula at. Quisque cursus tellus eu sem molestie, non placerat arcu accumsan. In ut aliquam ex.
                        </p>
                    </section>

                </SliderItem>
                <SliderItem>
                    <figure>
                        <Image src={BlueNightCityScape} layout="fill" objectFit="cover" alt="" />
                    </figure>
                    <section>
                        <h3>Slider Item Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a tempus urna. Vestibulum felis libero, scelerisque et feugiat ut, congue et lacus. Curabitur ultricies ipsum sapien. Etiam imperdiet fringilla neque sit amet egestas. Vestibulum tempor ultricies fringilla. Phasellus cursus sapien vel cursus venenatis. Vestibulum ullamcorper arcu ex, sed sagittis nunc vehicula at. Quisque cursus tellus eu sem molestie, non placerat arcu accumsan. In ut aliquam ex.
                        </p>
                    </section>

                </SliderItem>
                <SliderItem>
                    <figure>
                        <Image src={BlueNightCityScape} layout="fill" objectFit="cover" alt="" />
                    </figure>
                    <section>
                        <h3>Slider Item Title</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a tempus urna. Vestibulum felis libero, scelerisque et feugiat ut, congue et lacus. Curabitur ultricies ipsum sapien. Etiam imperdiet fringilla neque sit amet egestas. Vestibulum tempor ultricies fringilla. Phasellus cursus sapien vel cursus venenatis. Vestibulum ullamcorper arcu ex, sed sagittis nunc vehicula at. Quisque cursus tellus eu sem molestie, non placerat arcu accumsan. In ut aliquam ex.
                        </p>
                    </section>

                </SliderItem>
            </SliderContent>
        </SliderBox>
    )
}

export default Slider;