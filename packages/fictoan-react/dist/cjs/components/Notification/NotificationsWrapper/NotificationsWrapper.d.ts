import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface NotificationsWrapperCustomProps {
    position?: "left" | "right";
    anchor?: "top" | "bottom";
    order?: "new-on-top" | "new-on-bottom";
}
export declare type NotificationsWrapperElementType = HTMLDivElement;
export declare type NotificationsWrapperProps = CommonAndHTMLProps<NotificationsWrapperElementType> & NotificationsWrapperCustomProps;
export declare const NotificationsWrapper: React.ForwardRefExoticComponent<CommonAndHTMLProps<HTMLDivElement> & NotificationsWrapperCustomProps & React.RefAttributes<HTMLDivElement>>;
