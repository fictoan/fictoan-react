import React, { PureComponent } from "react";

import { BaseComponent } from "../../BaseComponent/BaseComponent";

import { FormWrapperStyled } from "./FormWrapper.styled";
import { FormWrapperProps, FormWrapperElementType } from "../constants"

export class FormWrapper extends PureComponent<FormWrapperProps> {
    render() {
        return (
            <BaseComponent<FormWrapperElementType>
                Element={FormWrapperStyled}
                {...this.props}
            />
        );
    }
};
