import styled from "styled-components";

import { InputFieldProps } from "../InputField/InputField";


export const TextAreaStyled = styled.textarea`
    position         : relative;
    width            : 100%;
    flex             : 1 1 auto;
    font-family      : ${(props: InputFieldProps) => props.theme.text.font.sans};
    background-color : ${(props: InputFieldProps) => props.theme.inputField.default.bg};
    border           : 1px solid ${(props: InputFieldProps) => props.theme.inputField.default.border};
    border-radius    : ${(props: InputFieldProps) => props.theme.inputField.default.borderRadius};
    padding          : 12px;
    line-height      : 1;
    max-width        : 100%;
    min-width        : 100%;
    resize           : vertical;

    &:active,
    &:focus {
        background-color : ${(props: InputFieldProps) => props.theme.inputField.onFocus.bg};
        border           : 2px solid ${(props: InputFieldProps) => props.theme.inputField.onFocus.border};
        padding          : 11px;
    }
`;
