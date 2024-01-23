import React, { useRef, useImperativeHandle } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { useClickOutside } from "../../../hooks/UseClickOutside";

import "./sidebar-wrapper.css";

// prettier-ignore
export interface SidebarWrapperCustomProps {
    collapsed           ? : boolean;
    closeOnClickOutside ? : () => void;
    showMobileSidebar   ? : boolean;
}

export type SidebarWrapperElementType = HTMLDivElement;
export type SidebarWrapperProps = Omit<CommonAndHTMLProps<SidebarWrapperElementType>, keyof SidebarWrapperCustomProps> &
    SidebarWrapperCustomProps;

export const SidebarWrapper = React.forwardRef(
    (
        {
            collapsed,
            closeOnClickOutside,
            showMobileSidebar,
            ...props
        }: SidebarWrapperProps, forwardedRef: React.Ref<SidebarWrapperElementType>) => {

        const internalRef = useRef<HTMLDivElement>(null);

        // @ts-ignore
        useImperativeHandle(forwardedRef, () => internalRef.current);

        useClickOutside(internalRef, () => {
            if (typeof closeOnClickOutside === "function") {
                closeOnClickOutside();
            }
        });

        let classNames = [];

        if (collapsed) {
            classNames.push("collapsed");
        }

        if (showMobileSidebar) {
            classNames.push("show-sidebar");
        }

        return (
            <Element<SidebarWrapperElementType>
                as="aside"
                data-sidebar-wrapper
                ref={internalRef}
                classNames={classNames}
                {...props}
            />
        );
    },
);
