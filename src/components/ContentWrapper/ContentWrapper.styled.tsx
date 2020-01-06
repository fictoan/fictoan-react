import styled from "styled-components";

export const ContentWrapperStyled = styled.div`
    display        : flex;
    flex-direction : column;
    width          : 100%;
    transition     : all 0.4s ease-in-out;

    & + .sidebar-wrapper {
        width       : calc(100% - 240px);
        margin-left : 240px;
    }

    & + .sidebar-wrapper.collapsed {
        width       : calc(100% - 48px);
        margin-left : 48px;
    }

    @media (max-width : 900px) {
        & + .sidebar-wrapper {
            width       : 100%;
            margin-left : 0;
        }
    }
`
