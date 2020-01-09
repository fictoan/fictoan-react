import React from "react";

import { Element } from "../Element/Element";

import {  BreadcrumbWrapperStyled } from "./Breadcrumb.styled";
import { BreadcrumbProps, BreadcrumbWrapperElementType } from "./constants";

export const BreadcrumbWrapper = (props: BreadcrumbProps) => {
    return (
        <Element<BreadcrumbWrapperElementType>
            as={BreadcrumbWrapperStyled}
            {...props}
        />
    );
}
