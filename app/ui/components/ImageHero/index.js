import Image from "next/image";
import Link from "next/link";
import { lato } from "../../../fonts";

import { _ImageHero } from "./styles";

const ImageHero = (props) => {
   
    return (
        <_ImageHero>
            <Image
                src="/images/bluegreen-geometric.png"
                width={1920}
                height={900}
                alt=""
            />
            <section>
                <h1 className={lato.className}>Love N Relationships</h1>
                <p>The sermon series for October is "Love N Relationships." Everyone likes the idea of love, but what does it look like in real, sometimes difficult relationships? Can we really love like Jesus and have healthy boundaries? How do we love those who don't want a relationship? Using ideas from popular songs, Lead Minister Gary Richardson helps us figure out how to love in action.</p>
            </section>
        </_ImageHero>
    )
}

export default ImageHero