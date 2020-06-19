import React, { SyntheticEvent } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { NotificationsItemStyled } from "./NotificationItem.styled";


export interface NotificationItemCustomProps {
    type               ? : "info" | "warning" | "error" | "success";
    isDismissible      ? : boolean;
    onCloseButtonClick ? : () => void;
}

export type NotificationItemElementType = HTMLDivElement;
export type NotificationItemProps       = CommonAndHTMLProps<NotificationItemElementType> & NotificationItemCustomProps;

export const NotificationItem = ({
    type,
    children,
    isDismissible,
    onCloseButtonClick,
    ...props
}: NotificationItemProps) => {
    let classNames = [];

    if (type) {
        classNames.push(type);
    }

    if (isDismissible) {
        classNames.push("dismissible");
    }

    const onDismissClick = (event: SyntheticEvent<HTMLDivElement>) => {
        event.preventDefault();

        if (onCloseButtonClick) {
            onCloseButtonClick();
        }
    }

    return (
        <Element<NotificationItemElementType>
            as={NotificationsItemStyled}
            classNames={classNames}
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
