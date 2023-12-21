import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface NotificationItemCustomProps {
    kind?: "info" | "warning" | "error" | "success";
    show: boolean;
    isDismissible?: boolean;
    onCloseCallback: () => void;
    showFor?: number;
}
export declare type NotificationItemElementType = HTMLDivElement;
export declare type NotificationItemProps = Omit<CommonAndHTMLProps<NotificationItemElementType>, keyof NotificationItemCustomProps> & NotificationItemCustomProps;
export declare const NotificationItem: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof NotificationItemCustomProps> & NotificationItemCustomProps & React.RefAttributes<HTMLDivElement>>;
