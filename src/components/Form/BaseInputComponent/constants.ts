import React, { ChangeEvent, FormEventHandler } from "react";

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

// INPUT FIELD PROPS ///////////////////////////////////////////////////////////////////////////////////////////////////
// Define allowed combinations for the left side
type LeftSideProps =
    | { iconLeft: React.ReactNode; stringLeft ? : never }
    | { stringLeft: string; iconLeft ? : never }
    | { iconLeft ? : never; stringLeft ? : never };

// Define allowed combinations for the right side
type RightSideProps =
    | { iconRight: React.ReactNode; stringRight ? : never }
    | { stringRight: string; iconRight ? : never }
    | { iconRight ? : never; stringRight ? : never };

// Allows no side elements
export type NoSideElements = {
    iconLeft    ? : never;
    iconRight   ? : never;
    stringLeft  ? : never;
    stringRight ? : never;
};

// Combine left and right side constraints
export type InputSideElementProps = LeftSideProps & RightSideProps;

export type InputFocusHandler =
    | ((e: React.FocusEvent<HTMLInputElement>) => void)
    | (() => void);

// Handle values directly
export type InputChangeHandler<T = string> =
    | ((value: T) => void)
    | ((event: ChangeEvent<HTMLInputElement>) => void);

export type InputChangeEvent = React.ChangeEvent<HTMLInputElement
    | HTMLTextAreaElement
    | HTMLSelectElement>;

// Base component props including common form input properties
export type BaseInputComponentProps<K extends {}> =
    Omit<ElementProps<K>, "onChange"> &
    InputLabelCustomProps &
    InputCommonProps & {
        customLabel   ? : React.ReactNode; // For Range component
        onChange      ? : InputChangeHandler;
        onValueChange ? : InputChangeHandler; // For backward compatibility
        value         ? : string | number | readonly string[];
        helpText      ? : string | JSX.Element | React.ReactNode; // The node is for TextArea to display colours for limits
}   ;

// Extended component props including side element constraints
export type BaseInputComponentWithIconProps<K extends {}> =
    BaseInputComponentProps<K> &
    InputSideElementProps;
