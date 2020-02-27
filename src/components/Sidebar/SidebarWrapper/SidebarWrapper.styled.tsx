import styled from "styled-components";
import { lighten } from "polished";

import { SidebarItemStyled } from "../SidebarItem/SidebarItem.styled"
import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled"
import { SidebarItemIconStyled } from "../SidebarItemIcon/SidebarItemIcon.styled"

import { SidebarWrapperProps } from "../constants";

export const SidebarWrapperStyled = styled.div`
    display          : flex;
    position         : fixed;
    top              : 0;
    left             : 0;
    bottom           : 0;
    flex-direction   : column;
    width            : 240px;
    min-height       : 100vh;
    overflow-y       : auto;
    transition       : all 0.4s ease-in-out;
    background-color : ${(props: SidebarWrapperProps) => props.theme.sidebar.body};
    box-shadow       : 2px 0 8px -4px rgba(0, 0, 0, 0.16);
    z-index          : 10000;
    font-size        : ${(props: SidebarWrapperProps) => props.theme.sidebar.links.default.scale}%;

    .sidebar-section {
        padding        : 12px 24px;
        display        : flex;
        flex-direction : column;
    }

    a {
        width : unset;
        color : ${(props: SidebarWrapperProps) => props.theme.sidebar.links.default.text};
    }

    a.active {
        display          : block;
        background-color : ${(props: SidebarWrapperProps) => props.theme.sidebar.links.isSelected.bg && lighten(.32, props.theme.sidebar.links.isSelected.bg)};
        border-left      : 4px solid ${(props: SidebarWrapperProps) => props.theme.sidebar.links.isSelected.bg};
    }

    @media (max-width : 900px) {
        left    : -300px;
        z-index : 4000;
    }

    /*  COLLAPSED  */
    &.collapsed {
        width      : 48px;
        overflow-x : hidden;
        overflow-y : scroll;

        .header-logo { display : none; }

        .header-icon {
            display : block;
            width   : 32px;
            height  : 32px;
        }
    }

    * { user-select : none; }

    /*  For Open and Collapse gorups  */
    details       { position : relative; }
    details:hover { cursor : pointer; }

    details > summary::after {
        display      : inline-block;
        position     : absolute;
        width        : 8px;
        height       : 8px;
        top          : 16px;
        right        : 18px;
        content      : "";
        border-style : solid;
        border-width : 0 2px 2px 0;
        transform    : rotate(45deg);
        color        : ${(props: SidebarWrapperProps) => props.theme.sidebar.links.group.chevron.border};
        transition   : all 0.2s;
        cursor       : pointer;
    }

    details[open] > summary::after {
        transform : rotate(225deg);
        top       : 22px;
    }

    /* details a & {
        grid-template-rows: 24px;
    } */

    &.collapsed {
        ${SidebarItemTextStyled} {
            display  : none;
            position : absolute;
        }

        ${SidebarItemStyled}:not(.bottom-section) {
            margin-left : 0;
            position    : relative;
        }

        ${SidebarItemStyled}:hover ${SidebarItemIconStyled} + ${SidebarItemTextStyled} {
            display          : flex;
            position         : fixed;
            left             : 40px;
            align-self       : center;
            border-radius    : 4px;
            margin-top       : 8px;
            padding          : 4px 8px;
            background-color : ${(props: SidebarWrapperProps) => props.theme.sidebar.isCollapsed.label.bg};
            color            : ${(props: SidebarWrapperProps) => props.theme.sidebar.isCollapsed.label.text};
            font-size        : 88%;
            box-shadow       : 0 4px 16px -2px rgba(0, 0, 0, 0.24);
        }

        details > summary::after { display : none; }

        .bottom-section {
            width        : 48px;
            padding-left : 0;
        }
    }
`