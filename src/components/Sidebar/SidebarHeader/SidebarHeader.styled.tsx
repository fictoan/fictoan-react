import styled from "styled-components";

import { SidebarHeaderProps } from "./SidebarHeader";

export const SidebarHeaderStyled = styled.header`
    display          : flex;
    width            : 100%;
    min-height       : 80px;
    align-content    : center;
    order            : -1;
    align-items      : center;
    justify-content  : center;
    transition       : all 0.4s ease-in-out;
    background-color : ${(props : SidebarHeaderProps) => props.theme.sidebar.header.bg};
    border-bottom    : 1px solid ${(props : SidebarHeaderProps) => props.theme.sidebar.header.borderBottom};

    &.is-sticky {
        position : sticky;
        top      : 0;
        left     : 0;
    }

    * {
        line-height : 1;
        text-align  : center;
    }

    .header-logo {
        display : block;
        width   : ${(props : SidebarHeaderProps) => props.theme.sidebar.header.logoWidth};
    }

    .header-icon {
        display : none;
    }
`;
