import React from "react";

import { Element } from "../../Element/Element";

import { FormItemJointGroupStyled } from "./FormItemJointGroup.styled";
import { CommonAndHTMLProps } from "../../Element/constants";


export type FormItemJointGroupElementType = HTMLDivElement;
export type FormItemJointGroupProps       = CommonAndHTMLProps<FormItemJointGroupElementType>;

export const FormItemJointGroup = ({...props}: FormItemJointGroupProps) => {
    return (
        <Element<FormItemJointGroupElementType>
            as={FormItemJointGroupStyled}
            {...props}
        />
    );
}
