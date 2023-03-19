import * as React from 'react';

import Header from './Header';
import Footer from './Footer'

import LiveBanner from '../Common/LiveBanner';

import { Website, OverlayContainer, OverlayBackground, OverlayForeground } from './styles';
import { createPortal } from 'react-dom';

const Layout = (props) => {
    
    const [isLive, setIsLive] = React.useState(false);

    const isLiveChecker = () => {
        const d = new Date();
        if(d.getDay() === 0) {
            if(d.getHours() >= 10 && d.getHours() < 12) {
                // should be live-ish
                setIsLive(false); // disabled 03/19/2023
            } else {
                setIsLive(false);
            }
            
        } else {
            setIsLive(false);
        }

        
    }
    React.useEffect(() => {
        let ignore = false;
        setInterval(() => {
            if(!ignore) {
                isLiveChecker()
            }
        }, 60000)
        return () => {
            ignore = true;
        }
    }, [])
    return(
        <Website>
            {isLive &&
            <LiveBanner />
            }
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