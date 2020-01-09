import React from "react";

import { Element } from "../../Element/Element";

import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";
import { SidebarItemTextProps, SidebarItemTextElementType } from "../constants";

export const SidebarItemText = ({ linkText, ...props }: SidebarItemTextProps) => (
    <Element<SidebarItemTextElementType>
        as={SidebarItemTextStyled}
        {...props}
    >
        {linkText}
    </Element>
);
