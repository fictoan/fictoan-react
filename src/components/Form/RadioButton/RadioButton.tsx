import React from "react";

import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

import "./radio-button.css";
import { RadioButtonProps, RadioButtonElementType } from "./constants";

export const RadioButton = React.forwardRef(
    ({ onClick, ...props }: RadioButtonProps, ref: React.Ref<RadioButtonElementType>) => {
        return (
            <Element<RadioButtonElementType> as="div" data-radio-button ref={ref} onClick={onClick}>
                <BaseInputComponent as="input" type="radio" {...props} />
            </Element>
        );
    }
);
