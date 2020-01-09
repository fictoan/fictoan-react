import React, { ReactElement } from "react";

import { createClassName } from "../../utils/classNames"
import { Element }   from "../Element/Element";

import { NotificationsWrapperStyled } from "./Notifications.styled"
import { NotificationWrapperProps, NotificationWrapperElementType } from "./constants";

export const NotificationWrapper = ({ position, anchor, className, ...props }: NotificationWrapperProps) => {
    const classNames = [ className ]

    if (position) {
        classNames.push(position)
    }

    if (anchor) {
        classNames.push(anchor)
    }

    return (
        <Element<NotificationWrapperElementType>
            as={NotificationsWrapperStyled}
            className={createClassName(classNames)}
            {...props}
        />
    )
};