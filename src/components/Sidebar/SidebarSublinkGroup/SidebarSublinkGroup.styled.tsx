import styled from "styled-components";

import { SidebarSublinkGroupProps } from "../constants";

export const SidebarSublinkGroupStyled = styled.div`
    margin           : 0;
    background-color : ${(props: SidebarSublinkGroupProps) => props.theme.sidebar.links.group.bg};
    box-shadow       : inset 0 2px 2px -2px rgba(0, 0, 0, 0.16);

    &:hover { background-color : ${(props: SidebarSublinkGroupProps) => props.theme.sidebar.links.group.bgOnHover}; }

    a.active { display : block; }

    .sidebar-sublink {
        color       : ${(props: SidebarSublinkGroupProps) => props.theme.sidebar.links.group.text};
        font-weight : 400;
        margin      : 0 24px;

        &:hover { color : ${(props: SidebarSublinkGroupProps) => props.theme.sidebar.links.group.textOnHover}; }
    }
`