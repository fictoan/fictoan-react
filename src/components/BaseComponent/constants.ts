import { HTMLProps } from "react";
import { RFTheme }   from "src/constants/Theme";

export interface ThemeProps {
    theme ? : typeof RFTheme;
}

export interface BaseProps extends ThemeProps {
    bgColor           ? : string;
    textColor         ? : string;
    hideOnMobile      ? : boolean;
    showOnlyOnMobile  ? : boolean;
    hideOnTabPT       ? : boolean;
    showOnlyOnTabPT   ? : boolean;
    hideOnTabLS       ? : boolean;
    showOnlyOnTabLS   ? : boolean;
    hideOnDesktop     ? : boolean;
    showOnlyOnDesktop ? : boolean;
    fullWidth         ? : boolean;
    fullHeight        ? : boolean;
    marginTop         ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    marginRight       ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    marginBottom      ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    marginLeft        ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    margin            ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingTop        ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingRight      ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingBottom     ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    paddingLeft       ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
    padding           ? : "none" | "fixed" | "tiny" | "small" | "medium" | "large" | "huge";
}

export interface BaseAndHTMLProps<T extends {}> extends BaseProps, Omit<HTMLProps<T>, "size"> { }
