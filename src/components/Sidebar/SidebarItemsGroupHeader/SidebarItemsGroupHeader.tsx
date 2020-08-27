import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemsGroupHeaderStyled } from "./SidebarItemsGroupHeader.styled";

export type SidebarItemsGroupHeaderElementType = HTMLDivElement;
export type SidebarItemsGroupHeaderProps = CommonAndHTMLProps<SidebarItemsGroupHeaderElementType>;

export const SidebarItemsGroupHeader = React.forwardRef(
    ({ ...props }: SidebarItemsGroupHeaderProps, ref: React.Ref<SidebarItemsGroupHeaderElementType>) => {
        return <Element<SidebarItemsGroupHeaderElementType> as={SidebarItemsGroupHeaderStyled} ref={ref} {...props} />;
    }
);
