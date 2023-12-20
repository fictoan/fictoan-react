import React from "react";

import { CommonAndHTMLProps } from "../../Element/constants";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { InputCommonProps, InputIconProps } from "../BaseInputComponent/constants";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";

import "./input-field.css";

export type InputFieldElementType = HTMLInputElement;
export type InputFieldProps = CommonAndHTMLProps<InputFieldElementType> &
    InputLabelCustomProps &
    InputCommonProps &
    InputIconProps;

export const InputField = React.forwardRef(({ ...props }: InputFieldProps, ref: React.Ref<InputFieldElementType>) => {
    return <BaseInputComponent<InputFieldElementType> as="input" data-input ref={ref} placeholder=" " {...props} />;
});
