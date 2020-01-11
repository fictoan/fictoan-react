import React from "react";

import { createClassName } from "src/utils/classNames"
import { Element } from "../Element/Element";

import { NotificationsItemStyled } from "./Notifications.styled"
import { NotificationItemProps, NotificationItemElementType } from "./constants";

export const NotificationItem = ({type, children, isDismissible, className, ...props}: NotificationItemProps) => {
    const classNames = [ className, "ff-notification" ]

    if (type) {
        classNames.push(type)
    }

    if (isDismissible) {
        classNames.push("dismissible")
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
                <div className="dismiss-button" />
            )}
        </Element>
    );
}
