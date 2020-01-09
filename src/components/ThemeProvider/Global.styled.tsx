import { createGlobalStyle } from "styled-components";

import { normalize } from "styled-normalize";

import { GlobalStyledProps } from "./constants";

export const GlobalStyled = createGlobalStyle`
    ${normalize}

    // Layout
    html,
    body {
        display        : flex;
        min-height     : 100vh;
        flex-direction : column;
    }

    main   { flex : 1 0 auto; }
    footer { flex-shrink : 0; }

    // Responsive Classes
    //  Desktop  ==================================================================
    .show-only-on-mobile  { display : none !important; }
    .show-only-on-tab-pt  { display : none !important; }
    .show-only-on-tab-ls  { display : none !important; }
    .show-only-on-desktop { display : block !important; }

    .hide-on-desktop     { display : none !important; }


    //  Mobile  ===================================================================
    @media all and (max-width : 600px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-mobile       { display : none !important; }
        .show-only-on-mobile  { display : block !important; }

        .center-on-mobile,
        .centre-on-mobile { text-align : center !important; }
    }


    //  Tablet portrait  ==========================================================
    @media all and (min-width : 601px) and (max-width : 900px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tab-pt       { display : none !important; }
        .show-only-on-tab-pt  { display : block !important; }

        .center-on-tab-pt,
        .centre-on-tab-pt { text-align : center !important; }
    }


    //  Tablet landscape  =========================================================
    @media all and (min-width : 901px) and (max-width : 1200px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tab-ls       { display : none !important; }
        .show-only-on-tab-ls  { display : block !important; }

        .center-on-tab-ls,
        .centre-on-tab-ls { text-align : center !important; }
    }


    body {
        font-family      : ${(props: GlobalStyledProps) => props.theme};
        font-size        : ${(props: GlobalStyledProps) => props.theme.body}em;
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

    h1, h2, h3, h4, h5, h6 { line-height : ${(props: GlobalStyledProps) => props.theme.text.headings.lineHeight}; }

    h1 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 8) }em; }
    h2 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 6) }em; }
    h3 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 4) }em; }
    h4 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 3) }em; }
    h5 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 2) }em; }
    h6 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 1) }em; }

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
