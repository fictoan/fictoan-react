import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemsGroupStyled } from "./SidebarItemsGroup.styled";

export type SidebarItemsGroupElementType = HTMLDivElement;
export type SidebarItemsGroupProps = CommonAndHTMLProps<SidebarItemsGroupElementType>;

export const SidebarItemsGroup = React.forwardRef(
    ({ ...props }: SidebarItemsGroupProps, ref: React.Ref<SidebarItemsGroupElementType>) => {
        return <Element<SidebarItemsGroupElementType> as={SidebarItemsGroupStyled} ref={ref} {...props} />;
    }
);
