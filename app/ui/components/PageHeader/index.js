"use client"
import Image from "next/image";
import { _PageHeader } from "./styles";

const PageHeader = ({copy, image, styleOption}) => {
    const variant = image ? 'image' : 'basic';       
    return (
        <_PageHeader styleOption={styleOption} variant={variant}>
            {image && <Image src="https://placekitten.com/1920/400" alt="" width={1920} height={400} />}
            <section>
                {copy && <h1>{copy}</h1>}
            </section>
        </_PageHeader>
    )
}

export default PageHeader