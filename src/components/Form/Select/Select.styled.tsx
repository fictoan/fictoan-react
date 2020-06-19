import styled from "styled-components";

import { SelectProps } from "./constants";


export const SelectWrapperStyled = styled.div`
    position    : relative;
    width       : max-content;
    align-self  : flex-start;

    &::after {
        position       : absolute;
        display        : block;
        content        : "\\2303";
        top            : calc(50% - 18px);
        right          : 12px;
        font-size      : 24px;
        color          : ${(props: SelectProps) => props.theme.input.select.chevron};
        line-height    : 1.2;
        border-color   : ${(props: SelectProps) => props.theme.input.select.chevron};
        z-index        : 500;
        pointer-events : none;
        transform      : rotate(180deg);
    }
`;

export const SelectStyled = styled.select`
    display          : flex;
    height           : 100%;
    padding          : 12px 48px 12px 8px;
    font-family      : ${(props: SelectProps) => props.theme.text.font.sans};
    background-color : ${(props: SelectProps) => props.theme.input.default.bg};
    border-radius    : 4px;
    align-items      : center;
    border           : 1px solid ${(props: SelectProps) => props.theme.input.default.border};
    width            : 100%;
`;
