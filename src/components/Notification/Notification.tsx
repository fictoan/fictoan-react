import React from "react";

import { createClassName } from "src/utils/classNames"

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface NotificationProps extends Omit<BaseAndHTMLProps<HTMLDivElement>, "shape"> {
    type?: "info" | "warning" | "error" | "success";
    position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
    isDismissible?:boolean;
    content?:"string";
}

const Notification = ({type, position, content, isDismissible, className, ...props}: NotificationProps) => {
    const classNames = [
        className, "ff-notification"
    ]

    if (type) {
        classNames.push(type)
    }

    if (position) {
        classNames.push(position)
    }

    if (isDismissible) {
        classNames.push("dismissible")
    }

    return (
        <BaseComponent<HTMLDivElement>
            Element="div"
            baseClassName="ff-notification"
            className={createClassName(classNames)}
            {...props}
        >
            <p className="notification-content">{content}</p>

            {isDismissible && (
                <div className="dismiss-button" />
            )}
        </BaseComponent>
    )
};

export default Notification;
