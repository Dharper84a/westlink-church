import * as React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {FooterContainer, Inner} from './styles'

const Footer = (props) => {
    return(
        <FooterContainer>
            <Inner>
                <nav aria-label='Site footer menu'>
                    <Link href="/donate">
                        <a aria-label="Ways to donate">
                            Donate
                        </a>
                    </Link>
                </nav>
                <address>
                    <div>
                        4808 W 9th St. N<br/>
                        Wichita, KS 67212 <br/>
                    </div>
                    <div>
                        <a href="tel:13167221111" aria-label="Call">316.722.1111</a><br/>
                        <Link href="/contact">
                            <a title="View other options of contacting Gathering of Grace">
                                Contact
                            </a>
                        </Link>
                    </div>
                </address>
                <div className="legal-copy">
                    <p>
                        <Link href="/terms-of-use">
                            <a aria-label="Terms of Use">
                                Terms of Use
                            </a>
                        </Link>
                        <Link href="/privacy-policy">
                            <a aria-label="Privacy Policy">
                                Privacy Policy
                            </a>
                        </Link><br/>
                        &copy; Copyright {new Date().getFullYear()} Gathering of Grace
                    </p>
                    {/* <p>
                        Created with <FontAwesomeIcon icon={faHeart} /> by Donald Harper
                    </p> */}
                </div>
            </Inner>
        </FooterContainer>
    )
}

export default Footer;
