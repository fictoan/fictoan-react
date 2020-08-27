import React from "react";

import { Element } from "../../Element/Element";

import { FormItemJointGroupStyled } from "./FormItemJointGroup.styled";
import { CommonAndHTMLProps } from "../../Element/constants";

export type FormItemJointGroupElementType = HTMLDivElement;
export type FormItemJointGroupProps = CommonAndHTMLProps<FormItemJointGroupElementType>;

export const FormItemJointGroup = React.forwardRef(
    ({ ...props }: FormItemJointGroupProps, ref: React.Ref<FormItemJointGroupElementType>) => {
        return <Element<FormItemJointGroupElementType> as={FormItemJointGroupStyled} ref={ref} {...props} />;
    }
);
