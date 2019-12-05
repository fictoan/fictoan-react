import { HTMLProps } from "react";

export interface BaseProps {
    // size?: string;
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
    fullWidth?: boolean;
    fullHeight?: boolean;
    marginTop?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    marginRight?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    marginBottom?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    marginLeft?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    marginAll?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingTop?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingRight?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingBottom?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingLeft?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingAll?: "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
}

export interface BaseAndHTMLProps<T extends {}> extends BaseProps, Omit<HTMLProps<T>, "size"> { }
