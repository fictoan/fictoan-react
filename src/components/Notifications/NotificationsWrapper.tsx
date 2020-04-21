import React from "react";

import { Element } from "../Element/Element";

import { NotificationsWrapperStyled } from "./Notifications.styled"
import { NotificationsWrapperProps, NotificationsWrapperElementType } from "./constants";

export const NotificationsWrapper = ({ position, anchor, className, ...props }: NotificationsWrapperProps) => {
    const classNames = [ className ]

    if (position) {
        classNames.push(position)
    }

    if (anchor) {
        classNames.push(anchor)
    }

    return (
        <Element<NotificationsWrapperElementType>
            as={NotificationsWrapperStyled}
            classNames={classNames}
            {...props}
        />
    );
}
