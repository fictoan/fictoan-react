import React, { HTMLProps, ReactElement, ElementType } from "react";
import { createClassName } from "src/utils/classNames";

export type BaseProps = {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
};

export const BaseComponent = <K extends {}>({
    Element = "div",
    baseClassName,
    className,
    ...props
}: HTMLProps<K> & BaseProps) => (
    <Element {...props} className={createClassName([baseClassName, className])} />
);
