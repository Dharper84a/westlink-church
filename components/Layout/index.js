import * as React from 'react';

import Header from './Header';
import Footer from './Footer'

import { Website, OverlayContainer, OverlayBackground, OverlayForeground } from './styles';
import { createPortal } from 'react-dom';

const Layout = (props) => {

    return(
        <Website>
            <Header />
                <main>
                    {props.children}
                </main>
            <Footer />
        </Website>
    )
}

export default Layout;


export const Portal = (props) => {
   return createPortal(props.children, document.getElementById(props.type));
}

export const Overlay = (props) => {
    const overlayType = props?.type || 'modal';
    const transitionState = props?.transitionState || 'closed';

    const openingDurationMS = props?.transitionTimings?.opening ? parseInt(props.transitionTimings.opening) / 1000 : 0;
    const closingDurationMS = props?.transitionTimings?.closing ? parseInt(props.transitionTimings.closing) / 1000 : 0;
   
    return (
        <Portal type={overlayType}>
            <OverlayContainer>
                <OverlayBackground onClick={props.onCloseOverlay} transitionState={transitionState} className={`overlay-${overlayType}`} />
                

                <OverlayForeground overlayType={overlayType} transitionState={transitionState}>
                        {props.children}
                </OverlayForeground>
            </OverlayContainer>
        </Portal>
    )
}