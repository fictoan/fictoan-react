import { CommonAndHTMLProps } from "../Element/constants";

export type NotificationWrapperElementType = HTMLDivElement;
export type NotificationItemElementType    = HTMLDivElement;

export interface NotificationWrapperCustomProps {
    position ? :"left" | "right";
    anchor   ? : "top" | "bottom";
}

export interface NotificationItemCustomProps {
    type          ? : "info" | "warning" | "error" | "success";
    isDismissible ? : boolean;
}

export type NotificationWrapperProps = CommonAndHTMLProps<NotificationWrapperElementType> & NotificationWrapperCustomProps;
export type NotificationItemProps    = CommonAndHTMLProps<NotificationItemElementType> & NotificationItemCustomProps;
