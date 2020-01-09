import React, { PureComponent } from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { CheckBoxStyled } from "./CheckBox.styled";
import { CheckboxProps, CheckboxElementType } from "./constants";

export const CheckBox = (props: CheckboxProps) => {
    return (
        <Element<CheckboxElementType>
            as={CheckBoxStyled}
        >
            <BaseInputComponent
                as="input"
                type="checkbox"
                {...props}
            />
        </Element>
    );
}
