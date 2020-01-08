import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { FormItemGroupStyled } from "./FormItemGroup.styled"
import { FormItemGroupProps, FormItemGroupElementType } from "../constants"

export const FormItemGroup = (props: FormItemGroupProps) => (
    <BaseComponent<FormItemGroupElementType>
        Element={FormItemGroupStyled}
        {...props}
    />
);
