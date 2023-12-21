import React from "react";
import { ElementProps } from "./constants";
export declare const Element: <K extends {}>(props: ElementProps<K> & {
    ref?: React.LegacyRef<HTMLElement>;
}) => React.ReactElement;
