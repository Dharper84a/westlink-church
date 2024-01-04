"use client"
import Image from "next/image";
import { _PageHeader } from "./styles";

const PageHeader = ({heading, brief, image}) => {
    const variant = image ? 'image' : 'basic';       
    return (
        <_PageHeader variant={variant}>
            {image && <Image src="https://placekitten.com/1600/400" alt="" width={1600} height={400} />}
            <div>
                <h1>{heading}</h1>
                <p>{brief}</p>
            </div>
        </_PageHeader>
    )
}

export default PageHeader