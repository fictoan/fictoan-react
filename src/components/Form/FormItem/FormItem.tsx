import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { FormItemStyled } from "./FormItem.styled";

export interface FormItemCustomProps {
    isAnswers ? : boolean;
}

export type FormItemElementType = HTMLDivElement;
export type FormItemProps       = CommonAndHTMLProps<FormItemElementType> & FormItemCustomProps;

export const FormItem = ({...props}: FormItemProps) => {
    return (
        <Element<FormItemElementType>
            as={FormItemStyled}
            {...props}
        />
    );
}
