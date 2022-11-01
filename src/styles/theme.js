const COLOR_REF = {
    // whites
    white: "#FFFFFF",
    offWhite: "#FAF9F6",
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
    darkPastelGreen: '#90ba90',
    deepGreen: '#70AC70',
    brightGreen: '#23d5ab',
    // blues
    blue: "#0096FF",
    bluePurple: "#5D3FD3",
    blueSteel: '#4682B4',
    // accents
    pink: "#DA70D6",
    rubyRed: "#E0115F",
    tomato: "#FF6347",
};

const COLOR_APP = {
    text: {
        dark: COLOR_REF.matteBlack,
        light: COLOR_REF.offWhite,
        link: COLOR_REF.blueSteel
    },
    background: {
        dark: COLOR_REF.offBlack,
        light: COLOR_REF.offWhite,
        gray: COLOR_REF.mediumGray,
        green: COLOR_REF.pastelGreen,
        deepGreen: COLOR_REF.deepGreen,
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

const lineClamp = (lines) => {
    return {
        display: '-webkit-box',
        '-webkit-line-clamp': `${lines}`,
        '-webkit-box-orient': 'vertical',
        overflow: 'hidden'
    }
}

export const theme = {
    colors: COLORS,
    fonts: TYPOGRAPHY,
    layout: LAYOUT,
    layers: LAYERS,
    devices: MEDIA_DEVICES,
    device: MEDIA_DEVICES,
    helpers: {
        fontClamp: fontClamp,
        lineClamp: lineClamp
    }
};
