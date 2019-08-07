import React, { HTMLProps, ReactElement, ElementType } from "react";

export type BaseProps = {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
};

export const BaseComponent = <T, K extends HTMLProps<K>>({
    Element = "div",
    baseClassName,
    className,
    ...props
}: T & BaseProps) => {
    const classNames = [];

    if (baseClassName) {
        classNames.push(baseClassName);
    }
    if (className) {
        classNames.push(className);
    }

    return <Element {...props} className={classNames.join(" ")} />;
};
