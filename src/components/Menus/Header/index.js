import * as React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faChevronRight } from '@fortawesome/free-solid-svg-icons';


import { MenuContainer, MenuCloseBox } from './styles';
const HeaderMenu = (props) => {
    const router = useRouter();
    const loadedPath = React.useRef(router.asPath);

    const [openItem, setOpenItem] = React.useState(null)
    const menuItemToggleHandler = (e) => {
        if(openItem === e.target.id) {
            setOpenItem(null); // close current
        } else {
            setOpenItem(e.target.id); // open new
        }
        
    }

    const closeSubMenuHandler = () => {
        setOpenItem(null);
    }

    React.useEffect(() => {
        if(loadedPath.current === null) return;

        if(router.asPath !== loadedPath.current) {
            props.onCloseOverlay()
        }
    }, [props, router])
    return(
        <MenuContainer>
            <header>
                <Link href="/">
                    <a>Westlink Church of Christ</a>       
                </Link>
            </header>
            
            <nav>
                <menu>
                    <li className={openItem === "item__who_we_are" ? "open" : "not-open"}>
                        <button onClick={menuItemToggleHandler} id="item__who_we_are">
                            {openItem !== "item__who_we_are" ? (
                                <>Who We Are <FontAwesomeIcon icon={faChevronRight} /></>
                            ):(
                                <>Close <FontAwesomeIcon icon={faTimes} /></>
                            )}
                        </button>
                        <menu onClick={closeSubMenuHandler}>
                            <li>
                                <Link href="/who-we-are">
                                    <a>Who We Are</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/who-we-are#ministers">
                                    <a>Ministers</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/who-we-are#shepherds">
                                    <a>Shepherds</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/history">
                                    <a>History</a>
                                </Link>
                            </li>
                        </menu>
                    </li>
                    <li className={openItem === "item__ways_we_serve" ? "open" : "not-open"}>
                        <button onClick={menuItemToggleHandler} id="item__ways_we_serve">
                            {openItem !== "item__ways_we_serve" ? (
                                <>Ways We Serve <FontAwesomeIcon icon={faChevronRight} /></>
                            ):(
                                <>Close <FontAwesomeIcon icon={faTimes} /></>
                            )}
                        </button>
                        <menu onClick={closeSubMenuHandler}>
                            <li>
                                <Link href="/ways-we-serve">
                                    <a>
                                        Ways We Serve
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/community-center">
                                    <a>
                                        Community Center
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/missions">
                                    <a>
                                        Missions
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/simple-house">
                                    <a>
                                        Simple House
                                    </a>
                                </Link>
                            </li>
                        </menu>
                    </li>
                    <li className={openItem === "item__resources" ? "open" : "not-open"}>
                        <button onClick={menuItemToggleHandler} id="item__resources">
                            {openItem !== "item__resources" ? (
                                <>Media & Resources <FontAwesomeIcon icon={faChevronRight} /></>
                            ):(
                                <>Close <FontAwesomeIcon icon={faTimes} /></>
                            )}
                        </button>
                        <menu onClick={closeSubMenuHandler}>
                            <li>
                                <Link href="/schedule">
                                    <a>
                                        Media & Resources
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/schedule">
                                    <a>
                                        Schedule
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/podcasts">
                                    <a>
                                        Podcasts
                                    </a>
                                </Link>
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
                        <Link href="/contact">
                            <a>
                                Contact
                            </a>
                        </Link>
                    </li>
                </menu>
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