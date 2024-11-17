// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element";

// STYLES ==============================================================================================================
import "./breadcrumb-item.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";

// prettier-ignore
export type BreadcrumbItemElementType = HTMLLIElement;
export interface BreadcrumbItemProps extends CommonAndHTMLProps<BreadcrumbItemElementType> {
    children   : React.ReactNode;
    current  ? : boolean;
}

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
    ({ children, current, ...props }, ref) => {
        return (
            <Element
                as="li"
                data-breadcrumb-item
                ref={ref}
                {...props}
                aria-current={current ? "page" : undefined}
                className={current ? "current" : undefined}
                role="navigation"
                aria-label="List of breadcrumbs"
            >
                {children}
            </Element>
        );
    }
);
