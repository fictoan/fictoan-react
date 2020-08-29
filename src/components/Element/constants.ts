import { HTMLProps } from "react";

import { RFTheme } from "../../styles/theme";

// TODO: Remove once https://github.com/microsoft/TypeScript/pull/40002 ships with TS 4.1.0
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>;
};
export type ThemeType = DeepPartial<typeof RFTheme>;

// prettier-ignore
export interface ThemeProps {
    theme ? : ThemeType;
}

type SpacingTypes = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";

// prettier-ignore
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

export interface CommonAndHTMLProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "size" | "ref"> {}

// prettier-ignore
export interface ElementProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as" | "ref"> {
    as          : any;
    className ? : string;
}
