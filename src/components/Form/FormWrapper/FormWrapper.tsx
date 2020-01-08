import React, { PureComponent } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { FormWrapperStyled } from "./FormWrapper.styled";
import { FormWrapperProps, FormWrapperElementType } from "../constants"

export const FormWrapper = (props: FormWrapperProps) => {
    return (
        <BaseComponent<FormWrapperElementType>
            Element={FormWrapperStyled}
            {...props}
        />
    )
};
