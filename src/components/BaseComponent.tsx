import React, { ReactElement, ReactPropTypes } from "react";

interface PropType {
    className?: string;
    baseClassName?: string;
    Element: string;
}

type Props = PropType & {};
export const BaseComponent = ({
    Element = "div",
    baseClassName,
    className,
    ...props
}: Props) => {
    const classNames = [];

    if (baseClassName) {
        classNames.push(baseClassName);
    }
    if (className) {
        classNames.push(className);
    }


    return (
        // @ts-ignore
        <Element
            className={classNames.join(' ')}
            {...props}
        />
    )
}
