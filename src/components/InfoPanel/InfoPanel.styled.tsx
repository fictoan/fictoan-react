import styled from "styled-components";

import { InfoPanelProps } from "./InfoPanel";


export const InfoPanelStyled = styled.aside`
    position         : fixed;
    top              : 0;
    right            : 0;
    bottom           : 0;
    transform        : translateX(-42vw);
    min-height       : 100vh;
    transition       : all 0.4s ease-in-out;
    box-shadow       : 4px 0 24px -16px rgba(0, 0, 0, 0.92);
    z-index          : 100000;
    border-left      : 1px solid ${(props : InfoPanelProps) => props.theme.infoPanel.border};

    &.open { transform : translateX(0); }

    &:not([class*="bg-"]) {
        background-color : ${(props: InfoPanelProps) => props.theme.infoPanel.bg};
    }

    &.tiny   { width : 12vw; }
    &.small  { width : 16vw; }
    &.medium { width : 24vw; }
    &.large  { width : 32vw; }
    &.huge   { width : 40vw; }

    &.padding-all-nano   { padding :  8px; }
    &.padding-all-micro  { padding : 24px; }
    &.padding-all-tiny   { padding :  2vw; }
    &.padding-all-small  { padding :  4vw; }
    &.padding-all-medium { padding :  6vw; }
    &.padding-all-large  { padding :  8vw; }
    &.padding-all-huge   { padding : 12vw; }

    @media all and (max-width : 1400px) {
        &.tiny   { width : 12vw; }
        &.small  { width : 24vw; }
        &.medium { width : 32vw; }
        &.large  { width : 40vw; }
        &.huge   { width : 48vw; }
    }

    & .dismiss-button {
        position         : absolute;
        display          : flex;
        width            : 32px;
        height           : 32px;
        background-color : ${(props : InfoPanelProps) => props.theme.infoPanel.bg};
        top              : 16px;
        left             : -32px;
        z-index          : 100001;
        color            : ${(props : InfoPanelProps) => props.theme.infoPanel.dismissButton.color};
        cursor           : pointer;
        place-content    : center;
        backdrop-filter  : blur(2px);
        border           : solid ${(props : InfoPanelProps) => props.theme.infoPanel.border};
        border-width     : 1px 0 1px 1px;
        border-radius    : 4px 0 0 4px;
        box-shadow       : -4px 0 4px -1px rgba(0, 0, 0, 8%);

        &::before {
            display      : block;
            content      : "";
            width        : 12px;
            height       : 12px;
            place-self   : center;
            margin-right : 4px;
            border-style : solid;
            border-width : 2px 2px 0 0;
            transform    : rotate(45deg);
            color        : ${(props: InfoPanelProps) => props.theme.infoPanel.dismissButton.color};
            transition   : all 0.2s;
            cursor       : pointer;
        }
    }
    
    .info-panel-content-wrapper {
        width      : 100%;
        height     : 100%;
        overflow-y : auto;
    }
`;
