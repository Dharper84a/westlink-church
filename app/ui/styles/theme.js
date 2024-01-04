import fontClamp from "./helpers/fontClamp"

const colors = {
    darkText: '#232B2B',
    white: "#FFFFFF",
    black: "#000000",
    gray: "#ABABAB",
    darkGray: '#222120',
    lightPink: '#E6DADA',
    aquaGray: '#274046',
    offWhite: '#dfe9f3',
    aqua: '#49B5B5',
    blue: 'hsl(203, 100%, 35%)',
    darkBlue: 'hsl(203, 100%, 20%)',
}

const gradients = {
    lightPinkToAquaGray: 'linear-gradient(to top, #274046, #E6DADA);',
    glassWater: 'linear-gradient(to top, #dfe9f3 0%, white 100%);'

}

const shadows = {
    standard: '0.5rem 0.5rem 1rem rgba(35, 37, 38, 0.2)',
}
const devices = {
    up450: 'only screen and (min-width: 450px)',
    up768: 'only screen and (min-width: 768px)',
    up1024: 'only screen and (min-width: 1024px)',
    up1366: 'only screen and (min-width: 1366px)',
    up1600: 'only screen and (min-width: 1600px)',
    up1920: 'only screen and (min-width: 1920px)',
}

const layout = {
    screenEdge: '6%',
    container: {
        large: {
            width: '90%',
            maxWidth: '2560px',
            margin: '0 auto'
        },
        normal: {
            width: '85%',
            maxWidth: '2560px',
            margin: '0 auto'
        },
        small: {
            width: '75%',
            maxWidth: '2560px',
            margin: '0 auto'
        }
    }
}

const layers = {
    base: 1,
    content: 100,
    overlay: 200,
}

export const theme = {
    color: colors,
    gradient: gradients,
    shadow: shadows,
    device: devices,
    layout,
    layer: layers,
    fontClamp
}