import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SidebarItemTextStyled } from "../SidebarItemText/SidebarItemText.styled";
import { SidebarItemTextProps, SidebarItemTextElementType } from "../constants";

export const SidebarItemText = ({ linkText, ...props }: SidebarItemTextProps) => (
    <BaseComponent<SidebarItemTextElementType>
        Element={SidebarItemTextStyled}
        baseClassName="sidebar-text"
        {...props}
    >
        {linkText}
    </BaseComponent>
);
