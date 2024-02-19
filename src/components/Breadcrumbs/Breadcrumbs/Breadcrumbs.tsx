import React from "react";

import { Element } from "../../Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./breadcrumbs.css";

export type BreadcrumbsWrapperElementType = HTMLDivElement;
export type BreadcrumbsWrapperProps = CommonAndHTMLProps<BreadcrumbsWrapperElementType>;

export const Breadcrumbs = React.forwardRef(
    ({ ...props }: BreadcrumbsWrapperProps, ref: React.Ref<BreadcrumbsWrapperElementType>) => {
        return (
            <Element<BreadcrumbsWrapperElementType>
                as="ul"
                data-breadcrumbs-wrapper
                ref={ref}
                {...props}
            />
        );
    }
);
