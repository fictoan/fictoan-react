import styled from "styled-components";

import { PortionStyled } from "../Portion/Portion.styled"

export const RowStyled = styled.div`
    display               : grid;
    width                 : 100%;
    grid-gap              : 16px;
    grid-template-columns : repeat(24, 1fr);
    margin-bottom         : 4vh;

    &.huge-gutters   { grid-gap : 64px; }
    &.large-gutters  { grid-gap : 32px; }
    &.medium-gutters { grid-gap : 16px; }
    &.small-gutters  { grid-gap : 8px; }
    &.tiny-gutters   { grid-gap : 4px; }
    &.no-gutters     { grid-gap : 0; }

    @media all and (max-width : 900px) {
        &.huge-gutters,
        &.large-gutters,
        &.medium-gutters,
        &.small-gutters,
        &.tiny-gutters  { grid-gap : 8px; }
    }

    @media all and (max-width : 600px) {
        &.huge-gutters,
        &.large-gutters,
        &.medium-gutters,
        &.small-gutters,
        &.tiny-gutters  { grid-gap : 4px; }
    }

    &.side-padding-tiny {
        padding-left  : 4vw;
        padding-right : 4vw;
    }

    &.side-padding-small {
        padding-left  : 8vw;
        padding-right : 8vw;
    }

    &.side-padding-medium {
        padding-left  : 12vw;
        padding-right : 12vw;
    }

    &.side-padding-large {
        padding-left  : 18vw;
        padding-right : 18vw;
    }

    &.side-padding-huge {
        padding-left  : 24vw;
        padding-right : 24vw;
    }

    @media all and (max-width : 1200px) {
        &.side-padding-tiny {
            padding-left  : 2vw;
            padding-right : 2vw;
        }

        &.side-padding-small {
            padding-left  : 4vw;
            padding-right : 4vw;
        }

        &.side-padding-medium {
            padding-left  : 8vw;
            padding-right : 8vw;
        }

        &.side-padding-large {
            padding-left  : 12vw;
            padding-right : 12vw;
        }

        &.side-padding-huge {
            padding-left  : 16vw;
            padding-right : 16vw;
        }
    }

    @media all and (max-width : 600px) {
        *[class*="side-padding-"] {
            padding-left  : 6vw;
            padding-right : 6vw;
        }

        &:not(.retain-layout-on-mobile) > ${PortionStyled}:not([class*='on-mobile']) { grid-column : span 24; }
    }

    @media all and (min-width : 601px) and (max-width : 900px) {
        &:not(.retain-layout-on-tab-pt) > ${PortionStyled}:not([class*='on-tab-pt']) { grid-column : span 24; }
    }
`;