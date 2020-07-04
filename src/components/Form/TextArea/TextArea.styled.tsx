import styled from "styled-components";

import { InputFieldProps } from "../InputField/InputField";


export const TextAreaStyled = styled.textarea`
    position         : relative;
    width            : 100%;
    flex             : 1 1 auto;
    font-family      : ${(props: InputFieldProps) => props.theme.text.font.sans};
    background-color : ${(props: InputFieldProps) => props.theme.input.default.bg};
    border           : 1px solid ${(props: InputFieldProps) => props.theme.input.default.border};
    border-radius    : 4px;
    padding          : 12px;
    line-height      : 1;
    max-width        : 100%;
    min-width        : 100%;
    resize           : vertical;

    &:active,
    &:focus {
        background-color : ${(props: InputFieldProps) => props.theme.input.onFocus.bg};
        border           : 2px solid ${(props: InputFieldProps) => props.theme.input.onFocus.border};
        padding          : 11px;
    }

    &:read-only {
        background-color : ${(props: InputFieldProps) => props.theme.input.isReadOnly.bg};
        color            : ${(props: InputFieldProps) => props.theme.input.default.text};
    }

    &:read-only:focus { border : 2px solid ${(props: InputFieldProps) => props.theme.input.default.text}; }
`;
