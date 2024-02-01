'use client'
import styled, {css} from "styled-components"

const _Copy = styled.section`
    background: ${(props) => props.theme.styleOptions[props.styleOption].background};
    div {
        ${props => props.variant === 'full_width' ? (
            css`width: auto;`
        ):(
            css`width: 600px;`
        )}
        padding: 2rem ${({ theme }) => theme.layout.screenEdge};
        color: ${(props) => props.theme.styleOptions[props.styleOption].color};
    }
`

const Copy = ({copy, variant, styleOption}) => {
    return (
        <_Copy variant={variant || 'full_width'} styleOption={styleOption}>
            <div>
                {copy}
            </div>
        </_Copy>
    )
}

export default Copy