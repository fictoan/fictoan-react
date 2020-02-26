import styled from "styled-components";

import { SidebarFooterProps } from "../constants"

export const SidebarFooterStyled = styled.div`
    display          : grid;
    align-self       : end;
    position         : fixed;
    bottom           : 0;
    width            : 240px;
    border-top       : 1px solid ${(props: SidebarFooterProps) => props.theme.sidebar.footer.borderTop};
    background-color : ${(props: SidebarFooterProps) => props.theme.sidebar.footer.bg};
    margin           : 0;
    /* padding          : 4px; */
`