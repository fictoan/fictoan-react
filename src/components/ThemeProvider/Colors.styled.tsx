import { css } from "styled-components";
import { GlobalStyledProps } from "./ThemeProvider";

export const ColorsStyled = css`

    /* Colours for BG ========================================================== */
    .bg-hue             { background-color : ${(props: GlobalStyledProps) => props.theme.mainColors.hue}; }
    .bg-tint            { background-color : ${(props: GlobalStyledProps) => props.theme.mainColors.tint}; }
    .bg-analogue        { background-color : ${(props: GlobalStyledProps) => props.theme.mainColors.analogue}; }
    .bg-shade           { background-color : ${(props: GlobalStyledProps) => props.theme.mainColors.shade}; }
    .bg-accent          { background-color : ${(props: GlobalStyledProps) => props.theme.mainColors.accent}; }

    /* Colours for text ========================================================== */

    .text-hue             { color : ${(props: GlobalStyledProps) => props.theme.mainColors.hue}; }
    .text-tint            { color : ${(props: GlobalStyledProps) => props.theme.mainColors.tint}; }
    .text-analogue        { color : ${(props: GlobalStyledProps) => props.theme.mainColors.analogue}; }
    .text-shade           { color : ${(props: GlobalStyledProps) => props.theme.mainColors.shade}; }
    .text-accent          { color : ${(props: GlobalStyledProps) => props.theme.mainColors.accent}; }

    //Colours for borders =======================================================

    .border-hue             { border : 2px solid ${(props: GlobalStyledProps) => props.theme.mainColors.hue}; }
    .border-tint            { border : 2px solid ${(props: GlobalStyledProps) => props.theme.mainColors.tint}; }
    .border-analogue        { border : 2px solid ${(props: GlobalStyledProps) => props.theme.mainColors.analogue}; }
    .border-shade           { border : 2px solid ${(props: GlobalStyledProps) => props.theme.mainColors.shade}; }
    .border-accent          { border : 2px solid ${(props: GlobalStyledProps) => props.theme.mainColors.accent}; }

    /* Colours for fill ========================================================== */

    .fill-hue             { fill : ${(props: GlobalStyledProps) => props.theme.mainColors.hue}; }
    .fill-tint            { fill : ${(props: GlobalStyledProps) => props.theme.mainColors.tint}; }
    .fill-analogue        { fill : ${(props: GlobalStyledProps) => props.theme.mainColors.analogue}; }
    .fill-shade           { fill : ${(props: GlobalStyledProps) => props.theme.mainColors.shade}; }
    .fill-accent          { fill : ${(props: GlobalStyledProps) => props.theme.mainColors.accent}; }


    /* Colours for stroke ========================================================== */

    .stroke-hue             { stroke : ${(props: GlobalStyledProps) => props.theme.mainColors.hue}; }
    .stroke-tint            { stroke : ${(props: GlobalStyledProps) => props.theme.mainColors.tint}; }
    .stroke-analogue        { stroke : ${(props: GlobalStyledProps) => props.theme.mainColors.analogue}; }
    .stroke-shade           { stroke : ${(props: GlobalStyledProps) => props.theme.mainColors.shade}; }
    .stroke-accent          { stroke : ${(props: GlobalStyledProps) => props.theme.mainColors.accent}; }
`;
