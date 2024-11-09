import React from "react";
import { Element } from "../Element/Element";
import { CommonAndHTMLProps } from "../Element/constants";
import { Text } from "../Typography/Text";

import "./modal.css";

export type ModalElementType = HTMLDivElement;

export interface ModalCustomProps {
    id              : string;
    isDismissible ? : boolean;
    showBackdrop  ? : boolean;
    blurBackdrop  ? : boolean;
}

export type ModalProps = Omit<CommonAndHTMLProps<ModalElementType>, keyof ModalCustomProps> &
    ModalCustomProps;

export const Modal = React.forwardRef(
    ({
         id,
         children,
         classNames = [],
         isDismissible,
         showBackdrop,
         blurBackdrop,
         ...props
     }: ModalProps,
     ref: React.Ref<ModalElementType>,
    ) => {

        if (showBackdrop) {
            classNames.push("show-backdrop");
        }

        if (blurBackdrop) {
            classNames.push("blur-backdrop");
        }

        return (
            <Element<ModalElementType>
                as="div"
                id={id}
                data-modal
                // @ts-ignore
                popover={isDismissible ? "auto" : "manual"}
                ref={ref}
                classNames={classNames}
                {...props}
            >
                {isDismissible && (
                    <Text
                        className="dismiss-button"
                        onClick={() => hideModal(id)}
                    >
                        &times;
                    </Text>
                )}
                {children}
            </Element>
        );
    },
);

// MODAL METHODS ///////////////////////////////////////////////////////////////////////////////////////////////////////
export const showModal = (modalId: string) => {
    const modal = document.querySelector(`#${modalId}[data-modal]`);
    if (modal instanceof HTMLElement) {
        // @ts-ignore - Popover API
        modal.showPopover();
    }
};

export const hideModal = (modalId: string) => {
    const modal = document.querySelector(`#${modalId}[data-modal]`);
    if (modal instanceof HTMLElement) {
        // @ts-ignore - Popover API
        modal.hidePopover();
    }
};

export const toggleModal = (modalId: string) => {
    const modal = document.querySelector(`#${modalId}[data-modal]`);
    if (modal instanceof HTMLElement) {
        // @ts-ignore - Popover API
        modal.matches(":popover-open") ? modal.hidePopover() : modal.showPopover();
    }
};
