import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { BreadcrumbWrapperStyled } from "./BreadcrumbWrapper.styled";


export type BreadcrumbWrapperElementType = HTMLDivElement;
export type BreadcrumbWrapperProps       = CommonAndHTMLProps<BreadcrumbWrapperElementType>;

export const BreadcrumbWrapper = ({ ...props }: BreadcrumbWrapperProps) => {
    return (
        <Element<BreadcrumbWrapperElementType>
            as={BreadcrumbWrapperStyled}
            {...props}
        />
    );
}
