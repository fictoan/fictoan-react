import React from "react";

import { createClassName } from "../../utils/classNames";

import { ElementProps } from "./constants";

export const Element = React.forwardRef(<K extends {}>(props: ElementProps<K>, ref: React.LegacyRef<HTMLElement>) => {
    const {
        as : Component,
        classNames = [],
        className,
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
        hideOnTabletPortrait,
        showOnlyOnTabletPortrait,
        hideOnTabletLandscape,
        showOnlyOnTabletLandscape,
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
        shadow,
        shape,
        opacity,
        horizontallyCentreThis,
        horizontallyCenterThis,
        verticallyCentreItems,
        verticallyCenterItems,
        pushItemsToEnds,
        ...minimalProps
    } = props;

    const { as, className : _, classNames : __, ...sanitizedProps } = props;

    return (
        <Component
            ref={ref}
            {...(typeof Component !== "string" && Component.hasOwnProperty("styledComponentId") ? sanitizedProps : minimalProps )}
            className={createClassName(
                [
                    className,
                    size && `size-${size}`,
                    isFullWidth && "full-width",
                    isFullHeight && "full-height",
                    bgColor && `bg-${String(bgColor)}`,
                    bgColour && `bg-${String(bgColour)}`,
                    textColor && `text-${String(textColor)}`,
                    textColour && `text-${String(textColour)}`,
                    borderColor && `border-${String(borderColor)}`,
                    borderColour && `border-${String(borderColour)}`,
                    fillColor && `fill-${String(fillColor)}`,
                    fillColour && `fill-${String(fillColour)}`,
                    strokeColor && `stroke-${String(strokeColor)}`,
                    strokeColour && `stroke-${String(strokeColour)}`,
                    hideOnMobile && "hide-on-mobile",
                    showOnlyOnMobile && "show-only-on-mobile",
                    hideOnTabletPortrait && "hide-on-tablet-portrait",
                    showOnlyOnTabletPortrait && "show-only-on-tablet-portrait",
                    hideOnTabletLandscape && "hide-on-tablet-landscape",
                    showOnlyOnTabletLandscape && "show-only-on-tablet-landscape",
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
                    shadow && `shadow-${shadow}`,
                    shape && `shape-${shape}`,
                    opacity && `opacity-${opacity}`,
                    horizontallyCentreThis && "horizontally-centre-this",
                    horizontallyCenterThis && "horizontally-centre-this",
                    verticallyCentreItems && "vertically-centre-items",
                    verticallyCenterItems && "vertically-centre-items",
                    pushItemsToEnds && "push-to-ends",
                ].concat(classNames)
            )}
        />
    );
}) as <K extends {}>(props: ElementProps<K> & { ref?: React.LegacyRef<HTMLElement> }) => React.ReactElement;
