import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarWrapperStyled } from "./SidebarWrapper.styled";


export interface SidebarWrapperCustomProps {
    collapsed ? : boolean;
}

export type SidebarWrapperElementType = HTMLDivElement;
export type SidebarWrapperProps       = CommonAndHTMLProps<SidebarWrapperElementType> & SidebarWrapperCustomProps;

export const SidebarWrapper = ({
    collapsed,
    ...props
}: SidebarWrapperProps) => {
    let classNames = [];

    if (collapsed) {
        classNames.push("collapsed");
    }

    return (
        <Element<SidebarWrapperElementType>
            as={SidebarWrapperStyled}
            classNames={classNames}
            {...props}
        />
    );
}
