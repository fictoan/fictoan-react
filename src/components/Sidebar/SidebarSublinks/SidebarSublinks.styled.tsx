import styled from "styled-components";

import { SidebarSublinksGroupProps } from "./SidebarSublinks";
import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";

export const SidebarSublinksStyled = styled.div`
    margin           : 0;
    background-color : ${(props: SidebarSublinksGroupProps) => props.theme.sidebar.subLinks.default.bg};

    a.active { display : block; }

    ${SidebarItemTextStyled} {
        margin-left : 16px;
        color       : ${(props: SidebarSublinksGroupProps) => props.theme.sidebar.subLinks.default.text};
        font-weight : ${(props: SidebarSublinksGroupProps) => props.theme.sidebar.subLinks.default.weight};
        font-size   : ${(props: SidebarSublinksGroupProps) => props.theme.sidebar.subLinks.default.scale}%;
    }
`;
