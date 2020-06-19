import React from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";
import { BaseInputComponentProps } from "../BaseInputComponent/constants";

import { CheckBoxStyled } from "./CheckBox.styled";


export type CheckboxElementType = HTMLInputElement;
export type CheckboxProps       = BaseInputComponentProps<CheckboxElementType>;

export const CheckBox = ({...props}: CheckboxProps) => {
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
