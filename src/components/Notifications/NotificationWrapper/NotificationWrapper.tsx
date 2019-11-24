import React, { ReactElement } from "react";

import { createClassName } from "../../../utils/classNames"

import { BaseComponent } from "../../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../../BaseComponent/typings";

interface NotificationWrapperProps extends BaseAndHTMLProps<HTMLDivElement> {
    position?:"left" | "right";
    anchor?: "top" | "bottom";
}

const NotificationWrapper = ({ position, anchor, className, ...props }: NotificationWrapperProps) => {
    const classNames = [
        className
    ]

    if (position) {
        classNames.push(position)
    }

    if (anchor) {
        classNames.push(anchor)
    }

    return (
        <BaseComponent<HTMLDivElement>
            Element="div"
            baseClassName="ff-notification-wrapper"
            className={createClassName(classNames)}
            {...props}
        />
    )
};

export default NotificationWrapper;
