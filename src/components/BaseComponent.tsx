import React, { HTMLProps, ReactElement, ElementType } from "react";

export type BaseProps = {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
};

export const BaseComponent = <K extends HTMLProps<K>>({
    Element = "div",
    baseClassName,
    className,
    ...props
}: HTMLProps<K> & BaseProps) => {
    const classNames = [];

    if (baseClassName) {
        classNames.push(baseClassName);
    }
    if (className) {
        classNames.push(className);
    }

    return <Element {...props} className={classNames.join(" ")} />;
};
