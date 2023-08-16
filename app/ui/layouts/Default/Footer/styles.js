import styled, {keyframes} from "styled-components";

const fxMovingGradient = keyframes`
    0% {
		background-position: 0% 50%;
	}
	50% {
		background-position: 100% 50%;
	}
	100% {
		background-position: 0% 50%;
	}
`
export const _Footer = styled.footer`
    position: relative;
    padding: 2rem 0;
    background: ${({theme}) => theme.color.darkGray};
    &::after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(
            45deg,
            #AD1919 0%,
            #E24F01 20%,
            #E0AE33 40%,
            #59A133 60%,
            #454CB6 80%,
            #96379D 100%
        );
        background-size: 400% 400%;
	    animation: ${fxMovingGradient} 5s ease infinite;
    }
    
`

export const _Inner = styled.div`
    ${({theme}) => theme.layout.container.normal};
`