import React from "react";

import { ElementProps } from "../../Element/constants";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";

// prettier-ignore
export interface InputCommonProps {
    helpText     ? : string;
    errorText    ? : string;
    validateThis ? : boolean;
    valid        ? : boolean;
    invalid      ? : boolean;
}

// prettier-ignore
export interface PossibleInputSideElementProps {
    iconLeft    ? : React.ReactNode;
    iconRight   ? : React.ReactNode;
    stringLeft  ? : string;
    stringRight ? : string;
}

// Check for mutually exclusive properties—basically we want to
// allow either icon or string on each side, but never both
type HasIconLeft<T> = T extends { iconLeft: React.ReactNode } ? true : false;
type HasStringLeft<T> = T extends { stringLeft: string } ? true : false;
type HasIconRight<T> = T extends { iconRight: React.ReactNode } ? true : false;
type HasStringRight<T> = T extends { stringRight: string } ? true : false;

// Conditional type that only allows valid combinations
type ValidInputSideElements<T> = T extends object
    ? (HasIconLeft<T> extends true
    ? HasStringLeft<T> extends true
        ? never
        : T
    : T) &
    (HasIconRight<T> extends true
        ? HasStringRight<T> extends true
            ? never
            : T
        : T)
    : T;

// Enforce all above conditions
export type InputSideElementProps = ValidInputSideElements<PossibleInputSideElementProps>;

export type BaseInputComponentProps<K extends {}> = ElementProps<K> & InputLabelCustomProps & InputCommonProps;
export type BaseInputComponentWithIconProps<K extends {}> = BaseInputComponentProps<K> & InputSideElementProps;
