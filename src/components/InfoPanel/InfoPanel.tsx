import React from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { InfoPanelStyled } from "./InfoPanel.styled";

// prettier-ignore
export interface InfoPanelCustomProps {
    width           ? : "tiny" | "small" | "medium" | "large" | "huge";
    isOpen          ? : boolean;
    onCloseCallback ? : () => void;
}

export type InfoPanelElementType = HTMLDivElement;
export type InfoPanelProps = CommonAndHTMLProps<InfoPanelElementType> & InfoPanelCustomProps;

export const InfoPanel = React.forwardRef(
    (
        { width = "medium", isOpen, children, onCloseCallback, padding, ...props }: InfoPanelProps,
        ref: React.Ref<InfoPanelElementType>
    ) => {
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
        };

        return (
            !!isOpen && (
                <Element<InfoPanelElementType>
                    as={InfoPanelStyled}
                    ref={ref}
                    classNames={classNames}
                    padding={padding ?? "tiny"}
                    {...props}
                >
                    <Element as="div" className="dismiss-button" onClick={closeInfoPanel} role="button" />
                    <Element as="div" className="info-panel-content-wrapper">
                        {children}
                    </Element>
                </Element>
            )
        );
    }
);
