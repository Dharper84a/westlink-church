import styled, { keyframes } from 'styled-components';

const fxShow = keyframes`
 0% {
    filter: blur(5px);
    transform: translateY(calc(-50% + 75px));
  }
  100% {
    opacity: 1;
    filter: blur(0);
  }
`;

export const _HeroSlider = styled.div``

export const _Presentation = styled.div``

export const _SlideQueue = styled.div``

export const _Slide = styled.div`
    position: relative;
    z-index: 100;
    width: 200px;
    height: 300px;
    border-radius: 1rem;
    cursor: pointer;
    img {
        object-fit: cover;
        border-radius: 1rem;
    }
    &.active
`
// export const _HeroSlider = styled.div`
//     height: 100vh;
//     overflow: hidden;
//     ul {
//         overflow: hidden;
//         list-style: none;
//         height: 100%;
//         margin: 0;
//         padding: 0;
//     }
//     nav {
//         position: absolute;
//         bottom: 2rem;
//         left: 50%;
//         transform: translateX(-50%);
//         z-index: 5;
//         user-select: none;
//         button {
//             background-color: rgba(255, 255, 255, 0.5);
//             color: rgba(0, 0, 0, 0.7);
//             border: 2px solid rgba(0, 0, 0, 0.6);
//             margin: 0 0.25rem;
//             padding: 0.75rem;
//             border-radius: 0.75rem;
//             cursor: pointer;

//             &:hover {
//                 background-color: rgba(255, 255, 255, 0.3);
//             }
//         }
//     }
// `;

// export const _Slide = styled.li`
//     position: absolute;
//     z-index: 1;
//     top: calc(90% - 130px);
//     width: 130px;
//     height: 220px;
//     transform: translateY(-50%);
//     background-position: center;
//     background-size: cover;
//     border-radius: 20px;
//     box-shadow: 0 20px 30px rgba(255, 255, 255, 0.3) inset, 0 0 1rem rgba(20, 20, 20, 0.3);
//     transition: transform 0.1s, left 0.75s, top 0.75s, width 0.75s, height 0.75s;
//     div {
//         position: absolute;
//         top: 50%;
//         left: 0;
//         display: none;
//         width: 80%;
//         padding: 2rem;
//         transform: translateY(-50%);
//         color: white;
//         /* text-shadow: 0 3px 8px rgba(0, 0, 0, 0.5); */
//         opacity: 0;
//         background-color: rgba(255, 255, 255, 0.25);
//         border-radius: 20px;
//         backdrop-filter: blur(10px) brightness(75%);
//         h2 {
//             margin: 0;
//             /* font-family: 'arial-black'; */
//             /* text-transform: uppercase; */
//         }

//         p {
//             line-height: 1.7;
//             margin: 1rem 0 1.5rem;
//             font-size: 1rem;
//         }

//         a {
//             width: fit-content;
//             background-color: rgba(0, 0, 0, 0.1);
//             color: white;
//             border: 2px solid white;
//             border-radius: 0.25rem;
//             padding: 0.75rem;
//             cursor: pointer;
//         }
//     }

//     &:nth-child(1),
//     &:nth-child(2) {
//         left: 0;
//         top: 0;
//         width: 100%;
//         height: 100%;
//         transform: none;
//         border-radius: 0;
//         box-shadow: none;
//         opacity: 1;
//     }

//     &:nth-child(3) {
//         left: 50%;
//     }
//     &:nth-child(4) {
//         left: calc(50% + 140px);
//     }
//     &:nth-child(5) {
//         left: calc(50% + 280px);
//     }
//     &:nth-child(6) {
//         left: calc(50% + 420px);
//         opacity: 0;
//     }

//     &:nth-of-type(2) {
//         div {
//             display: block;
//             animation: ${fxShow} 0.75s ease-in-out 0.3s forwards;
//         }
//     }
//     @media ${({ theme }) => theme.device.up768} {
//         width: 200px;
//         height: 300px;
//         div {
//             width: min(50vw, 550px);
//         }
//         &:nth-child(4) {
//             left: calc(50% + 220px);
//         }
//         &:nth-child(5) {
//             left: calc(50% + 440px);
//         }
//         &:nth-child(6) {
//             left: calc(50% + 660px);
//         }
//     }
// `;
