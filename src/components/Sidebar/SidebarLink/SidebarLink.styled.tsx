import styled from "styled-components";

import { SidebarNestedLinksStyled } from "../SidebarNestedLinks/SidebarNestedLinks.styled";


export const SidebarLinkStyled = styled.div`
    ${SidebarNestedLinksStyled} {
        display        : none;
        height         : 0;
        flex-direction : column;
        transition     : all 0.2s;
    }

    & a.active ~ ${SidebarNestedLinksStyled} {
        display : flex;
        height  : auto;
    }
`;
