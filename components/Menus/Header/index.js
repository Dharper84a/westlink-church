import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';


import { MenuContainer, MenuCloseBox } from './styles';
const HeaderMenu = (props) => {

    return(
        <MenuContainer>
            <span>Menu</span>
            <nav>
                <Link href="#">
                    <a title="View dates and times of regular church services">
                        Schedule
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        Beliefs and Values
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        Structure and Groups
                    </a>
                </Link>
                <Link href="#">
                    <a>
                        Events
                    </a>
                </Link>
            </nav>
            <MenuCloseBox>
                <button onClick={props.onCloseOverlay} aria-label="close menu drawer">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </MenuCloseBox>
        </MenuContainer>
    )
}

export default HeaderMenu;