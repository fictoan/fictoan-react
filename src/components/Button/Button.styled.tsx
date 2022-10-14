import { convertToFictoanColor } from "../../utils/helpers";
import styled from "styled-components";

import { ButtonProps } from "./Button";
import { ColourPropTypes } from "../Element/constants";
import { globalVariables } from "../../styles/theme";

export const ButtonStyled = styled.button`
    position            : relative;
    cursor              : pointer;
    font-family         : ${(props : ButtonProps) => props.theme.button.font};
    font-weight         : bold;
    font-size           : 92%;
    text-align          : center;
    text-decoration     : none;
    line-height         : 1;
    transition          : all 0.2s ease-in-out;
    background-position : center;
    user-select         : none;

    &:not([class*="padding-"]) {
        padding : 12px 24px;
    }

    // To make sure a button’s children don’t style themselves like a douchebag
    > * { all : unset; }

    &:active {
        box-shadow : none;
        opacity    : 0.72;
    }

    &.is-loading::after {
        border             : 3px solid;
        border-top-color   : transparent;
        border-right-color : transparent;
    }

    //  Common disabled styles  -----------------------------------------------
    &[disabled] {
        box-shadow     : none;
        user-select    : none;
        pointer-events : none;
        opacity        : 0.32;
        filter         : grayscale(100%);
        cursor         : not-allowed;
    }

    //  PRIMARY BUTTON  ///////////////////////////////////////////////////////
    &.primary {
        background-color : ${(props : ButtonProps) => props.theme.button.primary.default.bg};
        color            : ${(props : ButtonProps) => props.theme.button.primary.default.text};
        border           : solid ${(props : ButtonProps) => props.theme.button.primary.default.border};
        border-width     : ${globalVariables.borderWidth};
        border-radius    : ${(props : ButtonProps) => props.theme.button.primary.default.borderRadius};

        :hover {
            background-color : ${(props : ButtonProps) => props.theme.button.primary.onHover.bg};
            color            : ${(props : ButtonProps) => props.theme.button.primary.onHover.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.primary.onHover.border};
            border-width     : ${globalVariables.borderWidth};
        }

        :active {
            background-color : ${(props : ButtonProps) => props.theme.button.primary.isActive.bg};
            color            : ${(props : ButtonProps) => props.theme.button.primary.isActive.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.primary.isActive.border};
            border-width     : ${globalVariables.borderWidth};
        }

        &.is-loading::after {
            border             : 3px solid ${(props : ButtonProps) => props.theme.button.primary.isLoading.spinnerBorder};
            border-top-color   : transparent;
            border-right-color : transparent;
        }

        //  DISABLED PRIMARY --------------------------------------------------
        &[disabled] {
            background-color : ${(props : ButtonProps) => props.theme.button.primary.isDisabled.bg};
            color            : ${(props : ButtonProps) => props.theme.button.primary.isDisabled.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.primary.isDisabled.border};
            border-width     : ${globalVariables.borderWidth};
        }
    }

    //  SECONDARY BUTTON  /////////////////////////////////////////////////////
    &.secondary {
        background-color : ${(props : ButtonProps) => props.theme.button.secondary.default.bg};
        color            : ${(props : ButtonProps) => props.theme.button.secondary.default.text};
        border           : solid ${(props : ButtonProps) => props.theme.button.secondary.default.border};
        border-radius    : ${(props : ButtonProps) => props.theme.button.secondary.default.borderRadius};
        border-width     : ${globalVariables.borderWidth};

        :hover {
            background-color : ${(props : ButtonProps) => props.theme.button.secondary.onHover.bg};
            color            : ${(props : ButtonProps) => props.theme.button.secondary.onHover.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.secondary.onHover.border};
            border-width     : ${globalVariables.borderWidth};
        }

        :active {
            background-color : ${(props : ButtonProps) => props.theme.button.secondary.isActive.bg};
            color            : ${(props : ButtonProps) => props.theme.button.secondary.isActive.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.secondary.isActive.border};
            border-width     : ${globalVariables.borderWidth};
        }

        &.is-loading::after {
            border             : 3px solid ${(props : ButtonProps) => props.theme.button.secondary.isLoading.spinnerBorder};
            border-top-color   : transparent;
            border-right-color : transparent;
        }

        //  DISABLED SECONDARY ------------------------------------------------
        &[disabled] {
            background-color : ${(props : ButtonProps) => props.theme.button.secondary.isDisabled.bg};
            color            : ${(props : ButtonProps) => props.theme.button.secondary.isDisabled.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.secondary.isDisabled.border};
            border-width     : ${globalVariables.borderWidth};
        }
    }

    //  TERTIARY BUTTON  //////////////////////////////////////////////////////
    &.tertiary {
        background-color : ${(props : ButtonProps) => props.theme.button.tertiary.default.bg};
        color            : ${(props : ButtonProps) => props.theme.button.tertiary.default.text};
        border           : solid ${(props : ButtonProps) => props.theme.button.tertiary.default.border};
        border-radius    : ${(props : ButtonProps) => props.theme.button.tertiary.default.borderRadius};
        border-width     : ${globalVariables.borderWidth};

        :hover {
            background-color : ${(props : ButtonProps) => props.theme.button.tertiary.onHover.bg};
            color            : ${(props : ButtonProps) => props.theme.button.tertiary.onHover.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.tertiary.onHover.border};
            border-width     : ${globalVariables.borderWidth};
        }

        :active {
            background-color : ${(props : ButtonProps) => props.theme.button.tertiary.isActive.bg};
            color            : ${(props : ButtonProps) => props.theme.button.tertiary.isActive.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.tertiary.isActive.border};
            border-width     : ${globalVariables.borderWidth};
        }

        &.is-loading::after {
            border             : 3px solid ${(props : ButtonProps) => props.theme.button.tertiary.isLoading.spinnerBorder};
            border-top-color   : transparent;
            border-right-color : transparent;
        }

        //  DISABLED TERTIARY -------------------------------------------------
        &[disabled] {
            background-color : ${(props : ButtonProps) => props.theme.button.tertiary.isDisabled.bg};
            color            : ${(props : ButtonProps) => props.theme.button.tertiary.isDisabled.text};
            border           : solid ${(props : ButtonProps) => props.theme.button.tertiary.isDisabled.border};
            border-width     : ${globalVariables.borderWidth};
        }
    }

    //  ROUND BUTTON  /////////////////////////////////////////////////////////
    &.shape-circular {
        width         : 64px;
        height        : 64px;
        padding       : 0 !important;
        border-radius : 50%;
    }

    &.shape-circular.size-tiny {
        width     : 16px;
        height    : 16px;
        padding   : 0;
        font-size : 8px;
    }

    &.shape-circular.size-small {
        width     : 32px;
        height    : 32px;
        padding   : 0;
        font-size : 12px;
    }

    &.shape-circular.size-medium {
        font-size : 16px;
    }

    &.shape-circular.size-large {
        width     : 80px;
        height    : 80px;
        padding   : 0;
        font-size : 24px;
    }

    &.shape-circular.size-huge {
        width     : 128px;
        height    : 128px;
        padding   : 0;
        font-size : 32px;
    }

    &.shape-circular img {
        position : absolute;
        margin   : auto;
        left     : 0;
        top      : 0;
        bottom   : 0;
        right    : 0;
    }

    &[class*="border-"] {
        border-width : ${globalVariables.borderWidth};
    }

    &.border-none { border-width : 0 !important; }

    //  DIFFERENT SIZES  //////////////////////////////////////////////////////
    &.size-tiny {
        padding   : 4px 8px;
        font-size : ${(props : ButtonProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, -2)}em;
    }

    &.size-small {
        padding   : 6px 12px;
        font-size : ${(props : ButtonProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, -1)}em;
    }

    &.size-large {
        padding   : 16px 32px;
        font-size : ${(props : ButtonProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 2)}em;
    }

    &.size-huge {
        padding   : 24px 40px;
        font-size : ${(props : ButtonProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 4)}em;
    }

    //  BUTTON WITH SPINNER  //////////////////////////////////////////////////
    &.is-loading {
        color          : transparent !important;
        box-shadow     : none;
        user-select    : none;
        pointer-events : none;
    }

    &.is-loading::after {
        display            : block;
        position           : absolute;
        margin             : auto;
        left               : 0;
        top                : 0;
        bottom             : 0;
        right              : 0;
        height             : 16px;
        width              : 16px;
        border-radius      : 50%;
        content            : "";
        border             : 3px solid;
        border-color       : ${(props : ButtonProps) => convertToFictoanColor((props.textColor ?? props.textColour) as ColourPropTypes)};
        border-top-color   : transparent;
        border-right-color : transparent;
        -webkit-animation  : spinner 0.4s infinite linear;
        animation          : spinner 0.4s infinite linear;
    }

    &.size-tiny.is-loading::after,
    &.size-small.is-loading::after {
        height : 8px;
        width  : 8px;
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

    //  BUTTON WITH DELETE  ///////////////////////////////////////////////////
    &.has-delete {
        display : inline-flex;
    }

    &.has-delete::after {
        display     : inline-flex;
        position    : absolute;
        cursor      : pointer;
        right       : 8px;
        content     : "\\00d7";
        font-size   : 17px;
        line-height : 1;
        align-self  : center;
    }

    &.has-delete,
    &.size-tiny.has-delete,
    &.size-small.has-delete {
        padding-right : 32px !important;
    }

    &.size-large.has-delete {
        padding-right : 40px !important;
    }

    &.size-huge.has-delete {
        padding-right : 48px !important;
    }

    &.size-large.has-delete::after,
    &.size-huge.has-delete::after {
        font-size : 25px;
        right     : 16px;
    }
`;
