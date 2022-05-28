import styled from "styled-components";

import { BottomDrawerProps } from "./BottomDrawer";


export const BottomDrawerStyled = styled.div`
    //TODO: Add ability to theme overlay and add appropriate props
    .rest-of-page-overlay {
        position         : fixed;
        top              : 0;
        left             : 0;
        width            : 100vw;
        height           : 100vh;
        backdrop-filter  : blur(20px);
        background-color : ${(props: BottomDrawerProps) => `hsla(0, 0%, 0%, ${props.overlayOpacity}`});
        z-index          : 5000;
    }

    .bottom-drawer-content-wrapper {
        position         : fixed;
        bottom           : 0;
        transform        : translateY(120%);
        height           : fit-content;
        max-height       : 90vh;
        transition       : all 0.4s ease-in-out;
        transition-delay : 0.2s;
        box-shadow       : 4px 0 24px -16px rgba(0, 0, 0, 0.92);
        z-index          : 100000;
        width            : 100%;
        border-radius    : 24px 24px 0 0;

        &.padding-all-nano   { padding : 8px; }
        &.padding-all-micro  { padding : 24px; }
        &.padding-all-tiny   { padding : 2vw; }
        &.padding-all-small  { padding : 4vw; }
        &.padding-all-medium { padding : 6vw; }
        &.padding-all-large  { padding : 8vw; }
        &.padding-all-huge   { padding : 12vw; }

        &:not([class*="bg-"]) {
            background-color : ${(props: BottomDrawerProps) => props.theme.bottomDrawer.bg};
        }
    }

    &.open .bottom-drawer-content-wrapper { transform : translateY(0); }

    & .dismiss-button {
        position         : absolute;
        display          : flex;
        width            : 32px;
        height           : 32px;
        background-color : ${(props: BottomDrawerProps) => props.theme.bottomDrawer.bg};
        top              : -36px;
        right            : 24px;
        z-index          : 100001;
        color            : ${(props: BottomDrawerProps) => props.theme.bottomDrawer.dismissButton.color};
        cursor           : pointer;
        place-content    : center;
        backdrop-filter  : blur(2px);
        border           : solid ${(props: BottomDrawerProps) => props.theme.bottomDrawer.border};
        border-width     : 1px 0 1px 1px;
        border-radius    : 50%;
        box-shadow       : -4px 0 4px -1px rgba(0, 0, 0, 8%);

        &::before {
            display            : grid;
            content            : "\\00D7";
            place-self         : center;
            color              : ${(props: BottomDrawerProps) => props.theme.bottomDrawer.dismissButton.color};
            -webkit-transition : all 0.2s;
            transition         : all 0.2s;
            cursor             : pointer;
            align-self         : center;
            text-align         : center;
            margin-bottom      : 5px;
            line-height        : 1;
            font-size          : 24px;
        }
    }
`;
