import React, { useState, useEffect, SyntheticEvent } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { NotificationsItemStyled } from "./NotificationItem.styled";

// prettier-ignore
export interface NotificationItemCustomProps {
    kind            ? : "info" | "warning" | "error" | "success";
    show              : boolean;
    isDismissible   ? : boolean;
    onCloseCallback   : () => void;
    showFor         ? : number;
}

export type NotificationItemElementType = HTMLDivElement;
export type NotificationItemProps = Omit<CommonAndHTMLProps<NotificationItemElementType>, keyof NotificationItemCustomProps> & NotificationItemCustomProps;

export const NotificationItem = React.forwardRef(
    (
        { show, onCloseCallback, kind, children, isDismissible, showFor, ...props }: NotificationItemProps,
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
                      onCloseCallback();
                  }, showFor ?? 8000)
                : undefined;

            return () => {
                clearTimeout(timer);
            };
        }, [show]);

        if (kind) {
            classNames.push(kind);
        }

        if (isDismissible) {
            classNames.push("dismissible");
        }

        const onDismissClick = (event: SyntheticEvent<HTMLDivElement>) => {
            event.preventDefault();
            onCloseCallback();
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
                    <Element as="div" padding="nano" className="notification-content">
                        {children}
                    </Element>

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
