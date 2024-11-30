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

// Define allowed combinations for the left side
type LeftSideProps =
    | { iconLeft: React.ReactNode; stringLeft?: never }
    | { stringLeft: string; iconLeft?: never }
    | { iconLeft?: never; stringLeft?: never };

// Define allowed combinations for the right side
type RightSideProps =
    | { iconRight: React.ReactNode; stringRight?: never }
    | { stringRight: string; iconRight?: never }
    | { iconRight?: never; stringRight?: never };

// Allows no side elements
export type NoSideElements = {
    iconLeft?: never;
    iconRight?: never;
    stringLeft?: never;
    stringRight?: never;
};

// Combine left and right side constraints
export type InputSideElementProps = LeftSideProps & RightSideProps;

// Base component props including common form input properties
export type BaseInputComponentProps<K extends {}> =
    ElementProps<K> &
    InputLabelCustomProps &
    InputCommonProps;

// Extended component props including side element constraints
export type BaseInputComponentWithIconProps<K extends {}> =
    BaseInputComponentProps<K> &
    InputSideElementProps;
