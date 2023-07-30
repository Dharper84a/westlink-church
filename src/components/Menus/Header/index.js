import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { MenuContainer, MenuCloseBox } from './styles';
const HeaderMenu = (props) => {
    const router = useRouter();
    const loadedPath = React.useRef(router.asPath);

    const [openItem, setOpenItem] = React.useState(null);
    const menuItemToggleHandler = (e) => {
        if (openItem === e.target.id) {
            setOpenItem(null); // close current
        } else {
            setOpenItem(e.target.id); // open new
        }
    };

    const closeSubMenuHandler = () => {
        setOpenItem(null);
    };

    React.useEffect(() => {
        if (loadedPath.current === null) return;

        if (router.asPath !== loadedPath.current) {
            props.onCloseOverlay();
        }
    }, [props, router]);
    return (
        <MenuContainer>
            <header>
                <Link href="/">Westlink Church of Christ</Link>
            </header>

            <nav>
                <menu>
                    <li className={openItem === 'item__who_we_are' ? 'open' : 'not-open'}>
                        <button onClick={menuItemToggleHandler} id="item__who_we_are">
                            {openItem !== 'item__who_we_are' ? (
                                <>
                                    Who We Are <FontAwesomeIcon icon={faChevronRight} />
                                </>
                            ) : (
                                <>
                                    Close <FontAwesomeIcon icon={faTimes} />
                                </>
                            )}
                        </button>
                        <menu onClick={closeSubMenuHandler}>
                            <li>
                                <Link href="/who-we-are">Who We Are</Link>
                            </li>
                            <li>
                                <Link href="/church-leadership">Church Leadership</Link>
                            </li>
                            <li>
                                <Link href="/ministry-leaders">Ministry Leaders</Link>
                            </li>
                            <li>
                                <Link href="/history">History</Link>
                            </li>
                        </menu>
                    </li>
                    <li className={openItem === 'item__ways_we_serve' ? 'open' : 'not-open'}>
                        <button onClick={menuItemToggleHandler} id="item__ways_we_serve">
                            {openItem !== 'item__ways_we_serve' ? (
                                <>
                                    Ways We Serve <FontAwesomeIcon icon={faChevronRight} />
                                </>
                            ) : (
                                <>
                                    Close <FontAwesomeIcon icon={faTimes} />
                                </>
                            )}
                        </button>
                        <menu onClick={closeSubMenuHandler}>
                            <li>
                                <Link href="/ways-we-serve">Ways We Serve</Link>
                            </li>
                            <li>
                                <Link href="/community-center">Community Center</Link>
                            </li>
                            <li>
                                <Link href="/missions">Missions</Link>
                            </li>
                            <li>
                                <Link href="/simple-house">Simple House</Link>
                            </li>
                        </menu>
                    </li>
                    <li className={openItem === 'item__resources' ? 'open' : 'not-open'}>
                        <button onClick={menuItemToggleHandler} id="item__resources">
                            {openItem !== 'item__resources' ? (
                                <>
                                    Media & Schedule <FontAwesomeIcon icon={faChevronRight} />
                                </>
                            ) : (
                                <>
                                    Close <FontAwesomeIcon icon={faTimes} />
                                </>
                            )}
                        </button>
                        <menu onClick={closeSubMenuHandler}>
                            <li>
                                <Link href="/sermons">Sermons</Link>
                            </li>
                            <li>
                                <Link href="/schedule">Schedule and Events</Link>
                            </li>
                            <li>
                                <Link href="/daily-devotionals">Daily Devotionals</Link>
                            </li>
                            {/* <li>
                                <Link href="/other-material">
                                    <a>
                                        Other Material
                                    </a>
                                </Link>
                            </li> */}
                        </menu>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </menu>
            </nav>
            <MenuCloseBox onClick={props.onCloseOverlay}>
                <button onClick={props.onCloseOverlay} aria-label="close menu drawer">
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </MenuCloseBox>
        </MenuContainer>
    );
};

export default HeaderMenu;
