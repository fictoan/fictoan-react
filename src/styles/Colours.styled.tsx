import { css } from "styled-components";
import { defaultColours } from "./DefaultColours";


export const ColoursStyled = css`
    ${(() : any => {
        const specialColours = ["white", "black", "transparent"];
        const colours = ["white", "black", "transparent", "grey", "slate", "red", "orange", "amber", "yellow", "spring", "pistachio", "green", "teal", "cyan", "sky", "blue", "indigo", "voilet", "purple", "pink", "salmon", "crimson", "brick", "sienna", "brown"];
        const prefixes = {
            "bg": (colour : string) => `{ background-color : ${colour} }`,
            "text": (colour : string) => `{ color : ${colour} }`,
            "border": (colour : string) => `{ border : 2px solid ${colour} }`,
            "fill": (colour : string) => `{ fill : ${colour} }`,
            "stroke": (colour : string) => `{ stroke : ${colour} }`,
        }
        const rangeValues = ["90", "80", "70", "60", "50", "40", "30", "20", "10"];
        
        let classes = ``;
        for(const colour of colours) {
            for(const [prefix, generateStyle] of Object.entries(prefixes)) {
                // Base
                const baseClassName = `.${prefix}-${colour}`;
                const baseVariable = `${colour}`
                let colourValue = "";
                if(colour === "transparent") {
                    colourValue = "transparent";
                } else {
                    colourValue = defaultColours[baseVariable];
                }
                if(colourValue) {
                    classes += `${baseClassName} ${generateStyle(colourValue)} `;
                }
                // Range
                if(!specialColours.includes(colour)) {
                    for(const range of rangeValues) {
                        const className = `.${prefix}-${colour}-${range}`;
                        const variable = `${colour}${range}`;
                        if(defaultColours[variable]) {
                            classes += `${className} ${generateStyle(defaultColours[variable])} `;
                        }
                    }
                }
            }
        }
        return classes;
    })()}
`;
