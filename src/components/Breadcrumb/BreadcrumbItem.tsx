import React, { HTMLProps } from "react";

import { BaseComponent }   from "../BaseComponent/BaseComponent";
import { createClassName } from "src/utils/classNames";

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
