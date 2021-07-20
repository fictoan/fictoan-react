import styled from "styled-components";

import { BreadcrumbsWrapperProps } from "./BreadcrumbsWrapper";


export const BreadcrumbsWrapperStyled = styled.nav`
    display     : flex;
    flex-wrap   : wrap;
    align-items : flex-start;
    box-shadow  : 0 1px 1px -1px rgba(0, 0, 0, 0.08);
    
    &:not([class*="bg-"]) {
        background-color : ${(props : BreadcrumbsWrapperProps) => props.theme.breadcrumbs.wrapper.bg};
    }
`;
