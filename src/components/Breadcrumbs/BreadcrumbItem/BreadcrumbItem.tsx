import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./breadcrumb-item.css";

export type BreadcrumbItemElementType = HTMLLIElement;
export type BreadcrumbItemProps = CommonAndHTMLProps<BreadcrumbItemElementType>;

export const BreadcrumbItem = React.forwardRef(
    ({ ...props }: BreadcrumbItemProps, ref: React.Ref<BreadcrumbItemElementType>) => {
        return (
            <Element<BreadcrumbItemElementType> as="li" data-breadcrumb-item ref={ref} {...props} />
        );
    }
);
