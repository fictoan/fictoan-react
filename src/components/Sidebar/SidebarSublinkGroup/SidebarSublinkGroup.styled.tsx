import styled from "styled-components";

import { SidebarSublinkGroupProps } from "../constants";

export const SidebarSublinkGroupStyled = styled.div`
    margin           : 0;
    background-color : ${(props: SidebarSublinkGroupProps) => props.theme.sidebar.links.group.default.bg};
    box-shadow       : inset 0 2px 2px -2px rgba(0, 0, 0, 0.16);

    a.active { display : block; }

    .sidebar-sublink {
        color       : ${(props: SidebarSublinkGroupProps) => props.theme.sidebar.links.group.default.text};
        font-weight : 400;
        margin      : 0 24px;
    }
`