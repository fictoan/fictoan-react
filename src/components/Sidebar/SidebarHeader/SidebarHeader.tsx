import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarHeaderStyled } from "./SidebarHeader.styled";

export type SidebarHeaderElementType = HTMLDivElement;
export type SidebarHeaderProps       = CommonAndHTMLProps<SidebarHeaderElementType>;

export const SidebarHeader = ({ ...props }: SidebarHeaderProps) => {
    return (
        <Element<SidebarHeaderElementType>
            as={SidebarHeaderStyled}
            {...props}
        />
    );
}
