import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { InfoPanelStyled } from "./InfoPanel.styled";


export interface InfoPanelCustomProps {
    width           ? : "tiny" | "small" | "medium" | "large" | "huge";
    isOpen          ? : boolean;
    isDismissible   ? : boolean;
    onCloseCallback ? : () => void;
}

export type InfoPanelElementType = HTMLDivElement;
export type InfoPanelProps       = CommonAndHTMLProps<InfoPanelElementType> & InfoPanelCustomProps;

export const InfoPanel = ({
    width,
    className,
    isOpen,
    isDismissible,
    children,
    onCloseCallback,
    ...props
}: InfoPanelProps) => {
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
