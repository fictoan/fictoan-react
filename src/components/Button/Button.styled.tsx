import styled from "styled-components";

import { ButtonProps } from "./constants";

export const ButtonStyled = styled.button`
    position            : relative;
    display             : inline-flex;
    cursor              : pointer;
    padding             : 12px 24px;
    font-family         : ${(props: ButtonProps) => props.theme.text.font.sans};
    background-color    : ${(props: ButtonProps) => props.theme.button.primary.default.bg};
    color               : ${(props: ButtonProps) => props.theme.button.primary.default.text};
    border              : 1px solid ${(props: ButtonProps) => props.theme.button.primary.default.border};
    font-weight         : bold;
    font-size           : 92%;
    text-align          : center;
    justify-content     : center;
    align-self          : flex-start;
    text-decoration     : none;
    line-height         : 1;
    transition          : all 0.2s;
    background-position : center;
    user-select         : none;

    &.primary:hover {
        background-color : ${(props: ButtonProps) => props.theme.button.primary.onHover.bg};
        color            : ${(props: ButtonProps) => props.theme.button.primary.onHover.text};
        border           : 1px solid  ${(props: ButtonProps) => props.theme.button.primary.onHover.border};
    }

    &.primary:active {
        box-shadow       : none;
        opacity          : 0.72;
        background-color : ${(props: ButtonProps) => props.theme.button.primary.isActive.bg};
        color            : ${(props: ButtonProps) => props.theme.button.primary.isActive.text};
        border           : 1px solid ${(props: ButtonProps) => props.theme.button.primary.isActive.border};
    }

    &.secondary {
        background-color : ${(props: ButtonProps) => props.theme.button.secondary.default.bg};
        color            : ${(props: ButtonProps) => props.theme.button.secondary.default.text};
        border           : 1px solid ${(props: ButtonProps) => props.theme.button.secondary.default.border};
    }

    &.secondary:hover {
        background-color : ${(props: ButtonProps) => props.theme.button.secondary.onHover.bg};
        color            : ${(props: ButtonProps) => props.theme.button.secondary.onHover.text};
        border           : 1px solid ${(props: ButtonProps) => props.theme.button.secondary.onHover.border}
    }

    &.secondary:active {
        background-color : ${(props: ButtonProps) => props.theme.button.secondary.isActive.bg};
        color            : ${(props: ButtonProps) => props.theme.button.secondary.isActive.text};
        border           : 1px solid ${(props: ButtonProps) => props.theme.button.secondary.isActive.border}
    }

    &:active {
        box-shadow : none;
        opacity    : 0.72;
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
    &.border-none      { border-width : 0 !important; }

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
        border-radius      : 50%;
        border-top-color   : transparent;
        border-right-color : transparent;
        content            : "";
        -webkit-animation  : spinner 400ms infinite linear;
        animation          : spinner 400ms infinite linear;
    }

    &.primary.with-loader::after {
        background-color   : ${(props: ButtonProps) => props.theme.button.primary.isLoading.bg};
        border             : 3px solid ${(props: ButtonProps) => props.theme.button.primary.isLoading.spinnerBorder};
        border-top-color   : transparent;
        border-right-color : transparent;
    }

    &.secondary.with-loader::after {
        background-color   : ${(props: ButtonProps) => props.theme.button.secondary.isLoading.bg};
        border             : 3px solid ${(props: ButtonProps) => props.theme.button.secondary.isLoading.spinnerBorder};
        border-top-color   : transparent;
        border-right-color : transparent;
    }

    &.size-tiny.with-loader::after,
    &.size-small.with-loader::after {
        height             : 8px;
        width              : 8px;
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
        font-size : ${(props: ButtonProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, -2)}em;
    }

    &.size-small {
        padding   : 8px 16px;
        font-size : ${(props: ButtonProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, -1)}em;
    }

    &.size-large {
        padding   : 16px 32px;
        font-size : ${(props: ButtonProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 2)}em;
    }

    &.size-huge {
        padding   : 24px 40px;
        font-size : ${(props: ButtonProps) => props.theme.text.size.default * Math.pow(props.theme.text.size.multiplier, 4)}em;
    }

    &.button-plain { background : transparent; }

    &.with-delete::after {
        display     : inline-flex;
        position    : absolute;
        cursor      : pointer;
        right       : 8px;
        content     : "\\00d7";
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
