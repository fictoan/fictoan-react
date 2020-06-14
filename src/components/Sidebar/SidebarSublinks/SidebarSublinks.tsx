import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarSublinksStyled } from "./SidebarSublinks.styled";


export type SidebarSublinksGroupElementType = HTMLDivElement;
export type SidebarSublinksGroupProps       = CommonAndHTMLProps<SidebarSublinksGroupElementType>;

export const SidebarSublinks = ({ ...props }: SidebarSublinksGroupProps) => {
    return (
        <Element<SidebarSublinksGroupElementType>
            as={SidebarSublinksStyled}
            {...props}
        />
    );
}
