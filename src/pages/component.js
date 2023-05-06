import * as React from 'react';
import FullScreenHero from '../components/FullScreenHero';
import Slider from '../components/Slider';


const ComponentPage = () => {

    return (
        <div>
        <FullScreenHero heading="14 Fascinating Reasons People Like Night Life"/>
        <Slider />
        <div style={{paddingBottom: '500px'}}></div>
        </div>
    )
}

export default ComponentPage;