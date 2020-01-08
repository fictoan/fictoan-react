import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { SidebarHeaderStyled } from "./SidebarHeader.styled";
import { SidebarHeaderProps, SidebarHeaderElementType } from "../constants";

export const SidebarHeader = (props: SidebarHeaderProps) => (
    <BaseComponent<SidebarHeaderElementType>
        Element={SidebarHeaderStyled}
        {...props}
    />
);
