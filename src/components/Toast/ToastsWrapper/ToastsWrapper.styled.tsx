import styled from "styled-components";
import { SidebarWrapperStyled } from "../../Sidebar/SidebarWrapper/SidebarWrapper.styled";
import { ContentWrapperStyled } from "../../ContentWrapper/ContentWrapper.styled";


export const ToastsWrapperStyled = styled.div`
    position      : fixed;
    display       : grid;
    z-index       : 5000000;
    width         : 100%;
    justify-items : center;

    ${SidebarWrapperStyled} + ${ContentWrapperStyled} & {
        width : calc(100% - 240px);
    }

    &.top {
        top : -4vh;
    }

    &.bottom {
        bottom : -4vh;
    }
`;
