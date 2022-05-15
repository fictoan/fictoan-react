import { css } from "styled-components";
import { defaultColours } from "./DefaultColours";
import { GlobalStyledProps } from "../components/ThemeProvider/ThemeProvider";


export const ColoursStyled = css`
    ${(() => {
        const specialColours = ["white", "black", "transparent"];
        const colours: (keyof typeof defaultColours)[] = ["white", "black", "transparent", "grey", "slate", "red", "orange", "amber", "yellow", "spring", "pistachio", "green", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "pink", "salmon", "crimson", "brick", "sienna", "brown"];
        const prefixes = {
            "bg": (colour: string) => `{ background-color : ${colour} }`,
            "text": (colour: string) => `{ color : ${colour} }`,
            "border": (colour: string) => `{ border : ${(props: GlobalStyledProps) => props.theme.globals.borderWidth} solid ${colour} }`,
            "fill": (colour: string) => `{ fill : ${colour} }`,
            "stroke": (colour: string) => `{ stroke : ${colour} }`
        };
        const rangeValues = ["90", "80", "70", "60", "50", "40", "30", "20", "10"];

        let classes = ``;
        for (const colour of colours) {
            for (const [prefix, generateStyle] of Object.entries(prefixes)) {
                // Base
                const baseClassName = `.${prefix}-${colour}`;
                const baseVariable = colour;
                let colourValue = "";
                if (colour === "transparent") {
                    colourValue = "transparent";
                } else {
                    colourValue = defaultColours[baseVariable];
                }
                if (colourValue) {
                    classes += `${baseClassName} ${generateStyle(colourValue)} `;
                }
                // Range
                if (!specialColours.includes(colour)) {
                    for (const range of rangeValues) {
                        const className = `.${prefix}-${colour}-${range}`;
                        const variable = `${colour}${range}` as keyof typeof defaultColours;
                        if (defaultColours[variable]) {
                            classes += `${className} ${generateStyle(defaultColours[variable])} `;
                        }
                    }
                }
            }
        }
        return classes;
    })()}
`;
