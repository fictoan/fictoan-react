import styled, { css } from "styled-components";

import { FormItemProps } from "../FormItem/FormItem";
import { InputFieldStyled } from "../InputField/InputField.styled";


export const FormItemStyled = styled.div`
    display        : flex;
    position       : relative;
    width          : 100%;
    flex-direction : column;
    align-items    : flex-start;

    ${(props: FormItemProps) => props.isAnswers && css`
        * { margin-bottom: 8px; }
    `}

    & > label {
        position      : relative;
        display       : flex;
        flex          : 1 0 auto;
        align-self    : flex-start;
        margin-bottom : 4px;
        color         : ${(props: FormItemProps) => props.theme.input.default.label};
        font-family   : ${(props: FormItemProps) => props.theme.text.font.sans};
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
            color     : ${(props: FormItemProps) => props.theme.input.required.text};
        }

        &:focus ~ label > span.ff-input-help,
        &:active ~ label > span.ff-input-help {
            display : inline-flex;
        }

        &:not(:focus):not(:placeholder-shown) ~ label > span.ff-input-help {
            color : ${(props: FormItemProps) => props.theme.input.onFocus.helpText};
        }

        &:invalid:focus:not(:placeholder-shown) ~ label > span.ff-input-error,
        &:invalid:not(:focus):not(:placeholder-shown) ~ label > span.ff-input-error {
            display : inline-flex;
            color   : ${(props: FormItemProps) => props.theme.input.isInvalid.helpText};
        }
    }

    label span {
        font-weight : normal;
        color       : ${(props: FormItemProps) => props.theme.input.onFocus.helpText};
        display     : none;
        align-self  : center;
        transition  : opacity 0.2s;
    }

    label > span::before { content : "\\0000a0\\2022\\0000a0"; }
`;
