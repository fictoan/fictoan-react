import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarHeaderStyled } from "./SidebarHeader.styled";

// prettier-ignore
export interface SidebarHeaderCustomProps {
    isSticky ? : boolean;
}

export type SidebarHeaderElementType = HTMLDivElement;
export type SidebarHeaderProps = Omit<CommonAndHTMLProps<SidebarHeaderElementType>, keyof SidebarHeaderCustomProps> & SidebarHeaderCustomProps;

export const SidebarHeader = React.forwardRef(
    ({isSticky, ...props }: SidebarHeaderProps, ref: React.Ref<SidebarHeaderElementType>) => {
        let classNames = [];

        if (isSticky) {
            classNames.push("is-sticky");
        }

        return <Element<SidebarHeaderElementType> as={SidebarHeaderStyled} ref={ref} classNames={classNames} {...props} />;
    }
);
