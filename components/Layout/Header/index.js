import * as React from "react";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import HeaderMenu from "../../Menus/Header";
import { Overlay } from "..";

import { ComponentBox, SiteIdentity, MenuButtonBox, MenuNavigationBox } from "./styles";

const Header = (props) => {
    const { ref, inView, entry } = useInView({
        triggerOnce: true,
    });

    const [menuState, setMenuState] = React.useState('closed');

    const openingDuration = 500;
    const closingDuration = 300;

    const toggleMenu = () => {
        switch(menuState) {
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
        
        if(menuState === 'closing') {
            setTimeout(() => {
                if(!ignore) {
                    setMenuState('closed');
                }
            }, closingDuration);
        }
        return () => {
            ignore = true;
        }
        
    }, [menuState])
    return (
        <>
        <ComponentBox transitionState={menuState}>
            <SiteIdentity>
                <Image 
                    src="/images/Icon-Logo-256x256.png"
                    alt=""
                    width={48}
                    height={48}
                    priority
                />
                <Link href="/">
                    <a
                        title="Go to Westlink Church of Christ homepage"
                        className={inView ? "in-view" : "not-in-view"}
                        ref={ref}
                    >
                        
                        Westlink Church of Christ
                    </a>
                </Link>
            </SiteIdentity>
            <MenuNavigationBox>
                <ul>
                    <li>
                        <Link href="/ways-we-serve">
                            <a title="Read about the many different ways Westlink and it's members serve the community">
                                Ways We Serve
                            </a>
                        </Link>
                        <ul>
                            <li>
                                <Link href="/community-center">
                                    <a title="Read more about Westlink's Community Center and how it's offered for use">
                                        Community Center
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="missions">
                                    <a title="">
                                        Missions
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/simple-house">
                                    <a title="Learn about Simple House and how Westlink helps">
                                        Simple House
                                    </a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/who-we-are">
                            <a title="Learn about Westlink's beliefs, it's ministers and members.">
                                Who We Are
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/resources">
                            <a title="">
                                Resources
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/events">
                            <a title="Find out what Westlink has coming up and how you can be a part of it.">
                                Events
                            </a>
                        </Link>
                    </li>
                </ul>
            </MenuNavigationBox>
            <MenuButtonBox>
                <button onClick={toggleMenu} aria-label="open menu drawer">
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </MenuButtonBox>
            
        </ComponentBox>
        {menuState !== 'closed' && (
            <Overlay
                type="drawer"
                transitionState={menuState}
                transitionTimings={{opening: openingDuration, closing: closingDuration}}
                onCloseOverlay={toggleMenu}
            >
                <HeaderMenu onCloseOverlay={toggleMenu} />
            </Overlay>
        )}
        </>
    );
};

export default Header;
