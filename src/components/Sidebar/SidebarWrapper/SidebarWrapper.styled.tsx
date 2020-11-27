import styled from "styled-components";

import { SidebarWrapperProps } from "./SidebarWrapper";
import { SidebarItemIconProps } from "../SidebarItemIcon/SidebarItemIcon";

import { SidebarHeaderStyled } from "../SidebarHeader/SidebarHeader.styled";
import { SidebarItemStyled } from "../SidebarItem/SidebarItem.styled"
import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled"
import { SidebarItemIconStyled } from "../SidebarItemIcon/SidebarItemIcon.styled"
import { SidebarItemsGroupStyled } from "../SidebarItemsGroup/SidebarItemsGroup.styled";
import { SidebarItemsGroupHeaderStyled } from "../SidebarItemsGroupHeader/SidebarItemsGroupHeader.styled";
import { SidebarFooterStyled } from "../SidebarFooter/SidebarFooter.styled";


export const SidebarWrapperStyled = styled.aside`
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

    /*  BASICS  ===========================================================  */
    * { user-select : none; }
    
    @media (max-width : 900px) {
        left    : -300px;
        z-index : 4000;
    }

    /*  COLLAPSED  ========================================================  */
    &.collapsed {
        width      : 48px;
        overflow-x : hidden;
        overflow-y : scroll;

        ${SidebarHeaderStyled} {
            .header-logo { display : none; }

            .header-icon {
                display : block;
                width   : 32px;
                height  : 32px;
            }
        }

        ${SidebarItemTextStyled} {
            display  : none;
            position : absolute;
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

        ${SidebarItemsGroupHeaderStyled}::after { display : none; }

        ${SidebarFooterStyled} {
            width        : 48px;
            padding-left : 0;
        }
    }

    //.sidebar-section {
    //    padding        : 12px 24px;
    //    display        : flex;
    //    flex-direction : column;
    //}

    a {
        width : unset;
        color : ${(props: SidebarWrapperProps) => props.theme.sidebar.links.default.text};
    }

    a.active {
        position         : relative;
        display          : block;
        background-color : ${(props: SidebarWrapperProps) => props.theme.sidebar.links.isSelected.bg};

        &::before {
            display                    : block;
            position                   : absolute;
            width                      : 4px;
            height                     : 100%;
            top                        : 0;
            left                       : 0;
            content                    : "";
            border-top-right-radius    : 4px;
            border-bottom-right-radius : 4px;
            background-color           : ${(props: SidebarWrapperProps) => props.theme.sidebar.links.isSelected.border};
        }
        
        & .icon-stroked svg {
            fill         : none;
            stroke       : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.stroked.isActive.line};
        }

        & .icon-filled svg {
            stroke : none;
            fill   : ${(props: SidebarItemIconProps) => props.theme.sidebar.icons.filled.isActive.bg};
        }

        p { color : ${(props : SidebarWrapperProps) => props.theme.sidebar.links.isSelected.text}; }
    }


    /*  For Open and Collapse groups  */
    ${SidebarItemsGroupStyled}       { position : relative; }
    ${SidebarItemsGroupStyled}:hover { cursor : pointer; }

    ${SidebarItemsGroupStyled} > ${SidebarItemsGroupHeaderStyled}::after {
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
        color        : ${(props: SidebarWrapperProps) => props.theme.sidebar.subLinks.chevron.border};
        transition   : all 0.2s;
        cursor       : pointer;
    }

    ${SidebarItemsGroupStyled}[open] > ${SidebarItemsGroupHeaderStyled}::after {
        transform : rotate(225deg);
        top       : 18px;
    }

    /* details a & {
        grid-template-rows: 24px;
    } */

    
`;
