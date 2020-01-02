import styled from "styled-components";

import { PortionProps } from "./constants";

export const PortionStyled = styled.div`
    .portion.\31 { grid-column : span 1; }

    .portion.one-twelfth,
    .portion.\32 { grid-column : span 2; }

    .portion.one-eighth,
    .portion.\33 { grid-column : span 3; }

    .portion.one-sixth,
    .portion.\34 { grid-column : span 4; }

    .portion.\35 { grid-column : span 5; }

    .portion.one-fourth,
    .portion.\36 { grid-column : span 6; }

    .portion.\37 { grid-column : span 7; }

    .portion.one-third,
    .portion.\38 { grid-column : span 8; }

    .portion.\39 { grid-column : span 9; }

    .portion.five-twelfth,
    .portion.\31 0 { grid-column : span 10; }

    .portion.\31 1 { grid-column : span 11; }

    .portion.half,
    .portion.\31 2 { grid-column : span 12; }

    .portion.\31 3 { grid-column : span 13; }

    .portion.seven-twelfth,
    .portion.\31 4 { grid-column : span 14; }

    .portion.\31 5 { grid-column : span 15; }

    .portion.two-third,
    .portion.\31 6 { grid-column : span 16; }

    .portion.\31 7 { grid-column : span 17; }

    .portion.three-fourth,
    .portion.\31 8 { grid-column : span 18; }

    .portion.\31 9 { grid-column : span 19; }

    .portion.five-sixth,
    .portion.\32 0 { grid-column : span 20; }

    .portion.seven-eighth,
    .portion.\32 1 { grid-column : span 21; }

    .portion.eleven-twelfth,
    .portion.\32 2 { grid-column : span 22; }

    .portion.\32 3 { grid-column : span 23; }

    .portion.whole,
    .portion.\32 4 { grid-column : span 24; }

    @media all and (max-width : 600px) {

        .row:not(.retain-layout-on-mobile) > .portion:not([class*='on-mobile']) { grid-column : span 24; }

        .portion.\31 -on-mobile { grid-column : span 1; }

        .portion.one-twelfth-on-mobile,
        .portion.\32 -on-mobile { grid-column : span 2; }

        .portion.one-eighth-on-mobile,
        .portion.\33 -on-mobile { grid-column : span 3; }

        .portion.one-sixth-on-mobile,
        .portion.\34 -on-mobile { grid-column : span 4; }

        .portion.\35 -on-mobile { grid-column : span 5; }

        .portion.one-fourth-on-mobile,
        .portion.\36 -on-mobile { grid-column : span 6; }

        .portion.\37 -on-mobile { grid-column : span 7; }

        .portion.one-third-on-mobile,
        .portion.\38 -on-mobile { grid-column : span 8; }

        .portion.\39 -on-mobile { grid-column : span 9; }

        .portion.five-twelfth-on-mobile,
        .portion.\31 0-on-mobile { grid-column : span 10; }

        .portion.\31 1-on-mobile { grid-column : span 11; }

        .portion.half-on-mobile,
        .portion.\31 2-on-mobile { grid-column : span 12; }

        .portion.\31 3-on-mobile { grid-column : span 13; }

        .portion.seven-twelfth-on-mobile,
        .portion.\31 4-on-mobile { grid-column : span 14; }

        .portion.\31 5-on-mobile { grid-column : span 15; }

        .portion.two-third-on-mobile,
        .portion.\31 6-on-mobile { grid-column : span 16; }

        .portion.\31 7-on-mobile { grid-column : span 17; }

        .portion.three-fourth-on-mobile,
        .portion.\31 8-on-mobile { grid-column : span 18; }

        .portion.\31 9-on-mobile { grid-column : span 19; }

        .portion.five-sixth-on-mobile,
        .portion.\32 0-on-mobile { grid-column : span 20; }

        .portion.seven-eighth-on-mobile,
        .portion.\32 1-on-mobile { grid-column : span 21; }

        .portion.eleven-twelfth-on-mobile,
        .portion.\32 2-on-mobile { grid-column : span 22; }

        .portion.\32 3-on-mobile { grid-column : span 23; }

        .portion.whole-on-mobile,
        .portion.\32 4-on-mobile { grid-column : span 24; }
    }

    @media all and (min-width : 601px) and (max-width : 900px) {
        .row:not(.retain-layout-on-tab-pt) > .portion:not([class*='on-tab-pt']) { grid-column : span 24; }

        .portion.\31 -on-tab-pt { grid-column : span 1; }

        .portion.one-twelfth-on-tab-pt,
        .portion.\32 -on-tab-pt { grid-column : span 2; }

        .portion.one-eighth-on-tab-pt,
        .portion.\33 -on-tab-pt { grid-column : span 3; }

        .portion.one-sixth-on-tab-pt,
        .portion.\34 -on-tab-pt { grid-column : span 4; }

        .portion.\35 -on-tab-pt { grid-column : span 5; }

        .portion.one-fourth-on-tab-pt,
        .portion.\36 -on-tab-pt { grid-column : span 6; }

        .portion.\37 -on-tab-pt { grid-column : span 7; }

        .portion.one-third-on-tab-pt,
        .portion.\38 -on-tab-pt { grid-column : span 8; }

        .portion.\39 -on-tab-pt { grid-column : span 9; }

        .portion.five-twelfth-on-tab-pt,
        .portion.\31 0-on-tab-pt { grid-column : span 10; }

        .portion.\31 1-on-tab-pt { grid-column : span 11; }

        .portion.half-on-tab-pt,
        .portion.\31 2-on-tab-pt { grid-column : span 12; }

        .portion.\31 3-on-tab-pt { grid-column : span 13; }

        .portion.seven-twelfth-on-tab-pt,
        .portion.\31 4-on-tab-pt { grid-column : span 14; }

        .portion.\31 5-on-tab-pt { grid-column : span 15; }

        .portion.two-third-on-tab-pt,
        .portion.\31 6-on-tab-pt { grid-column : span 16; }

        .portion.\31 7-on-tab-pt { grid-column : span 17; }

        .portion.three-fourth-on-tab-pt,
        .portion.\31 8-on-tab-pt { grid-column : span 18; }

        .portion.\31 9-on-tab-pt { grid-column : span 19; }

        .portion.five-sixth-on-tab-pt,
        .portion.\32 0-on-tab-pt { grid-column : span 20; }

        .portion.seven-eighth-on-tab-pt,
        .portion.\32 1-on-tab-pt { grid-column : span 21; }

        .portion.eleven-twelfth-on-tab-pt,
        .portion.\32 2-on-tab-pt { grid-column : span 22; }

        .portion.\32 3-on-tab-pt { grid-column : span 23; }

        .portion.whole-on-tab-pt,
        .portion.\32 4-on-tab-pt { grid-column : span 24; }
    }

    @media all and (min-width : 901px) and (max-width : 1200px) {
        //.row:not(.retain-layout-on-tab-ls) > .portion:not([class*='on-tab-ls']) { grid-column : span 24; }

        .portion.\31 -on-tab-ls { grid-column : span 1; }

        .portion.one-twelfth-on-tab-ls,
        .portion.\32 -on-tab-ls { grid-column : span 2; }

        .portion.one-eighth-on-tab-ls,
        .portion.\33 -on-tab-ls { grid-column : span 3; }

        .portion.one-sixth-on-tab-ls,
        .portion.\34 -on-tab-ls { grid-column : span 4; }

        .portion.\35 -on-tab-ls { grid-column : span 5; }

        .portion.one-fourth-on-tab-ls,
        .portion.\36 -on-tab-ls { grid-column : span 6; }

        .portion.\37 -on-tab-ls { grid-column : span 7; }

        .portion.one-third-on-tab-ls,
        .portion.\38 -on-tab-ls { grid-column : span 8; }

        .portion.\39 -on-tab-ls { grid-column : span 9; }

        .portion.five-twelfth-on-tab-ls,
        .portion.\31 0-on-tab-ls { grid-column : span 10; }

        .portion.\31 1-on-tab-ls { grid-column : span 11; }

        .portion.half-on-tab-ls,
        .portion.\31 2-on-tab-ls { grid-column : span 12; }

        .portion.\31 3-on-tab-ls { grid-column : span 13; }

        .portion.seven-twelfth-on-tab-ls,
        .portion.\31 4-on-tab-ls { grid-column : span 14; }

        .portion.\31 5-on-tab-ls { grid-column : span 15; }

        .portion.two-third-on-tab-ls,
        .portion.\31 6-on-tab-ls { grid-column : span 16; }

        .portion.\31 7-on-tab-ls { grid-column : span 17; }

        .portion.three-fourth-on-tab-ls,
        .portion.\31 8-on-tab-ls { grid-column : span 18; }

        .portion.\31 9-on-tab-ls { grid-column : span 19; }

        .portion.five-sixth-on-tab-ls,
        .portion.\32 0-on-tab-ls { grid-column : span 20; }

        .portion.seven-eighth-on-tab-ls,
        .portion.\32 1-on-tab-ls { grid-column : span 21; }

        .portion.eleven-twelfth-on-tab-ls,
        .portion.\32 2-on-tab-ls { grid-column : span 22; }

        .portion.\32 3-on-tab-ls { grid-column : span 23; }

        .portion.whole-on-tab-ls,
        .portion.\32 4-on-tab-ls { grid-column : span 24; }
    }
`