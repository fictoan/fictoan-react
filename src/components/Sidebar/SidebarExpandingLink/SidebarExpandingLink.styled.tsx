import styled from "styled-components";
import { SidebarSublinksStyled } from "../SidebarSublinks/SidebarSublinks.styled";

export const SidebarExpandingLinkStyled = styled.div`
    ${SidebarSublinksStyled} {
        display        : none;
        height         : 0;
        flex-direction : column;
        transition     : all 0.2s;
    }

    & a.active ~ ${SidebarSublinksStyled} {
        display : flex;
        height  : auto;
    }
`;
