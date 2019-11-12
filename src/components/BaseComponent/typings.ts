import { HTMLProps } from "react";

export interface BaseProps {
    bgColor?: string;
    textColor?: string;
    hideOnMobile?: boolean;
    showOnlyOnMobile?: boolean;
    hideOnTabPT?: boolean;
    showOnlyOnTabPT?: boolean;
    hideOnTabLS?: boolean;
    showOnlyOnTabLS?: boolean;
    hideOnDesktop?: boolean;
    showOnlyOnDesktop?: boolean;
}

export interface BaseAndHTMLProps<T extends {}> extends HTMLProps<T>, BaseProps {}
