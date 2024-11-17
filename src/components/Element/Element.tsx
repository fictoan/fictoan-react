// FRAMEWORK ===========================================================================================================
import React from "react";

// UTILS ===============================================================================================================
import { createClassName } from "../../utils/classNames";

// TYPES ===============================================================================================================
import { ElementProps } from "./constants";

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const Element = React.forwardRef(
    <K extends {}>(
        {
            as : Component = "div",
            role,
            ariaLabel,
            tabIndex,
            onKeyDown,
            ...props
        }: ElementProps<K> & {
            role      ? : string;
            ariaLabel ? : string;
            tabIndex  ? : number;
            onKeyDown ? : (event: React.KeyboardEvent) => void;
        }, ref: React.LegacyRef<HTMLElement>
    ) => {
        const {
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

        const { className : _, classNames : __, ...sanitizedProps } = props;

        return (
            <Component
                ref={ref}
                role={role}
                aria-label={ariaLabel}
                tabIndex={tabIndex}
                onKeyDown={onKeyDown}
                {...minimalProps}
                className={createClassName(
                    [
                        className,
                        bgColor && `bg-${bgColor}`,
                        bgColour && `bg-${bgColour}`,
                        borderColor && `border-${borderColor}`,
                        borderColour && `border-${borderColour}`,
                        fillColor && `fill-${fillColor}`,
                        fillColour && `fill-${fillColour}`,
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
                        strokeColor && `stroke-${strokeColor}`,
                        strokeColour && `stroke-${strokeColour}`,
                        textColor && `text-${textColor}`,
                        textColour && `text-${textColour}`,
                        verticalMargin && `margin-top-${verticalMargin} margin-bottom-${verticalMargin}`,
                        verticalPadding && `padding-top-${verticalPadding} padding-bottom-${verticalPadding}`,
                        verticallyCenterItems && "vertically-centre-items",
                        verticallyCentreItems && "vertically-centre-items",
                        weight && `weight-${weight}`,
                    ].concat(classNames),
                )}
            />
        );
    },
) as <K extends {}>(props: ElementProps<K> & { ref?: React.LegacyRef<HTMLElement> }) => React.ReactElement;
