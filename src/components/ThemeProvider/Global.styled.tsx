import { createGlobalStyle } from "styled-components";

import { GlobalStyledProps } from "./constants";

export const GlobalStyled = createGlobalStyle`
    body {
        font-family      : ${(props: GlobalStyledProps) => props.theme};
        font-size        : ${(props: GlobalStyledProps) => props.theme.body};
        line-height      : ${(props: GlobalStyledProps) => props.theme.text.paras.lineHeight};
        color            : ${(props: GlobalStyledProps) => props.theme.text.paras.color};
        word-wrap        : normal;
        text-rendering   : optimizeLegibility;
        background-color : ${(props: GlobalStyledProps) => props.theme.body.bg};
    }

    h1, h2, h3, h4, h5, h6 {
        font-weight : ${(props: GlobalStyledProps) => props.theme.text.headings.weight};
        margin      : 0;
    }

    h1 { line-height : 12; }
    h2, h3, h4, h5, h6 { line-height : ${(props: GlobalStyledProps) => props.theme.text.headings.lineHeight}; }

    h1 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 8) }; }
    h2 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 6) }; }
    h3 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 4) }; }
    h4 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 3) }; }
    h5 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 2) }; }
    h6 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 1) }; }

    @media all and (max-width : 720px) {
        h1 { font-size : 40px; }
        h2 { font-size : 46px; }
        h3 { font-size : 32px; }
        h4 { font-size : 28px; }
        h5 { font-size : 24px; }
        h6 { font-size : 20px; }
        p  { font-size : 14px; }

        h1, h2, h3, h4, h5, h6 { word-wrap : break-word; }
    }

    a {
        cursor      : pointer;
        color       : ${(props: GlobalStyledProps) => props.theme.text.links.default};
        font-weight : bold;
        transition  : all 0.2s;
    }

    a:not(.ff-button):not(.ff-pill):not(.header-links a):hover { color : ${(props: GlobalStyledProps) => props.theme.text.links.onHover}; }

    a:active { opacity: 0.72; }
`
