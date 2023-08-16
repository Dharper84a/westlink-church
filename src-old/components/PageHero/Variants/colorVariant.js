import * as React from 'react';
import { ColorHero, MobileTitle } from "./styles";
const ColorVariant = (props) => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [heading, setHeading] = React.useState('');

    React.useEffect(() => {
        setHeading(props?.heading);
    }, [props])
    React.useEffect(() => {

        const resizeHandler = () => {
            if(window.innerWidth <= 1024) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        }

        window.addEventListener("resize", resizeHandler);

        resizeHandler()

        return () => {
            window.removeEventListener("resize", resizeHandler);
        }
    }, [])
    return (
        <>
        <ColorHero backgroundStyle={props.backgroundStyle}>
            {!isMobile && heading && <h1>{heading}</h1>}
        </ColorHero>
        {isMobile && heading && <MobileTitle><h1>{heading}</h1></MobileTitle>}
        </>
    )
}

export default ColorVariant;