import { ElementType, HTMLProps } from "react";

type ColorWithShade =
    | "red"
    | "salmon"
    | "orange"
    | "amber"
    | "yellow"
    | "spring"
    | "pistachio"
    | "green"
    | "teal"
    | "cyan"
    | "sky"
    | "blue"
    | "indigo"
    | "violet"
    | "purple"
    | "pink"
    | "crimson"
    | "brick"
    | "sienna"
    | "brown"
    | "slate"
    | "grey";
type Shade = "dark" | "light";
type ShadeLevel = 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90;
type FixedColor = "transparent" | "black" | "white";
type CustomColor = "hue" | "tint" | "shade" | "analogue" | "accent";

// prettier-ignore
export type SpacingTypes = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
export type ShadowTypes  = "none" | "mild" | "hard" | "soft";
export type ShapeTypes   = "rounded" | "curved";
export type OpacityTypes = "transparent" | "translucent" | "opaque" | "0" | "00" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100";
export type WeightTypes  = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
// @deprecated
export type OldColourPropTypes = `${ColorWithShade}-${ShadeLevel}`;

export type ColourPropTypes =
    | `${ColorWithShade}-${Shade}-${ShadeLevel}`
    | ColorWithShade
    | FixedColor
    | CustomColor
    | OldColourPropTypes
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

// prettier-ignore
export interface ElementProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as" | "ref" | "shape"> {
    as        ? : ElementType;
    className ? : string;
}
