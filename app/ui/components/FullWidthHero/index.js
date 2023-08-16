import Image from "next/image";
import { _FullWidthHero, _Inner} from "./styles";

const FullWidthHero = (props) => {

    return (
        <_FullWidthHero>
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