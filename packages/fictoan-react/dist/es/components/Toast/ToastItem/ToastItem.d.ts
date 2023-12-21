import React from "react";
import { CommonAndHTMLProps } from "../../Element/constants";
export interface ToastItemCustomProps {
    show?: boolean;
    showFor?: number;
    onCloseCallback?: () => void;
}
export declare type ToastItemElementType = HTMLDivElement;
export declare type ToastItemProps = Omit<CommonAndHTMLProps<ToastItemElementType>, keyof ToastItemCustomProps> & ToastItemCustomProps;
export declare const ToastItem: React.ForwardRefExoticComponent<Omit<CommonAndHTMLProps<HTMLDivElement>, keyof ToastItemCustomProps> & ToastItemCustomProps & React.RefAttributes<HTMLDivElement>>;
