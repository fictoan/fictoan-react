import styled, { css } from "styled-components";

import { InputFieldStyled } from "../InputField/InputField.styled";

import { FormItemProps } from "../constants";

export const FormItemStyled = styled.div`
    display        : flex;
    position       : relative;
    width          : 100%;
    flex-direction : column;
    align-items    : center;
    flex-wrap      : wrap;

    ${(props: FormItemProps) => props.isAnswers && css`
        * { margin-bottom: 8px; }
    `}

    > label {
        position      : relative;
        display       : flex;
        flex          : 1 0 100%;
        align-self    : flex-start;
        margin-bottom : 4px;
        color         : $colorShade;
        order         : -1;
        flex-wrap     : wrap;
    }

    ${InputFieldStyled} {
        &:focus ~ label { font-weight : bold; }

        &:required ~ label::before {
            position  : absolute;
            top       : -4px;
            bottom    : 0;
            left      : -14px;
            margin    : auto;
            content   : " *";
            font-size : 120%;
            color     : $colorRed;
        }

        &:focus ~ label > span.ff-input-help,
        &:active ~ label > span.ff-input-help {
            display : inline-flex;
        }

        &:not(:focus):not(:placeholder-shown) ~ label > span.ff-input-help {
            color : $inputHelpTextDefaultColor;
        }

        &:invalid:focus:not(:placeholder-shown) ~ label > span.ff-input-error,
        &:invalid:not(:focus):not(:placeholder-shown) ~ label > span.ff-input-error {
            display : inline-flex;
            color   : $inputHelpTextErrorColor;
        }
    }

    label span {
        font-size   : 80%;
        font-weight : normal;
        color       : $inputHelpTextDefaultColor;
        display     : none;
        align-self  : center;
        transition  : opacity 0.2s;
    }

    label > span::before { content : "\0000a0\2022\0000a0"; }
`
