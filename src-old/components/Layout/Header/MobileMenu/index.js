import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

import { _MobileMenu, _SocialMenu } from './styles';

const MobileMenu = (props) => {

    return (
        <_MobileMenu className={props.state}>
            <header>
                <Link href="/">
                    <Image src="/images/Icon-Logo-48x48.png" alt="" width={48} height={48} />
                </Link>
                
                <button onClick={props?.closeHandler}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </header>
            <nav>
                <menu>
                    <li>
                        <Link href="/who-we-are">
                            Who We Are
                        </Link>
                        <menu>
                            <li>
                                <Link href="/shepherding-team">
                                    Shepherding Team
                                </Link>
                            </li>
                            <li>
                                <Link href="/history">
                                    History
                                </Link>
                            </li>
                        </menu>
                    </li>
                    <li>
                        <Link href="/ways-we-serve">
                            Ways We Serve
                        </Link>
                        <menu>
                            <li>
                                <Link href="/community-center">
                                    Community Center
                                </Link>
                            </li>
                            <li>
                                <Link href="/missions">
                                    Missions
                                </Link>
                            </li>
                            <li>
                                <Link href="/simple-house">
                                    Simple House
                                </Link>
                            </li>
                        </menu>
                    </li>
                    <li>
                        <Link href="/">
                            Resources
                        </Link>
                        <menu>
                            <li>
                                <Link href="/sermons">
                                    Sermons
                                </Link>
                            </li>
                            <li>
                                <Link href="/events">
                                    Events
                                </Link>
                            </li>
                            <li>
                                <Link href="/daily-devotionals">
                                    Daily Devotionals
                                </Link>
                            </li>
                        </menu>
                    </li>
                    <li>
                        <Link href="/contact">
                            Contact
                        </Link>
                    </li>
                </menu>
            </nav>
            <_SocialMenu>
                <li>
                    <Link href="https://www.facebook.com/WestlinkChurch/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                
                </li>
                <li>
                    <Link href="https://www.instagram.com/westlinkchurch/" target="_blank">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                </li>
            </_SocialMenu>
        </_MobileMenu>
    )
}

export default MobileMenu
