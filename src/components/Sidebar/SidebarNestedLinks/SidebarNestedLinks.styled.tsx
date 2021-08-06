import styled from "styled-components";

import { SidebarNestedLinksProps } from "./SidebarNestedLinks";
import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";

export const SidebarNestedLinksStyled = styled.div`
    margin           : 0;
    background-color : ${(props: SidebarNestedLinksProps) => props.theme.sidebar.linksWrapper.subLinks.default.bg};

    a.active { display : block; }

    ${SidebarItemTextStyled} {
        margin-left : 16px;
        color       : ${(props: SidebarNestedLinksProps) => props.theme.sidebar.linksWrapper.subLinks.default.text};
        font-weight : ${(props: SidebarNestedLinksProps) => props.theme.sidebar.linksWrapper.subLinks.default.weight};
        font-size   : ${(props: SidebarNestedLinksProps) => props.theme.sidebar.linksWrapper.subLinks.default.scale}%;
    }
`;
