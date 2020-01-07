import styled from "styled-components";

import { PortionProps } from "./constants";

export const PortionStyled = styled.div`
    &.\\31 { grid-column : span 1; }

    &.one-twelfth,
    &.\\32 { grid-column : span 2; }

    &.one-eighth,
    &.\\33 { grid-column : span 3; }

    &.one-sixth,
    &.\\34 { grid-column : span 4; }

    &.\\35 { grid-column : span 5; }

    &.one-fourth,
    &.\\36 { grid-column : span 6; }

    &.\\37 { grid-column : span 7; }

    &.one-third,
    &.\\38 { grid-column : span 8; }

    &.\\39 {
        grid-column : span 9;
    }

    &.five-twelfth,
    &.\\31 0 { grid-column : span 10; }

    &.\\31 1 { grid-column : span 11; }

    &.half,
    &.\\31 2 { grid-column : span 12; }

    &.\\31 3 { grid-column : span 13; }

    &.seven-twelfth,
    &.\\31 4 { grid-column : span 14; }

    &.\\31 5 { grid-column : span 15; }

    &.two-third,
    &.\\31 6 { grid-column : span 16; }

    &.\\31 7 { grid-column : span 17; }

    &.three-fourth,
    &.\\31 8 { grid-column : span 18; }

    &.\\31 9 { grid-column : span 19; }

    &.five-sixth,
    &.\\32 0 { grid-column : span 20; }

    &.seven-eighth,
    &.\\32 1 { grid-column : span 21; }

    &.eleven-twelfth,
    &.\\32 2 { grid-column : span 22; }

    &.\\32 3 { grid-column : span 23; }

    &.whole,
    &.\\32 4 { grid-column : span 24; }

    @media all and (max-width : 600px) {

        .row:not(.retain-layout-on-mobile) > &:not([class*='on-mobile']) { grid-column : span 24; }

        &.\\31 -on-mobile { grid-column : span 1; }

        &.one-twelfth-on-mobile,
        &.\\32 -on-mobile { grid-column : span 2; }

        &.one-eighth-on-mobile,
        &.\\33 -on-mobile { grid-column : span 3; }

        &.one-sixth-on-mobile,
        &.\\34 -on-mobile { grid-column : span 4; }

        &.\\35 -on-mobile { grid-column : span 5; }

        &.one-fourth-on-mobile,
        &.\\36 -on-mobile { grid-column : span 6; }

        &.\\37 -on-mobile { grid-column : span 7; }

        &.one-third-on-mobile,
        &.\\38 -on-mobile { grid-column : span 8; }

        &.\\39 -on-mobile { grid-column : span 9; }

        &.five-twelfth-on-mobile,
        &.\\31 0-on-mobile { grid-column : span 10; }

        &.\\31 1-on-mobile { grid-column : span 11; }

        &.half-on-mobile,
        &.\\31 2-on-mobile { grid-column : span 12; }

        &.\\31 3-on-mobile { grid-column : span 13; }

        &.seven-twelfth-on-mobile,
        &.\\31 4-on-mobile { grid-column : span 14; }

        &.\\31 5-on-mobile { grid-column : span 15; }

        &.two-third-on-mobile,
        &.\\31 6-on-mobile { grid-column : span 16; }

        &.\\31 7-on-mobile { grid-column : span 17; }

        &.three-fourth-on-mobile,
        &.\\31 8-on-mobile { grid-column : span 18; }

        &.\\31 9-on-mobile { grid-column : span 19; }

        &.five-sixth-on-mobile,
        &.\\32 0-on-mobile { grid-column : span 20; }

        &.seven-eighth-on-mobile,
        &.\\32 1-on-mobile { grid-column : span 21; }

        &.eleven-twelfth-on-mobile,
        &.\\32 2-on-mobile { grid-column : span 22; }

        &.\\32 3-on-mobile { grid-column : span 23; }

        &.whole-on-mobile,
        &.\\32 4-on-mobile { grid-column : span 24; }
    }

    @media all and (min-width : 601px) and (max-width : 900px) {
        .row:not(.retain-layout-on-tab-pt) > &:not([class*='on-tab-pt']) { grid-column : span 24; }

        &.\\31 -on-tab-pt { grid-column : span 1; }

        &.one-twelfth-on-tab-pt,
        &.\\32 -on-tab-pt { grid-column : span 2; }

        &.one-eighth-on-tab-pt,
        &.\\33 -on-tab-pt { grid-column : span 3; }

        &.one-sixth-on-tab-pt,
        &.\\34 -on-tab-pt { grid-column : span 4; }

        &.\\35 -on-tab-pt { grid-column : span 5; }

        &.one-fourth-on-tab-pt,
        &.\\36 -on-tab-pt { grid-column : span 6; }

        &.\\37 -on-tab-pt { grid-column : span 7; }

        &.one-third-on-tab-pt,
        &.\\38 -on-tab-pt { grid-column : span 8; }

        &.\\39 -on-tab-pt { grid-column : span 9; }

        &.five-twelfth-on-tab-pt,
        &.\\31 0-on-tab-pt { grid-column : span 10; }

        &.\\31 1-on-tab-pt { grid-column : span 11; }

        &.half-on-tab-pt,
        &.\\31 2-on-tab-pt { grid-column : span 12; }

        &.\\31 3-on-tab-pt { grid-column : span 13; }

        &.seven-twelfth-on-tab-pt,
        &.\\31 4-on-tab-pt { grid-column : span 14; }

        &.\\31 5-on-tab-pt { grid-column : span 15; }

        &.two-third-on-tab-pt,
        &.\\31 6-on-tab-pt { grid-column : span 16; }

        &.\\31 7-on-tab-pt { grid-column : span 17; }

        &.three-fourth-on-tab-pt,
        &.\\31 8-on-tab-pt { grid-column : span 18; }

        &.\\31 9-on-tab-pt { grid-column : span 19; }

        &.five-sixth-on-tab-pt,
        &.\\32 0-on-tab-pt { grid-column : span 20; }

        &.seven-eighth-on-tab-pt,
        &.\\32 1-on-tab-pt { grid-column : span 21; }

        &.eleven-twelfth-on-tab-pt,
        &.\\32 2-on-tab-pt { grid-column : span 22; }

        &.\\32 3-on-tab-pt { grid-column : span 23; }

        &.whole-on-tab-pt,
        &.\\32 4-on-tab-pt { grid-column : span 24; }
    }

    @media all and (min-width : 901px) and (max-width : 1200px) {
        /* .row:not(.retain-layout-on-tab-ls) > &:not([class*='on-tab-ls']) { grid-column : span 24; } */

        &.\\31 -on-tab-ls { grid-column : span 1; }

        &.one-twelfth-on-tab-ls,
        &.\\32 -on-tab-ls { grid-column : span 2; }

        &.one-eighth-on-tab-ls,
        &.\\33 -on-tab-ls { grid-column : span 3; }

        &.one-sixth-on-tab-ls,
        &.\\34 -on-tab-ls { grid-column : span 4; }

        &.\\35 -on-tab-ls { grid-column : span 5; }

        &.one-fourth-on-tab-ls,
        &.\\36 -on-tab-ls { grid-column : span 6; }

        &.\\37 -on-tab-ls { grid-column : span 7; }

        &.one-third-on-tab-ls,
        &.\\38 -on-tab-ls { grid-column : span 8; }

        &.\\39 -on-tab-ls { grid-column : span 9; }

        &.five-twelfth-on-tab-ls,
        &.\\31 0-on-tab-ls { grid-column : span 10; }

        &.\\31 1-on-tab-ls { grid-column : span 11; }

        &.half-on-tab-ls,
        &.\\31 2-on-tab-ls { grid-column : span 12; }

        &.\\31 3-on-tab-ls { grid-column : span 13; }

        &.seven-twelfth-on-tab-ls,
        &.\\31 4-on-tab-ls { grid-column : span 14; }

        &.\\31 5-on-tab-ls { grid-column : span 15; }

        &.two-third-on-tab-ls,
        &.\\31 6-on-tab-ls { grid-column : span 16; }

        &.\\31 7-on-tab-ls { grid-column : span 17; }

        &.three-fourth-on-tab-ls,
        &.\\31 8-on-tab-ls { grid-column : span 18; }

        &.\\31 9-on-tab-ls { grid-column : span 19; }

        &.five-sixth-on-tab-ls,
        &.\\32 0-on-tab-ls { grid-column : span 20; }

        &.seven-eighth-on-tab-ls,
        &.\\32 1-on-tab-ls { grid-column : span 21; }

        &.eleven-twelfth-on-tab-ls,
        &.\\32 2-on-tab-ls { grid-column : span 22; }

        &.\\32 3-on-tab-ls { grid-column : span 23; }

        &.whole-on-tab-ls,
        &.\\32 4-on-tab-ls { grid-column : span 24; }
    }
`
