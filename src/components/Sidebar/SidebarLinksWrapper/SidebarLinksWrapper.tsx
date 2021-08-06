import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarLinksWrapperStyled } from "./SidebarLinksWrapper.styled";

export type SidebarLinksWrapperElementType = HTMLDivElement;
export type SidebarLinksWrapperProps = CommonAndHTMLProps<SidebarLinksWrapperElementType>;

export const SidebarLinksWrapper = React.forwardRef(
    ({ ...props }: SidebarLinksWrapperProps, ref: React.Ref<SidebarLinksWrapperElementType>) => {
        return <Element<SidebarLinksWrapperElementType> as={SidebarLinksWrapperStyled} ref={ref} {...props} />;
    }
);
