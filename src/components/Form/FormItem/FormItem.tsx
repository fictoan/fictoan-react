import React from "react";

import { Element } from "../../Element/Element";

import { FormItemStyled } from "./FormItem.styled";
import { FormItemProps, FormItemElementType } from "../constants";

export const FormItem = ({...props}: FormItemProps) => {
    return (
        <Element<FormItemElementType>
            as={FormItemStyled}
            {...props}
        />
    );
}