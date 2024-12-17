import React, { ChangeEvent } from "react";

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
    | { innerIconLeft: React.ReactNode; innerTextLeft ? : never }
    | { innerTextLeft: string; innerIconLeft ? : never }
    | { innerIconLeft ? : never; innerTextLeft ? : never };

// Define allowed combinations for the right side
type RightSideProps =
    | { innerIconRight: React.ReactNode; innerTextRight ? : never }
    | { innerTextRight: string; innerIconRight ? : never }
    | { innerIconRight ? : never; innerTextRight ? : never };

// Allows no side elements
export type NoSideElements = {
    innerIconLeft    ? : never;
    innerIconRight   ? : never;
    innerTextLeft    ? : never;
    innerTextRight   ? : never;
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
