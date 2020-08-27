import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemStyled } from "./SidebarItem.styled";

export type SidebarItemElementType = HTMLDivElement;
export type SidebarItemProps = CommonAndHTMLProps<SidebarItemElementType>;

export const SidebarItem = React.forwardRef(
    ({ ...props }: SidebarItemProps, ref: React.Ref<SidebarItemElementType>) => {
        return <Element<SidebarItemElementType> as={SidebarItemStyled} ref={ref} {...props} />;
    }
);
