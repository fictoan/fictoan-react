import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { FormWrapperStyled } from "./FormWrapper.styled";


export interface FormWrapperCustomProps {
    spacing ? : "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
}

export type FormWrapperElementType = HTMLFormElement;
export type FormWrapperProps       = CommonAndHTMLProps<FormWrapperElementType> & FormWrapperCustomProps;

export const FormWrapper = ({
    spacing,
    ...props
}: FormWrapperProps) => {
    let classNames = [];

    if (spacing) {
        classNames.push(`spacing-${spacing}`);
    }

    return (
        <Element<FormWrapperElementType>
            as={FormWrapperStyled}
            classNames={classNames}
            {...props}
        />
    );
}

FormWrapper.defaultProps = {
    spacing : "small"
}
