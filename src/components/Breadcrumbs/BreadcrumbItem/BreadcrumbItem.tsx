import React from "react";

import { Element } from "../../Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./breadcrumb-item.css";

export type BreadcrumbItemElementType = HTMLLIElement;
export interface BreadcrumbItemProps extends CommonAndHTMLProps<BreadcrumbItemElementType> {
    children   : React.ReactNode;
    current  ? : boolean;
}

export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
    ({ children, current, ...props }, ref) => {
        return (
            <Element
                as="li"
                data-breadcrumb-item
                ref={ref}
                {...props}
                aria-current={current ? "page" : undefined}
            >
                {children}
            </Element>
        );
    }
);
