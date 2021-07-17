import styled from "styled-components";

import { HRProps } from "./HRule";


export const HRStyled = styled.hr`
    border  : 0;
    width   : 100%;

    &.side-margin-nano   { width: calc(100% -  2vw); }
    &.side-margin-micro  { width: calc(100% -  4vw); }
    &.side-margin-tiny   { width: calc(100% -  8vw); }
    &.side-margin-small  { width: calc(100% - 16vw); }
    &.side-margin-medium { width: calc(100% - 24vw); }
    &.side-margin-large  { width: calc(100% - 36vw); }
    &.side-margin-huge   { width: calc(100% - 48vw); }

    @media all and (min-width : 2400px) {
        &.side-margin-tiny   { width: calc(100% -  16vw); }
        &.side-margin-small  { width: calc(100% -  24vw); }
        &.side-margin-medium { width: calc(100% - 32vw); }
        &.side-margin-large  { width: calc(100% - 48vw); }
        &.side-margin-huge   { width: calc(100% - 64vw); }
    }

    @media all and (max-width : 1600px) {
        &.side-margin-tiny   { width: calc(100% -  4vw); }
        &.side-margin-small  { width: calc(100% -  8vw); }
        &.side-margin-medium { width: calc(100% - 16vw); }
        &.side-margin-large  { width: calc(100% - 24vw); }
        &.side-margin-huge   { width: calc(100% - 32vw); }
    }

    @media all and (max-width : 1200px) {
        &.side-margin-tiny   { width: calc(100% -  4vw); }
        &.side-margin-small  { width: calc(100% -  8vw); }
        &.side-margin-medium { width: calc(100% - 12vw); }
        &.side-margin-large  { width: calc(100% - 16vw); }
        &.side-margin-huge   { width: calc(100% - 20vw); }
    }

    @media all and (max-width : 600px) {
        &[class*="side-margin-"] {
            width: calc(100% - 12vw);
        }
    }

    &.primary   {
        background-color : ${(props: HRProps) => props.theme.hr.primary.bg};
        height           : ${(props: HRProps) => props.theme.hr.primary.height};
    }

    &.secondary {
        background-color : ${(props: HRProps) => props.theme.hr.secondary.bg};
        height           : ${(props: HRProps) => props.theme.hr.secondary.height};
    }

    &.tertiary  {
        background-color : ${(props: HRProps) => props.theme.hr.tertiary.bg};
        height           : ${(props: HRProps) => props.theme.hr.tertiary.height};
    }
`;
