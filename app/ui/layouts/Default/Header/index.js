import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import {lato} from "../../../../fonts";
import { _Header, _Inner } from "./styles";
import useWindowDimensions from "../../../../lib/hooks/useWindowDimensions";
const Header = (props) => {
    const {width, height} = useWindowDimensions();

    return (
        <_Header>
            <_Inner>
                <span className={lato.className}>Westlink Church</span>
                <menu>
                    <li>
                        <Link href="/services">
                            Services
                        </Link>
                    </li>
                    <li>
                        {width < 768 &&
                        <button className="button button--white" aria-label="open menu window">
                            <FontAwesomeIcon icon={faBars} />
                        </button>
                        }
                        {width >= 768 &&
                        <button className="button button--white button--icon-right" aria-label="open menu window">
                            Menu <FontAwesomeIcon icon={faBars} />
                        </button>
                        }
                        
                    </li>
                </menu>
            </_Inner>
        </_Header>
    )
}

export default Header;