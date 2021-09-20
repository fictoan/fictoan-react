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
    
    .info-section {
        flex-wrap: wrap;
        
        span.help-text, span.error-text {
            font-size : 95%;
        }

        span.help-text {
            color : ${(props: FormItemProps) => props.theme.inputField.default.helpText};
        }
    
        span.error-text {
            display: none;
        }

        span:not(:last-of-type) {
            margin-right: 10px;

            /* &::after {
                content: "\\0000a0\\2022\\0000a0";
                margin-left: 5px;
            } */
        }
    }


    ${InputFieldStyled}, ${TextAreaStyled} {
        &:focus ~ label { font-weight : bold; }

        &:required ~ label::before {
            position  : absolute;
            top       : -4px;
            bottom    : 0;
            left      : -12px;
            margin    : auto;
            content   : "*";
            font-size : 120%;
            color     : ${(props: FormItemProps) => props.theme.inputField.required.text};
        }
    
        &:invalid:not(:focus):not(:placeholder-shown) ~ .info-section span.error-text {
            display: block;
            color : ${(props: FormItemProps) => props.theme.inputField.isInvalid.errorText};
        }
    }
`;
