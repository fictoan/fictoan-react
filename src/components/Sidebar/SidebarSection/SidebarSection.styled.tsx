import styled from "styled-components";

import { SidebarItemStyled } from "../SidebarItem/SidebarItem.styled"

export const SidebarSectionStyled = styled.div`
    ${SidebarItemStyled} {
        grid-template-rows : 24px;
    }
`