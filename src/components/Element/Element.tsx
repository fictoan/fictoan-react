// This is a generic component used for creating native HTML elements, while
// still being able to style them with Fictoan props.
import React from "react";

import { createClassName } from "../../utils/classNames";

import { ElementProps } from "./constants";

export const Element = React.forwardRef(<K extends {}>(props: ElementProps<K>, ref: React.LegacyRef<HTMLElement>) => {
    const {
              as : Component,
              classNames = [],
              bgColor,
              bgColour,
              borderColor,
              borderColour,
              className,
              columns,
              fillColor,
              fillColour,
              gap,
              hideOnDesktop,
              hideOnMobile,
              hideOnTabletLandscape,
              hideOnTabletPortrait,
              horizontalMargin,
              horizontalPadding,
              horizontallyCenterThis,
              horizontallyCentreThis,
              isFullHeight,
              isFullWidth,
              layoutAsFlexbox,
              layoutAsGrid,
              marginLeft,
              marginBottom,
              margin,
              marginRight,
              marginTop,
              opacity,
              paddingBottom,
              paddingLeft,
              padding,
              paddingRight,
              paddingTop,
              pushItemsToEnds,
              shadow,
              shape,
              showOnlyOnDesktop,
              showOnlyOnMobile,
              showOnlyOnTabletLandscape,
              showOnlyOnTabletPortrait,
              size,
              strokeColor,
              strokeColour,
              textColor,
              textColour,
              verticalMargin,
              verticalPadding,
              verticallyCenterItems,
              verticallyCentreItems,
              weight,
              ...minimalProps
          } = props;

    const { as, className : _, classNames : __, ...sanitizedProps } = props;

    // To support deprecated colours
    const getNewColour = (colour: string): string => {
        const colourSegments = colour.split("-");
        if (colourSegments.length === 2) {
            return `${colourSegments[0]}-light-${100 - Number(colourSegments[1])}`;
        }
        return colour;
    };

    return (
        <Component
            ref={ref}
            {...minimalProps}
            className={createClassName(
                [
                    className,
                    bgColor && `bg-${getNewColour(bgColor)}`,
                    bgColour && `bg-${getNewColour(bgColour)}`,
                    borderColor && `border-${getNewColour(borderColor)}`,
                    borderColour && `border-${getNewColour(borderColour)}`,
                    fillColor && `fill-${getNewColour(fillColor)}`,
                    fillColour && `fill-${getNewColour(fillColour)}`,
                    hideOnDesktop && "hide-on-desktop",
                    hideOnMobile && "hide-on-mobile",
                    hideOnTabletLandscape && "hide-on-tablet-landscape",
                    hideOnTabletPortrait && "hide-on-tablet-portrait",
                    horizontalMargin && `margin-right-${horizontalMargin} margin-left-${horizontalMargin}`,
                    horizontalPadding && `padding-right-${horizontalPadding} padding-left-${horizontalPadding}`,
                    horizontallyCenterThis && "horizontally-centre-this",
                    horizontallyCentreThis && "horizontally-centre-this",
                    isFullHeight && "full-height",
                    isFullWidth && "full-width",
                    layoutAsFlexbox && "layout-flexbox",
                    layoutAsGrid && "layout-grid",
                    marginLeft && `margin-left-${marginLeft}`,
                    marginBottom && `margin-bottom-${marginBottom}`,
                    margin && `margin-all-${margin}`,
                    marginRight && `margin-right-${marginRight}`,
                    marginTop && `margin-top-${marginTop}`,
                    opacity && `opacity-${opacity}`,
                    paddingBottom && `padding-bottom-${paddingBottom}`,
                    paddingLeft && `padding-left-${paddingLeft}`,
                    padding && `padding-all-${padding}`,
                    paddingRight && `padding-right-${paddingRight}`,
                    paddingTop && `padding-top-${paddingTop}`,
                    pushItemsToEnds && "push-to-ends",
                    shadow && `shadow-${shadow}`,
                    shape && `shape-${shape}`,
                    showOnlyOnDesktop && "show-only-on-desktop",
                    showOnlyOnMobile && "show-only-on-mobile",
                    showOnlyOnTabletLandscape && "show-only-on-tablet-landscape",
                    showOnlyOnTabletPortrait && "show-only-on-tablet-portrait",
                    size && `size-${size}`,
                    strokeColor && `stroke-${getNewColour(strokeColor)}`,
                    strokeColour && `stroke-${getNewColour(strokeColour)}`,
                    textColor && `text-${getNewColour(textColor)}`,
                    textColour && `text-${getNewColour(textColour)}`,
                    verticalMargin && `margin-top-${verticalMargin} margin-bottom-${verticalMargin}`,
                    verticalPadding && `padding-top-${verticalPadding} padding-bottom-${verticalPadding}`,
                    verticallyCenterItems && "vertically-centre-items",
                    verticallyCentreItems && "vertically-centre-items",
                    weight && `weight-${weight}`,
                ].concat(classNames),
            )}
            style={
                layoutAsGrid ? {
                    gridTemplateColumns : `repeat(${columns}, 1fr)`,
                    gap                 : gap,
                } : {
                    gap : gap,
                }
            }
        />
    );
}) as <K extends {}>(props: ElementProps<K> & { ref?: React.LegacyRef<HTMLElement> }) => React.ReactElement;
