import React, { FormEventHandler } from "react";

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

export type FormChangeHandler<K> = FormEventHandler<K>;
export type ValueChangeHandler = (value: string | string[]) => void;
export type FlexibleChangeHandler<K> = FormChangeHandler<K> | ValueChangeHandler;

export type BaseInputComponentProps<K extends {}> =
    Omit<ElementProps<K>, "onChange"> &
    InputLabelCustomProps &
    InputCommonProps & {
    onChange?: FlexibleChangeHandler<K>;
};

// Extended component props including side element constraints
export type BaseInputComponentWithIconProps<K extends {}> =
    BaseInputComponentProps<K> &
    InputSideElementProps;
