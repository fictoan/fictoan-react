import React from "react";

import { createClassName } from "../../utils/classNames";

import { ElementProps } from "./constants";

export const Element = <K extends {}>({
    as: Component,
    className,
    classNames = [],
    size,
    isFullWidth,
    isFullHeight,
    bgColor,
    bgColour,
    textColor,
    textColour,
    borderColor,
    borderColour,
    fillColor,
    fillColour,
    strokeColor,
    strokeColour,
    hideOnMobile,
    showOnlyOnMobile,
    hideOnTabPT,
    showOnlyOnTabPT,
    hideOnTabLS,
    showOnlyOnTabLS,
    hideOnDesktop,
    showOnlyOnDesktop,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    margin,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    padding,
    ...props
}: ElementProps<K>) => {
    return (
        <Component {...props} className={
            createClassName([
                className,
                size && `size-${size}`,
                isFullWidth && "full-width",
                isFullHeight && "full-height",
                bgColor && `bg-${bgColor}`,
                bgColour && `bg-${bgColour}`,
                textColor && `text-${textColor}`,
                textColour && `text-${textColour}`,
                borderColor && `border-${borderColor}`,
                borderColour && `border-${borderColour}`,
                fillColor && `fill-${fillColor}`,
                fillColour && `fill-${fillColour}`,
                strokeColor && `stroke-${strokeColor}`,
                strokeColour && `stroke-${strokeColour}`,
                hideOnMobile && "hide-on-mobile",
                showOnlyOnMobile && "show-only-on-mobile",
                hideOnTabPT && "hide-on-tab-pt",
                showOnlyOnTabPT && "show-only-on-tab-pt",
                hideOnTabLS && "hide-on-tab-ls",
                showOnlyOnTabLS && "show-only-on-tab-ls",
                hideOnDesktop && "hide-on-desktop",
                showOnlyOnDesktop && "show-only-on-desktop",
                marginTop && `margin-top-${marginTop}`,
                marginRight && `margin-right-${marginRight}`,
                marginBottom && `margin-bottom-${marginBottom}`,
                marginLeft && `margin-left-${marginLeft}`,
                margin && `margin-all-${margin}`,
                paddingTop && `padding-top-${paddingTop}`,
                paddingRight && `padding-right-${paddingRight}`,
                paddingBottom && `padding-bottom-${paddingBottom}`,
                paddingLeft && `padding-left-${paddingLeft}`,
                padding && `padding-all-${padding}`,
            ].concat(classNames))
        } />
    );
}
