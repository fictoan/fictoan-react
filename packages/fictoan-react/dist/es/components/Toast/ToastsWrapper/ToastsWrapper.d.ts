import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface NotificationsWrapperCustomProps {
    position?: "top" | "bottom";
}
export declare type NotificationsWrapperElementType = HTMLDivElement;
export declare type NotificationsWrapperProps = CommonAndHTMLProps<NotificationsWrapperElementType> & NotificationsWrapperCustomProps;
export declare const ToastsWrapper: React.ForwardRefExoticComponent<CommonAndHTMLProps<HTMLDivElement> & NotificationsWrapperCustomProps & React.RefAttributes<HTMLDivElement>>;
