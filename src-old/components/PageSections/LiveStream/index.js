import * as React from 'react'
import RichTextRenderer from '../../Common/RichTextRenderer';
import YouTubePlayer from '../../Common/YouTubePlayer';

import { ComponentBase } from './styles';
const LiveStream = (props) => {
    const [hasHeader, setHasHeader] = React.useState(false);
    const [hasStreamId, setHasStreamId] = React.useState(false);

    React.useEffect(() => {
        if(props?.heading || props?.content) {
            setHasHeader(true);
        } else {
            setHasHeader(false);
        }

        if(props?.streamId) {
            setHasStreamId(true);
        }else {
            setHasStreamId(false);
        }
    }, [props])
    
    /** Live Stream Indicator Feature */
    const [isLive, setIsLive] = React.useState(false);
    const isLiveChecker = () => {
        const d = new Date();
        if(d.getDay() === 0) {
            if(d.getHours() >= 10 && d.getHours() < 12) {
                // should be live-ish
                setIsLive(true);
            } else {
                setIsLive(false);
            }
            
        } else {
            setIsLive(false);
        }

        
    }
    React.useEffect(() => {
        let ignore = false;
        setInterval(() => {
            if(!ignore) {
                isLiveChecker()
            }
        }, 60000)
        return () => {
            ignore = true;
        }
    }, [])
    return (
        <>
        {isLive && hasStreamId ? (
            <ComponentBase>
                {hasHeader &&
                <header>
                    {props?.heading && <h2>{props.heading}</h2>}
                    {props?.content && <RichTextRenderer richText={props.content} />}
                </header>
                }
                <YouTubePlayer videoId={props.streamId} />
            </ComponentBase>
        ):(
            <></>
        )}
        </>
    )
}

export default LiveStream;