import styled from "styled-components";

import { SidebarWrapperStyled } from "../Sidebar/SidebarWrapper/SidebarWrapper.styled"
import { ContentWrapperProps } from "./ContentWrapper";

export const ContentWrapperStyled = styled.main`
    width      : 100%;
    min-height : 100vh;
    transition : all 0.4s ease-in-out;

    ${SidebarWrapperStyled} + & {
        width       : ${(props: ContentWrapperProps) => `calc(100% - ${props.theme.sidebar.width})`};
        margin-left : ${(props: ContentWrapperProps) => props.theme.sidebar.width};
    }

    ${SidebarWrapperStyled}.collapsed + & {
        width       : ${(props: ContentWrapperProps) => `calc(100% - ${props.theme.sidebar.isCollapsed.width})`};
        margin-left : ${(props: ContentWrapperProps) => props.theme.sidebar.isCollapsed.width};
    }

    @media (max-width : 900px) {
        ${SidebarWrapperStyled} + & {
            width       : 100%;
            margin-left : 0;
        }
    }
`;
