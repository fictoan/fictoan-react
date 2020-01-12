import React, { PureComponent } from "react";

import { Element } from "../../Element/Element";

import { FormWrapperStyled } from "./FormWrapper.styled";
import { FormWrapperProps, FormWrapperElementType } from "../constants"

export const FormWrapper = ({...props}: FormWrapperProps) => {
    return (
        <Element<FormWrapperElementType>
            as={FormWrapperStyled}
            {...props}
        />
    );
}
