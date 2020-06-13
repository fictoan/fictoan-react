import styled from "styled-components";

import { SidebarLinksGroupHeaderProps } from "./SidebarLinksGroupHeader";

export const SidebarLinksGroupHeaderStyled = styled.summary`
    font-weight : ${(props: SidebarLinksGroupHeaderProps) => props.theme.sidebar.subLinks.header.weight};
`
