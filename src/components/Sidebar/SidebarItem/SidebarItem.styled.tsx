import styled from "styled-components";

import { SidebarItemProps } from "./SidebarItem";

export const SidebarItemStyled = styled.div`
    display               : grid;
    align-items           : center;
    grid-template-columns : 48px 1fr;
    grid-template-rows    : 40px;

    & > a { width : unset; }

    &:hover {
        color            : ${(props: SidebarItemProps) => props.theme.sidebar.links.onHover.text};
        background-color : ${(props: SidebarItemProps) => props.theme.sidebar.links.onHover.bg};
    }

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
`;
