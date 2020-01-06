import styled from "styled-components";

import { ButtonProps } from "./constants";

export const ButtonStyled = styled.button `
    position            : relative;
    display             : inline-flex;
    cursor              : pointer;
    padding             : 12px 24px;
    font-family         : $fontSans;
    font-weight         : bold;
    font-size           : 92%;
    text-align          : center;
    justify-content     : center;
    align-self          : flex-start;
    text-decoration     : none;
    line-height         : 1;
    transition          : all 0.2s;
    background-position : center;

    &:active {
        box-shadow : none;
        opacity    : 0.72;
    }

    /*  Button with a multi-colour background  */
    &.bg-gradient {
        background : -webkit-linear-gradient(-45deg, $buttonGradientStartColour 0%, $buttonGradientEndColour 100%);
        background :    -moz-linear-gradient(-45deg, $buttonGradientStartColour 0%, $buttonGradientEndColour 100%);
        background :         linear-gradient(135deg, $buttonGradientStartColour 0%, $buttonGradientEndColour 100%);
    }

    /*  A round button  */
    &.shape-circular {
        width         : 64px;
        height        : 64px;
        padding       : 0;
        border-radius : 50%;
    }

    &.shape-circular img {
        position : absolute;
        margin   : auto;
        left     : 0;
        top      : 0;
        bottom   : 0;
        right    : 0;
    }

    &[class*="border"] { border-width : 1px; }

    &.with-loader {
        color          : transparent !important;
        box-shadow     : none;
        user-select    : none;
        pointer-events : none;
    }

    &.with-loader::after {
        display            : block;
        position           : absolute;
        margin             : auto;
        left               : 0;
        top                : 0;
        bottom             : 0;
        right              : 0;
        height             : 16px;
        width              : 16px;
        border             : 3px solid $spinnerBorder;
        border-radius      : 50%;
        border-top-color   : transparent;
        border-right-color : transparent;
        content            : "";
        -webkit-animation  : spinner 400ms infinite linear;
        animation          : spinner 400ms infinite linear;
    }

    &.size-tiny.with-loader::after,
    &.size-small.with-loader::after {
        display            : block;
        position           : absolute;
        margin             : auto;
        left               : 0;
        top                : 0;
        bottom             : 0;
        right              : 0;
        height             : 8px;
        width              : 8px;
        border             : 2px solid $colorWhite;
        border-radius      : 50%;
        border-top-color   : transparent;
        border-right-color : transparent;
        content            : "";
        -webkit-animation  : spinner 400ms infinite linear;
        animation          : spinner 400ms infinite linear;
    }

    /*  Animation for loader  */
    @-webkit-keyframes spinner {
        from {
            -webkit-transform : rotate(0deg);
        }
        to {
            -webkit-transform : rotate(359deg);
        }
    }

    @keyframes spinner {
        from {
            transform : rotate(0deg);
        }
        to {
            transform : rotate(359deg);
        }
    }

    &[disabled] {
        box-shadow     : none;
        user-select    : none;
        pointer-events : none;
        opacity        : 0.32;
        filter         : grayscale(100%);
    }

    /*  Different sized buttons  */
    &.size-tiny {
        padding   : 4px 8px;
        font-size : $baseFontSize*pow($scaleFactor, -2);
    }

    &.size-small {
        padding   : 8px 16px;
        font-size : $baseFontSize*pow($scaleFactor, -1);
    }

    &.size-large {
        padding   : 16px 32px;
        font-size : $baseFontSize*pow($scaleFactor, 2);
    }

    &.size-huge {
        padding   : 24px 40px;
        font-size : $baseFontSize*pow($scaleFactor, 4);
    }

    &.button-plain { background : transparent; }

    &.with-delete::after {
        display     : inline-flex;
        position    : absolute;
        cursor      : pointer;
        right       : 8px;
        content     : "\00d7";
        font-size   : 20px;
        line-height : 0;
        align-self  : center;
    }

    &.with-delete,
    &.size-tiny.with-delete,
    &.size-small.with-delete { padding-right : 32px !important; }

    &.size-large.with-delete { padding-right : 40px !important; }

    &.size-huge.with-delete { padding-right : 48px !important; }

    &.size-large.with-delete::after,
    &.size-huge.with-delete::after {
        font-size : 24px;
        right     : 16px;
    }

    & + & { margin-right : 8px; }

    & + &:nth-child(2) { margin-left : 8px; }
`