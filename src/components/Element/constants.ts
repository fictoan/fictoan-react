import { HTMLProps } from "react";

import { defaultColourProps } from "../../styles/DefaultColourProps";
import { customColours, FictoanTheme } from "../../styles/theme";

// TODO: Remove once https://github.com/microsoft/TypeScript/pull/40002 ships with TS 4.1.0
type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends Array<infer U>
        ? Array<DeepPartial<U>>
        : T[P] extends ReadonlyArray<infer U>
        ? ReadonlyArray<DeepPartial<U>>
        : DeepPartial<T[P]>;
};
export type ThemeType = DeepPartial<typeof FictoanTheme>;

// prettier-ignore
export interface ThemeProps {
    theme ? : ThemeType;
}

export type SpacingTypes = "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
export type ShadowTypes = "none" | "mild" | "soft" | "hard";
export type ShapeTypes = "rounded" | "curved";
export type OpacityTypes = "00" | "10" | "20" | "30" | "40" | "50" | "60" | "70" | "80" | "90" | "100";
export type ColourPropTypes = typeof defaultColourProps[number] | keyof typeof customColours | "";
export type NativeTagTypes = | "a" | "abbr" | "address" | "area" | "article" | "aside" | "audio" | "b" | "base" | "bdi" | "bdo" | "blockquote" | "body" | "br" | "button" | "canvas" | "caption" | "cite" | "code" | "col" | "colgroup" | "data" | "datalist" | "dd" | "del" | "details" | "dfn" | "dialog" | "div" | "dl" | "dt" | "em" | "embed" | "fieldset" | "figcaption" | "figure" | "footer" | "form" | "head" | "header" | "hgroup" | "h1" | "hr" | "html" | "i" | "iframe" | "img" | "input" | "ins" | "kbd" | "keygen" | "label" | "legend" | "li" | "link" | "main" | "map" | "mark" | "menu" | "menuitem" | "meta" | "meter" | "nav" | "noscript" | "object" | "ol" | "optgroup" | "option" | "output" | "p" | "param" | "picture" | "pre" | "progress" | "q" | "rp" | "rt" | "ruby" | "s" | "samp" | "script" | "section" | "select" | "small" | "source" | "span" | "strong" | "style" | "sub" | "summary" | "sup" | "svg" | "table" | "tbody" | "td" | "template" | "textarea" | "tfoot" | "th" | "thead" | "time" | "title" | "tr" | "track" | "u" | "ul" | "var" | "video" | "wbr";

// prettier-ignore
export interface CommonProps extends ThemeProps {
    bgColor           ? : ColourPropTypes;
    bgColour          ? : ColourPropTypes;
    textColor         ? : ColourPropTypes;
    textColour        ? : ColourPropTypes;
    borderColor       ? : ColourPropTypes;
    borderColour      ? : ColourPropTypes;
    fillColor         ? : ColourPropTypes;
    fillColour        ? : ColourPropTypes;
    strokeColor       ? : ColourPropTypes;
    strokeColour      ? : ColourPropTypes;
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
    shadow            ? : ShadowTypes;
    shape             ? : ShapeTypes;
    opacity           ? : OpacityTypes;
    classNames        ? : any[];
}

export interface CommonAndHTMLProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "size" | "ref" | "shape"> {}

// prettier-ignore
export interface ElementProps<T extends {}> extends CommonProps, Omit<HTMLProps<T>, "as" | "ref" | "shape"> {
    as          : string;
    className ? : string;
}
