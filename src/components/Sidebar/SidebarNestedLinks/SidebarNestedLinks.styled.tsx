import styled from "styled-components";

import { SidebarNestedLinksProps } from "./SidebarNestedLinks";
import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";

export const SidebarNestedLinksStyled = styled.div`
    margin           : 0;
    background-color : ${(props: SidebarNestedLinksProps) => props.theme.sidebar.subLinks.default.bg};

    a.active { display : block; }

    ${SidebarItemTextStyled} {
        margin-left : 16px;
        color       : ${(props: SidebarNestedLinksProps) => props.theme.sidebar.subLinks.default.text};
        font-weight : ${(props: SidebarNestedLinksProps) => props.theme.sidebar.subLinks.default.weight};
        font-size   : ${(props: SidebarNestedLinksProps) => props.theme.sidebar.subLinks.default.scale}%;
    }
`;
