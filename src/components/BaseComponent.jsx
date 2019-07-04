import React from 'react'

export const BaseComponent = ({
    Element = "div",
    baseClassName,
    className,
    ...props
}) => {
    const classNames = [];

    if (baseClassName) {
        classNames.push(baseClassName);
    }
    if (className) {
        classNames.push(className);
    }

    return (
        <Element
            className={classNames.join(' ')}
            {...props}
        />
    )
}
