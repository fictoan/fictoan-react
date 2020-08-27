import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarNestedLinksStyled } from "./SidebarNestedLinks.styled";

export type SidebarNestedLinksElementType = HTMLDivElement;
export type SidebarNestedLinksProps = CommonAndHTMLProps<SidebarNestedLinksElementType>;

export const SidebarNestedLinks = React.forwardRef(
    ({ ...props }: SidebarNestedLinksProps, ref: React.Ref<SidebarNestedLinksElementType>) => {
        return <Element<SidebarNestedLinksElementType> as={SidebarNestedLinksStyled} ref={ref} {...props} />;
    }
);
