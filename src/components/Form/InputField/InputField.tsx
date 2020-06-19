import React from "react";

import { CommonAndHTMLProps } from "../../Element/constants";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { InputCommonProps, InputIconProps } from "../BaseInputComponent/constants";

import { InputFieldStyled } from "./InputField.styled";
import { InputLabelCustomProps } from "../InputLabel/InputLabel";


export type InputFieldElementType = HTMLInputElement;
export type InputFieldProps       = CommonAndHTMLProps<InputFieldElementType> & InputLabelCustomProps & InputCommonProps & InputIconProps;


export const InputField = ({...props}: InputFieldProps) => {
    return (
        <BaseInputComponent<InputFieldElementType>
            as={InputFieldStyled}
            placeholder=" "
            {...props}
        />
    );
}
