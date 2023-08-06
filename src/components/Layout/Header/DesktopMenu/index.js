import React from 'react';

import { _DesktopMenu } from './styles';
import Link from 'next/link';
const DesktopMenu = (props) => {

    return(
        <_DesktopMenu>
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
        </_DesktopMenu>
    )
}
export default DesktopMenu;