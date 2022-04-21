import styled from "styled-components";

import { SelectProps } from "./Select";


export const SelectWrapperStyled = styled.div`
    position   : relative;
    width      : max-content;
    align-self : flex-start;
    border-radius    : ${(props : SelectProps) => props.theme.inputField.default.borderRadius};

    &::after {
        content        : "";
        display        : inline-block;
        position       : absolute;
        top            : 50%;
        right          : 12px;
        width          : 10px;
        height         : 10px;
        border-style   : solid;
        border-width   : 0 2px 2px 0;
        transform      : translateY(-50%) rotate(45deg);
        color          : ${(props: SelectProps) => props.theme.select.chevron};
        transition     : transform 0.2s linear;
        z-index        : 500;
        pointer-events : none;
    }

    &[disabled]::after {
        color : ${(props: SelectProps) => props.theme.inputField.isReadOnly.text};
    }
`;

export const SelectStyled = styled.select`
    display          : flex;
    height           : 100%;
    padding          : 12px 36px 12px 8px;
    font-family      : ${(props: SelectProps) => props.theme.text.font.sans};
    background-color : ${(props: SelectProps) => props.theme.inputField.default.bg};
    border-radius    : 4px;
    align-items      : center;
    border           : 1px solid ${(props: SelectProps) => props.theme.inputField.default.border};
    width            : 100%;

    &:focus {
        background-color : ${(props: SelectProps) => props.theme.inputField.onFocus.bg};
        border           : 2px solid ${(props: SelectProps) => props.theme.inputField.onFocus.border};
        padding          : 11px 35px 11px 7px;
    }
`;
