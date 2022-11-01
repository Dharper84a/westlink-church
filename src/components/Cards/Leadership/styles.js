import styled from 'styled-components'

export const Card = styled.div`
    figure {
        position: relative;
        width: fit-content;
        div {
            position: absolute;
            z-index: 10;
            bottom: 0.5rem;
            left: 50%;
            transform: translateX(-50%);
            h3,h4 {
                color: ${({theme}) => theme.colors.text.light};
            }
        }
        &::after {
            content: ' ';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 50%;
            mix-blend-mode: multiply;
            background: rgb(54,69,79);
            background: linear-gradient(180deg, rgba(54,69,79,0) 0%, rgba(53,57,53,1) 100%);
            border-radius: 0.5rem;
        }
    }
   
    h4 {
        font-size: 18px;
        font-weight: 400;
    }
   
`