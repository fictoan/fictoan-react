import React from "react";

import { BaseComponent }    from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

import {  BreadcrumbWrapperStyled } from "./Breadcrumb.styled";
import { BreadcrumbProps, BreadcrumbWrapperElementType } from "./constants";

export const BreadcrumbWrapper = (props: BaseAndHTMLProps<HTMLDivElement>) => {
    return (
        <BaseComponent<BreadcrumbWrapperElementType>
            Element={BreadcrumbWrapperStyled}
            {...props}
        />
    );
}