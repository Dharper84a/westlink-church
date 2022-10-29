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
                        <a title="Discover options to donate to Westlink Church of Christ">
                            Donate
                        </a>
                    </Link>
                    <Link href="/community-center">
                        <a title="Read about Westlink's community center, it's capabilities and avaliablility.">
                            Community Center
                        </a>
                    </Link>
                </nav>
                <address>
                    <div>
                        10025 W. Central Ave.<br/>
                        Wichita, KS 67212 <br/>
                    </div>
                    <div>
                        <a href="tel:13167221111" title="Call Westlink Church of Christ">316.722.1111</a><br/>
                        <Link href="/contact">
                            <a title="View other options of contacting Westlink">
                                Contact
                            </a>
                        </Link>
                    </div>
                </address>
                <div className="legal-copy">
                    <p>
                        <Link href="/terms-of-use">
                            <a title="Read Westlinks terms of use statement">
                                Terms of Use
                            </a>
                        </Link>
                        <Link href="/privacy-policy">
                            <a title="Read Westlinks privacy policy statement">
                                Privacy Policy
                            </a>
                        </Link><br/>
                        &copy; Copyright {new Date().getFullYear()} Westlink Church of Christ
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