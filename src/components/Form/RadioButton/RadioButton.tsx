// FRAMEWORK ===========================================================================================================
import React from "react";

// FICTOAN =============================================================================================================
import { Element } from "../../Element/Element";
import { BaseInputComponent } from "../BaseInputComponent/BaseInputComponent";

// STYLES ==============================================================================================================
import "./radio-button.css";

// TYPES ===============================================================================================================
import { RadioButtonProps, RadioButtonElementType } from "./constants";

// COMPONENT ///////////////////////////////////////////////////////////////////////////////////////////////////////////
export const RadioButton = React.forwardRef(
    ({
         onClick,
         ...props
     }: RadioButtonProps,
     ref: React.Ref<RadioButtonElementType>,
    ) => {
        return (
            <Element<RadioButtonElementType>
                as="div"
                data-radio-button
                ref={ref}
                onClick={onClick}
                role="radio"
                aria-checked={props.checked}
                aria-disabled={props.disabled}
            >
                <BaseInputComponent
                    as="input"
                    type="radio"
                    {...props}
                />
            </Element>
        );
    },
);
