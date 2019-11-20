import React, { ReactElement } from "react";

import { createClassName } from "src/utils/classNames"

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { BaseAndHTMLProps } from "../BaseComponent/typings";

interface NotificationProps extends Omit<BaseAndHTMLProps<HTMLDivElement>, "shape"> {
    type?: "info" | "warning" | "error" | "success";
    position?: "top-left" | "top-right" | "bottom-right" | "bottom-left";
    isDismissible?:boolean;
}

const Notification = ({type, position, children, isDismissible, className, ...props}: NotificationProps) => {
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
            <div className="notification-content">
                {children}
            </div>

            {isDismissible && (
                <div className="dismiss-button" />
            )}
        </BaseComponent>
    )
};

export default Notification;
