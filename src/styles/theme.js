const COLOR_REF = {
    dark: "#232526",
    light: "#FAF9F6",
    darker: '#0F2027',
    // whites
    white: "#FFFFFF",
    offWhite: "#FAF9F6",
    darkWhite: "#E1E1E1",
    // blacks
    black: "#000000",
    matteBlack: "#28282B",
    onyx: "#353935",
    charcoal: "#36454F",
    offBlack: '#0A0C0E',
    // grays
    gray: "#D3D3D3",
    mediumGray: "#EFEFEF",
    darkGray: '#9A9A9A',
    // greens
    pastelGreen: "#C1E1C1",
    lightPastelGreen: '#D9EED9',
    veryLightPastelGreen: '#EDF7ED',
    darkPastelGreen: '#90ba90',
    deepGreen: '#70AC70',
    brightGreen: '#23d5ab',
    // blues
    blue: "#0096FF",
    bluePurple: "#5D3FD3",
    blueSteel: '#4682B4',
    magicBlue: '#0077c0',
    lightMagicBlue: '#0097F3',
    uraniumBlue: '#AFDBF5',
    // accents
    pink: "#DA70D6",
    rubyRed: "#E0115F",
    tomato: "#FF6347",
    purple: '#9400D3',
};

const COLOR_APP = {
    text: {
        dark: COLOR_REF.charcoal,
        light: COLOR_REF.offWhite,
        link: COLOR_REF.blueSteel
    },
    background: {
        dark: COLOR_REF.dark,
        light: COLOR_REF.light,
        gray: COLOR_REF.mediumGray,
        green: COLOR_REF.pastelGreen,
        deepGreen: COLOR_REF.deepGreen,
    },

    gradients: {
        blues: 'linear-gradient(45deg, rgba(0,119,192,1) 0%, rgba(0,151,243,1) 100%)',
        bluesFlipped: 'linear-gradient(315deg, rgba(0,119,192,1) 0%, rgba(0,151,243,1) 100%)',
        bluesUpDown: 'linear-gradient(180deg, rgba(0,119,192,1) 0%, rgba(0,151,243,1) 100%)',
        greensUpDown: 'linear-gradient(to bottom, #76b852, #8dc26f)',
        darksUpDown: 'linear-gradient(to top, #2C5364, #203A43, #0F2027)',
        graysUpDown: 'linear-gradient(to bottom, #bdc3c7, #2c3e50)',
        darkOverlayUD: 'linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0, 0) 30%)',
        darkOverlayDU: 'linear-gradient(360deg, rgba(11,11,11,1) 0%, rgba(11,11,11, 0) 60%)',
        blueOverlayUD: 'linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 30%)',
        largeHeroContentOverlayMobile: 'linear-gradient(90deg, rgba(0,0,0,0.65) 0%, rgba(0,0,0, 0) 100%)',
        largeHeroContentOverlayTablet: 'linear-gradient(360deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0, 0) 50%)',
    }
};
const COLORS = { ...COLOR_REF, ...COLOR_APP };

const LAYERS = {
    under: -1,
    base: 0,
    content: 10,
    overlay: 100,
    overlayContent: 110,
    modal: 200,
};

const LAYOUT_REF = {
    maxSiteWidth: 1920,
    minSiteWidth: 350,
    maxPageWidth: 2560,
    pagePadding: {
        top: 0,
        right: '6%',
        bottom: 0,
        left: '6%',
        css: '0 6% 0 6%',
    }
};
const LAYOUT_CONTAINERS = {
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
        margin: '0 auto',
    },
    content: {
        width: '100%',
        maxWidth: LAYOUT_REF.maxPageWidth + 'px',
        height: '100%',
        margin: '0 auto',
        padding: LAYOUT_REF.pagePadding.css
    }
    
};

const LAYOUT = { ...LAYOUT_REF, ...LAYOUT_CONTAINERS };

const MEDIA_SIZE_REF = {
    smallest: '390px',
    mobile: '768px',
    tablet: '1024px',
    smallComputer: '1333px',
    mediumComputer: '1600px',
    largeComputer: '1800px',
}

const MEDIA_DEVICES = {
    iphones: `(min-width: ${MEDIA_SIZE_REF.mobile})`,
    ipads: `(min-width: ${MEDIA_SIZE_REF.tablet})`,
    smallMacs: `(min-width: ${MEDIA_SIZE_REF.smallComputer})`,
    mediumMacs: `(min-width: ${MEDIA_SIZE_REF.mediumComputer})`,
    largeMacs: `(min-width: ${MEDIA_SIZE_REF.largeComputer})`,
    largePhones: `(min-width: ${MEDIA_SIZE_REF.mobile})`,
    tablets: `(min-width: ${MEDIA_SIZE_REF.tablet})`,
    smallMonitor: `(min-width: ${MEDIA_SIZE_REF.smallComputer})`,
    mediumMonitor: `(min-width: ${MEDIA_SIZE_REF.mediumComputer})`,
    largeMonitor: `(min-width: ${MEDIA_SIZE_REF.largeComputer})`,
}

const TYPOGRAPHY = {
    bodyFont: 'Lato',
    headerFont: 'Lato',
    bodyFontSize: '18px',
    headerFontSizes: {
        max: '84px',
        min: '20px'
    }
}

const fontClamp = (min, max) => {
    const slope = (max - min) / (LAYOUT_REF.maxPageWidth - LAYOUT_REF.minSiteWidth);
    const yIntersection = -LAYOUT_REF.minSiteWidth * slope + min;

    const output = `clamp(${min}px, ${yIntersection.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${max}px)`;
    
    return output;
};

const fontClampBox = (fontMin, fontMax, boxMin, boxMax) => {
    const slope = (fontMax - fontMin) / (boxMax - boxMin);
    const yIntersection = -boxMin * slope + fontMin;

    const output = `clamp(${fontMin}px, ${yIntersection.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${fontMax}px)`;
    
    return output;
};

const lineClamp = (lines) => {
    return {
        display: '-webkit-box',
        '-webkit-line-clamp': `${lines}`,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
    }
}

const SHADOWS = {
    image: '0.5rem 0.5rem 1rem rgba(35, 37, 38, 0.2)',
}
export const theme = {
    colors: COLORS,
    shadows: SHADOWS,
    fonts: TYPOGRAPHY,
    layout: LAYOUT,
    layers: LAYERS,
    devices: MEDIA_DEVICES,
    device: MEDIA_DEVICES,
    helpers: {
        fontClamp: fontClamp,
        lineClamp: lineClamp,
        fontClampBox: fontClampBox
    }
};
