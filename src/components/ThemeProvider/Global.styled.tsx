import { createGlobalStyle } from "styled-components";

import { NormalizeStyled } from "./Normalize.styled";
import { ColorsStyled } from "./Colors.styled";

import { GlobalStyledProps } from "./constants";

export const GlobalStyled = createGlobalStyle`
    ${NormalizeStyled}
    ${ColorsStyled}

    /* Layout */
    html,
    body {
        display        : flex;
        min-height     : 100vh;
        flex-direction : column;
    }

    main   { flex : 1 0 auto; }
    footer { flex-shrink : 0; }

    /* Responsive classes  ================================================  */
    /* Desktop   */
    .show-only-on-mobile  { display : none !important; }
    .show-only-on-tab-pt  { display : none !important; }
    .show-only-on-tab-ls  { display : none !important; }
    .show-only-on-desktop { display : block !important; }

    .hide-on-desktop     { display : none !important; }

     /* Mobile  */
    @media all and (max-width : 600px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-mobile       { display : none !important; }
        .show-only-on-mobile  { display : block !important; }

        .center-on-mobile,
        .centre-on-mobile { text-align : center !important; }
    }

     /* Tablet portrait  */
    @media all and (min-width : 601px) and (max-width : 900px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tab-pt       { display : none !important; }
        .show-only-on-tab-pt  { display : block !important; }

        .center-on-tab-pt,
        .centre-on-tab-pt { text-align : center !important; }
    }

     /* Tablet landscape  */
    @media all and (min-width : 901px) and (max-width : 1200px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tab-ls       { display : none !important; }
        .show-only-on-tab-ls  { display : block !important; }

        .center-on-tab-ls,
        .centre-on-tab-ls { text-align : center !important; }
    }

    /*  Responsive classes  ===============================================  */
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

    h1 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 8)}em; }
    h2 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 6)}em; }
    h3 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 4)}em; }
    h4 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 3)}em; }
    h5 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 2)}em; }
    h6 { font-size : ${(props: GlobalStyledProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 1)}em; }

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


    /*  RESET  ============================================================  */
    /*  Consider removing this if you have
    a zillion elements in your page  */
    *,
    *:before,
    *:after { box-sizing : border-box; }

    *:focus { outline : 0; }

    /* This affects all type scale values */
    html { font-size : $baseFontSize; }

    body {
        -moz-osx-font-smoothing : grayscale;
        -webkit-font-smoothing : antialiased;
    }

    /* Basics */
    body, button, input, select, textarea {
        font-family : BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Ubuntu", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    }

    img {
        display : block;
        width   : 100%;
    }

    a { text-decoration : none; }

    button {
        border  : 0;
        outline : 0;
    }

    /* Input fields */
    ::-webkit-input-placeholder { opacity : 0.5; }
    ::-moz-placeholder { opacity : 0.5; }

    input { outline : none; }

    input[type="number"] {
        -webkit-appearance : none;
        -moz-appearance : none;
    }

    input[type="number"]::-webkit-outer-spin-button,
    input[type="number"]::-webkit-inner-spin-button {
        margin             : 0;
        -webkit-appearance : none;
        -moz-appearance    : none;
    }

    /* input:-webkit-autofill { box-shadow : 0 0 0 5000px white inset; } */
    /* input:-webkit-autofill { box-shadow : 0 1px 2px hsla( 0, 100%, 0, .08) inset; } */

    /* :-webkit-autofill, */
    /* :-webkit-autofill:hover, */
    /* :-webkit-autofill:focus { box-shadow : 0 0 0 5000px white inset; } */

    input[type="date"]::-webkit-inner-spin-button { display : none; }

    input[type="date"]::-webkit-calendar-picker-indicator { opacity : 0; }

    progress[value],
    progress::-webkit-progress-value,
    progress[value]::-webkit-progress-bar {
        border             : none;
        -webkit-appearance : none;
        -moz-appearance    : none;
    }

    *:disabled {
        user-select    : none;
        pointer-events : none;
    }

    /* Option select */
    select {
        border-radius      : 0;
        -webkit-appearance : none;
        -moz-appearance : none;
    }


    /* List items */
    ul, li {
        margin     : 0;
        padding    : 0;
        list-style : none;
    }

    /* Details and Summary */
    ::-webkit-details-marker { display : none; }

    details > summary:first-of-type { list-style-type : none; }

    /* Code */
    pre, code {
        margin    : 0;
        max-width : 100%;
    }

    /* Tables */
    table { border-collapse : collapse; }

    th {
        font-weight : unset;
        text-align  : unset;
    }

    /* Reset for custom element */
    .ff-pill,
    .ff-button { user-select : none; }

    .ff-button:not([class*='border']) { border : none; }


    .show-this    { display : block !important; }
    .show-inline  { display : inline-block !important; }
    /* .show-nothing { display : none !important; }   Element isn't rendered at all */

    /* .hide-this { visibility : hidden !important; }   Element is merely invisible */

    .full-width  { width  : 100% !important; }
    .full-height { height : 100% !important; }

    @media all and (max-width : 600px) {
        .full-width-on-mobile { width : 100% !important; }
        .full-height-on-mobile { height : 100% !important; }
    }

    @media all and (min-width : 601px) and (max-width : 900px) {
        .full-width-on-tab-pt { width : 100% !important; }
        .full-height-on-tab-pt { height : 100% !important; }
    }

    @media all and (min-width : 901px) and (max-width : 1200px) {
        .full-width-on-tab-ls { width : 100% !important; }
        .full-height-on-tab-ls { height : 100% !important; }
    }

    .pull-left  { margin-right : auto !important; }
    .pull-right { margin-left : auto !important; }
    .clear-both { clear : both; }

    .no-border { border: none !important; }

      /* For when you want things bang in the centre */
      /* of both axes. Apply to parent. */
    .totally-centre-items,
    .totally-center-items {
        display         : flex !important;
        align-items     : center;
        justify-content : center;
    }

      /* For when you want child elements vertically in  */
      /* the middle. Apply to parent */
    .vertically-centre-items,
    .vertically-center-items {
        display     : flex !important;
        align-items : center !important;
    }

      /* Parent div needs to be a flex element */
    .vertically-centre-this,
    .vertically-center-this {
        align-self : center;
    }

      /* Parent div needs a set width */
    .horizontally-centre-this,
    .horizontally-center-this {
        position : relative;
        display  : block;
        margin   : 0 auto;
    }

    .push-to-ends { justify-content : space-between; }


      /* BOX MODEL HELPERS  ======================================================== */

      /* Margins for all occasions */
    .margin-all-none         { margin : 0 !important; }
    .margin-all-fixed        { margin : $measureFixed; }
    .margin-all-fixed-3x     { margin : $measureFixed*03; }
    .margin-all-tiny         { margin : $measureDynamic*01; }
    .margin-all-small        { margin : $measureDynamic*02; }
    .margin-all-medium       { margin : $measureDynamic*04; }
    .margin-all-large        { margin : $measureDynamic*08; }
    .margin-all-huge         { margin : $measureDynamic*12; }

    .margin-top-none         { margin-top : 0 !important; }
    .margin-top-fixed        { margin-top : $measureFixed; }
    .margin-top-fixed-3x     { margin-top : $measureFixed*03; }
    .margin-top-tiny         { margin-top : $measureDynamic*01; }
    .margin-top-small        { margin-top : $measureDynamic*02; }
    .margin-top-medium       { margin-top : $measureDynamic*04; }
    .margin-top-large        { margin-top : $measureDynamic*08; }
    .margin-top-huge         { margin-top : $measureDynamic*12; }

    .margin-right-none       { margin-right : 0 !important; }
    .margin-right-fixed      { margin-right : $measureFixed; }
    .margin-right-fixed-3x   { margin-right : $measureFixed*03; }
    .margin-right-tiny       { margin-right : $measureDynamic*01; }
    .margin-right-small      { margin-right : $measureDynamic*02; }
    .margin-right-medium     { margin-right : $measureDynamic*04; }
    .margin-right-large      { margin-right : $measureDynamic*08; }
    .margin-right-huge       { margin-right : $measureDynamic*12; }

    .margin-bottom-none      { margin-bottom : 0 !important; }
    .margin-bottom-fixed     { margin-bottom : $measureFixed; }
    .margin-bottom-fixed-3x  { margin-bottom : $measureFixed*03; }
    .margin-bottom-tiny      { margin-bottom : $measureDynamic*01; }
    .margin-bottom-small     { margin-bottom : $measureDynamic*02; }
    .margin-bottom-medium    { margin-bottom : $measureDynamic*04; }
    .margin-bottom-large     { margin-bottom : $measureDynamic*08; }
    .margin-bottom-huge      { margin-bottom : $measureDynamic*12; }

    .margin-left-none        { margin-left : 0 !important; }
    .margin-left-fixed       { margin-left : $measureFixed; }
    .margin-left-fixed-3x    { margin-left : $measureFixed*03; }
    .margin-left-tiny        { margin-left : $measureDynamic*01; }
    .margin-left-small       { margin-left : $measureDynamic*02; }
    .margin-left-medium      { margin-left : $measureDynamic*04; }
    .margin-left-large       { margin-left : $measureDynamic*08; }
    .margin-left-huge        { margin-left : $measureDynamic*12; }

      /* Paddings for all occasions */
    .padding-all-none        { padding : 0 !important; }
    .padding-all-fixed       { padding : $measureFixed; }
    .padding-all-fixed-3x    { padding : $measureFixed*03; }
    .padding-all-tiny        { padding : $measureDynamic*01; }
    .padding-all-small       { padding : $measureDynamic*02; }
    .padding-all-medium      { padding : $measureDynamic*04; }
    .padding-all-large       { padding : $measureDynamic*08; }
    .padding-all-huge        { padding : $measureDynamic*12; }

    .padding-top-none        { padding-top : 0 !important; }
    .padding-top-fixed       { padding-top : $measureFixed; }
    .padding-top-fixed-3x    { padding-top : $measureFixed*03; }
    .padding-top-tiny        { padding-top : $measureDynamic*01; }
    .padding-top-small       { padding-top : $measureDynamic*02; }
    .padding-top-medium      { padding-top : $measureDynamic*04; }
    .padding-top-large       { padding-top : $measureDynamic*08; }
    .padding-top-huge        { padding-top : $measureDynamic*12; }

    .padding-right-none      { padding-right : 0 !important; }
    .padding-right-fixed     { padding-right : $measureFixed; }
    .padding-right-fixed-3x  { padding-right : $measureFixed*03; }
    .padding-right-tiny      { padding-right : $measureDynamic*01; }
    .padding-right-small     { padding-right : $measureDynamic*02; }
    .padding-right-medium    { padding-right : $measureDynamic*04; }
    .padding-right-large     { padding-right : $measureDynamic*08; }
    .padding-right-huge      { padding-right : $measureDynamic*12; }

    .padding-bottom-none     { padding-bottom : 0 !important; }
    .padding-bottom-fixed    { padding-bottom : $measureFixed; }
    .padding-bottom-fixed-3x { padding-bottom : $measureFixed*03; }
    .padding-bottom-tiny     { padding-bottom : $measureDynamic*01; }
    .padding-bottom-small    { padding-bottom : $measureDynamic*02; }
    .padding-bottom-medium   { padding-bottom : $measureDynamic*04; }
    .padding-bottom-large    { padding-bottom : $measureDynamic*08; }
    .padding-bottom-huge     { padding-bottom : $measureDynamic*12; }

    .padding-left-none       { padding-left : 0 !important; }
    .padding-left-fixed      { padding-left : $measureFixed; }
    .padding-left-fixed-3x   { padding-left : $measureFixed*03; }
    .padding-left-tiny       { padding-left : $measureDynamic*01; }
    .padding-left-small      { padding-left : $measureDynamic*02; }
    .padding-left-medium     { padding-left : $measureDynamic*04; }
    .padding-left-large      { padding-left : $measureDynamic*08; }
    .padding-left-huge       { padding-left : $measureDynamic*12; }

      /* For a bit of empty space */
    .spacer-huge {
        display : block;
        width   : 100%;
        height  : 48vmin;
        clear   : both;
    }

    .spacer-large {
        display : block;
        width   : 100%;
        height  : 32vmin;
        clear   : both;
    }

    .spacer-medium {
        display : block;
        width   : 100%;
        height  : 16vmin;
        clear   : both;
    }

    .spacer-small {
        display : block;
        width   : 100%;
        height  : 8vmin;
        clear   : both;
    }

    .spacer-tiny {
        display : block;
        width   : 100%;
        height  : 4vmin;
        clear   : both;
    }

      /* For images and tiles */
    .shape-rounded  { border-radius : $measureFixed; }
    .shape-curved   { border-radius : $measureFixed*5000; }
    .shape-circular { border-radius : 50%; }

      /* Shadows for any element */
    .shadow-hard { box-shadow : 0 $measureFixed/2 $measureFixed   -2px hsla(0, 0, 0, 0.24); }
    .shadow-soft { box-shadow : 0 $measureFixed*2 $measureFixed*4 -8px hsla(0, 0, 0, 0.32); }
    .shadow-mild { box-shadow : 0 $measureFixed/4 $measureFixed/4 -2px hsla(0, 0, 0, 0.24); }
    .no-shadow   { box-shadow : none !important; }


    /* == OPACITY ============================================================== */
    .opacity-00  { opacity: 0.00; }
    .opacity-10  { opacity: 0.10; }
    .opacity-20  { opacity: 0.20; }
    .opacity-30  { opacity: 0.30; }
    .opacity-40  { opacity: 0.40; }
    .opacity-50  { opacity: 0.50; }
    .opacity-60  { opacity: 0.60; }
    .opacity-70  { opacity: 0.70; }
    .opacity-80  { opacity: 0.80; }
    .opacity-90  { opacity: 0.90; }
    .opacity-100 { opacity: 1.00; }


    /* == ICONS ================================================================ */
    .icon-tiny   { width : $measureFixed*2; }
    .icon-small  { width : $measureFixed*3; }
    .icon-medium { width : $measureFixed*4; }
    .icon-large  { width : $measureFixed*6; }
    .icon-huge   { width : $measureFixed*8; }
`
