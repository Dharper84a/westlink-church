import Link from 'next/link';
import * as React from 'react'
import RichTextRenderer from '../../Common/RichTextRenderer';
import YouTubePlayer from '../../Common/YouTubePlayer';

import { ComponentBase, VideoGrid } from './styles';
const PreviousSermon = (props) => {
    const hasHeader = props?.heading || props?.content ? true : false;

    const streamListLink = props?.linkToYouTubeSermonPlaylist ? props.linkToYouTubeSermonPlaylist : false;
    return (
        <ComponentBase>
            {hasHeader &&
            <header>
                {props?.heading && <h2>{props.heading}</h2>}
                {props?.content && <RichTextRenderer richText={props.content} />}
            </header>
            }
            <VideoGrid>
                <div>        
                    <YouTubePlayer videoId={props?.previousVideoId} />
                </div>
                {streamListLink &&
                <aside>
                    <Link href={streamListLink} title="View more of Westlink Church of Christ past sermons" target="_blank" rel="noopener noreferrer">
                    View More Sermons
                    </Link>
                </aside>
                }
            </VideoGrid>
        </ComponentBase>
    )
}

export default PreviousSermon;