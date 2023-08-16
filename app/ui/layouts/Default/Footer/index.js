import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';

import { _Footer, _Inner } from "./styles";
const Footer = (props) => {
    return (
        <_Footer>
            <_Inner>
                <menu>
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
                </menu>
                <menu>
                    <li>
                        <Link href="/terms-of-use">Terms of Use</Link>
                    </li>
                    <li>
                        <Link href="/privacy-policy">Privacy Policy</Link>
                    </li>
                </menu>
                <small>&copy;2023 Westlink Church of Christ</small>
            </_Inner>
        </_Footer>
    )
}

export default Footer;