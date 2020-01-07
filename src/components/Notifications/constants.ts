import { BaseAndHTMLProps } from "../BaseComponent/typings";

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

export type NotificationWrapperProps = BaseAndHTMLProps<NotificationWrapperElementType> & NotificationWrapperCustomProps;
export type NotificationItemProps    = BaseAndHTMLProps<NotificationItemElementType> & NotificationItemCustomProps;