import styled from "styled-components";

import { BreadcrumbWrapperProps } from "./BreadcrumbWrapper";


export const BreadcrumbWrapperStyled = styled.nav`
    display          : flex;
    flex-wrap        : wrap;
    align-items      : flex-start;
    box-shadow       : 0 1px 1px -1px rgba(0, 0, 0, 0.08);
    
    &:not([class*="bg-"]) {
        background-color : ${(props : BreadcrumbWrapperProps) => props.theme.breadcrumbs.wrapper.bg};
    }
`;
