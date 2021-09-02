import { defaultColours } from "../styles/DefaultColours";

export const convertToFictoanColor = (colorString: string) => {
    if (!colorString) return null;

    const c: string = colorString.replace("-", "");

    return defaultColours.hasOwnProperty(c) ? defaultColours[c] : null;
};
