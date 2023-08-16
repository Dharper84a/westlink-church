import * as React from 'react';
import { useInView } from 'react-intersection-observer';

import RichTextRenderer from '../../Common/RichTextRenderer';

import { ComponentBox } from './styles';
const YouTubeEmbed = (props) => {
    const resizeObserver = React.useRef(null);
    const resizeRef = React.useRef(null);
    const [iframeHeight, setIframeHeight] = React.useState('100%');

    const {ref, inView, entry} = useInView({
        threshold: 0.60,
        triggerOnce: true,
    });
    
    const richText = props?.content;

    React.useEffect(() => {
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
    return(
        <ComponentBox iframeHeight={iframeHeight}>
            <figure ref={resizeRef}>
                <iframe width="720" height="480" src="https://www.youtube.com/embed/ZlLNSxKXDuY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </figure>
            <aside>
                <h2>{props?.heading}</h2>
                {richText &&
                <RichTextRenderer richText={richText} />
                }
                
            </aside>
        </ComponentBox>
    )
}

export default YouTubeEmbed;