import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarNestedLinksStyled } from "./SidebarNestedLinks.styled";


export type SidebarNestedLinksElementType = HTMLDivElement;
export type SidebarNestedLinksProps       = CommonAndHTMLProps<SidebarNestedLinksElementType>;

export const SidebarNestedLinks = ({ ...props }: SidebarNestedLinksProps) => {
    return (
        <Element<SidebarNestedLinksElementType>
            as={SidebarNestedLinksStyled}
            {...props}
        />
    );
}
