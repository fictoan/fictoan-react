import React, { useState, useEffect, SyntheticEvent } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { NotificationsItemStyled } from "./NotificationItem.styled";

// prettier-ignore
export interface NotificationItemCustomProps {
    show            : boolean;
    onClose         : () => void;
    type          ? : "info" | "warning" | "error" | "success";
    isDismissible ? : boolean;
    timeout       ? : number;
}

export type NotificationItemElementType = HTMLDivElement;
export type NotificationItemProps = CommonAndHTMLProps<NotificationItemElementType> & NotificationItemCustomProps;

export const NotificationItem = React.forwardRef(
    (
        { show, onClose, type, children, isDismissible, timeout, ...props }: NotificationItemProps,
        ref: React.Ref<NotificationItemElementType>
    ) => {
        let classNames = [];
        const [isVisible, setIsVisible] = useState<boolean>(show);

        useEffect(() => {
            if (show) {
                setIsVisible(true);
            }

            const timer = show
                ? setTimeout(() => {
                      onClose();
                  }, timeout ?? 8000)
                : undefined;

            return () => {
                clearTimeout(timer);
            };
        }, [show]);

        if (type) {
            classNames.push(type);
        }

        if (isDismissible) {
            classNames.push("dismissible");
        }

        const onDismissClick = (event: SyntheticEvent<HTMLDivElement>) => {
            event.preventDefault();
            onClose();
        };

        const onTransitionEnd = () => {
            if (!show) setIsVisible(false);
        };

        return (
            isVisible && (
                <Element<NotificationItemElementType>
                    as={NotificationsItemStyled}
                    classNames={[...classNames, !show ? "dismissed" : ""]}
                    onTransitionEnd={onTransitionEnd}
                    padding="nano"
                    marginTop="nano"
                    marginBottom="nano"
                    {...props}
                >
                    <Element as="div" padding="nano" className="notification-content">{children}</Element>

                    {isDismissible && (
                        <div
                            className="dismiss-button"
                            onClick={onDismissClick}
                            onKeyDown={onDismissClick}
                            role="button"
                            tabIndex={-1}
                        />
                    )}
                </Element>
            )
        );
    }
);
