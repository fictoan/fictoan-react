import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemStyled } from "./SidebarItem.styled";

export interface SidebarItemCustomProps {
    hasAlert?: boolean;
}

export type SidebarItemElementType = HTMLDivElement;
export type SidebarItemProps = Omit<CommonAndHTMLProps<SidebarItemElementType>, keyof SidebarItemCustomProps> &
    SidebarItemCustomProps;

export const SidebarItem = React.forwardRef(
    ({ hasAlert, ...props }: SidebarItemProps, ref: React.Ref<SidebarItemElementType>) => {
        let classNames = [];

        if (hasAlert) {
            classNames.push("has-alert");
        }

        return <Element<SidebarItemElementType> as={SidebarItemStyled} ref={ref} classNames={classNames} {...props} />;
    }
);
