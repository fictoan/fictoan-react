import styled from "styled-components";

import { BreadcrumbProps } from "./constants";

export const BreadcrumbWrapperStyled = styled.nav`
    display          : flex;
    flex-direction   : row;
    flex-wrap        : wrap;
    align-items      : flex-start;
    padding          : 8px 24px;
    background-color : ${(props : BreadcrumbProps) => props.theme.breadcrumb.wrapper.bg};
    box-shadow       : 0 1px 1px -1px rgba(0, 0, 0, 0.08);
`

export const BreadcrumbItemStyled = styled.div`
    display      : inline-flex;
    margin-right : 20px;
    position     : relative;
    font-size    : 14px;
    color        : rgba($colorShade, 0.6);

    &::after {
        position : absolute;
        content  : "/";
        right    : -14px;
        color    : ${(props : BreadcrumbProps) => props.theme.breadcrumb.item.separator};
    }

    &:last-child,
    &:last-child a { color : rgba($colorShade, 1); }

    &:not(:last-child),
    &:not(:last-child) a { color : rgba($colorShade, 0.64); }

    &:last-child::after { content : ""; }
`