import React, { ElementType } from "react";
import { BaseProps } from "./typings";
export interface BaseComponentProps extends BaseProps {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
}
export declare const BaseComponent: <K extends {}>({ Element, baseClassName, className, bgColor, textColor, ...props }: React.HTMLProps<K> & BaseComponentProps) => JSX.Element;
