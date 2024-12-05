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
        const handleChange = (val: string) => {
            // Since we're dealing with a radio button, the value isn't relevant
            // Instead, we need to check the current checked state
            onChange?.(true);
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
