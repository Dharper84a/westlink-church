import fontClamp from "./helpers/fontClamp"

const colors = {
    darkText: '#232B2B',
    lightText: 'hsl(45, 29%, 97%)',
    white: "#FFFFFF",
    black: "#000000",
    gray: "#ABABAB",
    darkGray: '#222120',
    lightPink: '#E6DADA',
    aquaGray: '#274046',
    offWhite: 'hsl(45, 29%, 97%)',
    aqua: '#49B5B5',
    blue: 'hsl(203, 100%, 35%)',
    darkBlue: 'hsl(203, 100%, 20%)',
}

const gradients = {
    lightPinkToAquaGray: 'linear-gradient(to top, #274046, #E6DADA);',
    glassWater: 'linear-gradient(to top, #dfe9f3 0%, white 100%);',
    blue: 'linear-gradient(90deg, hsl(203, 100%, 18%), hsl(203, 100%, 35%));',
    imageOverlay: 'linear-gradient(180deg, hsla(0, 0%, 0%, 0), hsla(0, 0%, 0%, 0.75));'
}

const shadows = {
    standard: '0.5rem 0.5rem 1rem rgba(35, 37, 38, 0.2)',
}

const styleOptions = {
    'default': {
        color: colors.darkText,
        background: colors.white,
    },
    'solid_color': {
        color: colors.lightText,
        background: colors.blue,
    },
    'color_gradient': {
        color: colors.lightText,
        background: gradients.blue,
    },
    'fluid_color_gradient': {
        color: colors.lightText,
        background: colors.darkBlue,
    }
}
const devices = {
    up450: 'only screen and (min-width: 450px)',
    up768: 'only screen and (min-width: 768px)',
    up1024: 'only screen and (min-width: 1024px)',
    up1366: 'only screen and (min-width: 1366px)',
    up1600: 'only screen and (min-width: 1600px)',
    up1920: 'only screen and (min-width: 1920px)',
    up2560: 'only screen and (min-width: 2560px)',
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
    styleOptions,
    fontClamp
}