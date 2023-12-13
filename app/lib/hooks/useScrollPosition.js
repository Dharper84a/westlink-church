import { useRef, useLayoutEffect} from 'react';

const isBrowser = typeof window !== 'undefined';

const getScrollPosition = ({ element, useWindow}) => {
    if(!isBrowser) return {x: 0, y: 0};

    const target = element ? element.current : document.body;
    const position = target.getBoundingClientRect();

    return useWindow 
        ? { x: window.scrollX, y: window.scrollY } 
        : { x: position.left, y: position.y }
}

const useScrollPosition = ({element, useWindow, yTrigger, onTrigger, onWait}, deps) => {
    const position = useRef(getScrollPosition({ element, useWindow }));
    
    let isTriggered = false;
    let throttleTimeout = null;

    const callBack = () => {
        const currPos = getScrollPosition({ element, useWindow });
        position.current = currPos;
        
        if(yTrigger && currPos.y >= yTrigger) {
            if(typeof onTrigger === 'function') onTrigger();
        } else {
            if(typeof onWait === 'function') onWait();
        }

        throttleTimeout = setTimeout(callBack, 350);
    }

    useLayoutEffect(() => {
        const handleScroll = () => {
            if(throttleTimeout === null) {
                throttleTimeout = setTimeout(callBack, 250);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, deps)

    return position.current;
}

export default useScrollPosition;