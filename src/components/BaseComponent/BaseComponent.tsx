import React, { HTMLProps, ElementType } from "react";

import { createClassName } from "src/utils/classNames";

import { BaseProps } from "./typings";

export interface BaseComponentProps extends BaseProps {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
};

export const BaseComponent = <K extends {}>({
    Element,
    baseClassName,
    className,
    size,
    fullWidth,
    fullHeight,
    bgColor,
    textColor,
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
    marginAll,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    paddingAll,
    ...props
}: HTMLProps<K> & BaseComponentProps) => (
        <Element {...props} className={
            createClassName([
                baseClassName,
                className,
                size && `size-${size}`,
                fullWidth && "full-width",
                fullHeight && "full-height",
                bgColor && `bg-${bgColor}`,
                textColor && `text-${textColor}`,
                hideOnMobile && "hide-on-mobile",
                showOnlyOnMobile && "show-only-on-mobile",
                showOnlyOnTabPT && "hide-on-tab-pt",
                showOnlyOnTabPT && "show-only-on-tab-pt",
                showOnlyOnTabLS && "hide-on-tab-ls",
                showOnlyOnTabLS && "show-only-on-tab-ls",
                hideOnDesktop && "hide-on-desktop",
                showOnlyOnDesktop && "show-only-on-desktop",
                marginTop && `margin-top-${marginTop}`,
                marginRight && `margin-right-${marginRight}`,
                marginBottom && `margin-bottom-${marginBottom}`,
                marginLeft && `margin-left-${marginLeft}`,
                marginAll && `margin-all-${marginAll}`,
                paddingTop && `padding-top-${paddingTop}`,
                paddingRight && `padding-right-${paddingRight}`,
                paddingBottom && `padding-bottom-${paddingBottom}`,
                paddingLeft && `padding-left-${paddingLeft}`,
                paddingAll && `padding-all-${paddingAll}`,
            ])
        } />
    );