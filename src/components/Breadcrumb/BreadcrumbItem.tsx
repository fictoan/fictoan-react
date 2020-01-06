import React from "react";

import { BaseComponent }   from "../BaseComponent/BaseComponent";

import { BreadcrumbItemStyled } from "./Breadcrumb.styled";
import { BreadcrumbProps, BreadcrumbItemElementType } from "./constants";

export const BreadcrumbItem = ({ ...props }: BreadcrumbProps) => {
    return (
        <BaseComponent<BreadcrumbItemElementType>
            Element={BreadcrumbItemStyled}
            {...props}
        />
    );
}
