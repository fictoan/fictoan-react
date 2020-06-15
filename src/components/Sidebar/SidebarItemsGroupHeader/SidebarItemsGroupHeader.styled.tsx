import styled from "styled-components";

import { SidebarItemsGroupHeaderProps } from "./SidebarItemsGroupHeader";

export const SidebarItemsGroupHeaderStyled = styled.summary`
    font-weight : ${(props: SidebarItemsGroupHeaderProps) => props.theme.sidebar.subLinks.header.weight};
`;
