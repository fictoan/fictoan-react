import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { FormItemGroupStyled } from "./FormItemGroup.styled";

export type FormItemGroupElementType = HTMLDivElement;
export type FormItemGroupProps = CommonAndHTMLProps<FormItemGroupElementType>;

export const FormItemGroup = React.forwardRef(
    ({ ...props }: FormItemGroupProps, ref: React.Ref<FormItemGroupElementType>) => {
        return <Element<FormItemGroupElementType> as={FormItemGroupStyled} ref={ref} {...props} />;
    }
);
