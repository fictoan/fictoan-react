import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { BreadcrumbItemStyled } from "./BreadcrumbItem.styled";


export type BreadcrumbItemElementType = HTMLLIElement;
export type BreadcrumbItemProps       = CommonAndHTMLProps<BreadcrumbItemElementType>;

export const BreadcrumbItem = ({ ...props }: BreadcrumbItemProps) => {
    return (
        <Element<BreadcrumbItemElementType>
            as={BreadcrumbItemStyled}
            {...props}
        />
    );
}
