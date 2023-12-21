import React from "react";
import { BaseInputComponentWithIconProps } from "./constants";
export declare type InputElementType = HTMLInputElement | HTMLDivElement | HTMLSelectElement;
export declare const BaseInputComponent: <K extends InputElementType>(props: import("../../Element/constants").ElementProps<K> & import("../InputLabel/InputLabel").InputLabelCustomProps & import("./constants").InputCommonProps & import("./constants").InputIconProps & {
    ref?: React.LegacyRef<InputElementType>;
}) => React.ReactElement;
