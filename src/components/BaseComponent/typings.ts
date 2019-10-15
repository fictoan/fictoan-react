import { HTMLProps } from "react";

export interface BaseProps {
    bgColor?: string;
    textColor?: string;
}

export interface BaseAndHTMLProps<T extends {}> extends HTMLProps<T>, BaseProps {}
