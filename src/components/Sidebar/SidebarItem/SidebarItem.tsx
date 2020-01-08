import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SidebarItemStyled } from  "./SidebarItem.styled";
import { SidebarItemProps, SidebarItemElementType } from "../constants"

export const SidebarItem = (props: SidebarItemProps) => (
    <BaseComponent<SidebarItemElementType>
        Element={SidebarItemStyled}
        {...props}
    />
);