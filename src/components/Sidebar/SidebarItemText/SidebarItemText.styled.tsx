import styled from "styled-components";

import { SidebarItemTextProps } from "../constants";

export const SidebarItemTextStyled = styled.p`
    font-weight : ${(props: SidebarItemTextProps) => props.theme.sidebar.links.default.weight};
    margin      : 0;
    /* line-height : 1; */
    overflow    : hidden;
    -webkit-line-clamp  : 1;
`