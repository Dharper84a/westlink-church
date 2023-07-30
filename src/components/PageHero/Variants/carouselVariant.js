import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import deliveryClient from '../../../../lib/datasource/contentful/delivery';

import { CarouselHero, TrackPath, Track, TrackItem } from "./styles";
const CarouselVariant = (props) => {
    // console.log('CarouselVariant', props);
    const [slidesLoaded, setSlidesLoaded] = React.useState(false);
    const [slides, setSlides] = React.useState([]);
    const [currentIndex, setCurrentIndex] = React.useState(0);

    const slideSpeed = React.useRef(props.slideSpeed * 1000);
    // const slideSpeed = React.useRef(3 * 1000);
    const screenWidthRef = React.useRef(0);
    const trackRef = React.useRef();

    const xPos = React.useRef(0);
    
    React.useEffect(() => {
        if(!slidesLoaded) {
            const getEntries = async (items) => {
                const pSlidesData = items.map(async(item) => {
                    const response = await deliveryClient.entryById(item.sys.id);
                    if(response?.fields) {
                        return response.fields;
                    } else {
                        return null;
                    }
                })
                
                const slidesData = await Promise.all(pSlidesData);

                // console.log(slidesData);
                if(slidesData.length > 0) {
                    setSlidesLoaded(true);
                    setSlides(slidesData.concat(slidesData));
                } else {
                    setSlidesLoaded(false);
                }
                
                
            }
    
            getEntries(props.slides);
        }
    }, [slidesLoaded, props.slides])

    React.useEffect(() => {
        let ignore = false;
        if(slidesLoaded && screenWidthRef.current > 0 && trackRef.current) {
            trackRef.current.style.width = `${screenWidthRef.current * slides.length}px`;
            
            // setTimeout(() => {
            //     console.log('hit')
            // }, slideSpeed.current)
            // setInterval(() => {
            //     if(!ignore) {
 
            //         if(currentIndex === slides.length - 1) {
            //             trackRef.current.classList.remove('transitions');
            //             trackRef.current.style.transform = `translateX(-1920px)`;
            //             setCurrentIndex(0);
            //         } else {
            //             trackRef.current.classList.add('transitions');
            //             setCurrentIndex(currentIndex + 1);
            //         }
                    
            //     }
            // }, slideSpeed.current)
        }
        return () => {
            ignore = true;
        }
    }, [slidesLoaded, slides, currentIndex])

    React.useEffect(() => {
        if(!slidesLoaded) return;
        
        setTimeout(() => {
            trackRef.current.classList.add('transitions');
            let nIndex = currentIndex + 1;
            // console.log(`Index ${nIndex}[${currentIndex}] of ${slides.length - 1}`);

            // if(currentIndex === slides.length - 1) {
            //     console.log('ON LAST')
            // }
            if(nIndex === slides.length - 2) {
                // console.log('SECOND TO LAST')
                // trackRef.current.classList.remove('transitions');
            }
            if(nIndex === slides.length) {
                // console.log('GOING TO START');
                trackRef.current.classList.remove('transitions');
                // trackRef.current.classList.remove('transitions');
                nIndex = 1;
                
                let x = screenWidthRef.current * -1;
                // console.log('X', x, screenWidthRef.current * currentIndex)
                trackRef.current.style.transform = `translateX(${x}px)`;
            
            }
            
            setCurrentIndex(nIndex)
        }, 1000);
    }, [currentIndex, slidesLoaded, slides.length])
    React.useEffect(() => {
        if(!slidesLoaded) return;
        
        // console.log('----------')
        // console.log('currentIndex', currentIndex)
        let x = screenWidthRef.current * -currentIndex;
        
        // trackRef.current.classList.add('transitions');
        

        if(currentIndex === slides.length - 1) {
            // console.log('Set x to second slide')
            // x = screenWidthRef.current * -1;
            // console.log('X is now', x)
            // trackRef.current.classList.remove('transitions');
            // trackRef.current.style.transform = `translateX(${x}px)`;
            
        } else {
            // trackRef.current.style.transform = `translateX(${x}px)`;
            // trackRef.current.style.transform = `translateX(${x}px)`;
        }
        trackRef.current.style.transform = `translateX(${x}px)`;
    }, [slidesLoaded, currentIndex, slides.length])
    React.useEffect(() => {
        if(!window) return;

        const resizeListener = () => {
            screenWidthRef.current = window.innerWidth;
        }

        window.addEventListener('resize', resizeListener);
        resizeListener();
        return () => {
            window.removeEventListener('resize', resizeListener);
        }
    }, [])
    return (
        <CarouselHero>
            {slidesLoaded && 
            <TrackPath screenWidth={screenWidthRef.current} slideCount={slides.length}>
                <Track ref={trackRef}>
                    {slides.map((slide, key) => {
                        return(
                            <TrackItem key={key}>
                                <figure>
                                    <Image
                                        src={`https:${slide.image.fields.file.url}`}
                                        alt={slide.image.fields.description || ''}
                                        priority={true}
                                        width={480}
                                        height={270}
                                    />
                                </figure>
                            </TrackItem>
                        )
                    })}
                </Track>
            </TrackPath>
            }
        </CarouselHero>
    )
}

export default CarouselVariant;