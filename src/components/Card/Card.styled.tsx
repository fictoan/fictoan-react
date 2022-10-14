///////////////////////////////////////////////////////////////////////////////
// CARD
// The card is a simple box that encloses content within, and is one of the
// oft-used components in modern UI.
///////////////////////////////////////////////////////////////////////////////

import styled from "styled-components";

import { CardProps } from "./Card";
import { globalVariables } from "../../styles/theme";


export const CardStyled = styled.div`
    position : relative;
    width    : 100%;

    &[class*="border-"] { border-width : ${globalVariables.borderWidth}; }

    &:not([class*="border-"]) { border : 1px solid ${(props: CardProps) => props.theme.card.border}; }
    
    &:not([class*="bg-"]) { background-color : ${(props: CardProps) => props.theme.card.bg}; }

    &.shape-rounded { border-radius : ${(props: CardProps) => props.theme.card.borderRadius}; }

    &.padding-all-tiny   { padding : 8px; }
    &.padding-all-small  { padding : 16px; }
    &.padding-all-medium { padding : 32px; }
    &.padding-all-large  { padding : 48px; }
    &.padding-all-huge   { padding : 64px; }

    @media all and (max-width : 600px) {
        &[class*="padding"] { padding : 4vmin; }

        .padding-none { padding : 0 !important; }
    }
`;
