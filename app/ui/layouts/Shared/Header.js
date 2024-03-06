import Link from "next/link";
import { useEffect, useState } from "react";
import SideDrawer from "../../components/SideDrawer";

const Menu = () => {
    return (
        <menu>
            <li>
                <Link href="/who-we-are">
                    Who We Are
                </Link>
            </li>
            <li>
                <Link href="/ways-we-serve">
                    Ways We Serve
                </Link>
            </li>
            <li>
                <Link href="/media-and-resources">
                    Media and Resources
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    Contact
                </Link>
            </li>
        </menu>
    )
}
const SharedHeader = () => {
    const [drawerState, setDrawerState] = useState('closed');

    const drawerActionHandler = () => {
        if(drawerState === 'open') {
            setDrawerState('close');
        } else {
            setDrawerState('open')
        }
    }

    useEffect(() => {
        if(drawerState === 'closed') return;
        let ignore = false;

        if(drawerState === 'close') {
            setTimeout(() => {
                setDrawerState('closed');
            }, 300)
        }
        return () => {
            ignore = true;
        }

    }, [drawerState])
    return (
        <header>
            <Link href="/">Westlink</Link>
            <button className="hide-desktop" onClick={drawerActionHandler}>
                Menu
            </button>
            <nav className="hide-mobile">
                <Menu />
            </nav>
            {drawerState !== 'closed' &&
                <SideDrawer state={drawerState} closeHandler={drawerActionHandler}>
                    <Menu />
                </SideDrawer>
                
            }
        </header>
    )
}

export default SharedHeader;