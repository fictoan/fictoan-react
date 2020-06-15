import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarLinkStyled } from "./SidebarLink.styled";


export type SidebarLinkElementType = HTMLDivElement;
export type SidebarLinkProps       = CommonAndHTMLProps<SidebarLinkElementType>;

export const SidebarLink = ({ ...props }: SidebarLinkProps) => {
    return (
        <Element<SidebarLinkElementType>
            as={SidebarLinkStyled}
            {...props}
        />
    );
}
