import * as React from 'react';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import { CommonComponent } from './styles';

const LiveBanner = (props) => {
    return (
        <CommonComponent>
            <Link
                href="https://www.youtube.com/channel/UCwvIPoZGrLxCVAzmO77DZOg/streams"
                rel="noopener noreferrer"
                target="_blank">
                Watch Live! <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </Link>
        </CommonComponent>
    );
};

export default LiveBanner;
