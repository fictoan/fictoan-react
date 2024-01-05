import React, { useState, useEffect } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./toast-item.css";

// prettier-ignore
export interface ToastItemCustomProps {
    show            ? : boolean;
    showFor         ? : number;
    onCloseCallback ? : () => void;
}

export type ToastItemElementType = HTMLDivElement;
export type ToastItemProps = Omit<CommonAndHTMLProps<ToastItemElementType>, keyof ToastItemCustomProps> &
    ToastItemCustomProps;

export const ToastItem = React.forwardRef(
    ({ show, children, showFor, onCloseCallback, ...props }: ToastItemProps, ref: React.Ref<ToastItemElementType>) => {
        let classNames: string[] = [];
        const [isVisible, setIsVisible] = useState<boolean>(show ?? false);

        useEffect(() => {
            if (show) {
                setIsVisible(true);
            }

            const timer = show
                ? setTimeout(() => {
                    onCloseCallback?.();
                }, showFor ?? 4000)
                : undefined;

            return () => {
                timer && clearTimeout(timer);
            };
        }, [show]);

        const onTransitionEnd = () => {
            if (!show) setIsVisible(false);
        };

        return (
            isVisible && (
                <Element<ToastItemElementType>
                    as="div"
                    data-toast-item
                    classNames={[...classNames, show ? "visible" : ""]}
                    onTransitionEnd={onTransitionEnd}
                    padding="nano"
                    {...props}
                >
                    {children}
                </Element>
            )
        );
    }
);
