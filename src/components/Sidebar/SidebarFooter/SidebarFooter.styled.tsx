import styled from "styled-components";

import { SidebarFooterProps } from "./SidebarFooter"

export const SidebarFooterStyled = styled.footer`
    display          : grid;
    width            : 100%;
    align-self       : end;
    order            : 1;
    position         : sticky;
    bottom           : 0;
    left             : 0;
    margin           : 0;
    margin-top       : auto;
    background-color : ${(props: SidebarFooterProps) => props.theme.sidebar.footer.bg};
    border-top       : 1px solid ${(props: SidebarFooterProps) => props.theme.sidebar.footer.borderTop};
`;
