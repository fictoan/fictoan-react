import styled from "styled-components";

import { SidebarItemProps } from "../constants";

export const SidebarItemStyled = styled.div`
    display               : grid;
    align-items           : center;
    grid-template-columns : 48px 1fr;
    grid-template-rows    : 40px;
    margin                : 4px 0;

    &> a { width : unset; }

    &:hover {
        color            : ${(props: SidebarItemProps) => props.theme.sidebar.links.onHover.text};
        background-color : ${(props: SidebarItemProps) => props.theme.sidebar.links.onHover.bg};
    }

    &.sidebar-sublink { font-weight : 400 !important; }

    &.has-alert {
        position : relative;
        width    : fit-content;
    }

    &.has-alert::after {
        display          : block;
        content          : "";
        position         : absolute;
        top              : calc(50% - 3px);
        right            : -12px;
        height           : 8px;
        width            : 8px;
        border-radius    : 50%;
        background-color : ${(props: SidebarItemProps) => props.theme.sidebar.links.hasAlert.bg};
    }

    &.bottom-section {
        display          : grid;
        align-self       : end;
        position         : fixed;
        bottom           : 0;
        width            : 240px;
        border-top       : 1px solid ${(props: SidebarItemProps) => props.theme.sidebar.bottomSection.border};
        background-color : white;
        margin           : 0;
        padding          : 4px;
    }
`