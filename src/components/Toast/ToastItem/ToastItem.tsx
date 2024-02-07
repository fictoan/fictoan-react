import React, { useState, useEffect } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import "./toast-item.css";

// prettier-ignore
export interface ToastItemCustomProps {
    showWhen         ? : boolean;
    secondsToShowFor ? : number;
    closeWhen        ? : () => void;
}

export type ToastItemElementType = HTMLDivElement;
export type ToastItemProps = Omit<CommonAndHTMLProps<ToastItemElementType>, keyof ToastItemCustomProps> &
    ToastItemCustomProps;

export const ToastItem = React.forwardRef(
    ({ showWhen, children, secondsToShowFor, closeWhen, ...props }: ToastItemProps, ref: React.Ref<ToastItemElementType>) => {
        let classNames: string[]          = [];
        const [ isVisible, setIsVisible ] = useState<boolean>(showWhen ?? false);

        useEffect(() => {
            if (showWhen) {
                setIsVisible(true);
            }

            const timer = showWhen
                ? setTimeout(() => {
                    closeWhen?.();
                }, (secondsToShowFor ?? 4) * 1000) // Default value is 4 seconds
                : undefined;

            return () => {
                timer && clearTimeout(timer);
            };
        }, [showWhen, secondsToShowFor, closeWhen]);

        const onTransitionEnd = () => {
            if (!showWhen) setIsVisible(false);
        };

        return (
            isVisible && (
                <Element<ToastItemElementType>
                    as="div"
                    data-toast-item
                    classNames={[ ...classNames, showWhen ? "visible" : "" ]}
                    onTransitionEnd={onTransitionEnd}
                    shadow="soft"
                    {...props}
                >
                    {children}
                </Element>
            )
        );
    },
);
