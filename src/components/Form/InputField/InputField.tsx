import React from "react";

import { CommonAndHTMLProps } from "../../Element/constants";

import { BaseInputComponent, InputFieldElementType } from "../BaseInputComponent/BaseInputComponent";
import { InputCommonProps, InputIconProps } from "../BaseInputComponent/constants";

import { InputFieldStyled } from "./InputField.styled";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";

export type InputFieldProps = CommonAndHTMLProps<InputFieldElementType> &
    InputLabelCustomProps &
    InputCommonProps &
    InputIconProps;

export const InputField = React.forwardRef(({ ...props }: InputFieldProps, ref: React.Ref<InputFieldElementType>) => {
    return <BaseInputComponent<InputFieldElementType> as={InputFieldStyled} ref={ref} placeholder=" " {...props} />;
});
