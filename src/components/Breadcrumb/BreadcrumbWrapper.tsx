import React from "react";

import { BaseComponent } from "../BaseComponent/BaseComponent";

import {  BreadcrumbWrapperStyled } from "./Breadcrumb.styled";
import { BreadcrumbProps, BreadcrumbWrapperElementType } from "./constants";

export const BreadcrumbWrapper = (props: BreadcrumbProps) => {
    return (
        <BaseComponent<BreadcrumbWrapperElementType>
            Element={BreadcrumbWrapperStyled}
            {...props}
        />
    );
}