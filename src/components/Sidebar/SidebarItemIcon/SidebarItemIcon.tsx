import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarItemIconStyled } from "./SidebarItemIcon.styled";

// prettier-ignore
export interface SidebarItemIconCustomProps {
    iconType ? : "stroked" | "filled";
}

export type SidebarItemIconElementType = HTMLDivElement;
export type SidebarItemIconProps = Omit<
    CommonAndHTMLProps<SidebarItemIconElementType>,
    keyof SidebarItemIconCustomProps
> &
    SidebarItemIconCustomProps;

export const SidebarItemIcon = React.forwardRef(
    ({ iconType, ...props }: SidebarItemIconProps, ref: React.Ref<SidebarItemIconElementType>) => {
        let classNames = [];

        if (iconType) {
            classNames.push(`icon-${iconType}`);
        }

        return (
            <Element<SidebarItemIconElementType>
                as={SidebarItemIconStyled}
                ref={ref}
                classNames={classNames}
                {...props}
            />
        );
    }
);
