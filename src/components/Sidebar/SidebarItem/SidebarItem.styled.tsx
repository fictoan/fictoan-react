import styled from "styled-components";

import { SidebarItemProps } from "./SidebarItem";

export const SidebarItemStyled = styled.div`
    display               : grid;
    align-items           : center;
    grid-template-columns : ${(props: SidebarItemProps) => props.theme.sidebar.isCollapsed.width} 1fr;
    grid-template-rows    : 40px;

    & > a { width : unset; }

    &:hover {
        color            : ${(props: SidebarItemProps) => props.theme.sidebar.linksWrapper.links.onHover.text};
        background-color : ${(props: SidebarItemProps) => props.theme.sidebar.linksWrapper.links.onHover.bg};
    }

    &.has-alert {
        position : relative;
        
        &::after {
            content          : "";
            display          : block;
            position         : absolute;
            top              : 50%;
            transform        : translateY(-50%);
            pointer-events   : none;
            right            : 6px;
            height           : 8px;
            width            : 8px;
            border-radius    : 50%;
            background-color : ${(props: SidebarItemProps) => props.theme.sidebar.linksWrapper.links.hasAlert.bg};
        }
    }

`;
