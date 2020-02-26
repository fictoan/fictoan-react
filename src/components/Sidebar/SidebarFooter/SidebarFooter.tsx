import React from "react";

import { Element } from "../../Element/Element";

import { SidebarFooterStyled } from "./SidebarFooter.styled";
import { SidebarFooterProps, SidebarFooterElementType } from "../constants";

export const SidebarFooter = ({ ...props }: SidebarFooterProps) => {
    return (
        <Element<SidebarFooterElementType>
            as={SidebarFooterStyled}
            {...props}
        />
    );
}
