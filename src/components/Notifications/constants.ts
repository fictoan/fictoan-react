import { CommonAndHTMLProps } from "../Element/constants";

export type NotificationsWrapperElementType = HTMLDivElement;
export type NotificationItemElementType     = HTMLDivElement;

export interface NotificationsWrapperCustomProps {
    position : "left" | "right";
    anchor   : "top" | "bottom";
}

export interface NotificationItemCustomProps {
    type               ? : "info" | "warning" | "error" | "success";
    isDismissible      ? : boolean;
    onCloseButtonClick ? : () => void;
}

export type NotificationsWrapperProps = CommonAndHTMLProps<NotificationsWrapperElementType> & NotificationsWrapperCustomProps;
export type NotificationItemProps     = CommonAndHTMLProps<NotificationItemElementType> & NotificationItemCustomProps;
