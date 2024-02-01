'use client'
import Image from "next/image";
import styled, {css} from "styled-components";

const _Container = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 2rem ${({theme}) => theme.layout.screenEdge};
    color: ${(props) => props.theme.styleOptions[props.styleOption].color};
    background: ${(props) => props.theme.styleOptions[props.styleOption].background};
    figure {
        margin: 0 auto;
        border-radius: 0.5rem;
        img {
            border-radius: 0.5rem;
        }
    }
    @media ${({theme}) => theme.device.up1024} {
        grid-template-columns: 1fr 1fr;
        gap: 3rem;
        section {
            & > * {
                margin-top: 0;
            }
        }
    }
    @media ${({theme}) => theme.device.up1366} {
        ${props => props.variant === 'media_left' ? (
            css`grid-template-columns: 600px 1fr;`
        ):(
            css`
                grid-template-columns: 1fr 600px;
                section {
                    justify-self: flex-end;
                }
                `
        )}
        padding-top: 4rem;
        padding-bottom: 4rem;
        section {
            max-width: 600px;
        }
    }
`

const MediaAndCopy = ({copy, media, variant, styleOption}) => {

    return (
        <_Container variant={variant} styleOption={styleOption}>
            {variant === 'media_left' ? (
                <>
                {media &&
                <figure>
                    <Image src="https://placekitten.com/600/600" alt="" width={600} height={600} />
                </figure>}
                <section>{copy}</section>
                </>
                
            ):(
                <>
                <section>{copy}</section>
                {media &&
                <figure>
                    <Image src="https://placekitten.com/600/600" alt="" width={600} height={600} />
                </figure>}
                
                </>
            )}
            
        </_Container>
    )
}

export default MediaAndCopy;