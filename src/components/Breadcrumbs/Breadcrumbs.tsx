// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element";

// STYLES ==============================================================================================================
import "./breadcrumbs.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

export type BreadcrumbsElementType = HTMLDivElement;
export interface BreadcrumbsProps extends CommonAndHTMLProps<BreadcrumbsElementType> {
    children : React.ReactNode;
}

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

export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
    ({ children, ...props }, ref) => {
        // Helper function to check if child is already a BreadcrumbItem
        const isBreadcrumbItem = (child: React.ReactNode): boolean => {
            return React.isValidElement(child) &&
                child.type === BreadcrumbItem;
        };

        // Process children to wrap them in BreadcrumbItem if needed
        const processedChildren = React.Children.map(children, (child, index) => {
            if (!React.isValidElement(child)) return child;

            // If it's already a BreadcrumbItem, return as is
            if (isBreadcrumbItem(child)) return child;

            // Otherwise wrap it in a BreadcrumbItem
            // The last item gets the current prop
            const isLast = index === React.Children.count(children) - 1;
            return (
                <BreadcrumbItem current={isLast}>
                    {child}
                </BreadcrumbItem>
            );
        });

        return (
            <nav aria-label="Breadcrumb" ref={ref} {...props}>
                <Element as="ul" data-breadcrumbs-wrapper>
                    {processedChildren}
                </Element>
            </nav>
        );
    }
);
