import styled from "styled-components";

import { FormItemProps } from "./FormItem";
import { InputFieldStyled } from "../InputField/InputField.styled";
import { SelectWrapperStyled } from "../Select/Select.styled";
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
        color         : ${(props : FormItemProps) => props.theme.inputField.default.label};
        font-family   : ${(props : FormItemProps) => props.theme.text.paras.font};
        order         : -1;
        flex-wrap     : wrap;
    }

    .info-section {
        flex-wrap : wrap;

        span.help-text,
        span.error-text {
            font-size   : ${(props : FormItemProps) => props.theme.inputField.default.helpText.scale};
            font-family : ${(props : FormItemProps) => props.theme.text.paras.font};
        }

        span.help-text {
            color : ${(props : FormItemProps) => props.theme.inputField.default.helpText.text};
        }

        span.error-text {
            display : none;
        }

        span:not(:last-of-type) {
            margin-right : 8px;
        }
    }

    &[required] {
        & > div, // For RadioGroup
        & > ${InputFieldStyled},
        & > ${TextAreaStyled},
        & > ${SelectWrapperStyled} {
            & ~ label::before {
                position  : absolute;
                top       : -4px;
                bottom    : 0;
                left      : -12px;
                margin    : auto;
                content   : "*";
                font-size : 120%;
                color     : ${(props : FormItemProps) => props.theme.inputField.required.text};
            }
        }
    }

    input[type="radio"]:disabled + label,
    input[type="checkbox"]:disabled + label {
        pointer-events : none;
        user-select    : none;
        cursor         : default;
        opacity        : 0.36;
    }

    ${InputFieldStyled},
    ${TextAreaStyled},
    ${SelectWrapperStyled} {
        &:read-only {
            background-color : ${(props : FormItemProps) => props.theme.inputField.isReadOnly.bg};
            color            : ${(props : FormItemProps) => props.theme.inputField.isReadOnly.text};
            cursor           : text;

            &:focus {
                border : ${(props : FormItemProps) => props.theme.globals.borderWidth} solid ${(props : FormItemProps) => props.theme.inputField.isReadOnly.text};
            }
        }

        &:disabled,
        &[disabled] select {
            background-color : ${(props : FormItemProps) => props.theme.inputField.isDisabled.bg};
            border-color     : ${(props : FormItemProps) => props.theme.inputField.isDisabled.border};
            color            : ${(props : FormItemProps) => props.theme.inputField.isDisabled.text};
            cursor           : not-allowed;

            & + label {
                color : ${(props : FormItemProps) => props.theme.inputField.isDisabled.label};
            }
        }

        &:not(:disabled) {
            &:focus ~ label {
                font-weight : bold;
            }

            &:invalid:not(:focus):not(:placeholder-shown) ~ .info-section span.error-text {
                display : block;
                color   : ${(props : FormItemProps) => props.theme.inputField.isInvalid.errorText};
            }
        }
    }
`;
