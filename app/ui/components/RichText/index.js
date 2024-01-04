"use client"
import { _Copy } from "./styles";
const RichText = ({copy, variant}) => {
    return (
        <_Copy variant={variant}>{copy}</_Copy>
    );
};

export default RichText;
