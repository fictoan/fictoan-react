import styled from "styled-components";

import { baseColors } from "../../../constants/BaseColors";
import { mainColors } from "../../../constants/Theme";

export const RadioButtonStyled = styled.div`
    display      : inline-flex;
    margin-right : 24px;

    /*  The grey outer circle  */
    & label::before {
        width         : 16px;
        height        : 16px;
        /* top           : 4px; */
        left          : 0;
        border-radius : 50%;
        background    : ${baseColors.slate30};
    }

    /*  The white inner circle  */
    & label::after {
        opacity       : 0;
        left          : 4px;
        top           : 4px;
        width         : 8px;
        height        : 8px;
        background    : ${baseColors.white};
        border-radius : 50%;
    }

    input[type="radio"]:checked + label::after { opacity : 1; }

    &:checked + label::before { background : ${mainColors.hue}; }
    &:checked + label::after { opacity : 1; }

    &:only-of-type { margin-right : 0; }

    & label {
        display        : inline-block;
        position       : relative;
        font-family    : inherit;
        color          : ${mainColors.shade};
        cursor         : pointer;
        vertical-align : middle;
        line-height    : 1.1;
        padding-left   : 24px;

        &::before,
        &::after {
            display    : inline-block;
            position   : absolute;
            content    : "";
            transition : all 0.1s ease-out;
        }
    }

    /*  The grey square  */
    &:disabled + label::before {
        user-select    : none;
        pointer-events : none;
        background     : ${baseColors.slate30};
        box-shadow     : inset 0 2px 8px -2px hsla(0, 0, 0, 0.24);
    }

    &:hover label::before { background : ${baseColors.slate40}; }

    /*  The grey square  */
    label::after { opacity : 0; }

    &:checked + label::before { background : ${mainColors.hue}; }
    &:checked + label::after { opacity : 1; }

    &:disabled         + label,
    &:disabled:checked + label  {
        pointer-events : none;
        cursor         : default;
        opacity        : 0.24;
    }
`
