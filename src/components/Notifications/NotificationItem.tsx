import React, { SyntheticEvent } from "react";

import { createClassName } from "src/utils/classNames"
import { Element } from "../Element/Element";

import { NotificationsItemStyled } from "./Notifications.styled"
import { NotificationItemProps, NotificationItemElementType } from "./constants";

export const NotificationItem = ({type, children, isDismissible, className, onCloseButtonClick, ...props}: NotificationItemProps) => {
    const onDismissClick = (event: SyntheticEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (onCloseButtonClick) {
            onCloseButtonClick();
        }
    };

    const classNames = [ className ];

    if (type) {
        classNames.push(type);
    }

    if (isDismissible) {
        classNames.push("dismissible");
    }

    return (
        <Element<NotificationItemElementType>
            as={NotificationsItemStyled}
            className={createClassName(classNames)}
            {...props}
        >
            <div className="notification-content">
                {children}
            </div>

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
