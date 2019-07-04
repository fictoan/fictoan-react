import React from 'react'

export const BaseComponent = ({
    Element = "div",
    baseClassName,
    className,
    marginTopFixed,
    ...props
}) => {
    const classNames = [];

    if (baseClassName) {
        classNames.push(baseClassName);
    }
    if (className) {
        classNames.push(className);
    }
    if (marginTopFixed) {
        classNames.push('margin-top-fixed');
    }

    return (
        <Element
            className={classNames.join(' ')}
            {...props}
        />
    )
}
