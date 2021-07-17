import styled from "styled-components";

import { BreadcrumbWrapperProps } from "./BreadcrumbWrapper";


export const BreadcrumbWrapperStyled = styled.nav`
    display          : flex;
    flex-wrap        : wrap;
    align-items      : flex-start;
    background-color : ${(props : BreadcrumbWrapperProps) => props.theme.breadcrumb.wrapper.bg};
    box-shadow       : 0 1px 1px -1px rgba(0, 0, 0, 0.08);
`;
