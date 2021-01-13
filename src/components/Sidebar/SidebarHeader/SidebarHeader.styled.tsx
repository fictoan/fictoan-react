import styled from "styled-components";

import { SidebarHeaderProps } from "./SidebarHeader";

export const SidebarHeaderStyled = styled.header`
    display          : flex;
    width            : 100%;
    height           : 80px;
    min-height       : 80px;
    align-content    : center;
    align-items      : center;
    justify-content  : center;
    background-color : ${(props: SidebarHeaderProps) => props.theme.sidebar.header.bg};
    border-bottom    : 1px solid ${(props: SidebarHeaderProps) => props.theme.sidebar.header.borderBottom};

    * {
        line-height : 1;
        text-align  : center;
    }

    .header-logo {
        display : block;
        width   : ${(props: SidebarHeaderProps) => props.theme.sidebar.header.logoWidth};
    }

    .header-icon { display : none; }
`;
