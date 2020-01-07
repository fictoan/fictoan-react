import React, { ReactElement } from "react";

import { createClassName } from "src/utils/classNames"
import { BaseComponent } from "../BaseComponent/BaseComponent";

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
        <BaseComponent<NotificationItemElementType>
            Element={NotificationsItemStyled}
            className={createClassName(classNames)}
            {...props}
        >
            <div className="notification-content">
                {children}
            </div>

            {isDismissible && (
                <div className="dismiss-button" />
            )}
        </BaseComponent>
    )
};
