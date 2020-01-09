import React, { HTMLProps } from "react";

import { createClassName } from "src/utils/classNames";

import { ElementProps } from "./constants";
import styled, { css } from "styled-components";

const ElementStyledForComponent = <K extends {}>(component: any) => styled(component)`
    ${(props: ElementProps<K>) => props.bgColor && css`{ background-color : ${props.bgColor}; }`}
    ${(props: ElementProps<K>) => props.textColor && css`{ color : ${props.textColor}; }`}
    ${(props: ElementProps<K>) => props.borderColor && css`{ border : 2px solid ${props.borderColor}; }`}
    ${(props: ElementProps<K>) => props.fillColor && css`{ fill : ${props.fillColor}; }`}
    ${(props: ElementProps<K>) => props.strokeColor && css`{ stroke : ${props.strokeColor}; }`}
`;

export const Element = <K extends {}>({
    as: Component,
    className,
    size,
    fullWidth,
    fullHeight,
    bgColor,
    textColor,
    borderColor,
    fillColor,
    strokeColor,
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
    const ComponentStyled = ElementStyledForComponent(Component);
    return (
        <ComponentStyled {...props} className={
            createClassName([
                className,
                size && `size-${size}`,
                fullWidth && "full-width",
                fullHeight && "full-height",
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
                margin && `margin-all-${margin}`,
                paddingTop && `padding-top-${paddingTop}`,
                paddingRight && `padding-right-${paddingRight}`,
                paddingBottom && `padding-bottom-${paddingBottom}`,
                paddingLeft && `padding-left-${paddingLeft}`,
                padding && `padding-all-${padding}`,
            ])
        } />
    );
}
