// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element";
import { Text } from "../Typography/Text";

// STYLES ==============================================================================================================
import "./breadcrumbs.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps, SpacingTypes } from "../Element/constants";

export type BreadcrumbsElementType = HTMLDivElement;
export interface BreadcrumbsProps extends CommonAndHTMLProps<BreadcrumbsElementType> {
    children    : React.ReactNode;
    separator ? : string;
    spacing   ? : SpacingTypes;
}

export type BreadcrumbItemElementType = HTMLLIElement;
export interface BreadcrumbItemProps extends CommonAndHTMLProps<BreadcrumbItemElementType> {
    children   : React.ReactNode;
    current  ? : boolean;
}

interface SeparatorProps {
    separator : string;
}

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
// BREADCRUMB ITEM =====================================================================================================
const BreadcrumbItem = React.forwardRef<HTMLLIElement, BreadcrumbItemProps>(
    ({ children, current, ...props }, ref) => {
        return (
            <Element
                as="li"
                data-breadcrumb-item
                ref={ref}
                {...props}
                aria-current={current ? "page" : undefined}
                className={current ? "current" : undefined}
                role="listitem"
            >
                <span className="breadcrumb-content">
                    {children}
                </span>
            </Element>
        );
    }
);

// SEPARATOR ===========================================================================================================
const Separator: React.FC<SeparatorProps> = ({ separator }) => (
    <Text
        className="breadcrumb-separator"
        aria-hidden="true"
        role="presentation"
        margin="none"
    >
        {separator}
    </Text>
);

// BREADCRUMBS =========================================================================================================
export const Breadcrumbs = React.forwardRef<HTMLDivElement, BreadcrumbsProps>(
    ({ children, separator = "/", spacing, ...props }, ref) => {
        let classNames = [];

        if (spacing) {
            classNames.push(`spacing-${spacing}`);
        }

        const childrenArray = React.Children.toArray(children).filter(Boolean);

        const processedChildren = childrenArray.reduce<React.ReactNode[]>((acc, child, index) => {
            if (!React.isValidElement(child)) return acc;

            const isLast = index === childrenArray.length - 1;

            let breadcrumbItem: React.ReactNode;
            if (child.type === BreadcrumbItem) {
                breadcrumbItem = React.cloneElement(child, {
                    ...child.props,
                    current: isLast
                });
            } else {
                breadcrumbItem = (
                    <BreadcrumbItem key={`item-${index}`} current={isLast}>
                        {child}
                    </BreadcrumbItem>
                );
            }

            acc.push(breadcrumbItem);

            if (!isLast) {
                acc.push(
                    <Separator key={`sep-${index}`} separator={separator} />
                );
            }

            return acc;
        }, []);

        return (
            <nav aria-label="Breadcrumb" ref={ref} {...props}>
                <Element
                    as="ul"
                    data-breadcrumbs-wrapper
                    role="list"
                    classNames={classNames}
                >
                    {processedChildren}
                </Element>
            </nav>
        );
    }
);
