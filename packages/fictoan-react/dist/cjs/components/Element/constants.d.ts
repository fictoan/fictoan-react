import { ElementType, HTMLProps } from "react";
import { defaultColourProps } from "../../styles/DefaultColourProps";
import { customColours, FictoanTheme } from "../../styles/theme";
declare type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
};
export declare type ThemeType = DeepPartial<typeof FictoanTheme>;
export interface ThemeProps {
    theme?: ThemeType;
}
export declare type SpacingTypes = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
export declare type ShadowTypes = "none" | "mild" | "soft" | "hard";
export declare type ShapeTypes = "rounded" | "curved";
export declare type OpacityTypes = "00" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100";
export declare type WeightTypes = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
export declare type ColourPropTypes = typeof defaultColourProps[number] | keyof typeof customColours | "";
export interface CommonProps extends ThemeProps {
    bgColor?: ColourPropTypes;
    bgColour?: ColourPropTypes;
    textColor?: ColourPropTypes;
    textColour?: ColourPropTypes;
    borderColor?: ColourPropTypes;
    borderColour?: ColourPropTypes;
    fillColor?: ColourPropTypes;
    fillColour?: ColourPropTypes;
    strokeColor?: ColourPropTypes;
    strokeColour?: ColourPropTypes;
    shadow?: ShadowTypes;
    shape?: ShapeTypes;
    opacity?: OpacityTypes;
    marginTop?: SpacingTypes;
    marginRight?: SpacingTypes;
    marginBottom?: SpacingTypes;
    marginLeft?: SpacingTypes;
    margin?: SpacingTypes;
    paddingTop?: SpacingTypes;
    paddingRight?: SpacingTypes;
    paddingBottom?: SpacingTypes;
    paddingLeft?: SpacingTypes;
    padding?: SpacingTypes;
    horizontallyCentreThis?: boolean;
    horizontallyCenterThis?: boolean;
    verticallyCentreItems?: boolean;
    verticallyCenterItems?: boolean;
    pushItemsToEnds?: boolean;
    isFullWidth?: boolean;
    isFullHeight?: boolean;
    hideOnMobile?: boolean;
    showOnlyOnMobile?: boolean;
    hideOnTabletPortrait?: boolean;
    showOnlyOnTabletPortrait?: boolean;
    hideOnTabletLandscape?: boolean;
    showOnlyOnTabletLandscape?: boolean;
    hideOnDesktop?: boolean;
    showOnlyOnDesktop?: boolean;
    weight?: WeightTypes;
    classNames?: string[];
}
export interface CommonAndHTMLProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as" | "size" | "ref" | "shape"> {
}
export interface ElementProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as" | "ref" | "shape"> {
    as: ElementType;
    className?: string;
}
export {};
