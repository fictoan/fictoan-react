import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarLinksGroupStyled } from "./SidebarLinksGroup.styled";


export type SidebarLinksGroupElementType = HTMLDivElement;
export type SidebarLinksGroupProps       = CommonAndHTMLProps<SidebarLinksGroupElementType>;

export const SidebarLinksGroup = ({ ...props }: SidebarLinksGroupProps) => {
    return (
        <Element<SidebarLinksGroupElementType>
            as={SidebarLinksGroupStyled}
            {...props}
        />
    );
}
