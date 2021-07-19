import React, { useEffect } from "react";

import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";

import { InfoPanelStyled } from "./InfoPanel.styled";

// prettier-ignore
export interface InfoPanelCustomProps {
    width               ? : "tiny" | "small" | "medium" | "large" | "huge";
    isOpen              ? : boolean;
    onCloseCallback     ? : () => void;
    closeOnClickOutside ? : boolean;
}

export type InfoPanelElementType = HTMLDivElement;
export type InfoPanelProps = CommonAndHTMLProps<InfoPanelElementType> & InfoPanelCustomProps;


export const InfoPanel = React.forwardRef((
    {
        width,
        isOpen,
        children,
        onCloseCallback,
        closeOnClickOutside,
        ...props
    }: InfoPanelProps, ref: React.Ref<InfoPanelElementType>) => {
        useEffect(() => {
            const handleEsc = (event: KeyboardEvent) => {
                if (event.key === "Escape") {
                    onCloseCallback();
                }
            };
            window.addEventListener("keydown", handleEsc);
            if (closeOnClickOutside) {
                window.addEventListener("click", closeInfoPanel);
                window.addEventListener("touchstart", closeInfoPanel);
            }
            return () => {
                window.removeEventListener("keydown", handleEsc);
                window.removeEventListener("click", closeInfoPanel);
                window.removeEventListener("touchstart", closeInfoPanel);
            };
        }, [onCloseCallback, closeOnClickOutside]);

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
                    padding="tiny"
                    width="medium"
                    {...props}
                >
                    <div className="dismiss-button" onClick={closeInfoPanel} role="button"/>
                    {children}
                </Element>
            )
        );
    }
);
