import styled from "styled-components";

import { SpinnerProps } from "./Spinner";

export const SpinnerStyled = styled.div`
    position           : relative;
    padding            : 8px;
    border             : 3px solid;
    border-top-color   : transparent;
    border-right-color : transparent;
    color              : transparent !important;
    box-shadow         : none;
    user-select        : none;
    pointer-events     : none;

    &::after {
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
        border-color       : ${(props : SpinnerProps) => props.theme.spinner.color};
        border-top-color   : transparent;
        border-right-color : transparent;
        -webkit-animation  : spinner 0.4s infinite linear;
        animation          : spinner 0.4s infinite linear;
    }

    //  DIFFERENT SIZES  //////////////////////////////////////////////////////
    &.size-tiny {
        padding : 4px;

        &::after {
            height : 8px;
            width  : 8px;
        }
    }

    &.size-small {
        padding : 6px;

        &::after {
            height : 12px;
            width  : 12px;
        }
    }

    &.size-large {
        padding : 16px;

        &::after {
            height : 32px;
            width  : 32px;
        }
    }

    &.size-huge {
        padding : 24px;

        &::after {
            height : 48px;
            width  : 48px;
        }
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
`;
