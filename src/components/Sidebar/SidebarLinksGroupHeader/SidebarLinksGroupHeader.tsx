import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarLinksGroupHeaderStyled } from "./SidebarLinkGroupHeader.styled";


export type SidebarLinksGroupHeaderElementType = HTMLDivElement;
export type SidebarLinksGroupHeaderProps       = CommonAndHTMLProps<SidebarLinksGroupHeaderElementType>;

export const SidebarLinksGroupHeader = ({ ...props }: SidebarLinksGroupHeaderProps) => {
    return (
        <Element<SidebarLinksGroupHeaderElementType>
            as={SidebarLinksGroupHeaderStyled}
            {...props}
        />
    );
};
