import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { FormItemStyled } from "./FormItem.styled";
import { FormItemProps, FormItemElementType } from "../constants";

export const FormItem = (props: FormItemProps) => (
    <BaseComponent<FormItemElementType>
        Element={FormItemStyled}
        {...props}
    />
);
