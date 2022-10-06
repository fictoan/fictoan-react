import React from "react";

import { Element } from "../Element";
import { CommonAndHTMLProps } from "../Element/constants";
import { useClickOutside } from "../../hooks/UseClickOutside";

import { InfoPanelStyled } from "./InfoPanel.styled";

// prettier-ignore
export interface InfoPanelCustomProps {
    width               ? : "tiny" | "small" | "medium" | "large" | "huge";
    isOpen              ? : boolean;
    onCloseCallback     ? : () => void;
    closeOnClickOutside ? : boolean;
}

export type InfoPanelElementType = HTMLDivElement;
export type InfoPanelProps = Omit<CommonAndHTMLProps<InfoPanelElementType>, keyof InfoPanelCustomProps> &
    InfoPanelCustomProps;

export const InfoPanel = React.forwardRef(
    (
        { width = "medium", isOpen, children, onCloseCallback, closeOnClickOutside, padding, ...props }: InfoPanelProps,
        ref: React.Ref<InfoPanelElementType>
    ) => {
        let classNames = [];
        const infoPanelRef = React.useRef<InfoPanelElementType>(null);

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
        useClickOutside(ref ?? infoPanelRef, () => {
            if (closeOnClickOutside) closeInfoPanel();
        });

        return (
            !!isOpen && (
                <Element<InfoPanelElementType>
                    as={InfoPanelStyled}
                    ref={ref ?? infoPanelRef}
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
