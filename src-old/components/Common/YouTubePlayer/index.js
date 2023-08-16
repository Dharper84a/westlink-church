import * as React from 'react'

import { ComponentCommon } from './styles';
const YouTubePlayer = (props) => {
    const resizeObserver = React.useRef(null);
    const resizeRef = React.useRef(null);
    const [iframeHeight, setIframeHeight] = React.useState('100%');
    const videoSrc = `https://www.youtube.com/embed/${props?.videoId}`;

    
    React.useEffect(() => {
        if(!resizeRef.current) return;
        if(typeof resizeObserver === 'undefined') return;

        if(!resizeObserver.current) {
            resizeObserver.current = new ResizeObserver((entries) => {
                for(const entry of entries) {
                    let entryWidth = entry.contentBoxSize[0].inlineSize;
                    if(!isNaN || entryWidth !== 0) {
                        let desiredHeight = parseInt((entryWidth * 0.5625).toFixed(0));
                        setIframeHeight(desiredHeight);
                    }
                  
                }
            });

            resizeObserver.current.observe(resizeRef.current);
        }
        
    }, [])
    return (
        <ComponentCommon iframeHeight={iframeHeight}>
           {props?.videoId ? (
            <figure ref={resizeRef}>
                <iframe width="1600" height="900" src={videoSrc} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </figure>
           ):(
            <span>Unable to play video</span>
           )}
        </ComponentCommon>
    )
}

export default YouTubePlayer;