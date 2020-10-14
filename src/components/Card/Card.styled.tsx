import styled from "styled-components";

import { CardProps } from "./Card";

export const CardStyled = styled.div`
    position         : relative;
    width            : 100%;
    height           : auto;
    border           : 1px solid ${(props: CardProps) => props.theme.card.border};
    background-color : ${(props: CardProps) => props.theme.card.bg};

    &.shape-rounded { border-radius : ${(props: CardProps) => props.theme.card.borderRadius}; }

    &.padding-all-tiny   { padding : 8px; }
    &.padding-all-small  { padding : 16px; }
    &.padding-all-medium { padding : 32px; }
    &.padding-all-large  { padding : 48px; }
    &.padding-all-huge   { padding : 64px; }

    @media all and (max-width : 600px) {
        &[class*="padding"] { padding : 4vmin; }
    }
`
