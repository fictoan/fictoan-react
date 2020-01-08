import React from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { FormItemJointGroupStyled } from "./FormItemJointGroup.styled"
import { FormItemJointGroupProps, FormItemJointGroupElementType } from "../constants"

export const FormItemJointGroup = (props: FormItemJointGroupProps) => (
    <BaseComponent<FormItemJointGroupElementType>
        Element={FormItemJointGroupStyled}
        {...props}
    />
);
