import styled from "styled-components";

import { BadgeProps } from "./Badge";

export const BadgeStyled = styled.mark`
    position            : relative;
    cursor              : pointer;
    font-family         : ${(props : BadgeProps) => props.theme.button.font};
    font-weight         : bold;
    font-size           : 92%;
    text-align          : center;
    text-decoration     : none;
    line-height         : 1;
    transition          : all 0.2s ease-in-out;
    background-position : center;
    user-select         : none;
    padding             : 2px 4px;
    width               : fit-content;
    height              : fit-content;

    // To make sure a button’s children
    // don’t style themselves like a douchebag
    > * {
        all : unset;
    }

    &.shape-rounded {
        border-radius : 4px;
    }

    &.shape-curved {
        border-radius : 5000px
    }

    &[class*="border-"] {
        border-width : ${(props : BadgeProps) => props.theme.globals.borderWidth};
    }

    &.border-none {
        border-width : 0 !important;
    }

    //  DIFFERENT SIZES  //////////////////////////////////////////////////////
    &.size-tiny {
        padding   : 4px 8px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, -2)}em;
    }

    &.size-small {
        padding   : 6px 12px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, -1)}em;
    }

    &.size-medium {
        padding   : 12px 24px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 1)}em;
    }

    &.size-large {
        padding   : 16px 32px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 2)}em;
    }

    &.size-huge {
        padding   : 24px 40px;
        font-size : ${(props : BadgeProps) => props.theme.text.paras.size * Math.pow(props.theme.text.headings.multiplier, 4)}em;
    }
`;
