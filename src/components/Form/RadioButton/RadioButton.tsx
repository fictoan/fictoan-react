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
         onClick,
         ...props
     }: RadioButtonProps,
     ref: React.Ref<RadioButtonElementType>,
    ) => {
        // Use ID as default for value if not provided
        // Note: name should typically come from RadioGroup
        const derivedValue = useMemo(() => value || id, [value, id]);
        const derivedName = useMemo(() => name || id, [name, id]);

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
                    id={id}
                    name={derivedName}
                    value={derivedValue}
                    {...props}
                />
            </Element>
        );
    },
);
