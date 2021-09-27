import { ColourPropTypes } from "../components/Element/constants";
import { defaultColours } from "../styles/DefaultColours";

export const convertToFictoanColor = (colorString: ColourPropTypes) => {
    if (!colorString) return null;

    const c: keyof typeof defaultColours = colorString.replace("-", "") as keyof typeof defaultColours;
    return defaultColours.hasOwnProperty(c) ? defaultColours[c] : null;
};
