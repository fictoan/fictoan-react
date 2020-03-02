import React from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { RadioButtonStyled } from "./RadioButton.styled";
import { RadioButtonProps, RadioButtonElementType } from "./constants";

export const RadioButton = ({ onClick, ...props }: RadioButtonProps) => {
    return (
        <Element<RadioButtonElementType>
            as={RadioButtonStyled}
            onClick={onClick}
        >
            <BaseInputComponent
                as="input"
                type="radio"
                {...props}
            />
        </Element>
    );
}
