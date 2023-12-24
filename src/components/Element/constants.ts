import { ElementType, HTMLProps } from "react";

export const customColours = {
    hue: "defaultColours.blue90",
    tint: "defaultColours.amber",
    shade: "defaultColours.grey",
    analogue: "defaultColours.indigo50",
    accent: "defaultColours.green80",
} as const;

export const defaultColourProps = [
    "black",
    "white",
    "transparent",

    "red-dark-40",
    "red-dark-30",
    "red-dark-20",
    "red-dark-10",
    "red",
    "red-light-10",
    "red-light-20",
    "red-light-30",
    "red-light-40",

    "salmon-dark-40",
    "salmon-dark-30",
    "salmon-dark-20",
    "salmon-dark-10",
    "salmon",
    "salmon-light-10",
    "salmon-light-20",
    "salmon-light-30",
    "salmon-light-40",

    "orange-dark-40",
    "orange-dark-30",
    "orange-dark-20",
    "orange-dark-10",
    "orange",
    "orange-light-10",
    "orange-light-20",
    "orange-light-30",
    "orange-light-40",

    "amber-dark-40",
    "amber-dark-30",
    "amber-dark-20",
    "amber-dark-10",
    "amber",
    "amber-light-10",
    "amber-light-20",
    "amber-light-30",
    "amber-light-40",

    "yellow-dark-40",
    "yellow-dark-30",
    "yellow-dark-20",
    "yellow-dark-10",
    "yellow",
    "yellow-light-10",
    "yellow-light-20",
    "yellow-light-30",
    "yellow-light-40",

    "spring-dark-40",
    "spring-dark-30",
    "spring-dark-20",
    "spring-dark-10",
    "spring",
    "spring-light-10",
    "spring-light-20",
    "spring-light-30",
    "spring-light-40",

    "pistachio-dark-40",
    "pistachio-dark-30",
    "pistachio-dark-20",
    "pistachio-dark-10",
    "pistachio",
    "pistachio-light-10",
    "pistachio-light-20",
    "pistachio-light-30",
    "pistachio-light-40",

    "green-dark-40",
    "green-dark-30",
    "green-dark-20",
    "green-dark-10",
    "green",
    "green-light-10",
    "green-light-20",
    "green-light-30",
    "green-light-40",

    "teal-dark-40",
    "teal-dark-30",
    "teal-dark-20",
    "teal-dark-10",
    "teal",
    "teal-light-10",
    "teal-light-20",
    "teal-light-30",
    "teal-light-40",

    "cyan-dark-40",
    "cyan-dark-30",
    "cyan-dark-20",
    "cyan-dark-10",
    "cyan",
    "cyan-light-10",
    "cyan-light-20",
    "cyan-light-30",
    "cyan-light-40",

    "sky-dark-40",
    "sky-dark-30",
    "sky-dark-20",
    "sky-dark-10",
    "sky",
    "sky-light-10",
    "sky-light-20",
    "sky-light-30",
    "sky-light-40",

    "indigo-dark-40",
    "indigo-dark-30",
    "indigo-dark-20",
    "indigo-dark-10",
    "indigo",
    "indigo-light-10",
    "indigo-light-20",
    "indigo-light-30",
    "indigo-light-40",

    "violet-dark-40",
    "violet-dark-30",
    "violet-dark-20",
    "violet-dark-10",
    "violet",
    "violet-light-10",
    "violet-light-20",
    "violet-light-30",
    "violet-light-40",

    "purple-dark-40",
    "purple-dark-30",
    "purple-dark-20",
    "purple-dark-10",
    "purple",
    "purple-light-10",
    "purple-light-20",
    "purple-light-30",
    "purple-light-40",

    "pink-dark-40",
    "pink-dark-30",
    "pink-dark-20",
    "pink-dark-10",
    "pink",
    "pink-light-10",
    "pink-light-20",
    "pink-light-30",
    "pink-light-40",

    "crimson-dark-40",
    "crimson-dark-30",
    "crimson-dark-20",
    "crimson-dark-10",
    "crimson",
    "crimson-light-10",
    "crimson-light-20",
    "crimson-light-30",
    "crimson-light-40",

    "brick-dark-40",
    "brick-dark-30",
    "brick-dark-20",
    "brick-dark-10",
    "brick",
    "brick-light-10",
    "brick-light-20",
    "brick-light-30",
    "brick-light-40",

    "sienna-dark-40",
    "sienna-dark-30",
    "sienna-dark-20",
    "sienna-dark-10",
    "sienna",
    "sienna-light-10",
    "sienna-light-20",
    "sienna-light-30",
    "sienna-light-40",

    "brown-dark-40",
    "brown-dark-30",
    "brown-dark-20",
    "brown-dark-10",
    "brown",
    "brown-light-10",
    "brown-light-20",
    "brown-light-30",
    "brown-light-40",

    "slate-dark-40",
    "slate-dark-30",
    "slate-dark-20",
    "slate-dark-10",
    "slate",
    "slate-light-10",
    "slate-light-20",
    "slate-light-30",
    "slate-light-40",

    "grey-dark-40",
    "grey-dark-30",
    "grey-dark-20",
    "grey-dark-10",
    "grey",
    "grey-light-10",
    "grey-light-20",
    "grey-light-30",
    "grey-light-40",
] as const;

// prettier-ignore
export type SpacingTypes    = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
export type ShadowTypes = "none" | "mild" | "hard" | "soft";
export type ShapeTypes = "rounded" | "curved";
export type OpacityTypes = "00" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100";
export type WeightTypes = "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900";
export type ColourPropTypes = (typeof defaultColourProps)[number] | keyof typeof customColours | "";

// prettier-ignore
export interface CommonProps {
    // STYLING ================================================================
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

    // LAYOUT =================================================================
    marginTop              ? : SpacingTypes;
    marginRight            ? : SpacingTypes;
    marginBottom           ? : SpacingTypes;
    marginLeft             ? : SpacingTypes;
    margin                 ? : SpacingTypes;
    paddingTop             ? : SpacingTypes;
    paddingRight           ? : SpacingTypes;
    paddingBottom          ? : SpacingTypes;
    paddingLeft            ? : SpacingTypes;
    padding                ? : SpacingTypes;
    horizontallyCentreThis ? : boolean;
    horizontallyCenterThis ? : boolean;
    verticallyCentreItems  ? : boolean;
    verticallyCenterItems  ? : boolean;
    pushItemsToEnds        ? : boolean;
    isFullWidth            ? : boolean;
    isFullHeight           ? : boolean;

    // RESPONSIVENESS =========================================================
    hideOnMobile              ? : boolean;
    showOnlyOnMobile          ? : boolean;
    hideOnTabletPortrait      ? : boolean;
    showOnlyOnTabletPortrait  ? : boolean;
    hideOnTabletLandscape     ? : boolean;
    showOnlyOnTabletLandscape ? : boolean;
    hideOnDesktop             ? : boolean;
    showOnlyOnDesktop         ? : boolean;

    // TEXT ===================================================================
    weight ? : WeightTypes;

    // MISC ===================================================================
    classNames ? : string[];
}

export interface CommonAndHTMLProps<T extends {}>
    extends CommonProps,
        Omit<HTMLProps<T>, "as" | "size" | "ref" | "shape"> {}

// prettier-ignore
export interface ElementProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as" | "ref" | "shape"> {
    as          : ElementType;
    className ? : string;
}
