import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { SidebarFooterStyled } from "./SidebarFooter.styled";

// prettier-ignore
export interface SidebarFooterCustomProps {
    isSticky ? : boolean;
}

export type SidebarFooterElementType = HTMLDivElement;
export type SidebarFooterProps = Omit<CommonAndHTMLProps<SidebarFooterElementType>, keyof SidebarFooterCustomProps> & SidebarFooterCustomProps;

export const SidebarFooter = React.forwardRef(
    ({isSticky,  ...props }: SidebarFooterProps, ref: React.Ref<SidebarFooterElementType>) => {
        let classNames = [];

        if (isSticky) {
            classNames.push("is-sticky");
        }

        return <Element<SidebarFooterElementType> as={SidebarFooterStyled} ref={ref} {...props} />;
    }
);
