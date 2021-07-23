import styled from "styled-components";

import { BreadcrumbItemProps } from "./BreadcrumbItem";


export const BreadcrumbItemStyled = styled.li`
    display   : inline-flex;
    position  : relative;
    font-size : 14px;

    &::after {
        position : absolute;
        right    : -14px;
        content  : ${(props : BreadcrumbItemProps) => props.theme.breadcrumbs.separator.content};
        color    : ${(props : BreadcrumbItemProps) => props.theme.breadcrumbs.separator.text};
    }

    &:last-child,
    &:last-child a {
        color : ${(props : BreadcrumbItemProps) => props.theme.breadcrumbs.item.active};
    }

    &:not(:last-child),
    &:not(:last-child) a {
        color : ${(props : BreadcrumbItemProps) => props.theme.breadcrumbs.item.inactive};
    }

    &:last-child::after {
        content : "";
    }
`;
