import { ElementType, FormEvent, HTMLProps } from "react";

export const DefaultColours = [
    "red",
    "salmon",
    "orange",
    "amber",
    "yellow",
    "spring",
    "pistachio",
    "green",
    "teal",
    "cyan",
    "sky",
    "blue",
    "indigo",
    "violet",
    "purple",
    "pink",
    "crimson",
    "brick",
    "sienna",
    "brown",
    "slate",
    "grey"
] as const;

export const BasicColours = [
    "transparent",
    "black",
    "white"
] as const;

export const FictoanColours = [...DefaultColours, ...BasicColours] as const;

type DefaultColoursType = typeof DefaultColours[number];
type BasicColoursType = typeof BasicColours[number];

type Luminance = "dark" | "light";
type ShadeLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
type OpacityLevel = 0 | 5 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
type CustomColours = "hue" | "tint" | "shade" | "analogue" | "accent";

// prettier-ignore
export type EmphasisTypes = "primary" | "secondary" | "tertiary" | "custom";
export type SpacingTypes = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
export type ShadowTypes  = "none" | "mild" | "hard" | "soft";
export type ShapeTypes   = "rounded" | "curved";
export type OpacityTypes = "0" | "5" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90";
export type WeightTypes  = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";

export type ColourPropTypes =
    | `${DefaultColoursType}-${Luminance}${ShadeLevel}`
    | `${DefaultColoursType}-${Luminance}${ShadeLevel}-opacity${OpacityLevel}`
    | `${DefaultColoursType}-opacity${OpacityLevel}`
    | `${BasicColoursType}-opacity${OpacityLevel}`
    | DefaultColoursType
    | BasicColoursType
    | CustomColours
    | "";

// prettier-ignore
export interface CommonProps {
    // STYLING =================================================================
    bgColor      ? : ColourPropTypes;
    bgColour     ? : ColourPropTypes;
    textColor    ? : ColourPropTypes;
    textColour   ? : ColourPropTypes;
    borderColor  ? : ColourPropTypes;
    borderColour ? : ColourPropTypes;
    fillColor    ? : ColourPropTypes;
    fillColour   ? : ColourPropTypes;
    strokeColor  ? : ColourPropTypes;
    strokeColour ? : ColourPropTypes;
    shadow       ? : ShadowTypes;
    shape        ? : ShapeTypes;
    opacity      ? : OpacityTypes;

    // LAYOUT ==================================================================
    // Flexbox -----------------------------------------------------------------
    layoutAsFlexbox ? : boolean;

    // Grid --------------------------------------------------------------------
    layoutAsGrid    ? : boolean;
    columns         ? : string;

    // Common ------------------------------------------------------------------
    gap             ? : string;

    // SPACING =================================================================
    // Margin ------------------------------------------------------------------
    margin                 ? : SpacingTypes;
    horizontalMargin       ? : SpacingTypes;
    verticalMargin         ? : SpacingTypes;

    marginTop              ? : SpacingTypes;
    marginRight            ? : SpacingTypes;
    marginBottom           ? : SpacingTypes;
    marginLeft             ? : SpacingTypes;

    // Padding -----------------------------------------------------------------
    padding                ? : SpacingTypes;
    horizontalPadding      ? : SpacingTypes;
    verticalPadding        ? : SpacingTypes;

    paddingTop             ? : SpacingTypes;
    paddingRight           ? : SpacingTypes;
    paddingBottom          ? : SpacingTypes;
    paddingLeft            ? : SpacingTypes;

    // ALIGNMENT ===============================================================
    horizontallyCentreThis ? : boolean;
    horizontallyCenterThis ? : boolean;
    verticallyCentreItems  ? : boolean;
    verticallyCenterItems  ? : boolean;
    pushItemsToEnds        ? : boolean;
    isFullWidth            ? : boolean;
    isFullHeight           ? : boolean;

    // RESPONSIVENESS ==========================================================
    hideOnMobile              ? : boolean;
    showOnlyOnMobile          ? : boolean;
    hideOnTabletPortrait      ? : boolean;
    showOnlyOnTabletPortrait  ? : boolean;
    hideOnTabletLandscape     ? : boolean;
    showOnlyOnTabletLandscape ? : boolean;
    hideOnDesktop             ? : boolean;
    showOnlyOnDesktop         ? : boolean;

    // TEXT ====================================================================
    weight ? : WeightTypes;

    // GENERAL =================================================================
    classNames ? : string[];
}

export interface CommonAndHTMLProps<T extends {}>
    extends CommonProps, Omit<HTMLProps<T>, "as" | "size" | "ref" | "shape"> {}

// Fictoan has two different types of event handlers, one for standard events and one for direct values
// This generic event handler type is a union of the two
export type FlexibleEventHandler<T, V = any> =
    | ((event: T) => void)
    | ((value: V) => void);

// prettier-ignore
export interface ElementProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as" | "ref" | "shape"> {
    as        ? : ElementType;
    className ? : string;
    ariaLabel ? : string;
    onChange  ? : FlexibleEventHandler<FormEvent<T>, any>;
}
