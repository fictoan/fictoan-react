import styled, { css } from "styled-components";

import { FormItemProps } from "../FormItem/FormItem";
import { InputFieldStyled } from "../InputField/InputField.styled";
import { TextAreaStyled } from "../TextArea/TextArea.styled";


export const FormItemStyled = styled.div`
    display        : flex;
    flex-direction : column;
    position       : relative;
    width          : 100%;
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
        color         : ${(props: FormItemProps) => props.theme.inputField.default.label};
        font-family   : ${(props: FormItemProps) => props.theme.text.font.sans};
        order         : -1;
        flex-wrap     : wrap;
    }

    ${InputFieldStyled}, ${TextAreaStyled} {
        &:focus ~ label { font-weight : bold; }

        &:required ~ label::before {
            position  : absolute;
            top       : -4px;
            bottom    : 0;
            left      : -14px;
            margin    : auto;
            content   : " *";
            font-size : 120%;
            color     : ${(props: FormItemProps) => props.theme.inputField.required.text};
        }

        &:focus ~ label > span.ff-input-help,
        &:active ~ label > span.ff-input-help {
            display : inline-flex;
        }

        &:not(:focus):not(:placeholder-shown) ~ label > span.ff-input-help {
            color : ${(props: FormItemProps) => props.theme.inputField.onFocus.helpText};
        }

        &:invalid:focus:not(:placeholder-shown) ~ label > span.ff-input-error,
        &:invalid:not(:focus):not(:placeholder-shown) ~ label > span.ff-input-error {
            display : inline-flex;
            color   : ${(props: FormItemProps) => props.theme.inputField.isInvalid.helpText};
        }
    }

    label span {
        font-weight : normal;
        color       : ${(props: FormItemProps) => props.theme.inputField.onFocus.helpText};
        display     : none;
        align-self  : center;
        transition  : opacity 0.2s;
    }

    label > span::before { content : "\\0000a0\\2022\\0000a0"; }
`;
