import styled from "styled-components";

export const RowStyled = styled.div`
    display               : grid;
    width                 : 100%;
    grid-gap              : 16px;
    grid-template-columns : repeat(24, 1fr);
    margin-bottom         : 4vh;

    @media all and (max-width : 720px) {
        & { grid-gap : 8px; }
    }

    &.huge-gutters   { grid-gap : 32px; }
    &.large-gutters  { grid-gap : 24px; }
    &.medium-gutters { grid-gap : 16px; }
    &.small-gutters  { grid-gap : 8px; }
    &.tiny-gutters   { grid-gap : 4px; }
    &.no-gutters     { grid-gap : 0; }

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

    @media all and (max-width : 600px) {
        *[class*="side-padding-"] {
            padding-left  : 6vw;
            padding-right : 6vw;
        }
    }
`