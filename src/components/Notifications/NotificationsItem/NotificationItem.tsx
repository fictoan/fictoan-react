import React, { useState, useEffect, SyntheticEvent } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { NotificationsItemStyled } from "./NotificationItem.styled";

// prettier-ignore
export interface NotificationItemCustomProps {
    onHide          : () => void;
    type          ? : "info" | "warning" | "error" | "success";
    isDismissible ? : boolean;
    timeout       ? : number;
}

export type NotificationItemElementType = HTMLDivElement;
export type NotificationItemProps = CommonAndHTMLProps<NotificationItemElementType> & NotificationItemCustomProps;

export const NotificationItem = React.forwardRef(
    (
        { type, children, isDismissible, onHide, timeout, ...props }: NotificationItemProps,
        ref: React.Ref<NotificationItemElementType>
    ) => {
        let classNames = [];
        const [isVisible, setIsVisible] = useState<boolean>(true);

        useEffect(() => {
            const timer = setTimeout(() => {
                setIsVisible(false);
                onHide();
            }, timeout ?? 8000);

            return () => {
                clearTimeout(timer);
            };
        }, []);

        if (type) {
            classNames.push(type);
        }

        if (isDismissible) {
            classNames.push("dismissible");
        }

        const onDismissClick = (event: SyntheticEvent<HTMLDivElement>) => {
            event.preventDefault();
            setIsVisible(false);
            onHide();
        };

        return (
            <Element<NotificationItemElementType>
                as={NotificationsItemStyled}
                classNames={[...classNames, !isVisible ? "dismissed" : ""]}
                {...props}
            >
                <div className="notification-content">{children}</div>

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
        );
    }
);
