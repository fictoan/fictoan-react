import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarSublinksGroupStyled } from "./SidebarSublinksGroup.styled";


export type SidebarSublinksGroupElementType = HTMLDivElement;
export type SidebarSublinksGroupProps       = CommonAndHTMLProps<SidebarSublinksGroupElementType>;

export const SidebarSublinksGroup = (props: SidebarSublinksGroupProps) => {
    return (
        <Element<SidebarSublinksGroupElementType>
            as={SidebarSublinksGroupStyled}
            {...props}
        />
    );
}
