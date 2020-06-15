import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemsGroupStyled } from "./SidebarItemsGroup.styled";


export type SidebarItemsGroupElementType = HTMLDivElement;
export type SidebarItemsGroupProps       = CommonAndHTMLProps<SidebarItemsGroupElementType>;

export const SidebarItemsGroup = ({ ...props }: SidebarItemsGroupProps) => {
    return (
        <Element<SidebarItemsGroupElementType>
            as={SidebarItemsGroupStyled}
            {...props}
        />
    );
}
