import styled from "styled-components";

export const SidebarHeaderStyled = styled.div`
    display         : flex;
    width           : 100%;
    height          : 80px;
    min-height      : 80px;
    align-content   : center;
    align-items     : center;
    justify-content : center;

    * {
        line-height : 1;
        max-width   : 50%;
    }

    .header-logo { display : block; }
    .header-icon { display : none; }
`