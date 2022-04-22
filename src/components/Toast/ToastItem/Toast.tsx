import React, { useState, useEffect } from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { ToastStyled } from "./Toast.styled";

// prettier-ignore
export interface ToastCustomProps {
    show            ? : boolean;
    timeout         ? : number;
    onCloseCallback   : () => void;
}

export type ToastElementType = HTMLDivElement;
export type ToastProps = Omit<CommonAndHTMLProps<ToastElementType>, keyof ToastCustomProps> & ToastCustomProps;

export const Toast = React.forwardRef(
    (
        { show, children, timeout, onCloseCallback, ...props }: ToastProps,
        ref: React.Ref<ToastElementType>
    ) => {
        let classNames: string[] = [];
        const [isVisible, setIsVisible] = useState<boolean>(show);

        useEffect(() => {
            if (show) { setIsVisible(true); }

            const timer = show
                ? setTimeout(() => {
                    onCloseCallback();
                }, timeout ?? 4000)
                : undefined;

            return () => {
                clearTimeout(timer);
            };
        }, [show]);

        const onTransitionEnd = () => {
            if (!show) setIsVisible(false);
        };

        return (
            isVisible && (
                <Element<ToastElementType>
                    as={ToastStyled}
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
