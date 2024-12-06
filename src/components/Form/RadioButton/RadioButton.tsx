// FRAMEWORK ===========================================================================================================
import React, { useMemo } from "react";

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
         id,
         name,
         value,
         onChange,
         checked,
         ...props
     }: RadioButtonProps,
     ref: React.Ref<RadioButtonElementType>,
    ) => {
        const derivedName = useMemo(() => name || id, [name, id]);

        // Handle change events to return boolean instead of event
        const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            console.log("RadioButton handleChange", { value, checked: e.target.checked });

            // If the radio is being checked, emit its value
            if (e.target.checked && onChange) {
                onChange(value);  // Just pass the string value as expected by the type
            }
        };

        return (
            <Element<RadioButtonElementType>
                as="div"
                data-radio-button
                ref={ref}
                role="radio"
                aria-checked={checked}
                aria-disabled={props.disabled}
            >
                <BaseInputComponent
                    as="input"
                    type="radio"
                    id={id}
                    name={derivedName}
                    value={value}
                    checked={checked}
                    onChange={handleChange}
                    {...props}
                />
            </Element>
        );
    },
);
