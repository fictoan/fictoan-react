import styled from "styled-components";

import { ButtonProps } from "./Button";

export const ButtonStyled = styled.button`
    position            : relative;
    cursor              : pointer;
    font-family         : ${(props: ButtonProps) => props.theme.button.font};
    font-weight         : bold;
    font-size           : 92%;
    text-align          : center;
    text-decoration     : none;
    line-height         : 1;
    transition          : all 0.2s;
    background-position : center;
    user-select         : none;

    > * {
      all : unset;
    }

    &.primary {
        background-color : ${(props: ButtonProps) => props.theme.button.primary.default.bg};
        color            : ${(props: ButtonProps) => props.theme.button.primary.default.text};
        border           : 1px solid ${(props: ButtonProps) => props.theme.button.primary.default.border};
        border-radius    : ${(props: ButtonProps) => props.theme.button.primary.default.borderRadius};

        :hover {
            background-color : ${(props: ButtonProps) => props.theme.button.primary.onHover.bg};
            color            : ${(props: ButtonProps) => props.theme.button.primary.onHover.text};
            border           : 1px solid  ${(props: ButtonProps) => props.theme.button.primary.onHover.border};
        }

        :active {
            background-color : ${(props: ButtonProps) => props.theme.button.primary.isActive.bg};
            color            : ${(props: ButtonProps) => props.theme.button.primary.isActive.text};
            border           : 1px solid ${(props: ButtonProps) => props.theme.button.primary.isActive.border};
        }

        &.with-loader::after {
            border             : 3px solid ${(props: ButtonProps) => props.theme.button.primary.isLoading.spinnerBorder};
            border-top-color   : transparent;
            border-right-color : transparent;
        }
    }

    &.secondary {
        background-color : ${(props: ButtonProps) => props.theme.button.secondary.default.bg};
        color            : ${(props: ButtonProps) => props.theme.button.secondary.default.text};
        border           : 1px solid ${(props: ButtonProps) => props.theme.button.secondary.default.border};
        border-radius    : ${(props: ButtonProps) => props.theme.button.secondary.default.borderRadius};

        :hover {
            background-color : ${(props: ButtonProps) => props.theme.button.secondary.onHover.bg};
            color            : ${(props: ButtonProps) => props.theme.button.secondary.onHover.text};
            border           : 1px solid ${(props: ButtonProps) => props.theme.button.secondary.onHover.border}
        }

        :active {
            background-color : ${(props: ButtonProps) => props.theme.button.secondary.isActive.bg};
            color            : ${(props: ButtonProps) => props.theme.button.secondary.isActive.text};
            border           : 1px solid ${(props: ButtonProps) => props.theme.button.secondary.isActive.border}
        }

        &.with-loader::after {
            border             : 3px solid ${(props: ButtonProps) => props.theme.button.secondary.isLoading.spinnerBorder};
            border-top-color   : transparent;
            border-right-color : transparent;
        }
    }
    
    &.tertiary {
        background-color : ${(props: ButtonProps) => props.theme.button.tertiary.default.bg};
        color            : ${(props: ButtonProps) => props.theme.button.tertiary.default.text};
        border           : 1px solid ${(props: ButtonProps) => props.theme.button.tertiary.default.border};
        border-radius    : ${(props: ButtonProps) => props.theme.button.tertiary.default.borderRadius};

        :hover {
            background-color : ${(props: ButtonProps) => props.theme.button.tertiary.onHover.bg};
            color            : ${(props: ButtonProps) => props.theme.button.tertiary.onHover.text};
            border           : 1px solid ${(props: ButtonProps) => props.theme.button.tertiary.onHover.border}
        }

        :active {
            background-color : ${(props: ButtonProps) => props.theme.button.tertiary.isActive.bg};
            color            : ${(props: ButtonProps) => props.theme.button.tertiary.isActive.text};
            border           : 1px solid ${(props: ButtonProps) => props.theme.button.tertiary.isActive.border}
        }

        &.with-loader::after {
            border             : 3px solid ${(props: ButtonProps) => props.theme.button.tertiary.isLoading.spinnerBorder};
            border-top-color   : transparent;
            border-right-color : transparent;
        }
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
        font-size : ${(props: ButtonProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, -2)}em;
    }

    &.size-small {
        padding   : 8px 16px;
        font-size : ${(props: ButtonProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, -1)}em;
    }

    &.size-large {
        padding   : 16px 32px;
        font-size : ${(props: ButtonProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 2)}em;
    }

    &.size-huge {
        padding   : 24px 40px;
        font-size : ${(props: ButtonProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 4)}em;
    }

    &.button-plain { background : transparent; }

    //  BUTTON WITH SPINNER  //////////////////////////////////////////////////
    &.with-loader {
        color          : transparent !important;
        box-shadow     : none;
        user-select    : none;
        pointer-events : none;
    }

    &.with-loader::after {
        display             : block;
        position            : absolute;
        margin              : auto;
        left                : 0;
        top                 : 0;
        bottom              : 0;
        right               : 0;
        height              : 16px;
        width               : 16px;
        border-radius       : 50%;
        content             : "";
        -webkit-animation   : spinner 0.4s infinite linear;
        animation           : spinner 0.4s infinite linear;
    }

    &.size-tiny.with-loader::after,
    &.size-small.with-loader::after {
        height : 8px;
        width  : 8px;
    }

    /*  Animation for loader  */
    @-webkit-keyframes spinner {
        from { -webkit-transform : rotate(0deg); }
        to   { -webkit-transform : rotate(359deg); }
    }

    @keyframes spinner {
        from { transform : rotate(0deg); }
        to   { transform : rotate(359deg); }
    }

    //  BUTTON WITH DELETE  ///////////////////////////////////////////////////
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
`;
