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

    "red",
    "red-90",
    "red-80",
    "red-70",
    "red-60",
    "red-50",
    "red-40",
    "red-30",
    "red-20",
    "red-10",

    "salmon",
    "salmon-90",
    "salmon-80",
    "salmon-70",
    "salmon-60",
    "salmon-50",
    "salmon-40",
    "salmon-30",
    "salmon-20",
    "salmon-10",

    "orange",
    "orange-90",
    "orange-80",
    "orange-70",
    "orange-60",
    "orange-50",
    "orange-40",
    "orange-30",
    "orange-20",
    "orange-10",

    "amber",
    "amber-90",
    "amber-80",
    "amber-70",
    "amber-60",
    "amber-50",
    "amber-40",
    "amber-30",
    "amber-20",
    "amber-10",

    "yellow",
    "yellow-90",
    "yellow-80",
    "yellow-70",
    "yellow-60",
    "yellow-50",
    "yellow-40",
    "yellow-30",
    "yellow-20",
    "yellow-10",

    "spring",
    "spring-90",
    "spring-80",
    "spring-70",
    "spring-60",
    "spring-50",
    "spring-40",
    "spring-30",
    "spring-20",
    "spring-10",

    "pistachio",
    "pistachio-90",
    "pistachio-80",
    "pistachio-70",
    "pistachio-60",
    "pistachio-50",
    "pistachio-40",
    "pistachio-30",
    "pistachio-20",
    "pistachio-10",

    "green",
    "green-90",
    "green-80",
    "green-70",
    "green-60",
    "green-50",
    "green-40",
    "green-30",
    "green-20",
    "green-10",

    "teal",
    "teal-90",
    "teal-80",
    "teal-70",
    "teal-60",
    "teal-50",
    "teal-40",
    "teal-30",
    "teal-20",
    "teal-10",

    "cyan",
    "cyan-90",
    "cyan-80",
    "cyan-70",
    "cyan-60",
    "cyan-50",
    "cyan-40",
    "cyan-30",
    "cyan-20",
    "cyan-10",

    "sky",
    "sky-90",
    "sky-80",
    "sky-70",
    "sky-60",
    "sky-50",
    "sky-40",
    "sky-30",
    "sky-20",
    "sky-10",

    "blue",
    "blue-90",
    "blue-80",
    "blue-70",
    "blue-60",
    "blue-50",
    "blue-40",
    "blue-30",
    "blue-20",
    "blue-10",

    "indigo",
    "indigo-90",
    "indigo-80",
    "indigo-70",
    "indigo-60",
    "indigo-50",
    "indigo-40",
    "indigo-30",
    "indigo-20",
    "indigo-10",

    "violet",
    "violet-90",
    "violet-80",
    "violet-70",
    "violet-60",
    "violet-50",
    "violet-40",
    "violet-30",
    "violet-20",
    "violet-10",

    "purple",
    "purple-90",
    "purple-80",
    "purple-70",
    "purple-60",
    "purple-50",
    "purple-40",
    "purple-30",
    "purple-20",
    "purple-10",

    "pink",
    "pink-90",
    "pink-80",
    "pink-70",
    "pink-60",
    "pink-50",
    "pink-40",
    "pink-30",
    "pink-20",
    "pink-10",

    "crimson",
    "crimson-90",
    "crimson-80",
    "crimson-70",
    "crimson-60",
    "crimson-50",
    "crimson-40",
    "crimson-30",
    "crimson-20",
    "crimson-10",

    "brick",
    "brick-90",
    "brick-80",
    "brick-70",
    "brick-60",
    "brick-50",
    "brick-40",
    "brick-30",
    "brick-20",
    "brick-10",

    "sienna",
    "sienna-90",
    "sienna-80",
    "sienna-70",
    "sienna-60",
    "sienna-50",
    "sienna-40",
    "sienna-30",
    "sienna-20",
    "sienna-10",

    "brown",
    "brown-90",
    "brown-80",
    "brown-70",
    "brown-60",
    "brown-50",
    "brown-40",
    "brown-30",
    "brown-20",
    "brown-10",

    "slate",
    "slate-90",
    "slate-80",
    "slate-70",
    "slate-60",
    "slate-50",
    "slate-40",
    "slate-30",
    "slate-20",
    "slate-10",

    "grey",
    "grey-90",
    "grey-80",
    "grey-70",
    "grey-60",
    "grey-50",
    "grey-40",
    "grey-30",
    "grey-20",
    "grey-10",
] as const;

// prettier-ignore
export type SpacingTypes    = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
export type ShadowTypes = "none" | "mild" | "soft" | "hard";
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
