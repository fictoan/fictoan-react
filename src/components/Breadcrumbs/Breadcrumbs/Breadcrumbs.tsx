import React from "react";

import { Element } from "../../Element";

import { CommonAndHTMLProps } from "../../Element/constants";

import "./breadcrumbs.css";

export type BreadcrumbsElementType = HTMLDivElement;
export interface BreadcrumbsProps extends CommonAndHTMLProps<BreadcrumbsElementType> {
    children : React.ReactNode;
}

export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
    ({ children, ...props }, ref) => {
        return (
            <nav aria-label="Breadcrumb" ref={ref} {...props}>
                <Element as="ul" data-breadcrumbs-wrapper>
                    {children}
                </Element>
            </nav>
        );
    }
);
