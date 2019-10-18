import React, { HTMLProps, ElementType } from "react";

import { createClassName } from "src/utils/classNames";

import { BaseProps } from "./typings";


export interface BaseComponentProps extends BaseProps {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
};

export const BaseComponent = <K extends {}>({
    Element = "div",
    baseClassName,
    className,
    bgColor,
    textColor,
    ...props
}: HTMLProps<K> & BaseComponentProps) => (
    <Element {...props} className={
        createClassName([
            baseClassName,
            className,
            bgColor && `bg-${bgColor}`,
            textColor && `text-${textColor}`
            ]
        )}
    />
);
