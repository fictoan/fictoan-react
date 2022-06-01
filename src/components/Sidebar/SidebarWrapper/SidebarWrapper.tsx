import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarWrapperStyled } from "./SidebarWrapper.styled";

// prettier-ignore
export interface SidebarWrapperCustomProps {
    collapsed ? : boolean;
}

export type SidebarWrapperElementType = HTMLDivElement;
export type SidebarWrapperProps = Omit<CommonAndHTMLProps<SidebarWrapperElementType>, keyof SidebarWrapperCustomProps> &
    SidebarWrapperCustomProps;

export const SidebarWrapper = React.forwardRef(
    ({ collapsed, ...props }: SidebarWrapperProps, ref: React.Ref<SidebarWrapperElementType>) => {
        let classNames = [];

        if (collapsed) {
            classNames.push("collapsed");
        }

        return <Element<SidebarWrapperElementType> as={SidebarWrapperStyled} classNames={classNames} {...props} />;
    }
);
