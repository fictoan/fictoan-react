import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { BottomDrawerStyled } from "./BottomDrawer.styled";

// prettier-ignore
export interface BottomDrawerCustomProps {
    isOpen          ? : boolean;
    onCloseCallback ? : () => void;
}

export type BottomDrawerElementType = HTMLDivElement;
export type BottomDrawerProps = Omit<CommonAndHTMLProps<BottomDrawerElementType>, keyof BottomDrawerCustomProps> & BottomDrawerCustomProps;

export const BottomDrawer = React.forwardRef(
    (
        { isOpen, children, onCloseCallback, padding, ...props }: BottomDrawerProps,
        ref: React.Ref<BottomDrawerElementType>
    ) => {
        let classNames = [];

        if (isOpen) {
            classNames.push("open");
        }

        const closeBottomDrawer = () => {
            if (onCloseCallback) {
                onCloseCallback();
            }
        };

        return (
            !!isOpen && (
                <Element<BottomDrawerElementType>
                    as={BottomDrawerStyled}
                    ref={ref}
                    classNames={classNames}
                    padding={padding ?? "tiny"}
                    {...props}
                >
                    <Element as="div" className="dismiss-button" onClick={closeBottomDrawer} role="button" />
                    {children}
                </Element>
            )
        );
    }
);
