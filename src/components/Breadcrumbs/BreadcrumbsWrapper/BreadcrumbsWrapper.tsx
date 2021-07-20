import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { BreadcrumbsWrapperStyled } from "./BreadcrumbsWrapper.styled";

export type BreadcrumbsWrapperElementType = HTMLDivElement;
export type BreadcrumbsWrapperProps = CommonAndHTMLProps<BreadcrumbsWrapperElementType>;

export const BreadcrumbsWrapper = React.forwardRef(
    ({ ...props }: BreadcrumbsWrapperProps, ref: React.Ref<BreadcrumbsWrapperElementType>) => {
        return <Element<BreadcrumbsWrapperElementType>
            as={BreadcrumbsWrapperStyled} ref={ref} {...props}
            paddingTop="nano" paddingBottom="nano"
        />;
    }
);
