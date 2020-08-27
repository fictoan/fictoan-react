import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { FormItemStyled } from "./FormItem.styled";

// prettier-ignore
export interface FormItemCustomProps {
    isAnswers ? : boolean;
}

export type FormItemElementType = HTMLDivElement;
export type FormItemProps = CommonAndHTMLProps<FormItemElementType> & FormItemCustomProps;

export const FormItem = React.forwardRef(({ ...props }: FormItemProps, ref: React.Ref<FormItemElementType>) => {
    return <Element<FormItemElementType> as={FormItemStyled} ref={ref} {...props} />;
});
