import { HTMLProps } from "react";

import { RFTheme } from "../../styles/theme";

export type ThemeType = Partial<typeof RFTheme>;

export interface ThemeProps {
    theme ? : ThemeType;
}

type SpacingTypes = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";

export interface CommonProps extends ThemeProps {
    bgColor           ? : string;
    bgColour          ? : string;
    textColor         ? : string;
    textColour        ? : string;
    borderColor       ? : string;
    borderColour      ? : string;
    fillColor         ? : string;
    fillColour        ? : string;
    strokeColor       ? : string;
    strokeColour      ? : string;
    hideOnMobile      ? : boolean;
    showOnlyOnMobile  ? : boolean;
    hideOnTabPT       ? : boolean;
    showOnlyOnTabPT   ? : boolean;
    hideOnTabLS       ? : boolean;
    showOnlyOnTabLS   ? : boolean;
    hideOnDesktop     ? : boolean;
    showOnlyOnDesktop ? : boolean;
    isFullWidth       ? : boolean;
    isFullHeight      ? : boolean;
    marginTop         ? : SpacingTypes;
    marginRight       ? : SpacingTypes;
    marginBottom      ? : SpacingTypes;
    marginLeft        ? : SpacingTypes;
    margin            ? : SpacingTypes;
    paddingTop        ? : SpacingTypes;
    paddingRight      ? : SpacingTypes;
    paddingBottom     ? : SpacingTypes;
    paddingLeft       ? : SpacingTypes;
    padding           ? : SpacingTypes;
    classNames        ? : any[];
}

export interface CommonAndHTMLProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "size"> { }

export interface ElementProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as"> {
    as          : any;
    className ? : string;
}
