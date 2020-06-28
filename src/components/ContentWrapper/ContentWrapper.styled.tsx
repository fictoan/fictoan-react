import styled from "styled-components";

import { SidebarWrapperStyled } from "../Sidebar/SidebarWrapper/SidebarWrapper.styled"

export const ContentWrapperStyled = styled.main`
    display        : flex;
    flex-direction : column;
    width          : 100%;
    min-height     : 100vh;
    transition     : all 0.4s ease-in-out;

    ${SidebarWrapperStyled} + & {
        width       : calc(100% - 240px);
        margin-left : 240px;
    }

    ${SidebarWrapperStyled}.collapsed + & {
        width       : calc(100% - 48px);
        margin-left : 48px;
    }

    @media (max-width : 900px) {
        ${SidebarWrapperStyled} + & {
            width       : 100%;
            margin-left : 0;
        }
    }
`;
