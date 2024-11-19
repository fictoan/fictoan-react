// FRAMEWORK ===========================================================================================================
import React, { useEffect } from "react";

// FICTOAN =============================================================================================================
import { Element } from "../Element/Element";
import { Text } from "../Typography/Text";

// STYLES ==============================================================================================================
import "./modal.css";

// TYPES ===============================================================================================================
import { CommonAndHTMLProps } from "../Element/constants";

export type ModalElementType = HTMLDivElement;

export interface ModalCustomProps {
    id              : string;
    isDismissible ? : boolean;
    showBackdrop  ? : boolean;
    blurBackdrop  ? : boolean;
    label         ? : string;
    description   ? : string;
}

export type ModalProps = Omit<CommonAndHTMLProps<ModalElementType>, keyof ModalCustomProps> & ModalCustomProps;

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Modal = React.forwardRef(
    (
        {
            id,
            children,
            classNames = [],
            isDismissible = true,
            showBackdrop,
            blurBackdrop,
            label,
            description,
            ...props
        }: ModalProps, ref: React.Ref<ModalElementType>,
    ) => {
        const modalId       = `${id}`;
        const descriptionId = description ? `${modalId}-description` : undefined;

        if (showBackdrop) {
            classNames.push("show-backdrop");
        }

        if (blurBackdrop) {
            classNames.push("blur-backdrop");
        }

        // Handle Escape key
        useEffect(() => {
            const handleEscape = (e: KeyboardEvent) => {
                if (e.key === "Escape" && isDismissible) {
                    hideModal(id);
                }
            };

            document.addEventListener("keydown", handleEscape);
            return () => document.removeEventListener("keydown", handleEscape);
        }, [ id, isDismissible ]);

        return (
            <Element<ModalElementType>
                as="dialog"
                id={modalId}
                data-modal
                // @ts-ignore
                popover={isDismissible ? "auto" : "manual"}
                ref={ref}
                classNames={classNames}
                role="dialog"
                aria-modal="true"
                aria-label={label || "Modal dialog"}
                aria-describedby={descriptionId}
                {...props}
            >
                {isDismissible && (
                    <Text
                        className="dismiss-button"
                        onClick={() => hideModal(id)}
                        aria-label="Close modal"
                        tabIndex={0}
                    >
                        &times;
                    </Text>
                )}
                {description && (
                    <div id={descriptionId} className="sr-only">
                        {description}
                    </div>
                )}
                <div role="document">
                    {children}
                </div>
            </Element>
        );
    },
);

// MODAL METHODS ///////////////////////////////////////////////////////////////////////////////////////////////////////
export const showModal = (modalId: string) => {
    const modal = document.querySelector(`#modal-${modalId}[data-modal]`);
    if (modal instanceof HTMLElement) {
        modal.showPopover();
        // Focus trap
        const focusableElements = modal.querySelectorAll(
            "button, [href], input, select, textarea, [tabindex]:not([tabindex=\"-1\"])",
        );
        if (focusableElements.length) {
            (focusableElements[0] as HTMLElement).focus();
        }
    }
};

export const hideModal = (modalId: string) => {
    const modal = document.querySelector(`#modal-${modalId}[data-modal]`);
    if (modal instanceof HTMLElement) {
        modal.hidePopover();
        // Return focus to trigger element if possible
        if (document.activeElement instanceof HTMLElement) {
            document.activeElement.blur();
        }
    }
};

export const toggleModal = (modalId: string) => {
    const modal = document.querySelector(`#modal-${modalId}[data-modal]`);
    if (modal instanceof HTMLElement) {
        modal.matches(":popover-open") ? hideModal(modalId) : showModal(modalId);
    }
};
