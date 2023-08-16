export const fontClamp = (min, max) => {
    const slope = (max - min) / (1920 - 350);
    const yIntersection = -350 * slope + min;

    const output = `clamp(${min}px, ${yIntersection.toFixed(2)}px + ${(slope * 100).toFixed(2)}vw, ${max}px)`;
    
    return output;
};

export default fontClamp;