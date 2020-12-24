import { createGlobalStyle } from "styled-components";

import { ResetStyled } from "./Reset.styled";
import { ColoursStyled } from "./Colours.styled";

export const GlobalStaticStyled = createGlobalStyle`
    ${ ResetStyled }
    ${ ColoursStyled }

    /* Layout */
    html,
    body {
        display        : flex;
        min-height     : 100vh;
        flex-direction : column;
    }

    //main   { flex : 1 0 auto; }
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

    /* Reset for custom element */
    .ff-pill,
    .ff-button { user-select : none; }

    .ff-button:not([class*='border']) { border : none; }


    .show-this    { display : block !important; }
    .show-inline  { display : inline-block !important; }
    .show-nothing { display : none !important; }  /* Element isn't rendered at all  */

    .hide-this { visibility : hidden !important; }  /*  Element is merely invisible  */

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
    .vertically-centre-items { display : flex; }

    .vertically-centre-items > *,
    .vertically-center-items > * {
        align-self : center;
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
        width    : fit-content;
    }

    .push-to-ends { justify-content : space-between; }
    
    .is-clickable { cursor : pointer; }


    /* BOX MODEL HELPERS  ======================================================== */
    /* Margins for all occasions */
    .margin-all-none         { margin : 0 !important; }
    .margin-all-nano         { margin : 8px; }
    .margin-all-micro        { margin : 24px; }
    .margin-all-tiny         { margin : 2vmax; }
    .margin-all-small        { margin : 4vmax; }
    .margin-all-medium       { margin : 8vmax; }
    .margin-all-large        { margin : 16vmax; }
    .margin-all-huge         { margin : 24vmax; }

    .margin-top-none         { margin-top : 0 !important; }
    .margin-top-nano         { margin-top : 8px; }
    .margin-top-micro        { margin-top : 24px; }
    .margin-top-tiny         { margin-top : 2vmax; }
    .margin-top-small        { margin-top : 4vmax; }
    .margin-top-medium       { margin-top : 8vmax; }
    .margin-top-large        { margin-top : 16vmax; }
    .margin-top-huge         { margin-top : 24vmax; }

    .margin-right-none       { margin-right : 0 !important; }
    .margin-right-nano       { margin-right : 8px; }
    .margin-right-micro      { margin-right : 24px; }
    .margin-right-tiny       { margin-right : 2vmax; }
    .margin-right-small      { margin-right : 4vmax; }
    .margin-right-medium     { margin-right : 8vmax; }
    .margin-right-large      { margin-right : 16vmax; }
    .margin-right-huge       { margin-right : 24vmax; }

    .margin-bottom-none      { margin-bottom : 0 !important; }
    .margin-bottom-nano      { margin-bottom : 8px; }
    .margin-bottom-micro     { margin-bottom : 24px; }
    .margin-bottom-tiny      { margin-bottom : 2vmax; }
    .margin-bottom-small     { margin-bottom : 4vmax; }
    .margin-bottom-medium    { margin-bottom : 8vmax; }
    .margin-bottom-large     { margin-bottom : 16vmax; }
    .margin-bottom-huge      { margin-bottom : 24vmax; }

    .margin-left-none        { margin-left : 0 !important; }
    .margin-left-nano        { margin-left : 8px; }
    .margin-left-micro       { margin-left : 24px; }
    .margin-left-tiny        { margin-left : 2vmax; }
    .margin-left-small       { margin-left : 4vmax; }
    .margin-left-medium      { margin-left : 8vmax; }
    .margin-left-large       { margin-left : 16vmax; }
    .margin-left-huge        { margin-left : 24vmax; }

    /* Paddings for all occasions */
    .padding-all-none        { padding : 0 !important; }
    .padding-all-nano        { padding : 8px; }
    .padding-all-micro       { padding : 24px; }
    .padding-all-tiny        { padding : 2vmax; }
    .padding-all-small       { padding : 4vmax; }
    .padding-all-medium      { padding : 8vmax; }
    .padding-all-large       { padding : 16vmax; }
    .padding-all-huge        { padding : 24vmax; }

    .padding-top-none        { padding-top : 0 !important; }
    .padding-top-nano        { padding-top : 8px; }
    .padding-top-micro       { padding-top : 24px; }
    .padding-top-tiny        { padding-top : 2vmax; }
    .padding-top-small       { padding-top : 4vmax; }
    .padding-top-medium      { padding-top : 8vmax; }
    .padding-top-large       { padding-top : 16vmax; }
    .padding-top-huge        { padding-top : 24vmax; }

    .padding-right-none      { padding-right : 0 !important; }
    .padding-right-nano      { padding-right : 8px; }
    .padding-right-micro     { padding-right : 24px; }
    .padding-right-tiny      { padding-right : 2vmax; }
    .padding-right-small     { padding-right : 4vmax; }
    .padding-right-medium    { padding-right : 8vmax; }
    .padding-right-large     { padding-right : 16vmax; }
    .padding-right-huge      { padding-right : 24vmax; }

    .padding-bottom-none     { padding-bottom : 0 !important; }
    .padding-bottom-nano     { padding-bottom : 8px; }
    .padding-bottom-micro    { padding-bottom : 24px; }
    .padding-bottom-tiny     { padding-bottom : 2vmax; }
    .padding-bottom-small    { padding-bottom : 4vmax; }
    .padding-bottom-medium   { padding-bottom : 8vmax; }
    .padding-bottom-large    { padding-bottom : 16vmax; }
    .padding-bottom-huge     { padding-bottom : 24vmax; }

    .padding-left-none       { padding-left : 0 !important; }
    .padding-left-nano       { padding-left : 8px; }
    .padding-left-micro      { padding-left : 24px; }
    .padding-left-tiny       { padding-left : 2vmax; }
    .padding-left-small      { padding-left : 4vmax; }
    .padding-left-medium     { padding-left : 8vmax; }
    .padding-left-large      { padding-left : 16vmax; }
    .padding-left-huge       { padding-left : 24vmax; }

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
    .shape-rounded  { border-radius : 4px; }
    .shape-curved   { border-radius : 50000px; }
    .shape-circular { border-radius : 50%; }

    /* Remove shadows */
    .no-shadow { box-shadow : none !important; }

    .shadow-mild {
        box-shadow :
            0 0.2px 0.2px rgba(0,0,0,0.08),
            0   2px   4px rgba(0,0,0,0.16)
        }

    .shadow-hard {
        box-shadow :
            0 0.2px  0.2px rgba(0, 0, 0, 0.056),
            0 2.0px  2.0px rgba(0, 0, 0, 0.072),
            0 4.8px  3.6px rgba(0, 0, 0, 0.096),
            0 8.0px 16.0px rgba(0, 0, 0, 0.160);
    }

    .shadow-soft {
        box-shadow :
            0   1.6px  0.2px rgba(0, 0, 0, 0.016),
            0   3.2px  0.8px rgba(0, 0, 0, 0.024),
            0   6.4px  2.4px rgba(0, 0, 0, 0.032),
            0  12.0px  4.0px rgba(0, 0, 0, 0.040),
            0  16.0px  8.0px rgba(0, 0, 0, 0.048),
            0  24.0px 16.0px rgba(0, 0, 0, 0.056),
            0  32.0px 24.0px rgba(0, 0, 0, 0.064);
    }


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
    .icon-tiny   { width : 16px; }
    .icon-small  { width : 24px; }
    .icon-medium { width : 32px; }
    .icon-large  { width : 48px; }
    .icon-huge   { width : 64px; }
`;
