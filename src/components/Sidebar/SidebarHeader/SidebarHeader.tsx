// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";

// STYLES ==============================================================================================================
import "./sidebar-header.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../../Element/constants";

// prettier-ignore
export interface SidebarHeaderCustomProps {
    isSticky ? : boolean;
}

export type SidebarHeaderElementType = HTMLDivElement;
export type SidebarHeaderNewProps = Omit<CommonAndHTMLProps<SidebarHeaderElementType>, keyof SidebarHeaderCustomProps>
    & SidebarHeaderCustomProps;

export const SidebarHeader = React.forwardRef(
    ({ isSticky, ...props }: SidebarHeaderNewProps, ref: React.Ref<SidebarHeaderElementType>) => {
        let classNames = [];

        if (isSticky) {
            classNames.push("is-sticky");
        }

        return (
            <Element<SidebarHeaderElementType>
                as="header"
                data-sidebar-header
                ref={ref}
                classNames={classNames}
                {...props}
            />
        );
    }
);
