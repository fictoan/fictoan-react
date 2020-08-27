import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { BreadcrumbWrapperStyled } from "./BreadcrumbWrapper.styled";

export type BreadcrumbWrapperElementType = HTMLDivElement;
export type BreadcrumbWrapperProps = CommonAndHTMLProps<BreadcrumbWrapperElementType>;

export const BreadcrumbWrapper = React.forwardRef(
    ({ ...props }: BreadcrumbWrapperProps, ref: React.Ref<BreadcrumbWrapperElementType>) => {
        return <Element<BreadcrumbWrapperElementType> as={BreadcrumbWrapperStyled} ref={ref} {...props} />;
    }
);
