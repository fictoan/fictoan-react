import styled from "styled-components";

import { HRProps } from "./constants";

export const HRStyled = styled.hr`
    display          : flex;
    border           : 0;
    height           : 1px;
    margin           : 4vmax auto;
    width            : 100%;
    background-color : ${(props: HRProps) => props.theme.hr.bg};

    &.thick { height : 4px; }
    &.slim  { height : 2px; }

    &.side-margin-tiny   { width: calc(100% - 8vw); }
    &.side-margin-small  { width: calc(100% - 16vw); }
    &.side-margin-medium { width: calc(100% - 24vw); }
    &.side-margin-large  { width: calc(100% - 36vw); }
    &.side-margin-huge   { width: calc(100% - 48vw); }

    @media all and (max-width : 1200px) {
        &.side-margin-tiny   { width: calc(100% - 4vw); }
        &.side-margin-small  { width: calc(100% - 8vw); }
        &.side-margin-medium { width: calc(100% - 16vw); }
        &.side-margin-large  { width: calc(100% - 24vw); }
        &.side-margin-huge   { width: calc(100% - 32vw); }
    }

    @media all and (max-width : 600px) {
        &[class*="side-margin-"] {
            width: calc(100% - 8vw);
        }
    }
`