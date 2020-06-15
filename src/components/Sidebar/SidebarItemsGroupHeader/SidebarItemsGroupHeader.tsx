import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemsGroupHeaderStyled } from "./SidebarItemsGroupHeader.styled";


export type SidebarItemsGroupHeaderElementType = HTMLDivElement;
export type SidebarItemsGroupHeaderProps       = CommonAndHTMLProps<SidebarItemsGroupHeaderElementType>;

export const SidebarItemsGroupHeader = ({ ...props }: SidebarItemsGroupHeaderProps) => {
    return (
        <Element<SidebarItemsGroupHeaderElementType>
            as={SidebarItemsGroupHeaderStyled}
            {...props}
        />
    );
};
