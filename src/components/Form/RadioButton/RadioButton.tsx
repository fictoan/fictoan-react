import React from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import { RadioButtonStyled } from "./RadioButton.styled";
import { RadioButtonProps, RadioButtonElementType } from "./constants";

export const RadioButton = React.forwardRef(
    ({ onClick, ...props }: RadioButtonProps, ref: React.Ref<RadioButtonElementType>) => {
        return (
            <Element<RadioButtonElementType> as={RadioButtonStyled} ref={ref} onClick={onClick}>
                <BaseInputComponent as="input" type="radio" {...props} />
            </Element>
        );
    }
);
