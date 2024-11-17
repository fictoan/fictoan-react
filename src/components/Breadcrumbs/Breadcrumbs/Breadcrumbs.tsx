// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element";

// STYLES ==============================================================================================================
import "./breadcrumbs.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";

export type BreadcrumbsElementType = HTMLDivElement;
export interface BreadcrumbsProps extends CommonAndHTMLProps<BreadcrumbsElementType> {
    children : React.ReactNode;
}

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
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
