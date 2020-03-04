import React from "react";

import { Element } from "../Element/Element";

import { InfoPanelStyled } from "./InfoPanel.styled"
import { InfoPanelProps, InfoPanelElementType } from "./constants";

export const InfoPanel = ({ isOpen, isDismissible, width, className, children, onCloseCallback, ...props }: InfoPanelProps) => {
    const closeInfoPanel = () => {
        if (onCloseCallback) {
            onCloseCallback();
        }
    };

    return !!isOpen && (
        <Element<InfoPanelElementType>
            as={InfoPanelStyled}
            classNames={[
                className,
                isOpen && "open",
                width
            ]}
            {...props}
        >
            {isDismissible && (
                <div
                    className="dismiss-button"
                    onClick={closeInfoPanel}
                    onKeyDown={closeInfoPanel}
                    role="button"
                    tabIndex={-1}
                />
            )}
            {children}
        </Element>
    );
}
