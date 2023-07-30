import Image from "next/image";
import { useState } from "react";
import { LargeImageHero } from "./styles";
const LargeImageVariant = (props) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const onLoadingCompleteHandler = () => {
        setImageLoaded(true);
    }
    return (
        <LargeImageHero imageLoaded={imageLoaded}>
            <section>
                {props.heading && <h1>{props.heading}</h1>}
                {props.shortExcerpt && <p>{props.shortExcerpt}</p>}
            </section>
            <figure>
                <Image
                    src={`http:${props.image.fields.file.url}`}
                    alt={props.image.fields.description || ''}
                    quality={50}
                    priority={true}
                    fill={true}
                    onLoadingComplete={onLoadingCompleteHandler}
                />
                
                
            </figure>
        </LargeImageHero>
    )
}

export default LargeImageVariant;