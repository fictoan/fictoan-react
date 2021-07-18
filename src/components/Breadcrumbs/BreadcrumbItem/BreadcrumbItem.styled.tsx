import styled from "styled-components";

import { BreadcrumbItemProps } from "./BreadcrumbItem";


export const BreadcrumbItemStyled = styled.li`
    display      : inline-flex;
    position     : relative;
    font-size    : 14px;

    &::after {
        position : absolute;
        content  : "/";
        right    : -14px;
        color    : ${(props : BreadcrumbItemProps) => props.theme.breadcrumbs.item.separator};
    }

    &:last-child,
    &:last-child a { color : ${(props: BreadcrumbItemProps) => props.theme.breadcrumbs.item.active}; }

    &:not(:last-child),
    &:not(:last-child) a { color : ${(props: BreadcrumbItemProps) => props.theme.breadcrumbs.item.inactive}; }

    &:last-child::after { content : ""; }
`;
