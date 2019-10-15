import React, { HTMLProps, ReactElement, ElementType } from "react";
import { createClassName } from "src/utils/classNames";

export type BaseProps = {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
    bgColor?: string;
};

export const BaseComponent = <K extends {}>({
    Element = "div",
    baseClassName,
    className,
    bgColor,
    ...props
}: HTMLProps<K> & BaseProps) => (
    <Element {...props} className={createClassName([baseClassName, className, bgColor && `bg-${bgColor}`])} />
);
