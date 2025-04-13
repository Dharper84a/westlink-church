import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SiteHeader = () => {
    return (
        <header className="site-header">
            <Link href="/">
                <Image src="/Icon-Logo-256x256.png" width="40" height="40" alt="Westlink WL icon logo" />
            </Link>
            <button className="button button--icon" aria-label="Navigation menu">
                <FontAwesomeIcon icon={faBars} />
            </button>
        </header>
    )
}

export default SiteHeader;