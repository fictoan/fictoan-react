import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarFooterStyled } from "./SidebarFooter.styled";

export type SidebarFooterElementType = HTMLDivElement;
export type SidebarFooterProps       = CommonAndHTMLProps<SidebarFooterElementType>;

export const SidebarFooter = ({ ...props }: SidebarFooterProps) => {
    return (
        <Element<SidebarFooterElementType>
            as={SidebarFooterStyled}
            {...props}
        />
    );
}
