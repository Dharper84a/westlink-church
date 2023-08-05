import { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

import { _Overlay } from './styles';
export const Portal = (props) => {
    const ref = useRef();
    const [mounted, setMounted] = useState(false);

    const onClickHandler = (e) => {
        if(e.target.id === "overlay_container") props?.portalCloseHandler();
    }

    useEffect(() => {
        if(mounted) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'scroll';
        }

        return () => {
            document.body.style.overflowY = 'scroll';
        }
    }, [mounted])
    useEffect(() => {
        ref.current = document.querySelector('#portal');
        setMounted(true);
    }, []);

    return mounted && ref.current
        ? createPortal(
              <_Overlay id="overlay_container" className={props?.state || 'open'} onClick={onClickHandler}>
                  {props.children}
              </_Overlay>,
              ref.current
          )
        : null;
};

// 18. Cherry Blossom
