import React from "react";

import { Element } from "../../Element/Element";
import { CommonAndHTMLProps } from "../../Element/constants";

import { FormWrapperStyled } from "./FormWrapper.styled";

// prettier-ignore
export interface FormWrapperCustomProps {
    spacing ? : "none" | "nano" | "micro" | "tiny" | "small" | "medium" | "large" | "huge";
}

export type FormWrapperElementType = HTMLFormElement;
export type FormWrapperProps = CommonAndHTMLProps<FormWrapperElementType> & FormWrapperCustomProps;

export const FormWrapper = React.forwardRef(
    ({ spacing, ...props }: FormWrapperProps, ref: React.Ref<FormWrapperElementType>) => {
        let classNames = [];

        if (spacing) {
            classNames.push(`spacing-${spacing}`);
        }

        return <Element<FormWrapperElementType> as={FormWrapperStyled} ref={ref} classNames={classNames} {...props} />;
    }
);

// prettier-ignore
FormWrapper.defaultProps = {
    spacing : "small"
}
