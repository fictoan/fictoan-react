import styled from "styled-components";

import { SidebarFooterProps } from "./SidebarFooter"

export const SidebarFooterStyled = styled.footer`
    display          : grid;
    align-self       : end;
    bottom           : 0;
    margin           : 0;
    background-color : ${(props: SidebarFooterProps) => props.theme.sidebar.footer.bg};
    border-top       : 1px solid ${(props: SidebarFooterProps) => props.theme.sidebar.footer.borderTop};

    &.is-sticky {
        position : fixed;
        width    : 240px;
    }
`;
