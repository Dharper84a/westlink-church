import Image from "next/image";
import Link from "next/link";
import { lato } from "../../../fonts";

import { _ImageHero } from "./styles";
import useIntersectionObserver from "../../../lib/hooks/useIntersectionObserver";
import { useSiteDispatch } from "../../../lib/context";

const ImageHero = (props) => {
    
    const dispatch = useSiteDispatch();

    const observerRef = useIntersectionObserver({threshold: 0.5}, (entries) => {
        entries.forEach((entry) => {
            dispatch({
                type: 'headerVariant',
                variant: entry.isIntersecting ? 'transparent' : 'solid'
            })
        })
    })
    return (
        <_ImageHero ref={observerRef}>
            <Image
                src="/images/love-n-relationships-bg.jpg"
                width={1280}
                height={720}
                quality={95}
                alt=""
            />
            <section>
                <h1 className={lato.className}>Love N Relationships</h1>
                <p>The sermon series for October is "Love N Relationships." Everyone likes the idea of love, but what does it look like in real, sometimes difficult relationships? Can we really love like Jesus and have healthy boundaries? How do we love those who don't want a relationship? Using ideas from popular songs, Lead Minister Gary Richardson helps us figure out how to love in action.</p>
                <footer>
                    <Link href="#" className="button button--white">
                        Explore the Series
                    </Link>
                </footer>
            </section>
        </_ImageHero>
    )
}

export default ImageHero