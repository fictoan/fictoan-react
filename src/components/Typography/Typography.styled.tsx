import { css } from "styled-components";

import { GlobalStyledProps } from "../ThemeProvider/ThemeProvider";


export const TypographyStyled = css`
    body {
        font-size        : ${(props: GlobalStyledProps) => props.theme.text.paras.size}em;
        line-height      : ${(props: GlobalStyledProps) => props.theme.text.paras.lineHeight};
        font-family      : ${(props: GlobalStyledProps) => props.theme.text.font.sans};
        word-wrap        : normal;
        text-rendering   : optimizeLegibility;
        background-color : ${(props: GlobalStyledProps) => props.theme.body.bg};
    }

    h1, h2, h3, h4, h5, h6 {
        font-family : ${(props: GlobalStyledProps) => props.theme.text.headings.font};
        font-weight : ${(props: GlobalStyledProps) => props.theme.text.headings.weight};
        color       : ${(props: GlobalStyledProps) => props.theme.text.headings.color};
        line-height : ${(props: GlobalStyledProps) => props.theme.text.headings.lineHeight};
        margin      : 0;
    }

    h1 { font-size : ${(props: GlobalStyledProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 8)}em; }
    h2 { font-size : ${(props: GlobalStyledProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 6)}em; }
    h3 { font-size : ${(props: GlobalStyledProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 4)}em; }
    h4 { font-size : ${(props: GlobalStyledProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 3)}em; }
    h5 { font-size : ${(props: GlobalStyledProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 2)}em; }
    h6 { font-size : ${(props: GlobalStyledProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 1)}em; }

    @media all and (max-width : 720px) {
        h1 { font-size : 32px; }
        h2 { font-size : 28px; }
        h3 { font-size : 24px; }
        h4 { font-size : 20px; }
        h5 { font-size : 18px; }
        h6 { font-size : 16px; }
        p  { font-size : 14px; }

        h1, h2, h3, h4, h5, h6 { word-wrap : break-word; }
    }

    p {
        font-family : ${(props: GlobalStyledProps) => props.theme.text.paras.font};
        color       : ${(props: GlobalStyledProps) => props.theme.text.paras.color};
    }

    a {
        cursor      : pointer;
        color       : ${(props: GlobalStyledProps) => props.theme.text.links.default.color};
        font-weight : bold;
        transition  : all 0.2s;
        width       : fit-content;
    }

    a:not(.ff-button):hover { color : ${(props: GlobalStyledProps) => props.theme.text.links.onHover.color}; }

    a:active { opacity: 0.72; }

    .weight-100 { font-weight : 100; }
    .weight-200 { font-weight : 200; }
    .weight-300 { font-weight : 300; }
    .weight-400 { font-weight : 400; }
    .weight-500 { font-weight : 500; }
    .weight-600 { font-weight : 600; }
    .weight-700 { font-weight : 700; }
    .weight-800 { font-weight : 800; }
    .weight-900 { font-weight : 900; }

    .text-nano   { font-size :  48%; }
    .text-micro  { font-size :  64%; }
    .text-tiny   { font-size :  72%; }
    .text-small  { font-size :  90%; }
    .text-medium { font-size : 100%; }
    .text-large  { font-size : 120%; }
    .text-huge   { font-size : 160%; }

    .font-sans  { font-family : ${(props: GlobalStyledProps) => props.theme.text.font.sans}; }
    .font-serif { font-family : ${(props: GlobalStyledProps) => props.theme.text.font.serif}; }
    .font-mono  { font-family : ${(props: GlobalStyledProps) => props.theme.text.font.mono}; }

    .text-left   { text-align : left; }
    .text-centre,
    .text-center { text-align : center; }
    .text-right  { text-align : right; }

    /*  Colour of highlight and text colour
    - for Firefox browsers  */
    ::-moz-selection {
        background : ${(props: GlobalStyledProps) => props.theme.text.selection.bg};
        color      : ${(props: GlobalStyledProps) => props.theme.text.selection.text};
    }
    //  Same thing - for Webkit browsers
    ::selection {
        background : ${(props: GlobalStyledProps) => props.theme.text.selection.bg};
        color      : ${(props: GlobalStyledProps) => props.theme.text.selection.text};
    }
`;
