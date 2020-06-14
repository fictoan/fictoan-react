import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarExpandingLinkStyled } from "./SidebarExpandingLink.styled";

export type SidebarLinksGroupElementType = HTMLDivElement;
export type SidebarLinksGroupProps       = CommonAndHTMLProps<SidebarLinksGroupElementType>;


export const SidebarExpandingLink = (props: SidebarLinksGroupProps) => {
    return (
        <Element<SidebarLinksGroupElementType>
            as={SidebarExpandingLinkStyled}
            {...props}
        />
    );
}
