import React, { ElementType } from "react";
export declare type BaseProps = {
    Element: ElementType<any>;
    className?: string;
    baseClassName?: string;
};
export declare const BaseComponent: <K extends React.HTMLProps<K>>({ Element, baseClassName, className, ...props }: React.HTMLProps<K> & BaseProps) => JSX.Element;
