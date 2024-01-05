"use client"
import Image from "next/image";
import { _Container } from "./styles";

const Badge = ({name, image, pills}) => {
    return (
        <_Container>
            {image &&
                <Image src="https://placekitten.com/256/256" alt="" width={256} height={256} />
            }
            <div>
                <strong>{name}</strong>
                {pills && (
                    <ul>
                        {pills.map((item, key) => {
                            return <li key={key}><span>{item}</span></li>;
                        })}
                    </ul>
                )}
                <footer>
                    <span>member since 2021</span>
                </footer>
            </div>
        </_Container>
    )
}

export default Badge