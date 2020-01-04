import styled from "styled-components";

import { CardProps } from "./constants";

export const CardStyled = styled.div`
    position         : relative;
    width            : 100%;
    height           : auto;
    border           : 1px solid hsla(0, 0%, 0%, 0.04);
    background-color : ${(props : CardProps) => props.theme.card.bg};

    &.padding-all-tiny   { padding : 8px; }
    &.padding-all-small  { padding : 16px; }
    &.padding-all-medium { padding : 24px; }
    &.padding-all-large  { padding : 32px; }
    &.padding-all-huge   { padding : 48px; }

    @media all and (max-width : 600px) {
        &[class*="padding"] { padding : 4vmin; }
    }
`
