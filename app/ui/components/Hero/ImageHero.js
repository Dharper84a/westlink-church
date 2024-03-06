import Image from "next/image";

import { _ImageHero } from "./styles";

const defaultOptions = {
    textColor: "light"
}
const ImageHero = ({heading, copy, image, options}) => {
    const _options = {...defaultOptions, ...options}
    const hasOverlay = heading || copy ? true : false;
    const mobileImage = image?.mobile || image?.desktop;
    return (
        <_ImageHero className={`text-color-${_options.textColor}`}>
            <figure>
                <Image
                    src={mobileImage.src}
                    alt={mobileImage.alt}
                    fill
                    className="hide-desktop"
                />
                <Image
                    src={image.desktop.src}
                    alt={image.desktop.src}
                    fill
                    className="hide-mobile"
                />
            </figure>
            {hasOverlay &&
            <section>
                {heading && <h1>{heading}</h1>}
                {copy && <p>{copy}</p>}
            </section>
            }
        </_ImageHero>
    )
}

export default ImageHero;