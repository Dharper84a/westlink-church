import { useEffect, useState } from "react";
import Image from "next/image";

import { _FullWidthHero, _Inner} from "./styles";

const FullWidthHero = (props) => {
    const [imageOffset, setImageOffset] = useState(0);
    const parallaxHandler = () => {
        const x = (window.scrollY + 1) / 2;
        setImageOffset(x);
    }

    useEffect(() => {
        window.addEventListener("scroll", parallaxHandler)
        parallaxHandler();

        return () => {
            window.removeEventListener("scroll", parallaxHandler);
        }
    }, [])
    return (
        <_FullWidthHero imageOffset={imageOffset}>
            <Image 
                src="/images/pink-purple-mirage-4k.jpg"
                width={1920}
                height={1080}
                alt=""
            />
            <_Inner>
                <h1>Westlink Church of Christ</h1>
                <p>
                Westlink is a church dedicated to growing in love for God and for others. Our focus is on putting the inclusive love of Christ into action.
                </p>
            </_Inner>
        </_FullWidthHero>
    )
}

export default FullWidthHero