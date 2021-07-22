import styled from "styled-components";

import { RadioButtonProps } from "./constants";


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
        background    : ${(props: RadioButtonProps) => props.theme.radioButton.inset.default.bg};
    }

    &:hover label::before { background : ${(props: RadioButtonProps) => props.theme.radioButton.inset.onHover.bg}; }

    /*  The white inner circle  */
    & label::after {
        opacity       : 0;
        left          : 4px;
        top           : 4px;
        width         : 8px;
        height        : 8px;
        background    : ${(props: RadioButtonProps) => props.theme.radioButton.circle.default.bg};
        border-radius : 50%;
    }

    &:checked + label::before,
    input[type="radio"]:checked + label::before { 
        background : ${(props: RadioButtonProps) => props.theme.radioButton.inset.isSelected.bg};
    }

    &:checked + label::after,
    input[type="radio"]:checked + label::after { opacity : 1; }

    &:only-of-type { margin-right : 0; }

    & label {
        display        : inline-block;
        position       : relative;
        font-family    : ${(props: RadioButtonProps) => props.theme.text.font.sans};
        color          : ${(props: RadioButtonProps) => props.theme.text.paras.color};
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
        opacity        : 0.24;
        user-select    : none;
        pointer-events : none;
        background     : ${(props: RadioButtonProps) => props.theme.radioButton.inset.isDisabled.bg};
        box-shadow     : inset 0 2px 8px -2px rgba(0, 0, 0, 0.24);
    }

    input[type="radio"]:disabled         + label,
    input[type="radio"]:disabled:checked + label  {
        pointer-events : none;
        cursor         : default;
        opacity        : 0.24;
    }
`
