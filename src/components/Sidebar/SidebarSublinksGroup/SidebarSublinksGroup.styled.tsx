import styled from "styled-components";

import { SidebarSublinksGroupProps } from "./SidebarSublinksGroup";
import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";

export const SidebarSublinksGroupStyled = styled.div`
    margin           : 0;
    background-color : ${(props: SidebarSublinksGroupProps) => props.theme.sidebar.subLinks.default.bg};
    box-shadow       : inset 0 2px 2px -2px rgba(0, 0, 0, 0.16);

    a.active { display : block; }

    ${SidebarItemTextStyled} {
        margin      : 0 24px;
        color       : ${(props: SidebarSublinksGroupProps) => props.theme.sidebar.subLinks.default.text};
        font-weight : ${(props: SidebarSublinksGroupProps) => props.theme.sidebar.subLinks.default.weight};
        font-size   : ${(props: SidebarSublinksGroupProps) => props.theme.sidebar.subLinks.default.scale}%;
    }
`;
