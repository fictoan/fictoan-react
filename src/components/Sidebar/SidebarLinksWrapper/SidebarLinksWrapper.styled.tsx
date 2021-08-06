import styled from "styled-components";
import { SidebarLinksWrapperProps } from "./SidebarLinksWrapper";


export const SidebarLinksWrapperStyled = styled.footer`
    margin-top    : ${(props: SidebarLinksWrapperProps) => props.theme.sidebar.linksWrapper.marginTop};
    margin-bottom : ${(props: SidebarLinksWrapperProps) => props.theme.sidebar.linksWrapper.marginBottom};
`;
