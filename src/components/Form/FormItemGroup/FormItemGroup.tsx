import React from "react";

import { Element } from "../../Element/Element";

import { FormItemGroupStyled } from "./FormItemGroup.styled"
import { FormItemGroupProps, FormItemGroupElementType } from "../constants"

export const FormItemGroup = (props: FormItemGroupProps) => (
    <Element<FormItemGroupElementType>
        as={FormItemGroupStyled}
        {...props}
    />
);
