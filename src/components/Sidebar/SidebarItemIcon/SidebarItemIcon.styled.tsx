import styled from "styled-components";

import { SidebarItemIconProps } from "./SidebarItemIcon";

export const SidebarItemIconStyled = styled.div`
    align-self   : center;
    justify-self : center;
    display      : grid;
    width        : 16px;
    height       : 16px;

    &.icon-stroked svg {
        fill         : none;
        stroke       : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.default.stroked.line};
        stroke-width : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.default.stroked.thickness};
    }

    &.icon-filled svg {
        stroke : none;
        fill   : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.default.fill.bg};
    }

    &:hover.icon-stroked svg {
        fill         : none;
        stroke       : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.onHover.stroked.line};
        stroke-width : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.onHover.stroked.thickness};
    }

    &:hover.icon-filled svg {
        stroke : none;
        fill   : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.onHover.fill.bg};
    }

    &:active.icon-stroked svg {
        fill         : none;
        stroke       : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.isActive.stroked.line};
        stroke-width : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.isActive.stroked.thickness};
    }

    &:active.icon-filled svg {
        stroke : none;
        fill   : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.isActive.fill.bg};
    }
`;
