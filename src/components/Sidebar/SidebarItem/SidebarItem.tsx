import React from "react";

import { Element } from "../../Element/Element";

import { SidebarItemStyled } from "./SidebarItem.styled";
import { SidebarItemProps, SidebarItemElementType } from "../constants";

export const SidebarItem = ({...props}: SidebarItemProps) => {
    return (
        <Element<SidebarItemElementType>
            as={SidebarItemStyled}
            {...props}
        />
    );
}
