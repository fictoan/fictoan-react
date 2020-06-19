import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { InfoPanelStyled } from "./InfoPanel.styled";


export interface InfoPanelCustomProps {
    width           ? : "tiny" | "small" | "medium" | "large" | "huge";
    isOpen          ? : boolean;
    onCloseCallback ? : () => void;
}

export type InfoPanelElementType = HTMLDivElement;
export type InfoPanelProps       = CommonAndHTMLProps<InfoPanelElementType> & InfoPanelCustomProps;

export const InfoPanel = ({
    width,
    isOpen,
    children,
    onCloseCallback,
    ...props
}: InfoPanelProps) => {
    let classNames = [];

    if (width) {
        classNames.push(width);
    }

    if (isOpen) {
        classNames.push("open");
    }

    const closeInfoPanel = () => {
        if (onCloseCallback) {
            onCloseCallback();
        }
    }

    return !!isOpen && (
        <Element<InfoPanelElementType>
            as={InfoPanelStyled}
            classNames={classNames}
            {...props}
        >
            <div
                className="dismiss-button"
                onClick={closeInfoPanel}
                role="button"
            />
            {children}
        </Element>
    );
}
