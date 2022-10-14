import { css } from "styled-components";
import { GlobalStyledProps } from "../components/ThemeProvider/ThemeProvider";
import { globalVariables } from "./theme";

export const UtilityStyled = css`
    /* Layout */
    html,
    body {
        display        : flex;
        min-height     : 100vh;
        flex-direction : column;
    }
    
    /* main   { flex : 1 0 auto; } */
    footer { flex-shrink : 0; }
    
    /* Responsive classes  ================================================  */
    /* Desktop   */
    .show-only-on-mobile  { display : none !important; }
    .show-only-on-tablet-portrait  { display : none !important; }
    .show-only-on-tablet-landscape  { display : none !important; }
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
        .hide-on-tablet-portrait       { display : none !important; }
        .show-only-on-tablet-portrait  { display : block !important; }
    
        .center-on-tablet-portrait,
        .centre-on-tablet-portrait { text-align : center !important; }
    }
    
    /* Tablet landscape  */
    @media all and (min-width : 901px) and (max-width : 1200px) {
        .show-only-on-desktop { display : none !important; }
        .hide-on-tablet-landscape       { display : none !important; }
        .show-only-on-tablet-landscape  { display : block !important; }
    
        .center-on-tablet-landscape,
        .centre-on-tablet-landscape { text-align : center !important; }
    }
    
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
        .full-width-on-tablet-portrait { width : 100% !important; }
        .full-height-on-tablet-portrait { height : 100% !important; }
    }
    
    @media all and (min-width : 901px) and (max-width : 1200px) {
        .full-width-on-tablet-landscape { width : 100% !important; }
        .full-height-on-tablet-landscape { height : 100% !important; }
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
    .vertically-centre-items,
    .vertically-center-items { 
        display : flex;
    }
    
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
    .margin-all-nano         { margin : ${globalVariables.measurements.nano}; }
    .margin-all-micro        { margin : ${globalVariables.measurements.micro}; }
    .margin-all-tiny         { margin : ${globalVariables.measurements.tiny}; }
    .margin-all-small        { margin : ${globalVariables.measurements.small}; }
    .margin-all-medium       { margin : ${globalVariables.measurements.medium}; }
    .margin-all-large        { margin : ${globalVariables.measurements.large}; }
    .margin-all-huge         { margin : ${globalVariables.measurements.huge}; }
    
    .margin-top-none         { margin-top : 0 !important; }
    .margin-top-nano         { margin-top : ${globalVariables.measurements.nano}; }
    .margin-top-micro        { margin-top : ${globalVariables.measurements.micro}; }
    .margin-top-tiny         { margin-top : ${globalVariables.measurements.tiny}; }
    .margin-top-small        { margin-top : ${globalVariables.measurements.small}; }
    .margin-top-medium       { margin-top : ${globalVariables.measurements.medium}; }
    .margin-top-large        { margin-top : ${globalVariables.measurements.large}; }
    .margin-top-huge         { margin-top : ${globalVariables.measurements.huge}; }
    
    .margin-right-none       { margin-right : 0 !important; }
    .margin-right-nano       { margin-right : ${globalVariables.measurements.nano}; }
    .margin-right-micro      { margin-right : ${globalVariables.measurements.micro}; }
    .margin-right-tiny       { margin-right : ${globalVariables.measurements.tiny}; }
    .margin-right-small      { margin-right : ${globalVariables.measurements.small}; }
    .margin-right-medium     { margin-right : ${globalVariables.measurements.medium}; }
    .margin-right-large      { margin-right : ${globalVariables.measurements.large}; }
    .margin-right-huge       { margin-right : ${globalVariables.measurements.huge}; }
    
    .margin-bottom-none      { margin-bottom : 0 !important; }
    .margin-bottom-nano      { margin-bottom : ${globalVariables.measurements.nano}; }
    .margin-bottom-micro     { margin-bottom : ${globalVariables.measurements.micro}; }
    .margin-bottom-tiny      { margin-bottom : ${globalVariables.measurements.tiny}; }
    .margin-bottom-small     { margin-bottom : ${globalVariables.measurements.small}; }
    .margin-bottom-medium    { margin-bottom : ${globalVariables.measurements.medium}; }
    .margin-bottom-large     { margin-bottom : ${globalVariables.measurements.large}; }
    .margin-bottom-huge      { margin-bottom : ${globalVariables.measurements.huge}; }
    
    .margin-left-none        { margin-left : 0 !important; }
    .margin-left-nano        { margin-left : ${globalVariables.measurements.nano}; }
    .margin-left-micro       { margin-left : ${globalVariables.measurements.micro}; }
    .margin-left-tiny        { margin-left : ${globalVariables.measurements.tiny}; }
    .margin-left-small       { margin-left : ${globalVariables.measurements.small}; }
    .margin-left-medium      { margin-left : ${globalVariables.measurements.medium}; }
    .margin-left-large       { margin-left : ${globalVariables.measurements.large}; }
    .margin-left-huge        { margin-left : ${globalVariables.measurements.huge}; }
    
    /* Paddings for all occasions */
    .padding-all-none         { padding : 0 !important; }
    .padding-all-nano         { padding : ${globalVariables.measurements.nano}; }
    .padding-all-micro        { padding : ${globalVariables.measurements.micro}; }
    .padding-all-tiny         { padding : ${globalVariables.measurements.tiny}; }
    .padding-all-small        { padding : ${globalVariables.measurements.small}; }
    .padding-all-medium       { padding : ${globalVariables.measurements.medium}; }
    .padding-all-large        { padding : ${globalVariables.measurements.large}; }
    .padding-all-huge         { padding : ${globalVariables.measurements.huge}; }
    
    .padding-top-none         { padding-top : 0 !important; }
    .padding-top-nano         { padding-top : ${globalVariables.measurements.nano}; }
    .padding-top-micro        { padding-top : ${globalVariables.measurements.micro}; }
    .padding-top-tiny         { padding-top : ${globalVariables.measurements.tiny}; }
    .padding-top-small        { padding-top : ${globalVariables.measurements.small}; }
    .padding-top-medium       { padding-top : ${globalVariables.measurements.medium}; }
    .padding-top-large        { padding-top : ${globalVariables.measurements.large}; }
    .padding-top-huge         { padding-top : ${globalVariables.measurements.huge}; }
    
    .padding-right-none       { padding-right : 0 !important; }
    .padding-right-nano       { padding-right : ${globalVariables.measurements.nano}; }
    .padding-right-micro      { padding-right : ${globalVariables.measurements.micro}; }
    .padding-right-tiny       { padding-right : ${globalVariables.measurements.tiny}; }
    .padding-right-small      { padding-right : ${globalVariables.measurements.small}; }
    .padding-right-medium     { padding-right : ${globalVariables.measurements.medium}; }
    .padding-right-large      { padding-right : ${globalVariables.measurements.large}; }
    .padding-right-huge       { padding-right : ${globalVariables.measurements.huge}; }
    
    .padding-bottom-none      { padding-bottom : 0 !important; }
    .padding-bottom-nano      { padding-bottom : ${globalVariables.measurements.nano}; }
    .padding-bottom-micro     { padding-bottom : ${globalVariables.measurements.micro}; }
    .padding-bottom-tiny      { padding-bottom : ${globalVariables.measurements.tiny}; }
    .padding-bottom-small     { padding-bottom : ${globalVariables.measurements.small}; }
    .padding-bottom-medium    { padding-bottom : ${globalVariables.measurements.medium}; }
    .padding-bottom-large     { padding-bottom : ${globalVariables.measurements.large}; }
    .padding-bottom-huge      { padding-bottom : ${globalVariables.measurements.huge}; }
    
    .padding-left-none        { padding-left : 0 !important; }
    .padding-left-nano        { padding-left : ${globalVariables.measurements.nano}; }
    .padding-left-micro       { padding-left : ${globalVariables.measurements.micro}; }
    .padding-left-tiny        { padding-left : ${globalVariables.measurements.tiny}; }
    .padding-left-small       { padding-left : ${globalVariables.measurements.small}; }
    .padding-left-medium      { padding-left : ${globalVariables.measurements.medium}; }
    .padding-left-large       { padding-left : ${globalVariables.measurements.large}; }
    .padding-left-huge        { padding-left : ${globalVariables.measurements.huge}; }
    
    /* For a bit of empty space */
    
    .spacer-tiny {
        display : block;
        width   : 100%;
        height  : 4vmin;
        clear   : both;
    }
    
    .spacer-small {
        display : block;
        width   : 100%;
        height  : 8vmin;
        clear   : both;
    }
    
    .spacer-medium {
        display : block;
        width   : 100%;
        height  : 16vmin;
        clear   : both;
    }
    
    .spacer-large {
        display : block;
        width   : 100%;
        height  : 32vmin;
        clear   : both;
    }

    .spacer-huge {
        display : block;
        width   : 100%;
        height  : 48vmin;
        clear   : both;
    }

    /* For images and tiles */
    .shape-rounded  { border-radius : ${globalVariables.borderRadius}; }
    .shape-curved   { border-radius : 50000px; }
    .shape-circular { border-radius : 50%; }
    
    /* Remove shadows */
    .shadow-none { box-shadow : none !important; }
    
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

