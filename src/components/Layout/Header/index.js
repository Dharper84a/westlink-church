import * as React from 'react';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import HeaderMenu from '../../Menus/Header';
import { Overlay } from '..';

import { ComponentBox, SiteIdentity, MenuButtonBox, MenuNavigationBox } from './styles';

const Header = (props) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true
    });

    const [menuState, setMenuState] = React.useState('closed');

    const openingDuration = 500;
    const closingDuration = 300;

    const toggleMenu = () => {
        switch (menuState) {
            case 'closed':
                setMenuState('open');
                break;
            case 'open':
                setMenuState('closing');
                break;
        }
    };

    React.useEffect(() => {
        let ignore = false;

        if (menuState === 'closing') {
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
            <ComponentBox transitionState={menuState}>
                <SiteIdentity>
                    <Image
                        src="/images/Icon-Logo-White-256x256.png"
                        alt=""
                        width={48}
                        height={48}
                        priority
                    />
                    <Link
                        href="/"
                        title="Go to Westlink Church of Christ homepage"
                        className={inView ? 'in-view' : 'not-in-view'}
                        ref={ref}>
                        Westlink Church of Christ
                    </Link>
                </SiteIdentity>

                <MenuNavigationBox>
                    <menu>
                        <li>
                            <Link
                                href="/who-we-are"
                                title={`Learn about Westlink&apos;s beliefs, it's ministers and members.`}>
                                Who We Are
                            </Link>
                            <menu>
                                <li>
                                    <Link
                                        href="/church-leadership"
                                        title={`Lean more about Westlinks church ministers, shepherds and leadership team.`}>
                                        Church Leadership
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/ministry-leaders"
                                        title={`Learn more about Westlinks minstry leaders and what they do.`}>
                                        Ministry Leaders
                                    </Link>
                                </li>
                                {/* <li>
                                <Link href="/who-we-are">
                                    <a title={`Learn more about Westlink&apos;s shepherds and supporting members`}>
                                        Shepherds & Supporting Staff
                                    </a>
                                </Link>
                            </li> */}
                                <li>
                                    <Link href="/history">History</Link>
                                </li>
                            </menu>
                        </li>
                        <li>
                            <Link
                                href="/ways-we-serve"
                                title={`Read about the many different ways Westlink and it&apos;s members serve the community`}>
                                Ways We Serve
                            </Link>
                            <menu>
                                <li>
                                    <Link
                                        href="/community-center"
                                        title="Read more about Westlink's Community Center and how it's offered for use">
                                        Community Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="missions">Missions</Link>
                                </li>
                                <li>
                                    <Link
                                        href="/simple-house"
                                        title="Learn about Simple House and how Westlink helps">
                                        Simple House
                                    </Link>
                                </li>
                                {/* <li>
                                <Link href="/the-lords-diner">
                                    <a title="Learn how Westlink supports The Lord&amps;s Diner">
                                        The Lord&apos;s Diner
                                    </a>
                                </Link>
                            </li> */}
                            </menu>
                        </li>

                        <li>
                            <Link href="/schedule">Media & Schedule</Link>
                            <menu>
                                <li>
                                    <Link
                                        href="/sermons"
                                        title="View our most recent sermons and materials. Also, if live our live stream.">
                                        Sermons
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/schedule">Schedule & Events</Link>
                                </li>
                                <li>
                                    <Link href="/daily-devotionals">Daily Devotionals</Link>
                                </li>
                                {/* <li>
                                <Link href="/materials">
                                    <a title="">
                                        Other Materials
                                    </a>
                                </Link>
                            </li> */}
                                {/* <li>
                                <Link href="/events">
                                    <a title="Find out what Westlink has coming up and how you can be a part of it.">
                                        Events
                                    </a>
                                </Link>
                            </li> */}
                            </menu>
                        </li>
                        <li>
                            <Link href="/contact">Contact</Link>
                        </li>
                    </menu>
                </MenuNavigationBox>
                <MenuButtonBox onClick={toggleMenu}>
                    <button onClick={toggleMenu} aria-label="open menu drawer">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </MenuButtonBox>
            </ComponentBox>
            {menuState !== 'closed' && (
                <Overlay
                    type="drawer"
                    transitionState={menuState}
                    transitionTimings={{ opening: openingDuration, closing: closingDuration }}
                    onCloseOverlay={toggleMenu}>
                    <HeaderMenu onCloseOverlay={toggleMenu} />
                </Overlay>
            )}
        </>
    );
};

export default Header;
