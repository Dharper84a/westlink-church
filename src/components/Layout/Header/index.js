import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import HeaderMenu from '../../Menus/Header';
import { Overlay } from '..';

import {
    _SiteHeader,
    _Inner,
    _MobileMenuButton,
    ComponentBox,
    SiteIdentity,
    MenuButtonBox,
    MenuNavigationBox
} from './styles';
import { Portal } from '../Portal';
import MobileMenu from './MobileMenu';

const Header = (props) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    const [menuState, setMenuState] = React.useState('closed');

    const openingDuration = 500;
    const closingDuration = 150;

    const toggleMenu = () => {
        setMenuState(menuState === 'open' ? 'close' : 'open')
    };

    React.useEffect(() => {
        let ignore = false;
        console.log('menuState', menuState)
        if (menuState === 'close') {
            setTimeout(() => {
                if (!ignore) {
                    setMenuState('closed');
                }
            }, closingDuration);
        }
        return () => {
            ignore = true;
        };
    }, [menuState]);
    return (
        <>
            <_SiteHeader>
                <_Inner>
                    <figure>
                        <Image src="/images/Icon-Logo-48x48.png" alt="" width={48} height={48} />
                        <figcaption>
                            <Link href="/" title="Go to Westlink Church of Christ homepage">
                                Westlink Church of Christ
                            </Link>
                        </figcaption>
                    </figure>
                    <_MobileMenuButton onClick={toggleMenu}>
                        <FontAwesomeIcon icon={faBars} />
                    </_MobileMenuButton>
                </_Inner>
            </_SiteHeader>
            {menuState !== 'closed' &&
            <Portal state={menuState} portalCloseHandler={toggleMenu}>
                <MobileMenu state={menuState} closeHandler={toggleMenu}>
                    jjj
                </MobileMenu>
            </Portal>
            }
        </>
    );
};

export default Header;
