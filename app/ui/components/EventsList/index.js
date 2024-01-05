"use client"
import RichText from "../RichText";
import { _Container } from "./styles";

const EventsList = ({copy}) => {

    return (
        <_Container>
            <RichText copy={copy} />
        </_Container>
    )
}

export default EventsList;