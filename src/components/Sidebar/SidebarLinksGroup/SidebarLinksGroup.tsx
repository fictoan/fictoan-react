import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarLinksGroupStyled } from "./SidebarLinksGroup.styled";

type SidebarLinksGroupElementType = HTMLDivElement;
type SidebarLinksGroupProps       = CommonAndHTMLProps<SidebarLinksGroupElementType>;


export const SidebarLinksGroup = (props: SidebarLinksGroupProps) => {
    return (
        <Element<SidebarLinksGroupElementType>
            as={SidebarLinksGroupStyled}
            {...props}
        />
    );
};
