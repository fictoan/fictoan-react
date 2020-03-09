import React, { PureComponent } from "react";

import { Element } from "../../Element/Element";

import { FormWrapperStyled } from "./FormWrapper.styled";
import { FormWrapperProps, FormWrapperElementType } from "../constants"

export const FormWrapper = ({ className, spacing, ...props }: FormWrapperProps) => {
    const classNames = [ className ]

    if (spacing) {
        classNames.push(`spacing-${spacing}`);
    } else {
        classNames.push(`spacing-small`);
    }

    return (
        <Element<FormWrapperElementType>
            as={FormWrapperStyled}
            classNames={classNames}
            {...props}
        />
    );
}
