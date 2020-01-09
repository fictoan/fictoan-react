import React from "react";

import { Element }   from "../Element/Element";

import { BreadcrumbItemStyled } from "./Breadcrumb.styled";
import { BreadcrumbProps, BreadcrumbItemElementType } from "./constants";

export const BreadcrumbItem = ({ ...props }: BreadcrumbProps) => {
    return (
        <Element<BreadcrumbItemElementType>
            as={BreadcrumbItemStyled}
            {...props}
        />
    );
}
