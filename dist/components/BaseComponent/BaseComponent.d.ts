import React, { ElementType } from "react";
import { BaseProps } from "./typings";
export interface BaseComponentProps extends BaseProps {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
}
export declare const BaseComponent: <K extends {}>({ Element, baseClassName, className, size, fullWidth, fullHeight, bgColor, textColor, hideOnMobile, showOnlyOnMobile, hideOnTabPT, showOnlyOnTabPT, hideOnTabLS, showOnlyOnTabLS, hideOnDesktop, showOnlyOnDesktop, marginTop, marginRight, marginBottom, marginLeft, margin, paddingTop, paddingRight, paddingBottom, paddingLeft, padding, ...props }: React.HTMLProps<K> & BaseComponentProps) => JSX.Element;
