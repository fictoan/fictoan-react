import React from "react";

import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { InputFieldStyled } from "./InputField.styled";
import { InputFieldProps, InputFieldElementType } from "./constants";

export const InputField = (props: InputFieldProps) => {
    return (
        <BaseInputComponent<InputFieldElementType>
            as={InputFieldStyled}
            placeholder=" "
            {...props}
        />
    );
}
