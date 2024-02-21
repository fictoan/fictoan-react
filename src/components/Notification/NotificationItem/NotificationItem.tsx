import React, { useState, useEffect, SyntheticEvent } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./notification-item.css";

// prettier-ignore
export interface NotificationItemCustomProps {
    kind             ? : "info" | "warning" | "error" | "success";
    showWhen           : boolean;
    isDismissible    ? : boolean;
    closeWhen          : () => void;
    secondsToShowFor ? : number;
}

export type NotificationItemElementType = HTMLDivElement;
export type NotificationItemProps = Omit<CommonAndHTMLProps<NotificationItemElementType>, keyof NotificationItemCustomProps> & NotificationItemCustomProps;

export const NotificationItem = React.forwardRef(
    (
        { showWhen, closeWhen, kind, children, isDismissible, secondsToShowFor, ...props }: NotificationItemProps,
        ref: React.Ref<NotificationItemElementType>
    ) => {
        let classNames: string[] = [];

        const [isVisible, setIsVisible] = useState<boolean>(showWhen);

        useEffect(() => {
            if (showWhen) {
                setIsVisible(true);
            }

            const timer = showWhen
                ? setTimeout(() => {
                      closeWhen();
                  }, (secondsToShowFor ?? 8) * 1000) // Default value is 8 seconds
                : undefined;

            return () => {
                timer && clearTimeout(timer);
            };
        }, [showWhen]);

        if (kind) {
            classNames.push(kind);
        }

        if (isDismissible) {
            classNames.push("dismissible");
        }

        const onDismissClick = (event: SyntheticEvent<HTMLDivElement>) => {
            event.preventDefault();
            closeWhen();
        };

        const onTransitionEnd = () => {
            if (!showWhen) setIsVisible(false);
        };

        return (
            isVisible && (
                <Element<NotificationItemElementType>
                    as="div"
                    data-notification-item
                    ref={ref}
                    classNames={[...classNames, !showWhen ? "dismissed" : ""]}
                    onTransitionEnd={onTransitionEnd}
                    {...props}
                >
                    {children}

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
