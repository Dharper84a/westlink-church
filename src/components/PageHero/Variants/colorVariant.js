import { ColorHero } from "./styles";
const ColorVariant = (props) => {

    return (
        <ColorHero backgroundStyle={props.backgroundStyle}>
            {props.heading && <h1>{props.heading}</h1>}
        </ColorHero>
    )
}

export default ColorVariant;