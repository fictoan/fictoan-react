import styled from "styled-components";

import { BottomDrawerProps } from "./BottomDrawer";


export const BottomDrawerStyled = styled.aside`
    position         : fixed;
    bottom           : 0;
    transform        : translateY(120%);
    height           : fit-content;
    transition       : all 0.4s ease-in-out;
    transition-delay : 0.2s;
    box-shadow       : 4px 0 24px -16px rgba(0, 0, 0, 0.92);
    z-index          : 100000;
    width            : 100%;
    border-radius    : 24px 24px 0 0;

    &.open { transform : translateY(0); }

    &:not([class*="bg-"]) {
        background-color : ${(props: BottomDrawerProps) => props.theme.bottomDrawer.bg};
    }

    & .dismiss-button {
        position         : absolute;
        display          : flex;
        width            : 32px;
        height           : 32px;
        background-color : ${(props : BottomDrawerProps) => props.theme.bottomDrawer.bg};
        top              : -36px;
        right            : 36px;
        z-index          : 100001;
        color            : ${(props : BottomDrawerProps) => props.theme.bottomDrawer.dismissButton.color};
        cursor           : pointer;
        place-content    : center;
        backdrop-filter  : blur(2px);
        border           : solid ${(props : BottomDrawerProps) => props.theme.bottomDrawer.border};
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
